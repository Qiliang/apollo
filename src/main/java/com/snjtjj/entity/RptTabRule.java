package com.snjtjj.entity;

public class RptTabRule {
    private String id;

    private String tabid;

    private String express;

    private String params;

    private String errortext;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getTabid() {
        return tabid;
    }

    public void setTabid(String tabid) {
        this.tabid = tabid == null ? null : tabid.trim();
    }

    public String getExpress() {
        return express;
    }

    public void setExpress(String express) {
        this.express = express == null ? null : express.trim();
    }

    public String getParams() {
        return params;
    }

    public void setParams(String params) {
        this.params = params == null ? null : params.trim();
    }

    public String getErrortext() {
        return errortext;
    }

    public void setErrortext(String errortext) {
        this.errortext = errortext == null ? null : errortext.trim();
    }
}