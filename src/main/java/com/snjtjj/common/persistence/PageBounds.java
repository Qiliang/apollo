package com.snjtjj.common.persistence;


public class PageBounds extends com.github.miemiedev.mybatis.paginator.domain.PageBounds {

    public PageBounds() {
        setContainsTotalCount(false);
    }

    public PageBounds(int page, int limit) {
        super(page, limit);
        setContainsTotalCount(false);
    }

    public PageBounds(int page, int limit, boolean containsTotalCount) {
        super(page, limit, containsTotalCount);
    }
}
