package com.snjtjj.webapi;

import com.github.pagehelper.PageInfo;
import com.snjtjj.entity.FillUser;
import com.snjtjj.service.FillUserService;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/fillUser")
public class FillUserAPI {
    @Autowired
    private FillUserService fillUserService;

    /**
     * 获取所有的企业信息
     *
     * @return
     */
    @GetMapping("/getUser")
    public FormResponse<FillUser> getUser() {
        FormResponse<FillUser> fillUserFormResponse = new FormResponse(fillUserService.getFillUserByID());
        return fillUserFormResponse;
    }

    @PostMapping("/update")
    public FormResponse<String> update(FillUser fillUser) {
        fillUserService.update(fillUser);
        FormResponse<String> formResponse = new FormResponse<String>("修改成功！");
        return formResponse;
    }

}
