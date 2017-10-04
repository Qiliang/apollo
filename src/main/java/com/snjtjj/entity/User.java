
package com.snjtjj.entity;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.snjtjj.entity.base.DataEntity;
import com.snjtjj.utils.Collections3;
import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 用户Entity
 */
public class User extends DataEntity<User> {

    private static final long serialVersionUID = 1L;
    private String orgId;
    private String loginName;// 登录名
    private String loginPassword;// 密码
    private String displayName;    // 姓名
    private String lastLoginIp;    // 最后登陆IP
    private Date lastLoginTime;    // 最后登陆日期
    private String oldLoginName;// 原登录名
    private String newPassword;    // 新密码
    private String oldLoginIp;    // 上次登陆IP
    private Date oldLoginDate;    // 上次登陆日期
    private Date lastPasswordResetDate;
    private Role role; // 拥有角色列表

    public User() {
        super();
    }

    public User(String id) {
        super(id);
    }

    public User(String id, String loginName) {
        super(id);
        this.loginName = loginName;
    }


    public String getId() {
        return id;
    }

    @Length(min = 1, max = 100, message = "登录名长度必须介于 1 和 100 之间")
    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    @JsonIgnore
    @Length(min = 1, max = 100, message = "密码长度必须介于 1 和 100 之间")
    public String getLoginPassword() {
        return loginPassword;
    }

    public void setLoginPassword(String loginPassword) {
        this.loginPassword = loginPassword;
    }

    @Length(min = 1, max = 100, message = "姓名长度必须介于 1 和 100 之间")
    public String getDisplayName() {
        return displayName;
    }


    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public String getLastLoginIp() {
        return lastLoginIp;
    }

    public void setLastLoginIp(String lastLoginIp) {
        this.lastLoginIp = lastLoginIp;
    }

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Date getLastLoginTime() {
        return lastLoginTime;
    }

    public void setLastLoginTime(Date lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

    public String getOldLoginName() {
        return oldLoginName;
    }

    public void setOldLoginName(String oldLoginName) {
        this.oldLoginName = oldLoginName;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public String getOldLoginIp() {
        if (oldLoginIp == null) {
            return lastLoginIp;
        }
        return oldLoginIp;
    }

    public void setOldLoginIp(String oldLoginIp) {
        this.oldLoginIp = oldLoginIp;
    }

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Date getOldLoginDate() {
        if (oldLoginDate == null) {
            return lastLoginTime;
        }
        return oldLoginDate;
    }

    public void setOldLoginDate(Date oldLoginDate) {
        this.oldLoginDate = oldLoginDate;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public boolean isAdmin() {
        return isAdmin(this.id);
    }

    public static boolean isAdmin(String id) {
        return id != null && "1".equals(id);
    }


    /**
     * 重写比较方法,SpringSecurity根据用户名来比较是否同一个用户
     */
    @Override
    public boolean equals(Object o) {
        if (o.toString().equals(this.loginName))
            return true;
        return false;
    }

    @Override
    public int hashCode() {
        return loginName.hashCode();
    }


    @Override
    public String toString() {
        return this.loginName;
    }

    public Date getLastPasswordResetDate() {
        return lastPasswordResetDate;
    }

    public void setLastPasswordResetDate(Date lastPasswordResetDate) {
        this.lastPasswordResetDate = lastPasswordResetDate;
    }

    public String getOrgId() {
        return orgId;
    }

    public void setOrgId(String orgId) {
        this.orgId = orgId;
    }
}