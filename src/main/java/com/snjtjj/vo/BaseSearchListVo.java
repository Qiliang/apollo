package com.snjtjj.vo;

import java.util.List;
import java.util.Map;

/**
 * Created by bozhou on 2017/11/2.
 */
public class BaseSearchListVo<T> {
    private List<ColumnVo<T>> columns;
    private List<Map<String,Object>> data;
    public List<ColumnVo<T>> getColumns() {
        return columns;
    }

    public void setColumns(List<ColumnVo<T>> columns) {
        this.columns = columns;
    }

    public List<Map<String, Object>> getData() {
        return data;
    }

    public void setData(List<Map<String, Object>> data) {
        this.data = data;
    }
}
