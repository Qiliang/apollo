package com.snjtjj.entity;

import com.snjtjj.entity.base.DataEntity;

import java.util.Date;

public class SystemInfo extends DataEntity<SystemInfo>{
    private String name;

    private String type;

    private String releaseYear;

    private String fillPersonType;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public String getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(String releaseYear) {
        this.releaseYear = releaseYear == null ? null : releaseYear.trim();
    }

    public String getFillPersonType() {
        return fillPersonType;
    }

    public void setFillPersonType(String fillPersonType) {
        this.fillPersonType = fillPersonType == null ? null : fillPersonType.trim();
    }
}