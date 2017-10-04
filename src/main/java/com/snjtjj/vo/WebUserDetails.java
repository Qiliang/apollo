package com.snjtjj.vo;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by 48715 on 2017/9/26.
 */
public class WebUserDetails implements UserDetails {
    private String userId;
    private Collection<GrantedAuthority> authorities;
    private String password;
    private String username;
    private boolean isEnabled;

    public WebUserDetails(String userId, String userName, String passWord, boolean userEnabled, Collection<GrantedAuthority> authorities) {
        this.userId = userId;
        this.username = userName;
        this.password = passWord;
        this.isEnabled = userEnabled;
        this.authorities = authorities;
    }

    public void setAuthorities(List<GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }

    @java.lang.Override
    public java.util.Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @java.lang.Override
    public java.lang.String getPassword() {
        return password;
    }

    @java.lang.Override
    public java.lang.String getUsername() {
        return username;
    }

    @java.lang.Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @java.lang.Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @java.lang.Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @java.lang.Override
    public boolean isEnabled() {
        return isEnabled;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
