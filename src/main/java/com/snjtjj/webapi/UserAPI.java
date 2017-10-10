package com.snjtjj.webapi;

import com.snjtjj.entity.Organization;
import com.snjtjj.entity.User;
import com.snjtjj.service.OrganizationService;
import com.snjtjj.service.UserService;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.FormResponse;
import com.snjtjj.vo.TreeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserAPI {
    @Autowired
    private OrganizationService organizationService;

    @Autowired
    private UserService userService;

    /**
     * 获取用户id
     *
     * @param orgId
     * @return
     */
    @GetMapping
    public Object user(@RequestParam(value = "orgId", required = false) String orgId, Integer page, Integer limit, @RequestParam(value = "displayName", required = false) String displayName) {
        return userService.allUser(orgId, page, limit, displayName);
    }


    @GetMapping("/getUserById")
    public FormResponse<User> getUserById(@RequestParam(value = "id", required = false) String id) {
        User user = userService.getUserById(id);
        FormResponse<User> formResponse = new FormResponse(user);
        return formResponse;
    }

    @GetMapping("/validate")
    public FormResponse<Boolean> validate(@RequestParam(value = "loginName", required = false) String loginName) {
        User user = userService.getUserByLoginName(loginName);
        Boolean have = false;
        if (user != null) {
            have = true;
        }
        FormResponse<Boolean> formResponse = new FormResponse(have);
        return formResponse;
    }

    @PostMapping("/deleteById")
    public FormResponse<String> deleteById(@RequestParam(value = "id", required = false) String id) {
        userService.delete(id);
        FormResponse formResponse = new FormResponse("删除成功！");
        return formResponse;
    }


    @PostMapping("/saveOrUpdate")
    public FormResponse<String> save(User user) {
        if (StringUtils.isNotBlank(user.getId())) {
            userService.edit(user);
        } else {
            userService.save(user);
        }
        FormResponse formResponse = new FormResponse("保存成功！");
        return formResponse;
    }
}
