package com.snjtjj.webapi;

import com.snjtjj.entity.RptTabCollect;
import com.snjtjj.mapper.RptTabCollectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/rpt/hz")
public class RptTabHzAPI {

    @Autowired
    private RptTabCollectMapper rptTabCollectMapper;

    @PostMapping("/list")
    public Object findListByTabId(String tabid){
        List<RptTabCollect> list = rptTabCollectMapper.selectGroupByTab(tabid);
        return list;
    }
}
