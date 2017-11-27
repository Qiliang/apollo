package com.snjtjj.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.common.utils.ResponseException;
import com.snjtjj.entity.*;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.entity.base.DataEntity;
import com.snjtjj.mapper.AreaMapper;
import com.snjtjj.mapper.CompanyMapper;
import com.snjtjj.mapper.FillUserMapper;
import com.snjtjj.mapper.SystemCompanyMapper;
import com.snjtjj.utils.ExcelUtil;
import com.snjtjj.utils.IdGen;
import com.snjtjj.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@Service
@CacheConfig(cacheNames = "company")
public class CompanyService {
    @Autowired
    private CompanyMapper companyMapper;
    @Autowired
    private SystemCompanyMapper systemCompanyMapper;
    @Autowired
    private AreaMapper areaMapper;
    @Autowired
    private FillUserMapper fillUserMapper;

    public PageInfo allCompany(String xxmc, String zzjgdm, Integer page, Integer limit) {
        CompanyExample companyExample = new CompanyExample();
        CompanyExample.Criteria criteria = companyExample.createCriteria().andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        if (StringUtils.isNotBlank(xxmc)) {
            criteria.andXxmcLike("%" + xxmc + "%");
        }
        if (StringUtils.isNotBlank(zzjgdm)) {
            criteria.andZzjgdmEqualTo(zzjgdm);
        }
        PageHelper.startPage(page, limit);
        List<Company> list = companyMapper.selectByExample(companyExample);
        PageInfo pageInfo = new PageInfo(list);
        return pageInfo;
    }

    @Cacheable
    public List<Company> allCompany(String xxmc, String zzjgdm) {
        CompanyExample companyExample = new CompanyExample();
        CompanyExample.Criteria criteria = companyExample.createCriteria().andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        if (StringUtils.isNotBlank(xxmc)) {
            criteria.andXxmcLike("%" + xxmc + "%");
        }
        if (StringUtils.isNotBlank(zzjgdm)) {
            criteria.andZzjgdmEqualTo(zzjgdm);
        }
        List<Company> list = companyMapper.selectByExample(companyExample);
        return list;
    }

    public PageInfo getCompanyBySystemId(String xxmc, String zzjgdm, String systemId, Integer page, Integer limit) {
        PageHelper.startPage(page, limit);

        List<Company> list = companyMapper.selectCompanyBySystemId(systemId, StringUtils.isNotBlank(xxmc) ? "%" + xxmc + "%" : xxmc, zzjgdm);
        PageInfo pageInfo = new PageInfo(list);
        return pageInfo;
    }

    public List<Company> getAllCompanyBySystemId(String xxmc, String zzjgdm, String systemId) {
        List<Company> list = companyMapper.selectCompanyBySystemId(systemId, StringUtils.isNotBlank(xxmc) ? "%" + xxmc + "%" : xxmc, zzjgdm);
        return list;
    }

    public List<Company> getAllCompanyByNotInSystemId(String xxmc, String zzjgdm, String systemId) {
        List<Company> list = companyMapper.selectCompanyByNotInSystemId(systemId, StringUtils.isNotBlank(xxmc) ? "%" + xxmc + "%" : xxmc, zzjgdm);
        return list;
    }

    public Company getCompanyById(String id) {
        return companyMapper.selectByPrimaryKey(id);
    }

    @Transactional
    public void save(Company company) {
        company.preInsert();
        //判断组织机构代码是否重复
        Company company1 = companyMapper.selectCompanyByZzjgdm(company.getZzjgdm());
        if(company1==null){
            companyMapper.insert(company);
        }else{
            throw new ResponseException("组织机构代码重复！", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Transactional
    public void saveSystemCompany(String systemId, String ids) {
        //删除从前的关联关系
        SystemCompanyExample systemCompanyExample = new SystemCompanyExample();
        SystemCompanyExample.Criteria criterion = systemCompanyExample.createCriteria();
        criterion.andSystemIdEqualTo(systemId);
        systemCompanyMapper.deleteByExample(systemCompanyExample);
        //添加关联关系
        String[] idArray = ids.split(",");
        for (String companyId : idArray) {
            if (StringUtils.isNotBlank(companyId)) {
                SystemCompany systemCompany = new SystemCompany();
                systemCompany.setSystemId(systemId);
                systemCompany.setCompanyId(companyId);
                systemCompany.setId(IdGen.nextS());
                systemCompanyMapper.insert(systemCompany);
            }
        }
    }

    @Transactional
    public void delete(String id) {
        Company company = new Company();
        company.setId(id);
        company.setDelFlag("1");
        //删除企业账户
        FillUser fillUser = fillUserMapper.selectByLoginUserName(company.getZzjgdm());
        if(fillUser!=null){
            fillUser.setDelFlag(BaseEntity.DEL_FLAG_DELETE);
            fillUserMapper.updateByPrimaryKeySelective(fillUser);
        }
        companyMapper.updateByPrimaryKeySelective(company);
    }

    @Transactional
    public void uploadFile(MultipartFile file) {
        //判断文件是否为空
        if (file != null && !file.isEmpty()) {
            //判断文件是否为excel格式
            if (ExcelUtil.isExcel(file.getOriginalFilename())) {
                String version = "2007";
                if (file.getOriginalFilename().endsWith(".xls")) {
                    version = "2003";
                }
                try {
                    ExcelUtil excelUtil = new ExcelUtil(file.getInputStream(), version);
                    int columnCount = excelUtil.getColumnCount(0, 0);
                    //根据第一行列数量判断导入模板
                    if (columnCount == 21) {
                        try {
                            //删除对应类型的导入数据
                            delByFromType("crhddw_dr");
                            List<List<String>> rowList = excelUtil.read(0);
                            for (int i = 1; i < rowList.size(); i++) {
                                List<String> data = rowList.get(i);
                                Company company = new Company();
                                company.setDwlb(data.get(1));
                                company.setZzjgdm(data.get(2));
                                company.setXxmc(data.get(3));
                                company.setFddbr(data.get(4));
                                company.setXzqhdm(data.get(5));
                                company.setXxdz(data.get(6));
                                company.setCtqh(data.get(7));
                                company.setGddh(data.get(8));
                                company.setHydm11(data.get(9));
                                company.setZyywhd11(data.get(10));
                                company.setDjzclx(data.get(11));
                                company.setKynf(data.get(12));
                                company.setKyyf(data.get(13));
                                company.setQyyyzt(data.get(14));
                                company.setJglx(data.get(15));
                                company.setZt(data.get(16));
                                company.setTjjdm(data.get(17));
                                company.setGsfrxzqhdm(data.get(18));
                                company.setGsfrxxmc(data.get(19));
                                company.setGsfrxxdz(data.get(20));
                                company.setFromType("crhddw_dr");
                                try {
                                    save(company);
                                }catch (Exception e){
                                    e.printStackTrace();
                                }
                            }

                        } catch (Exception e) {
                            throw new ResponseException("解析excel错误！", HttpStatus.INTERNAL_SERVER_ERROR);
                        }

                    } else if (columnCount == 16) {
                        try {
                            //删除对应类型的导入数据
                            delByFromType("crhddw_dr");
                            List<List<String>> rowList = excelUtil.read(0);
                            for (int i = 1; i < rowList.size(); i++) {
                                List<String> data = rowList.get(i);
                                Company company = new Company();
                                company.setShxydm(data.get(1));
                                company.setZzjgdm(data.get(2));
                                company.setXxmc(data.get(3));
                                company.setFddbr(data.get(4));
                                company.setXzqhdm(data.get(5));
                                company.setXxdz(data.get(6));
                                company.setCtqh(data.get(7));
                                company.setGddh(data.get(8));
                                company.setHydm11(data.get(9));
                                company.setZyywhd11(data.get(10));
                                company.setDjzclx(data.get(11));
                                company.setKynf(data.get(12));
                                company.setKyyf(data.get(13));
                                company.setZt(data.get(14));
                                company.setTjjdm(data.get(15));
                                company.setFromType("frdw_dr");
                                try {
                                    save(company);
                                }catch (Exception e){
                                    e.printStackTrace();
                                }
                            }
                        } catch (Exception e) {
                            throw new ResponseException("解析excel错误！", HttpStatus.INTERNAL_SERVER_ERROR);
                        }
                    } else {
                        throw new ResponseException("解析excel错误，excel模板不正确！", HttpStatus.INTERNAL_SERVER_ERROR);
                    }
                } catch (IOException e) {
                    throw new ResponseException("服务器内部错误！", HttpStatus.INTERNAL_SERVER_ERROR);
                }
            } else {
                throw new ResponseException("文件类型不正确，请上传xls或者xlsx格式的文件！", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            throw new ResponseException("文件为空！", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @Transactional
    public void delByFromType(String fromType) {
        CompanyExample companyExample = new CompanyExample();
        companyExample.createCriteria().andDelFlagEqualTo("0").andFromTypeEqualTo(fromType);
        Company company = new Company();
        company.setDelFlag("1");
        companyMapper.updateByExampleSelective(company, companyExample);
    }

    @Transactional
    public void edit(Company company) {
        FillUserExample fillUserExample = new FillUserExample();
        fillUserExample.createCriteria().andLoginUserNameEqualTo(company.getZzjgdm()).andObjTypeEqualTo("0").andDelFlagEqualTo("0");
        List<FillUser> fillUserList = fillUserMapper.selectByExample(fillUserExample);
        if(fillUserList!=null&&fillUserList.size()>0){
            FillUser fillUser = fillUserList.get(0);
            fillUser.setFillName(company.getTbrName());
            fillUser.setMobile(company.getMobile());
            fillUser.setLoginUserName(company.getZzjgdm());
            fillUser.setLeaderMobile(company.getFzrMobile());
            fillUser.setEmail(company.getEmail());
            fillUser.preUpdate();
        }
        companyMapper.updateByPrimaryKeySelective(company);
    }

    public void saveFillUser() {
        List<Company> companyList = companyMapper.selectCompanyNotInFillUserList();
        //插入fill_user表
        for (Company company : companyList) {
            FillUserExample fillUserExample = new FillUserExample();
            fillUserExample.createCriteria().andLoginUserNameEqualTo(company.getZzjgdm()).andObjTypeEqualTo("0").andDelFlagEqualTo("0");
            List<FillUser> fillUserList = fillUserMapper.selectByExample(fillUserExample);
            if(fillUserList==null||fillUserList.size()==0) {
                FillUser fillUser = new FillUser();
                fillUser.setId(IdGen.nextS());
                fillUser.setCreateBy("1");
                fillUser.setCreateDate(new Date());
                fillUser.setDelFlag(DataEntity.DEL_FLAG_NORMAL);
                fillUser.setUpdateBy("1");
                fillUser.setUpdateDate(new Date());
                fillUser.setEmail(company.getEmail());
                fillUser.setFillName(company.getTbrName());
                fillUser.setLeaderMobile(company.getFzrMobile());
                fillUser.setLoginUserName(company.getZzjgdm());
                fillUser.setLoginPassword(new BCryptPasswordEncoder().encode("123456"));
                fillUser.setMobile(company.getMobile());
                fillUser.setObjId(company.getId());
                fillUser.setObjType("0");
                fillUser.setFddbr(company.getFddbr());
                fillUserMapper.insert(fillUser);
            }
        }
    }
}
