package com.snjtjj.webapi;

import com.github.pagehelper.PageInfo;
import com.snjtjj.entity.Content;
import com.snjtjj.entity.DirectRptRemindTask;
import com.snjtjj.service.DirectRptRemindTaskService;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by bozhou on 2017/10/17.
 */
@RestController
@RequestMapping("/api/directRptRemindTask")
public class DirectRptRemindTaskAPI {
    @Autowired
    private DirectRptRemindTaskService directRptRemindTaskService;

    @GetMapping
    public PageInfo content(String title, Integer page, Integer limit) {
        return directRptRemindTaskService.allTask(title, page, limit);
    }

    @PostMapping("/saveOrUpdate")
    public FormResponse<String> save(DirectRptRemindTask directRptRemindTask) {
        if (StringUtils.isNotBlank(directRptRemindTask.getId())) {
            directRptRemindTaskService.edit(directRptRemindTask);
        } else {
            directRptRemindTaskService.save(directRptRemindTask);
        }
        FormResponse formResponse = new FormResponse("保存成功！");
        return formResponse;
    }

    @GetMapping("/getDirectRptRemindTaskById")
    public FormResponse<DirectRptRemindTask> getCompanyById(@RequestParam(value = "id", required = false) String id) {
        DirectRptRemindTask directRptRemindTask = directRptRemindTaskService.getDirectRptRemindTaskById(id);
        FormResponse<DirectRptRemindTask> formResponse = new FormResponse(directRptRemindTask);
        return formResponse;
    }

    @PostMapping("/deleteById")
    public FormResponse<String> deleteById(@RequestParam(value = "id", required = false) String id) {
        directRptRemindTaskService.delete(id);
        FormResponse formResponse = new FormResponse("删除成功！");
        return formResponse;
    }

}
