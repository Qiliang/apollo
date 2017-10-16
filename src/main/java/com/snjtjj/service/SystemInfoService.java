package com.snjtjj.service;

import com.snjtjj.entity.Menu;
import com.snjtjj.entity.SystemInfo;
import com.snjtjj.entity.SystemInfoExample;
import com.snjtjj.mapper.SystemInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SystemInfoService {
    @Autowired
    private SystemInfoMapper systemInfoMapper;

    public List<SystemInfo> getSystemInfoListByRoleId(String roleId){
        return systemInfoMapper.getSystemInfoListByRoleId(roleId);
    }

    public List<SystemInfo> getAllSystemInfo(){
        SystemInfoExample systemInfoExample = new SystemInfoExample();
        SystemInfoExample.Criteria criteria = systemInfoExample.createCriteria();
        criteria.andDelFlagEqualTo("0");
        return systemInfoMapper.selectByExample(systemInfoExample);
    }

    public List<SystemInfo> getFillPersonType(String fillPersonType){
        SystemInfoExample systemInfoExample = new SystemInfoExample();
        SystemInfoExample.Criteria criteria = systemInfoExample.createCriteria();
        criteria.andDelFlagEqualTo("0");
        criteria.andFillPersonTypeEqualTo(fillPersonType);
        return systemInfoMapper.selectByExampleAndRoles(systemInfoExample);
    }
}
