package com.snjtjj.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.common.utils.ResponseException;
import com.snjtjj.entity.*;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.mapper.OrganizationMapper;
import com.snjtjj.mapper.RoleMapper;
import com.snjtjj.mapper.UserMapper;
import com.snjtjj.mapper.UserRoleMapper;
import com.snjtjj.utils.IdGen;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.TreeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by bozhou on 2017/9/28. 913584875902427136
 */
@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private UserRoleMapper userRoleMapper;
    @Autowired
    private RoleMapper roleMapper;

    public PageInfo allUser(String orgId, Integer page, Integer limit, String displayName) {
        UserExample userExample = new UserExample();
        UserExample.Criteria criteria = userExample.createCriteria().andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        if (StringUtils.isNotBlank(orgId) && !orgId.equals("-1")) {
            criteria.andOrgIdEqualTo(orgId);
        }
        if (StringUtils.isNotBlank(displayName)) {
            criteria.andDisplayNameLike(displayName);
        }
        PageHelper.startPage(page, limit);
        List<User> list = userMapper.selectByExample(userExample);
        list.forEach(item -> {
            item.setRole(getRoleByUserId(item.getId()));
        });
        PageInfo pageInfo = new PageInfo(list);
        return pageInfo;
    }

    private Role getRoleByUserId(String userId) {
        UserRoleExample userRoleExample = new UserRoleExample();
        userRoleExample.createCriteria().andUserIdEqualTo(userId);
        List<UserRole> userRoles = userRoleMapper.selectByExample(userRoleExample);
        if (userRoles.size() > 0) {
            return roleMapper.selectByPrimaryKey(userRoles.get(0).getRoleId());
        } else {
            return null;
        }
    }

    public User getUserByLoginName(String loginName){
        return userMapper.selectByLoginName(loginName);
    }

    public User getUserById(String id) {
        User user = userMapper.selectByPrimaryKey(id);
        user.setOldLoginName(user.getLoginName());
        user.setRole(getRoleByUserId(user.getId()));
        return user;
    }

    @Transactional
    public void save(User user) {
        user.preInsert();
        user.setLoginPassword(new BCryptPasswordEncoder().encode(user.getLoginPassword()));
        userMapper.insert(user);
        //插入用户角色表
        UserRole userRole = new UserRole();
        userRole.setId(IdGen.nextS());
        userRole.setUserId(user.getId());
        userRole.setRoleId(user.getRole().getId());
        userRoleMapper.insert(userRole);
    }

    @Transactional
    public void edit(User user) {
        user.preUpdate();
        if (StringUtils.isNotBlank(user.getLoginPassword())) {
            user.setLoginPassword(new BCryptPasswordEncoder().encode(user.getLoginPassword()));
            user.setLastPasswordResetDate(new Date());
        }
        userMapper.updateByPrimaryKeySelective(user);
        //删除所有的用户角色，并且重新插入
        UserRoleExample userRoleExample = new UserRoleExample();
        userRoleExample.createCriteria().andUserIdEqualTo(user.getId());
        userRoleMapper.deleteByExample(userRoleExample);
        //插入用户角色表
        UserRole userRole = new UserRole();
        userRole.setId(IdGen.nextS());
        userRole.setUserId(user.getId());
        userRole.setRoleId(user.getRole().getId());
        userRoleMapper.insert(userRole);
    }

    public void delete(String id) {
        //修改用户状态
        User user = new User();
        user.setId(id);
        user.setDelFlag(BaseEntity.DEL_FLAG_DELETE);
        userMapper.updateByPrimaryKeySelective(user);
    }

}
