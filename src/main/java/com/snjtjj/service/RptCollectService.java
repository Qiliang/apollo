package com.snjtjj.service;

import com.snjtjj.entity.RptCollect;
import com.snjtjj.entity.RptCollectExample;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.mapper.RptCollectMapper;
import com.snjtjj.utils.IdGen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RptCollectService {

    @Autowired
    private RptCollectMapper rptCollectMapper;

    public List<RptCollect> findSingleTable(String tabcode,String usercode){
        RptCollectExample repotExample = new RptCollectExample();
        repotExample.createCriteria()
        .andTabcodeEqualTo(tabcode)
        .andUsercodeEqualTo(usercode);
        List<RptCollect> list = rptCollectMapper.selectByExample(repotExample);
        return list;
    }

    @Transactional
    public void putSingleTable(List<RptCollect> collectList){
        for(RptCollect collect : collectList){
            String id = collect.getId();
            if(id == null || id.toUpperCase().startsWith("EXT")){
                collect.setId(IdGen.nextS());
                rptCollectMapper.insertSelective(collect);
            }
            else{
                rptCollectMapper.updateByPrimaryKeySelective(collect);
            }
        }
    }
}
