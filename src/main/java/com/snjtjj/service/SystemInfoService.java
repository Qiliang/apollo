package com.snjtjj.service;

import com.snjtjj.entity.Menu;
import com.snjtjj.entity.SystemInfo;
import com.snjtjj.entity.SystemInfoExample;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.mapper.SystemInfoMapper;
import com.snjtjj.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


@Service
public class SystemInfoService {
    @Autowired
    private SystemInfoMapper systemInfoMapper;

    public List<SystemInfo> getSystemInfoListByRoleId(String roleId){
        return systemInfoMapper.getSystemInfoListByRoleId(roleId);
    }

    public List<SystemInfo> getAllSystemInfo(String name,String releaseYear){
        SystemInfoExample systemInfoExample = new SystemInfoExample();
        SystemInfoExample.Criteria criteria = systemInfoExample.createCriteria();
        criteria.andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        if(StringUtils.isNotBlank(name)){
            criteria.andNameLike("%"+name+"%");
        }
        if(StringUtils.isNotBlank(releaseYear)){
            criteria.andReleaseYearEqualTo(releaseYear);
        }
        return systemInfoMapper.selectByExampleAndRoles(systemInfoExample);
    }

    public List<SystemInfo> getFillPersonType(String fillPersonType){
        SystemInfoExample systemInfoExample = new SystemInfoExample();
        SystemInfoExample.Criteria criteria = systemInfoExample.createCriteria();
        criteria.andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        criteria.andFillPersonTypeEqualTo(fillPersonType);
        return systemInfoMapper.selectByExampleAndRoles(systemInfoExample);
    }

    public List<Map<String,String>> yearList(){
        //查询所有的发布年份
        List<String> yearList = systemInfoMapper.selectAllYear();
        List<Map<String,String>> mapList = new ArrayList<>();
        yearList.forEach(item->{
            Map<String,String> map = new LinkedHashMap<>();
            map.put("key",item+"年");
            map.put("value",item);
            mapList.add(map);
        });
        return mapList;
    }
}
