package com.snjtjj.service;

import com.snjtjj.entity.RptTabCollect;
import com.snjtjj.entity.RptTabCollectExample;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.mapper.RptTabCollectMapper;
import com.snjtjj.mapper.RptTabCollectMapper;
import com.snjtjj.utils.IdGen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RptTabCollectService {

    @Autowired
    private RptTabCollectMapper rptTabCollectMapper;

    public List<RptTabCollect> findSingleTable(String tabcode,String usercode){
        RptTabCollectExample repotExample = new RptTabCollectExample();
        repotExample.createCriteria()
        .andTabidEqualTo(tabcode)
        .andUsercodeEqualTo(usercode);
        List<RptTabCollect> list = rptTabCollectMapper.selectByExample(repotExample);
        return list;
    }

    @Transactional
    public void putSingleTable(List<RptTabCollect> collectList){
        for(RptTabCollect collect : collectList){
            String id = collect.getId();
            if(id == null || id.toUpperCase().startsWith("EXT")){
                collect.setId(IdGen.nextS());
                rptTabCollectMapper.insertSelective(collect);
            }
            else{
                rptTabCollectMapper.updateByPrimaryKeySelective(collect);
            }
        }
    }
}
