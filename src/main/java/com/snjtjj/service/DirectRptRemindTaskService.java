package com.snjtjj.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.entity.*;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.entity.base.DataEntity;
import com.snjtjj.mapper.DirectRptRemindTaskMapper;
import com.snjtjj.mapper.RptTabMapper;
import com.snjtjj.mapper.SystemInfoMapper;
import com.snjtjj.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

/**
 * Created by bozhou on 2017/10/17.
 */
@Service
public class DirectRptRemindTaskService {
    @Autowired
    private DirectRptRemindTaskMapper directRptRemindTaskMapper;
    @Autowired
    private SystemInfoMapper systemInfoMapper;
    @Autowired
    private RptTabMapper rptTabMapper;

    public PageInfo allTask(String title, Integer page, Integer limit) {
        DirectRptRemindTaskExample contentExample = new DirectRptRemindTaskExample();
        DirectRptRemindTaskExample.Criteria criteria = contentExample.createCriteria().andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        if (StringUtils.isNotBlank(title)) {
            criteria.andTitleLike("%"+title+"%");
        }
        PageHelper.startPage(page, limit);
        List<DirectRptRemindTask> list = directRptRemindTaskMapper.selectByExample(contentExample);
        list.forEach(item->{
            fillSystemAndTableInfo(item);
            if("year".equals(item.getRemindType())){
                item.setRemindTypeStr("按年");
                item.setRemindTime("每年"+item.getRemindMonth()+"月"+item.getRemindDay()+"日");
            }else if("month".equals(item.getRemindType())){
                item.setRemindTypeStr("按月");
                item.setRemindTime("每月"+item.getRemindDay()+"日");
            }
        });
        PageInfo pageInfo = new PageInfo(list);
        return pageInfo;
    }

    private void fillSystemAndTableInfo(DirectRptRemindTask item) {
        //根据制度id查询制度名称
        SystemInfo systemInfo = systemInfoMapper.selectByPrimaryKey(item.getSystemId());
        item.setSystemName(systemInfo.getName());

        //根据表id查询表名称
        RptTab rptTab = rptTabMapper.selectByPrimaryKey(item.getTableId());
        item.setTableName(rptTab.getTabname());
    }

    public DirectRptRemindTask getDirectRptRemindTaskById(String id){
        DirectRptRemindTask directRptRemindTask = directRptRemindTaskMapper.selectByPrimaryKey(id);
        fillSystemAndTableInfo(directRptRemindTask);
        return directRptRemindTask;
    }

    @Transactional
    public void save(DirectRptRemindTask content){
        content.preInsert();
        directRptRemindTaskMapper.insert(content);
    }

    public void delete(String id){
        DirectRptRemindTask content = new DirectRptRemindTask();
        content.setId(id);
        content.setDelFlag(DataEntity.DEL_FLAG_DELETE);
        directRptRemindTaskMapper.updateByPrimaryKeySelective(content);
    }

    @Transactional
    public void edit(DirectRptRemindTask content){
        content.preUpdate();
        directRptRemindTaskMapper.updateByPrimaryKeySelective(content);
    }

    /**
     * 获得所有未过期的报送任务
     */
    public List<DirectRptRemindTask> getTaskList(){
        Date today = new Date();
        DirectRptRemindTaskExample contentExample = new DirectRptRemindTaskExample();
        DirectRptRemindTaskExample.Criteria criteria = contentExample.createCriteria().andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        criteria.andRemindEndDateGreaterThanOrEqualTo(today);
        criteria.andRemindStartDateLessThanOrEqualTo(today);
        DirectRptRemindTaskExample.Criteria criteria2 = contentExample.createCriteria();
        criteria2.andRemindEndDateIsNull();
        contentExample.or(criteria2);
        return directRptRemindTaskMapper.selectByExample(contentExample);
    }
}
