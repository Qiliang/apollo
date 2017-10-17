package com.snjtjj.entity;

import com.snjtjj.entity.base.DataEntity;

import java.util.Date;

public class DirectRptRemindTask extends DataEntity<DirectRptRemindTask>{
    private String systemId;

    private String tableId;

    private Date remindStartDate;

    private Date remindEndDate;

    private String remindType;

    private Integer remindMonth;

    private Integer remindDay;

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

    public Date getRemindStartDate() {
        return remindStartDate;
    }

    public void setRemindStartDate(Date remindStartDate) {
        this.remindStartDate = remindStartDate;
    }

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
}