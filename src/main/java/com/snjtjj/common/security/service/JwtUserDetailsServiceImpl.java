package com.snjtjj.common.security.service;

import com.snjtjj.common.security.JwtUserFactory;
import com.snjtjj.entity.FillUser;
import com.snjtjj.entity.Role;
import com.snjtjj.entity.User;
import com.snjtjj.mapper.FillUserMapper;
import com.snjtjj.mapper.MenuMapper;
import com.snjtjj.mapper.RoleMapper;
import com.snjtjj.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by stephan on 20.03.16.
 */
@Service
public class JwtUserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private FillUserMapper fillUserMapper;
    @Autowired
    private MenuMapper menuMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (username != null && username.startsWith("users@")) {
            username = username.substring(6);
            //判断用户名是否为组织机构代码或者行政区划代码
            FillUser fillUser = fillUserMapper.selectByLoginUserName(username);
            if (fillUser == null) {
                throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
            } else {
                return JwtUserFactory.create(fillUser);
            }
        } else {
            User user = userMapper.selectByLoginName(username);
            if (user == null) {
                throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
            } else {
//            List<Role> roleList = roleMapper.selectByUserId(user.getId());
//            roleList.forEach(item->{
//                item.setMenuList(menuMapper.selectByRoleId(item.getId()));
//            });
//            user.setRoleList(roleList);
                return JwtUserFactory.create(user);
            }
        }

    }

    public static void main(String[] args) {
        System.out.println(new BCryptPasswordEncoder().encode("123456"));
    }
}
