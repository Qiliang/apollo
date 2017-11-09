package com.snjtjj.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.entity.Content;
import com.snjtjj.entity.ContentExample;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.mapper.ContentMapper;
import com.snjtjj.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class ContentService {
    @Autowired
    private ContentMapper contentMapper;

    public PageInfo allContent(String title, Integer page, Integer limit) {
        ContentExample contentExample = new ContentExample();
        ContentExample.Criteria criteria = contentExample.createCriteria().andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        if (StringUtils.isNotBlank(title)) {
            criteria.andTitleLike("%"+title+"%");
        }
        PageHelper.startPage(page, limit);
        List<Content> list = contentMapper.selectByExampleWithBLOBs(contentExample);
        PageInfo pageInfo = new PageInfo(list);
        return pageInfo;
    }

    public Content getContentById(String id){
        return contentMapper.selectByPrimaryKey(id);
    }

    @Transactional
    public void save(Content content){
        content.preInsert();
        contentMapper.insert(content);
    }

    public void delete(String id){
        Content content = new Content();
        content.setId(id);
        content.setDelFlag("1");
        contentMapper.updateByPrimaryKeySelective(content);
    }

    @Transactional
    public void edit(Content content){
        content.preUpdate();
        contentMapper.updateByPrimaryKeySelective(content);
    }
}
