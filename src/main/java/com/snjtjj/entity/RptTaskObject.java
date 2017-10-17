package com.snjtjj.entity;

public class RptTaskObject {
    private String id;

    private String taskId;

    private String objId;

    private String type;

    private String xzqhId;

    private String reportState;

    private String townSuggestions;

    private String areaSuggestions;

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
}