package com.snjtjj.common.security.service;

import com.snjtjj.common.security.JwtUserFactory;
import com.snjtjj.entity.Role;
import com.snjtjj.entity.User;
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
    private RoleMapper roleMapper;
    @Autowired
    private MenuMapper menuMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userMapper.selectByLoginName(username);
        if (user == null) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
        } else {
            List<Role> roleList = roleMapper.selectByUserId(user.getId());
            roleList.forEach(item->{
                item.setMenuList(menuMapper.selectByRoleId(item.getId()));
            });
            user.setRoleList(roleList);
            return JwtUserFactory.create(user);
        }
    }

    public static void main(String[] args) {
        System.out.println(new BCryptPasswordEncoder().encode("123456"));
    }
}
