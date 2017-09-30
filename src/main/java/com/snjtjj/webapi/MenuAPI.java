package com.snjtjj.webapi;

import com.snjtjj.entity.Menu;
import com.snjtjj.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuAPI {
    @Autowired
    private MenuService menuService;
    @GetMapping
    public List<Menu> menu(){
        return menuService.getMenuList();
    }

    @GetMapping("/menuByUserID")
    public List<Menu> menuByUserID(String userId){
        return menuService.getMenuListByUserId(userId);
    }

    @GetMapping("/menuByRoleId")
    public List<Menu> menuByRoleId(String roleId){
        return menuService.getMenuListByRoleId(roleId);
    }

}
