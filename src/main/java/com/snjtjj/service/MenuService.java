package com.snjtjj.service;

import com.snjtjj.entity.Menu;
import com.snjtjj.entity.MenuExample;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.mapper.MenuMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        criteria.andLevelEqualTo(2);
        return menuMapper.selectByExample(menuExample);
    }

    public List<Menu> getMenuListByUserId(String userId){
        return menuMapper.getMenuListByUserId(userId);
    }

    public List<Menu> getMenuListByRoleId(String roleId){
        return menuMapper.getMenuListByRoleId(roleId);
    }

}
