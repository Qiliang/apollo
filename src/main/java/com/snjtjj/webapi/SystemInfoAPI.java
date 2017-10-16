package com.snjtjj.webapi;

import com.snjtjj.entity.SystemInfo;
import com.snjtjj.service.SystemInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/systemInfo")
public class SystemInfoAPI {
    @Autowired
    private SystemInfoService systemInfoService;

    @GetMapping("/all")
    public List<SystemInfo> systemInfo() {
        return systemInfoService.getAllSystemInfo();
    }

    @GetMapping("/fillPersonType")
    public List<SystemInfo> fillPersonType(String fillPersonType) {
        return systemInfoService.getFillPersonType(fillPersonType);
    }

    @GetMapping("/systemInfoByRoleId")
    public List<SystemInfo> menuByRoleId(String roleId) {
        return systemInfoService.getSystemInfoListByRoleId(roleId);
    }

}
