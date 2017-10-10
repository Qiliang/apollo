package com.snjtjj.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.common.utils.ResponseException;
import com.snjtjj.entity.*;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.mapper.CompanyMapper;
import com.snjtjj.utils.ExcelUtil;
import com.snjtjj.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class CompanyService {
    @Autowired
    private CompanyMapper companyMapper;

    public PageInfo allCompany(String xxmc,String zzjgdm, Integer page, Integer limit) {
        CompanyExample companyExample = new CompanyExample();
        CompanyExample.Criteria criteria = companyExample.createCriteria().andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        if (StringUtils.isNotBlank(xxmc)) {
            criteria.andXxmcLike(xxmc);
        }
        if (StringUtils.isNotBlank(zzjgdm)) {
            criteria.andZzjgdmEqualTo(zzjgdm);
        }
        PageHelper.startPage(page, limit);
        List<Company> list = companyMapper.selectByExample(companyExample);
        PageInfo pageInfo = new PageInfo(list);
        return pageInfo;
    }

    public Company getCompanyById(String id){
        return companyMapper.selectByPrimaryKey(id);
    }

    @Transactional
    public void save(Company company){
        company.preInsert();
        companyMapper.insert(company);
    }

    public void delete(String id){
        Company company = new Company();
        company.setId(id);
        company.setDelFlag("1");
        companyMapper.updateByPrimaryKeySelective(company);
    }

    @Transactional
    public void uploadFile(MultipartFile file){
        //判断文件是否为空
        if(file!=null&&!file.isEmpty()){
            //判断文件是否为excel格式
            if(ExcelUtil.isExcel(file.getOriginalFilename())){
                String version = "2007";
                if(file.getOriginalFilename().endsWith(".xls")){
                    version = "2003";
                }
                try {
                    ExcelUtil excelUtil = new ExcelUtil(file.getInputStream(),version);
                    int columnCount = excelUtil.getColumnCount(0,0);
                    //根据第一行列数量判断导入模板
                    if(columnCount==21){
                        try {
                            List<List<String>> rowList = excelUtil.read(0);
                            for(int i=1;i<rowList.size();i++){
                                List<String> data = rowList.get(i);
                                Company company = new Company();
                                company.setDwlb(data.get(1));
                                company.setZzjgdm(data.get(2));
                                company.setXxdz(data.get(3));
                            }
                        } catch (Exception e) {
                            throw new ResponseException("解析excel错误！", HttpStatus.INTERNAL_SERVER_ERROR);
                        }
                    }
                } catch (IOException e) {
                    throw new ResponseException("服务器内部错误！", HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }else{
                throw new ResponseException("文件类型不正确，请上传xls或者xlsx格式的文件！", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }else{
            throw new ResponseException("文件为空！", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @Transactional
    public void edit(Company company){
        companyMapper.updateByPrimaryKeySelective(company);
    }
}
