package com.snjtjj.webapi;

import com.github.pagehelper.PageInfo;
import com.snjtjj.entity.DirectRptTask;
import com.snjtjj.entity.RptTab;
import com.snjtjj.entity.RptTaskObject;
import com.snjtjj.service.DirectRptTaskService;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public PageInfo getListByUserID(String name, Integer page, Integer limit) {
        return directRptTaskService.getListByUserID(name, page, limit);
    }

    @GetMapping("/getListByUserRole")
    public List<RptTab> getListByUserRole() {
        return directRptTaskService.getTabListByUser();
    }

    @PostMapping("/save")
    public FormResponse<String> save(DirectRptTask directRptTask, String dcdxIds, String systemInfoFillPersonType) {
        directRptTaskService.save(directRptTask, dcdxIds, systemInfoFillPersonType);
        FormResponse formResponse = new FormResponse("保存成功！");
        return formResponse;
    }

    @PostMapping("/deleteById")
    public FormResponse<String> deleteById(@RequestParam(value = "id", required = false) String id) {
        directRptTaskService.delete(id);
        FormResponse formResponse = new FormResponse("删除成功！");
        return formResponse;
    }

    @GetMapping("/getListByFillState")
    public PageInfo getListByFillState(String id, String state, Integer page, Integer limit) {
        return directRptTaskService.getListByFillState(id, state, page, limit);
    }


    /**
     * 获得验收列表
     *
     * @param id    报送任务id
     * @param page  页码
     * @param limit 每页数量
     * @return
     */
    @GetMapping("/getCheckList")
    public PageInfo getCheckList(String id, Integer page, Integer limit) {
        return directRptTaskService.getCheckList(id, page, limit);
    }

    /**
     * 获得单位未验收完成填报任务列表
     *
     * @return
     */
    @GetMapping("/getFillList")
    public PageInfo getFillList(String name, Integer page, Integer limit) {
        return directRptTaskService.getFillList(name, page, limit, "0");
    }

    /**
     * 获得单位未验收完成填报任务列表
     *
     * @return
     */
    @GetMapping("/getFillHistoryList")
    public PageInfo getFillHistoryList(String name, Integer page, Integer limit) {
        return directRptTaskService.getFillList(name, page, limit, "1");
    }

    @PostMapping("/updateFillState")
    public FormResponse<String> updateFillState(String id) {
        directRptTaskService.updateFillState(id);
        FormResponse formResponse = new FormResponse("保存成功！");
        return formResponse;
    }

    @PostMapping("/auditRptTaskObject")
    public FormResponse<String> auditRptTaskObject(RptTaskObject rptTaskObject) {
        directRptTaskService.auditRptTaskObject(rptTaskObject);
        FormResponse formResponse = new FormResponse("保存成功！");
        return formResponse;
    }
}
