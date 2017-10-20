package com.snjtjj.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.snjtjj.entity.base.DataEntity;

import java.util.Date;

public class DirectRptRemindTask extends DataEntity<DirectRptRemindTask> {
    private String systemId;

    private String tableId;

    private Date remindStartDate;

    private Date remindEndDate;

    private String remindType;

    private String remindTypeStr;

    private Integer remindMonth;

    private Integer remindDay;

    private String title;

    private String tableName;

    private String systemName;

    private String remindTime;

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

    @JsonFormat(pattern = "yyyy-MM-dd")
    public Date getRemindStartDate() {
        return remindStartDate;
    }

    public void setRemindStartDate(Date remindStartDate) {
        this.remindStartDate = remindStartDate;
    }

    @JsonFormat(pattern = "yyyy-MM-dd")
    public Date getRemindEndDate() {
        return remindEndDate;
    }

    public void setRemindEndDate(Date remindEndDate) {
        this.remindEndDate = remindEndDate;
    }

    public String getRemindType() {
        return remindType;
    }

    public void setRemindType(String remindType) {
        this.remindType = remindType == null ? null : remindType.trim();
    }

    public Integer getRemindMonth() {
        return remindMonth;
    }

    public void setRemindMonth(Integer remindMonth) {
        this.remindMonth = remindMonth;
    }

    public Integer getRemindDay() {
        return remindDay;
    }

    public void setRemindDay(Integer remindDay) {
        this.remindDay = remindDay;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
    }

    public String getSystemName() {
        return systemName;
    }

    public void setSystemName(String systemName) {
        this.systemName = systemName;
    }

    public String getRemindTypeStr() {
        return remindTypeStr;
    }

    public void setRemindTypeStr(String remindTypeStr) {
        this.remindTypeStr = remindTypeStr;
    }

    public String getRemindTime() {
        return remindTime;
    }

    public void setRemindTime(String remindTime) {
        this.remindTime = remindTime;
    }
}