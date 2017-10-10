package com.snjtjj.service;

import com.snjtjj.entity.Menu;
import com.snjtjj.entity.MenuExample;
import com.snjtjj.entity.Organization;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.mapper.MenuMapper;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.TreeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by bozhou on 2017/9/28. 913584875902427136
 */
@Service
public class MenuService {
    @Autowired
    private MenuMapper menuMapper;

    public List<Menu> getMenuList(){
        MenuExample menuExample = new MenuExample();
        MenuExample.Criteria criteria = menuExample.createCriteria();
        criteria.andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        criteria.andCmpIsNotNull();
        return menuMapper.selectByExample(menuExample);
    }

    public List<Menu> getMenuListByUserId(String userId){
        return menuMapper.getMenuListByUserId(userId);
    }

    public List<Menu> getMenuTreeByUserId(String userId){
        List<Menu> allMenuList = getMenuListByUserId(userId);
        Menu menu = new Menu();
        List<Menu> treeList =  getMenuTreeByUserId(menu,allMenuList).getChildren();
        Menu indexMenu = new Menu();
        indexMenu.setId("index");
        indexMenu.setCmp("Kits.view.Home");
        indexMenu.setIconCls("x-fa fa-home");
        indexMenu.setLeaf(true);
        indexMenu.setText("首页");
        indexMenu.setSort(Long.valueOf(0));
        treeList.add(0,indexMenu);
        return treeList;
    }

    public Menu getMenuTreeByUserId(Menu menu,List<Menu> allMenuList){
        List<Menu> removeList = new ArrayList<>();
        List<Menu> cList = new ArrayList<>();
        for(Menu menu1:allMenuList){
            if(StringUtils.isBlank(menu.getId())){
                if(StringUtils.isBlank(menu1.getParentId())){
                    cList.add(menu1);
                    removeList.add(menu1);
                }
            }else {
                if (menu1.getParentId().equals(menu.getId())) {
                    cList.add(menu1);
                    removeList.add(menu1);
                }
            }
        }
        menu.setLeaf(cList.size()==0);
        allMenuList.removeAll(removeList);
        for(Menu menu1:cList){
            menu1 = getMenuTreeByUserId(menu1,allMenuList);
        }
        menu.setChildren(cList);
        return menu;
    }

    public List<Menu> getMenuListByRoleId(String roleId){
        return menuMapper.getMenuListByRoleId(roleId);
    }

}
