package com.snjtjj.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class RptTaskObject {
    private String id;

    private String taskId;

    private String objId;

    private String objName;

    private String name;

    private String systemName;

    private String tableName;

    private Date startDate;

    private Date endDate;

    private String townSuggestionsState;

    private String areaSuggestionsState;

    private String type;

    private String xzqhId;

    private String reportState;

    private String reportStateStr;

    private String townSuggestions;

    private String areaSuggestions;

    private Date fillDate;

    private Date townSuggestionsDate;

    private Date areaSuggestionsDate;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId == null ? null : taskId.trim();
    }

    public String getObjId() {
        return objId;
    }

    public void setObjId(String objId) {
        this.objId = objId == null ? null : objId.trim();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public String getXzqhId() {
        return xzqhId;
    }

    public void setXzqhId(String xzqhId) {
        this.xzqhId = xzqhId == null ? null : xzqhId.trim();
    }

    public String getReportState() {
        return reportState;
    }

    public void setReportState(String reportState) {
        this.reportState = reportState == null ? null : reportState.trim();
    }

    public String getTownSuggestions() {
        return townSuggestions;
    }

    public void setTownSuggestions(String townSuggestions) {
        this.townSuggestions = townSuggestions == null ? null : townSuggestions.trim();
    }

    public String getAreaSuggestions() {
        return areaSuggestions;
    }

    public void setAreaSuggestions(String areaSuggestions) {
        this.areaSuggestions = areaSuggestions == null ? null : areaSuggestions.trim();
    }

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Date getFillDate() {
        return fillDate;
    }

    public void setFillDate(Date fillDate) {
        this.fillDate = fillDate;
    }

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Date getTownSuggestionsDate() {
        return townSuggestionsDate;
    }

    public void setTownSuggestionsDate(Date townSuggestionsDate) {
        this.townSuggestionsDate = townSuggestionsDate;
    }

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Date getAreaSuggestionsDate() {
        return areaSuggestionsDate;
    }

    public void setAreaSuggestionsDate(Date areaSuggestionsDate) {
        this.areaSuggestionsDate = areaSuggestionsDate;
    }

    public String getObjName() {
        return objName;
    }

    public void setObjName(String objName) {
        this.objName = objName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getTownSuggestionsState() {
        return townSuggestionsState;
    }

    public void setTownSuggestionsState(String townSuggestionsState) {
        this.townSuggestionsState = townSuggestionsState;
    }

    public String getAreaSuggestionsState() {
        return areaSuggestionsState;
    }

    public void setAreaSuggestionsState(String areaSuggestionsState) {
        this.areaSuggestionsState = areaSuggestionsState;
    }

    public String getReportStateStr() {
        return reportStateStr;
    }

    public void setReportStateStr(String reportStateStr) {
        this.reportStateStr = reportStateStr;
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
}