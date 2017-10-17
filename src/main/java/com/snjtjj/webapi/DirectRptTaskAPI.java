package com.snjtjj.webapi;

import com.github.pagehelper.PageInfo;
import com.snjtjj.entity.DirectRptTask;
import com.snjtjj.entity.RptTab;
import com.snjtjj.service.DirectRptTaskService;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by bozhou on 2017/10/17.
 */
@RestController
@RequestMapping("/api/directRptTask")
public class DirectRptTaskAPI {

    @Autowired
    private DirectRptTaskService directRptTaskService;

    @GetMapping("/getListByUserID")
    public PageInfo getListByUserID(String name,Integer page, Integer limit) {
        return directRptTaskService.getListByUserID(name, page, limit);
    }

    @GetMapping("/getListByUserRole")
    public List<RptTab> getListByUserRole() {
        return directRptTaskService.getTabListByUser();
    }

    @PostMapping("/save")
    public FormResponse<String> save(DirectRptTask directRptTask,String dcdxIds,String systemInfoFillPersonType){
        FormResponse formResponse = new FormResponse("保存成功！");
        return formResponse;
    }
}
