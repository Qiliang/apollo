package com.snjtjj.entity;

public class RptTab {
    private String id;

    private String zdbid;

    private String tabcode;

    private String tabname;

    private Integer tabdeep;

    private Integer tabdeep1;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getZdbid() {
        return zdbid;
    }

    public void setZdbid(String zdbid) {
        this.zdbid = zdbid == null ? null : zdbid.trim();
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
}