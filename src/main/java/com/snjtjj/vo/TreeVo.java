package com.snjtjj.vo;

import java.util.List;

/**
 * Created by bozhou on 2017/9/28.
 */
public class TreeVo<T> {
    private String id;
    private String iconCls;
    private String text;
    private Boolean leaf;
    private String parent_id;
    private Long sort;
    private T attrs;
    private List<TreeVo> children;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIconCls() {
        return iconCls;
    }

    public void setIconCls(String iconCls) {
        this.iconCls = iconCls;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Boolean getLeaf() {
        return leaf;
    }

    public void setLeaf(Boolean leaf) {
        this.leaf = leaf;
    }

    public String getParent_id() {
        return parent_id;
    }

    public void setParent_id(String parent_id) {
        this.parent_id = parent_id;
    }

    public Long getSort() {
        return sort;
    }

    public void setSort(Long sort) {
        this.sort = sort;
    }

    public T getAttrs() {
        return attrs;
    }

    public void setAttrs(T attrs) {
        this.attrs = attrs;
    }

    public List<TreeVo> getChildren() {
        return children;
    }

    public void setChildren(List<TreeVo> children) {
        this.children = children;
    }
}
