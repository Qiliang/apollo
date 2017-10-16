package com.snjtjj.webapi;

import com.snjtjj.entity.SystemInfo;
import com.snjtjj.mapper.RptTabMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/rpt/tab")
public class RptTabAPI {

    @Autowired
    private RptTabMapper rptTabMapper;

    @PostMapping("/save/SystemInfo")
    public void save(SystemInfo info){
    }
}
