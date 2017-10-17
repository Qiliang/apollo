package com.snjtjj.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.common.utils.ResponseException;
import com.snjtjj.entity.*;
import com.snjtjj.mapper.*;
import com.snjtjj.utils.Collections3;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.utils.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.text.NumberFormat;
import java.util.List;

/**
 * Created by bozhou on 2017/10/17.
 */
@Service
public class DirectRptTaskService {
    @Autowired
    private DirectRptTaskMapper directRptTaskMapper;
    @Autowired
    private OrganizationMapper organizationMapper;
    @Autowired
    private AreaMapper areaMapper;
    @Autowired
    private RptTaskObjectMapper rptTaskObjectMapper;
    @Autowired
    private SystemInfoMapper systemInfoMapper;
    @Autowired
    private RptTabMapper rptTabMapper;

    public PageInfo<DirectRptTask> getListByUserID(String name,Integer page, Integer limit){
        //根据用户id获取用户所属组织，得到用户所在组织对应的行政区划代码
        User user = UserUtils.getUser();
        String orgId = user.getOrgId();
        String simpleCode = "";
        if(StringUtils.isNotBlank(orgId)){
            Organization organization = organizationMapper.selectByPrimaryKey(orgId);
            String code = organization.getCode();
            //根据code查询用户对应的行政区划信息
            if(StringUtils.isNotBlank(code)){
                AreaExample areaExample = new AreaExample();
                AreaExample.Criteria criteria = areaExample.createCriteria();
                criteria.andCodeEqualTo(code);
                List<Area> areaList = areaMapper.selectByExample(areaExample);
                if(areaList!=null&&areaList.size()>0){
                    simpleCode = areaList.get(0).getSimpleCode();
                }
            }
        }
        if(StringUtils.isNotBlank(simpleCode)){
            //查询该行政区划代码下面的所有行政区划
            AreaExample areaExample = new AreaExample();
            AreaExample.Criteria criteria = areaExample.createCriteria();
            criteria.andCodeLike(simpleCode+"%");
            List<Area> areaList = areaMapper.selectByExample(areaExample);
            try {
                List<String> codeList = Collections3.extractToList(areaList,"code");
                codeList.forEach(item->{
                    item = "'"+item + "'";
                });
                String xzqhIds = Collections3.convertToString(codeList,",");
                PageHelper.startPage(page, limit);
                List<DirectRptTask> list = directRptTaskMapper.selectListByUserID(name,xzqhIds);
                list.forEach(item->{
                    RptTaskObjectExample ytbRptTaskObjectExample = new RptTaskObjectExample();
                    RptTaskObjectExample.Criteria ytbCriteria = ytbRptTaskObjectExample.createCriteria();
                    ytbCriteria.andTaskIdEqualTo(item.getId());
                    ytbCriteria.andTaskIdNotEqualTo("wtb");
                    Integer ytb = rptTaskObjectMapper.countByExample(ytbRptTaskObjectExample);

                    RptTaskObjectExample wtbRptTaskObjectExample = new RptTaskObjectExample();
                    RptTaskObjectExample.Criteria wtbCriteria = wtbRptTaskObjectExample.createCriteria();
                    wtbCriteria.andTaskIdEqualTo(item.getId());
                    wtbCriteria.andTaskIdEqualTo("wtb");
                    Integer wtb = rptTaskObjectMapper.countByExample(wtbRptTaskObjectExample);

                    NumberFormat nf = NumberFormat.getPercentInstance();
                    String tbl = nf.format(Double.valueOf(ytb)/(Double.valueOf(ytb)+Double.valueOf(wtb)));

                    item.setYtb(String.valueOf(ytb));
                    item.setWtb(String.valueOf(wtb));
                    item.setTbl(tbl);

                    //根据制度id查询制度名称
                    SystemInfo systemInfo = systemInfoMapper.selectByPrimaryKey(item.getSystemId());
                    item.setSystemName(systemInfo.getName());

                    //根据表id查询表名称
                    RptTab rptTab = rptTabMapper.selectByPrimaryKey(item.getTableId());
                    item.setTableName(rptTab.getTabname());

                });
                //统计信息，计算已填报，未填报
                PageInfo pageInfo = new PageInfo(list);
                return pageInfo;
            } catch (Exception e) {
                e.printStackTrace();
                throw new ResponseException("服务器异常！", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return null;
    }

    public List<RptTab> getTabListByUser(){
        List<RptTab> list = rptTabMapper.selectByUserRole();
        list.forEach(item->{
            SystemInfo systemInfo = systemInfoMapper.selectByPrimaryKey(item.getSysteminfoid());
            if(systemInfo!=null) {
                item.setSysteminfoName(systemInfo.getName());
                item.setSystemInfoFillPersonType(systemInfo.getFillPersonType());
            }
        });
        return list;
    }
}
