package com.snjtjj.webapi;

import com.snjtjj.entity.Organization;
import com.snjtjj.service.OrganizationService;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.FormResponse;
import com.snjtjj.vo.TreeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/org")
public class OrganizationAPI {
    @Autowired
    private OrganizationService organizationService;

    /**
     * 获取所有的组织结构
     *
     * @param userId
     * @return
     */
    @GetMapping
    public List<TreeVo> org(String userId, @RequestParam(value = "excludeId", required = false) String excludeId) {
        List<Organization> list = new ArrayList<>();
        TreeVo treeVo = new TreeVo();
        treeVo.setId("-1");
        if (StringUtils.isBlank(excludeId)) {
            list = organizationService.allOrg();
        } else {
            list = organizationService.allOrg(excludeId);
        }
        organizationService.getOrgTreeList(treeVo, list);
        return treeVo.getChildren();
    }

    @GetMapping("/getOrgListByPId")
    public Object getOrgListByPId(@RequestParam(value = "pid", required = false) String pid, Integer page, Integer limit) {
        return organizationService.getOrgListByPId(pid, page, limit);
    }

    @GetMapping("/getOrgById")
    public FormResponse<Organization> getOrgById(@RequestParam(value = "id", required = false) String id) {
        Organization organization = organizationService.getOrgById(id);
        FormResponse formResponse = new FormResponse(organization);
        return formResponse;
    }

    @PostMapping("/deleteById")
    public FormResponse<String> deleteById(@RequestParam(value = "id", required = false) String id) {
        organizationService.delete(id);
        FormResponse formResponse = new FormResponse("删除成功！");
        return formResponse;
    }


    @PostMapping("/saveOrUpdate")
    public FormResponse<String> save(Organization organization) {
        if (StringUtils.isNotBlank(organization.getId())) {
            organizationService.edit(organization);
        } else {
            organizationService.save(organization);
        }
        FormResponse formResponse = new FormResponse("保存成功！");
        return formResponse;
    }
}
