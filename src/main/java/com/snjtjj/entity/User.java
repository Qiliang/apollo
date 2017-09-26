
package com.snjtjj.entity;

import java.util.Date;

import com.snjtjj.entity.base.DataEntity;
import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 用户Entity
 */
public class User extends DataEntity<User> {

    private static final long serialVersionUID = 1L;
    //    private Office company;	// 归属公司
//    private Office office;	// 归属部门
    private String loginName;// 登录名
    private String loginPassword;// 密码
    private String displayName;    // 姓名
    private String lastLoginIp;    // 最后登陆IP
    private Date lastLoginTime;    // 最后登陆日期
    private String oldLoginName;// 原登录名
    private String newPassword;    // 新密码

    private String oldLoginIp;    // 上次登陆IP
    private Date oldLoginDate;    // 上次登陆日期

//    private Role role;	// 根据角色查询用户条件

//    private List<Role> roleList = Lists.newArrayList(); // 拥有角色列表

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

//    public User(Role role){
//        super();
//        this.role = role;
//    }

    public String getId() {
        return id;
    }

//    @JsonIgnore
//    @NotNull(message="归属公司不能为空")
//    public Office getCompany() {
//        return company;
//    }

//    public void setCompany(Office company) {
//        this.company = company;
//    }

//    @JsonIgnore
//    @NotNull(message="归属部门不能为空")
//    public Office getOffice() {
//        return office;
//    }

//    public void setOffice(Office office) {
//        this.office = office;
////    }

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

//    public Role getRole() {
//        return role;
//    }
//
//    public void setRole(Role role) {
//        this.role = role;
//    }
//
//    @JsonIgnore
//    public List<Role> getRoleList() {
//        return roleList;
//    }
//
//    public void setRoleList(List<Role> roleList) {
//        this.roleList = roleList;
//    }
//
//    @JsonIgnore
//    public List<String> getRoleIdList() {
//        List<String> roleIdList = Lists.newArrayList();
//        for (Role role : roleList) {
//            roleIdList.add(role.getId());
//        }
//        return roleIdList;
//    }
//
//    public void setRoleIdList(List<String> roleIdList) {
//        roleList = Lists.newArrayList();
//        for (String roleId : roleIdList) {
//            Role role = new Role();
//            role.setId(roleId);
//            roleList.add(role);
//        }
//    }

    /**
     * 用户拥有的角色名称字符串, 多个角色名称用','分隔.
     */
//    public String getRoleNames() {
//        return Collections3.extractToString(roleList, "name", ",");
//    }
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

}