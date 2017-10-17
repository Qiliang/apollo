package com.snjtjj.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.common.utils.ResponseException;
import com.snjtjj.entity.*;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.mapper.*;
import com.snjtjj.utils.IdGen;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.TreeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by bozhou on 2017/9/28. 913584875902427136
 */
@Service
public class RoleService {
    @Autowired
    private RoleMapper roleMapper;
    @Autowired
    private RoleMenuMapper roleMenuMapper;
    @Autowired
    private MenuMapper menuMapper;
    @Autowired
    private UserRoleMapper userRoleMapper;
    @Autowired
    private RoleSystemMapper roleSystemMapper;

    public PageInfo getRoleList(Integer page, Integer limit) {
        RoleExample roleExample = new RoleExample();
        roleExample.createCriteria().andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        PageHelper.startPage(page, limit);
        List<Role> list = roleMapper.selectByExample(roleExample);
        PageInfo pageInfo = new PageInfo(list);
        return pageInfo;
    }

    public List<Role> getRoleList() {
        RoleExample roleExample = new RoleExample();
        roleExample.createCriteria().andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        List<Role> list = roleMapper.selectByExample(roleExample);
        return list;
    }

    public Role getRoleById(String roleId) {
        return roleMapper.selectByPrimaryKey(roleId);
    }

    @Transactional
    public void save(Role role) {
        role.preInsert();
        saveRoleMenu(role.getMenuList(), role.getId());
        saveRoleSystem(role.getSystemInfoList(),role.getId());
        roleMapper.insert(role);

    }

    @Transactional
    public void saveRoleSystem(List<SystemInfo> list, String roleId) {
        for (SystemInfo systemInfo : list) {
            RoleSystem roleSystem = new RoleSystem();
            roleSystem.setId(IdGen.nextS());
            roleSystem.setSystemId(systemInfo.getId());
            roleSystem.setRoleId(roleId);
            roleSystemMapper.insert(roleSystem);
        }
    }

    @Transactional
    public void saveRoleMenu(List<Menu> list, String roleId) {
        Set<String> set = new LinkedHashSet<>();
        for (Menu menu : list) {
            if (StringUtils.isNotBlank(menu.getParentId())) {
                set.add(menu.getParentId());
            }
            RoleMenu roleMenu = new RoleMenu();
            roleMenu.setId(IdGen.nextS());
            roleMenu.setMenuId(menu.getId());
            roleMenu.setRoleId(roleId);
            roleMenuMapper.insert(roleMenu);
        }
        //插入所有的上级菜单
        for (String menuId : set) {
            Menu menu = menuMapper.selectByPrimaryKey(menuId);
            RoleMenu roleMenu = new RoleMenu();
            roleMenu.setId(IdGen.nextS());
            roleMenu.setMenuId(menu.getId());
            roleMenu.setRoleId(roleId);
            roleMenuMapper.insert(roleMenu);
        }
    }

    @Transactional
    public void edit(Role role) {
        //删除所有的角色菜单关联表
        RoleMenuExample roleMenuExample = new RoleMenuExample();
        roleMenuExample.createCriteria().andRoleIdEqualTo(role.getId());
        roleMenuMapper.deleteByExample(roleMenuExample);
        //删除所有角色制度关联表
        RoleSystemExample roleSystemExample = new RoleSystemExample();
        roleSystemExample.createCriteria().andRoleIdEqualTo(role.getId());
        roleSystemMapper.deleteByExample(roleSystemExample);
        //修改角色
        saveRoleMenu(role.getMenuList(), role.getId());
        saveRoleSystem(role.getSystemInfoList(),role.getId());
        role.preUpdate();
        roleMapper.updateByPrimaryKeySelective(role);
    }

    @Transactional
    public void deleteById(String id) {
        //判断角色下是否有用户
        UserRoleExample userRoleExample = new UserRoleExample();
        userRoleExample.createCriteria().andRoleIdEqualTo(id);
        PageHelper.startPage(1, 1);
        if (userRoleMapper.selectByExample(userRoleExample).size() > 0) {
            throw new ResponseException("无法删除有用户的角色！", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        //删除所有的角色菜单关联表
        RoleMenuExample roleMenuExample = new RoleMenuExample();
        roleMenuExample.createCriteria().andRoleIdEqualTo(id);
        roleMenuMapper.deleteByExample(roleMenuExample);
        //删除所有角色制度关联表
        RoleSystemExample roleSystemExample = new RoleSystemExample();
        roleSystemExample.createCriteria().andRoleIdEqualTo(id);
        roleSystemMapper.deleteByExample(roleSystemExample);
        Role role = new Role();
        role.setId(id);
        role.setDelFlag(BaseEntity.DEL_FLAG_DELETE);
        roleMapper.updateByPrimaryKeySelective(role);
    }
}
