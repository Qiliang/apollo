package com.snjtjj.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.common.security.JwtUser;
import com.snjtjj.common.utils.ResponseException;
import com.snjtjj.entity.*;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.mapper.*;
import com.snjtjj.utils.Collections3;
import com.snjtjj.utils.IdGen;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.utils.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by bozhou on 2017/10/17.
 */
@Service
public class DirectRptTaskService {
    @Autowired
    private DirectRptTaskMapper directRptTaskMapper;
    @Autowired
    private AreaMapper areaMapper;
    @Autowired
    private RptTaskObjectMapper rptTaskObjectMapper;
    @Autowired
    private SystemInfoMapper systemInfoMapper;
    @Autowired
    private RptTabMapper rptTabMapper;
    @Autowired
    private InnerAsync innerAsync;
    @Autowired
    private CompanyMapper companyMapper;

    public PageInfo<DirectRptTask> getListByUserID(String name, Integer page, Integer limit) {
        //查询该行政区划代码下面的所有行政区划
        try {
            List<String> codeList = UserUtils.getUserAreaCodeList();
            List<String> cloneCodeList = new ArrayList<>(codeList);
            codeList.forEach(item -> {
                item = "'" + item + "'";
            });
            String xzqhIds = Collections3.convertToString(codeList, ",");
            PageHelper.startPage(page, limit);
            List<DirectRptTask> list = directRptTaskMapper.selectListByUserID(name, xzqhIds);
            list.forEach(item -> {
                RptTaskObjectExample ytbRptTaskObjectExample = new RptTaskObjectExample();
                RptTaskObjectExample.Criteria ytbCriteria = ytbRptTaskObjectExample.createCriteria();
                ytbCriteria.andTaskIdEqualTo(item.getId());
                ytbCriteria.andReportStateNotEqualTo("wtb");
                ytbCriteria.andXzqhIdIn(cloneCodeList);
                Integer ytb = rptTaskObjectMapper.countByExample(ytbRptTaskObjectExample);

                RptTaskObjectExample wtbRptTaskObjectExample = new RptTaskObjectExample();
                RptTaskObjectExample.Criteria wtbCriteria = wtbRptTaskObjectExample.createCriteria();
                wtbCriteria.andTaskIdEqualTo(item.getId());
                wtbCriteria.andXzqhIdIn(cloneCodeList);
                wtbCriteria.andReportStateEqualTo("wtb");
                Integer wtb = rptTaskObjectMapper.countByExample(wtbRptTaskObjectExample);

                NumberFormat nf = NumberFormat.getPercentInstance();
                String tbl = nf.format(Double.valueOf(ytb) / (Double.valueOf(ytb) + Double.valueOf(wtb)));

                item.setYtb(String.valueOf(ytb));
                item.setWtb(String.valueOf(wtb));
                item.setTbl(tbl);
                fillSystemAndTableInfo(item);
            });
            //统计信息，计算已填报，未填报
            PageInfo pageInfo = new PageInfo(list);
            return pageInfo;
        } catch (Exception e) {
            e.printStackTrace();
            throw new ResponseException("服务器异常！", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public void fillSystemAndTableInfo(DirectRptTask item) {
        //根据制度id查询制度名称
        SystemInfo systemInfo = systemInfoMapper.selectByPrimaryKey(item.getSystemId());
        if (systemInfo != null)
            item.setSystemName(systemInfo.getName());
        //根据表id查询表名称
        RptTab rptTab = rptTabMapper.selectByPrimaryKey(item.getTableId());
        if (rptTab != null) {
            item.setTableName(rptTab.getTabname());
            item.setTableCode(rptTab.getTabcode());
        }
    }

    public List<RptTab> getTabListByUser() {
        List<RptTab> list = rptTabMapper.selectByUserRole();
        list.forEach(item -> {
            SystemInfo systemInfo = systemInfoMapper.selectByPrimaryKey(item.getSysteminfoid());
            if (systemInfo != null) {
                item.setSysteminfoName(systemInfo.getName());
                item.setSystemInfoFillPersonType(systemInfo.getFillPersonType());
            }
        });
        return list;
    }

    @Transactional
    public void save(DirectRptTask directRptTask, String dcdxIds, String systemInfoFillPersonType) {
        directRptTask.preInsert();
        directRptTaskMapper.insert(directRptTask);
        innerAsync.saveRptTaskObject(directRptTask.getId(), dcdxIds, systemInfoFillPersonType);
    }

    @Transactional
    public void delete(String id) {
        //判断是否有用户填报
        RptTaskObjectExample ytbRptTaskObjectExample = new RptTaskObjectExample();
        RptTaskObjectExample.Criteria ytbCriteria = ytbRptTaskObjectExample.createCriteria();
        ytbCriteria.andTaskIdEqualTo(id);
        ytbCriteria.andReportStateNotEqualTo("wtb");
        Integer ytb = rptTaskObjectMapper.countByExample(ytbRptTaskObjectExample);
        if (ytb > 0) {
            throw new ResponseException("已有用户填报，无法删除！", HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            RptTaskObjectExample rptTaskObjectExample = new RptTaskObjectExample();
            RptTaskObjectExample.Criteria criteria = rptTaskObjectExample.createCriteria();
            criteria.andTaskIdEqualTo(id);
            rptTaskObjectMapper.deleteByExample(rptTaskObjectExample);
            DirectRptTask directRptTask = new DirectRptTask();
            directRptTask.setId(id);
            directRptTask.setDelFlag(BaseEntity.DEL_FLAG_DELETE);
            directRptTaskMapper.updateByPrimaryKeySelective(directRptTask);
        }
    }

    public PageInfo<RptTaskObject> getListByFillState(String id, String state, Integer page, Integer limit) {
        RptTaskObjectExample rptTaskObjectExample = new RptTaskObjectExample();
        RptTaskObjectExample.Criteria criteria = rptTaskObjectExample.createCriteria().andTaskIdEqualTo(id);
        List<String> codeList = UserUtils.getUserAreaCodeList();
        criteria.andXzqhIdIn(codeList);
        if ("wtb".equals(state)) {
            criteria.andReportStateEqualTo("wtb");
            rptTaskObjectExample.setOrderByClause("xzqh_id");
        } else {
            criteria.andReportStateNotEqualTo("wtb");
            rptTaskObjectExample.setOrderByClause("fill_date");
        }

        PageHelper.startPage(page, limit);
        List<RptTaskObject> list = rptTaskObjectMapper.selectByExample(rptTaskObjectExample);
        fillObjName(list);
        PageInfo pageInfo = new PageInfo(list);
        return pageInfo;
    }

    public void fillObjName(List<RptTaskObject> list) {
        //根据id查询名称
        list.forEach(item -> {
            //企业填报
            if ("0".equals(item.getType())) {
                Company company = companyMapper.selectByPrimaryKey(item.getObjId());
                if (company != null) {
                    item.setObjName(company.getXxmc());
                } else {
                    item.setObjName("未知");
                }
            } else {
                Area area = areaMapper.selectByPrimaryKey(item.getObjId());
                if (area != null) {
                    item.setObjName(area.getName());
                } else {
                    item.setObjName("未知");
                }
            }
        });
    }

    public PageInfo<RptTaskObject> getCheckList(String id, Integer page, Integer limit) {
        RptTaskObjectExample rptTaskObjectExample = new RptTaskObjectExample();
        RptTaskObjectExample.Criteria criteria = rptTaskObjectExample.createCriteria().andTaskIdEqualTo(id);
        List<String> codeList = UserUtils.getUserAreaCodeList();
        criteria.andXzqhIdIn(codeList);
        //获取用户组织所在行政区划层级，0：区，1：镇，乡，2：村
        String userLevel = UserUtils.getUserOrgAreaLevel();
        if ("0".equals(userLevel)) {
            criteria.andReportStateEqualTo("zystg");
        } else if ("1".equals(userLevel)) {
            criteria.andReportStateEqualTo("ytb");
        } else {
            criteria.andReportStateEqualTo("999");
        }
        rptTaskObjectExample.setOrderByClause("fill_date");
        PageHelper.startPage(page, limit);
        List<RptTaskObject> list = rptTaskObjectMapper.selectByExample(rptTaskObjectExample);
        fillObjName(list);
        list.forEach(item -> {
            DirectRptTask directRptTask = directRptTaskMapper.selectByPrimaryKey(item.getTaskId());
            fillSystemAndTableInfo(directRptTask);
            item.setName(directRptTask.getName());
            item.setSystemName(directRptTask.getSystemName());
            item.setTableName(directRptTask.getTableName());
            fillSuggestionsStateStr(item);
        });
        PageInfo pageInfo = new PageInfo(list);
        return pageInfo;
    }

    private void fillSuggestionsStateStr(RptTaskObject rptTaskObject) {
        rptTaskObject.setAreaSuggestionsStateStr("0".equals(rptTaskObject.getAreaSuggestionsState())?"未通过":"通过");
        rptTaskObject.setTownSuggestionsStateStr("0".equals(rptTaskObject.getTownSuggestionsState())?"未通过":"通过");
    }

    public void fillReportState(RptTaskObject rptTaskObject) {
        switch (rptTaskObject.getReportState()) {
            case "wtb":
                rptTaskObject.setReportStateStr("未填报");
                break;//未填报
            case "ytb": //已填报，未镇验收
                rptTaskObject.setReportStateStr("已填报，未验收");
                break;
            case "zyswtg"://镇验收未通过
                rptTaskObject.setReportStateStr("镇验收未通过");
                break;
            case "zystg"://已填报，镇验收通过
                rptTaskObject.setReportStateStr("镇验收通过");
                break;
            case "qyswtg"://区验收未通过
                rptTaskObject.setReportStateStr("区验收未通过");
                break;
            case "qystg"://区验收通过
                rptTaskObject.setReportStateStr("区验收通过");
                break;
            default:
                break;

        }
    }

    public PageInfo<RptTaskObject> getFillList(String name, Integer page, Integer limit, String state) {
        //获得当前登录用户
        JwtUser jwtUser = (JwtUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        FillUser fillUser = jwtUser.getFillUser();
        PageHelper.startPage(page, limit);
        if (StringUtils.isNotBlank(name)) {
            name = "%" + name + "%";
        }
        List<RptTaskObject> list = rptTaskObjectMapper.selectFillList(name, fillUser.getObjType(), fillUser.getObjId(), state);
        list.forEach(item -> {
            DirectRptTask directRptTask = directRptTaskMapper.selectByPrimaryKey(item.getTaskId());
            fillSystemAndTableInfo(directRptTask);
            item.setName(directRptTask.getName());
            item.setSystemName(directRptTask.getSystemName());
            item.setTableName(directRptTask.getTableName());
            item.setTableCode(item.getTableCode());
            fillReportState(item);
        });
        PageInfo pageInfo = new PageInfo(list);
        return pageInfo;
    }

    @Component
    class InnerAsync {
        @Autowired
        private AreaMapper areaMapper;
        @Autowired
        private RptTaskObjectMapper rptTaskObjectMapper;
        @Autowired
        private CompanyMapper companyMapper;

        @Transactional
        @Async
        public void saveRptTaskObject(String id, String dcdxIds, String systemInfoFillPersonType) {
            String[] dcdxArray = dcdxIds.split(",");
            for (String dcdxid : dcdxArray) {
                if (StringUtils.isNotBlank(dcdxid)) {
                    RptTaskObject rptTaskObject = new RptTaskObject();
                    rptTaskObject.setReportState("wtb");
                    rptTaskObject.setId(IdGen.nextS());
                    rptTaskObject.setObjId(dcdxid);
                    rptTaskObject.setTaskId(id);
                    if ("qy".equals(systemInfoFillPersonType)) {
                        Company company = companyMapper.selectByPrimaryKey(dcdxid);
                        rptTaskObject.setType("0");
                        if (company != null) {
                            rptTaskObject.setXzqhId(company.getXzqhdm());
                        }
                    } else if ("xzqh".equals(systemInfoFillPersonType)) {
                        Area area = areaMapper.selectByPrimaryKey(dcdxid);
                        rptTaskObject.setType("1");
                        if (area != null) {
                            rptTaskObject.setXzqhId(area.getCode());
                        }
                    }
                    rptTaskObjectMapper.insert(rptTaskObject);
                }
            }
        }
    }

}
