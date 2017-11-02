package com.snjtjj.vo;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Created by bozhou on 2017/11/2.
 */
public class ColumnVo<T> {
    private String text;
    private String dataIndex;
    private Integer width;
    @JsonIgnore
    private T data;
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getDataIndex() {
        return dataIndex;
    }

    public void setDataIndex(String dataIndex) {
        this.dataIndex = dataIndex;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
