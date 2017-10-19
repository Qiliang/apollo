package com.snjtjj.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.snjtjj.entity.base.DataEntity;

import java.util.Date;

public class FillUser extends DataEntity<FillUser>{
    private String objId;

    private String objType;

    private String loginPassword;

    private String loginUserName;

    private String mobile;

    private String leaderMobile;

    private String email;

    private String fillName;

    private Date passwordResetDate;


    public String getObjId() {
        return objId;
    }

    public void setObjId(String objId) {
        this.objId = objId == null ? null : objId.trim();
    }

    public String getObjType() {
        return objType;
    }

    public void setObjType(String objType) {
        this.objType = objType == null ? null : objType.trim();
    }

    @JsonIgnore
    public String getLoginPassword() {
        return loginPassword;
    }

    public void setLoginPassword(String loginPassword) {
        this.loginPassword = loginPassword == null ? null : loginPassword.trim();
    }

    public String getLoginUserName() {
        return loginUserName;
    }

    public void setLoginUserName(String loginUserName) {
        this.loginUserName = loginUserName == null ? null : loginUserName.trim();
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile == null ? null : mobile.trim();
    }

    public String getLeaderMobile() {
        return leaderMobile;
    }

    public void setLeaderMobile(String leaderMobile) {
        this.leaderMobile = leaderMobile == null ? null : leaderMobile.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getFillName() {
        return fillName;
    }

    public void setFillName(String fillName) {
        this.fillName = fillName == null ? null : fillName.trim();
    }

    public Date getPasswordResetDate() {
        return passwordResetDate;
    }

    public void setPasswordResetDate(Date passwordResetDate) {
        this.passwordResetDate = passwordResetDate;
    }
}