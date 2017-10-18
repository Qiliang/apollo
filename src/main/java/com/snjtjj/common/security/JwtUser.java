package com.snjtjj.common.security;

import com.fasterxml.jackson.databind.util.BeanUtil;
import com.snjtjj.entity.*;
import org.springframework.beans.BeanUtils;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by stephan on 20.03.16.
 */
public class JwtUser implements UserDetails {
    private User user;
    private FillUser fillUser;
    private String password;
    private String username;
    private Collection<? extends GrantedAuthority> roles;

    public JwtUser(User user,Collection<? extends GrantedAuthority> roles){
        this.user = user;
        this.setPassword(user.getLoginPassword());
        this.setUsername(user.getLoginName());
        this.roles = new ArrayList<>();
    }

    public JwtUser(FillUser fillUser,Collection<? extends GrantedAuthority> roles){
        this.fillUser = fillUser;
        this.setPassword(fillUser.getLoginPassword());
        this.setUsername(fillUser.getLoginUserName());
        this.roles = new ArrayList<>();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    public FillUser getFillUser() {
        return fillUser;
    }

    public void setFillUser(FillUser fillUser) {
        this.fillUser = fillUser;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

