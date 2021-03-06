package com.snjtjj.entity;

import com.snjtjj.entity.base.DataEntity;

public class RptTab extends DataEntity<RptTab> {

    private String systeminfoid;

    private String systeminfoName;

    private String systemInfoFillPersonType;

    private String tabcode;

    private String tabname;

    private String makedept;

    private String approvalno;

    private String validitydate;

    private String comment;

    private Integer tabdeep;

    private Integer tabdeep1;



    public String getSysteminfoid() {
        return systeminfoid;
    }

    public void setSysteminfoid(String systeminfoid) {
        this.systeminfoid = systeminfoid == null ? null : systeminfoid.trim();
    }

    public String getTabcode() {
        return tabcode;
    }

    public void setTabcode(String tabcode) {
        this.tabcode = tabcode == null ? null : tabcode.trim();
    }

    public String getTabname() {
        return tabname;
    }

    public void setTabname(String tabname) {
        this.tabname = tabname == null ? null : tabname.trim();
    }

    public String getMakedept() {
        return makedept;
    }

    public void setMakedept(String makedept) {
        this.makedept = makedept == null ? null : makedept.trim();
    }

    public String getApprovalno() {
        return approvalno;
    }

    public void setApprovalno(String approvalno) {
        this.approvalno = approvalno == null ? null : approvalno.trim();
    }

    public String getValiditydate() {
        return validitydate;
    }

    public void setValiditydate(String validitydate) {
        this.validitydate = validitydate == null ? null : validitydate.trim();
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment == null ? null : comment.trim();
    }

    public Integer getTabdeep() {
        return tabdeep;
    }

    public void setTabdeep(Integer tabdeep) {
        this.tabdeep = tabdeep;
    }

    public Integer getTabdeep1() {
        return tabdeep1;
    }

    public void setTabdeep1(Integer tabdeep1) {
        this.tabdeep1 = tabdeep1;
    }

    public String getSysteminfoName() {
        return systeminfoName;
    }

    public void setSysteminfoName(String systeminfoName) {
        this.systeminfoName = systeminfoName;
    }

    public String getSystemInfoFillPersonType() {
        return systemInfoFillPersonType;
    }

    public void setSystemInfoFillPersonType(String systemInfoFillPersonType) {
        this.systemInfoFillPersonType = systemInfoFillPersonType;
    }
}