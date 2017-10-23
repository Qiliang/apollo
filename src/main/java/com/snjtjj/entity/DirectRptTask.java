package com.snjtjj.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.snjtjj.entity.base.DataEntity;

import java.util.Date;

public class DirectRptTask  extends DataEntity<DirectRptTask> {

    private String name;

    private Date startDate;

    private Date endDate;

    private String systemId;

    private String tableId;

    private String xzqhIds;

    private String ytb;

    private String wtb;

    private String tbl;

    private String systemName;

    private String tableName;

    private String tableCode;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    @JsonFormat(pattern="yyyy-MM-dd")
    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    @JsonFormat(pattern="yyyy-MM-dd")
    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getSystemId() {
        return systemId;
    }

    public void setSystemId(String systemId) {
        this.systemId = systemId == null ? null : systemId.trim();
    }

    public String getTableId() {
        return tableId;
    }

    public void setTableId(String tableId) {
        this.tableId = tableId == null ? null : tableId.trim();
    }

    public String getXzqhIds() {
        return xzqhIds;
    }

    public void setXzqhIds(String xzqhIds) {
        this.xzqhIds = xzqhIds == null ? null : xzqhIds.trim();
    }

    public String getYtb() {
        return ytb;
    }

    public void setYtb(String ytb) {
        this.ytb = ytb;
    }

    public String getWtb() {
        return wtb;
    }

    public void setWtb(String wtb) {
        this.wtb = wtb;
    }

    public String getTbl() {
        return tbl;
    }

    public void setTbl(String tbl) {
        this.tbl = tbl;
    }

    public String getSystemName() {
        return systemName;
    }

    public void setSystemName(String systemName) {
        this.systemName = systemName;
    }

    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
    }

    public String getTableCode() {
        return tableCode;
    }

    public void setTableCode(String tableCode) {
        this.tableCode = tableCode;
    }
}