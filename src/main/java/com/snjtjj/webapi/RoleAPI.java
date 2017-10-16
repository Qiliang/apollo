package com.snjtjj.webapi;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.snjtjj.entity.Menu;
import com.snjtjj.entity.Role;
import com.snjtjj.entity.SystemInfo;
import com.snjtjj.service.RoleService;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/role")
public class RoleAPI {
    private ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    private RoleService roleService;


    @GetMapping("/getRoleList")
    public Object getRoleList(Integer page, Integer limit) {
        return roleService.getRoleList(page, limit);
    }

    @GetMapping("/getAllRoleList")
    public Object getAllRoleList() {
        return roleService.getRoleList();
    }

    @GetMapping("/getRoleById")
    public FormResponse<Role> getRoleById(@RequestParam(value = "id", required = false) String id) {
        Role role = roleService.getRoleById(id);
        FormResponse formResponse = new FormResponse(role);
        return formResponse;
    }

    @PostMapping("/deleteById")
    public FormResponse<String> deleteById(@RequestParam(value = "id", required = false) String id) {
        roleService.deleteById(id);
        FormResponse formResponse = new FormResponse("删除成功！");
        return formResponse;
    }


    @PostMapping("/saveOrUpdate")
    public FormResponse<String> saveOrUpdate(Role role, String menuListJson,String sysListJson) throws IOException {
        if(StringUtils.isNotBlank(menuListJson)) {
            JavaType javaType = objectMapper.getTypeFactory().constructParametricType(List.class, Menu.class);
            role.setMenuList(objectMapper.readValue(menuListJson, javaType));
        }
        if(StringUtils.isNotBlank(sysListJson)) {
            JavaType javaType = objectMapper.getTypeFactory().constructParametricType(List.class, SystemInfo.class);
            role.setSystemInfoList(objectMapper.readValue(sysListJson, javaType));
        }
        if (StringUtils.isNotBlank(role.getId())) {
            roleService.edit(role);
        } else {
            roleService.save(role);
        }
        FormResponse formResponse = new FormResponse("保存成功！");
        return formResponse;
    }
}
