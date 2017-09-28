package com.snjtjj.webapi;

import com.snjtjj.entity.Organization;
import com.snjtjj.service.OrganizationService;
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
    public List<TreeVo> org(String userId) {
        List<TreeVo> treeList = new ArrayList<>();
        organizationService.getOrgTreeList(treeList, organizationService.allOrg());
        return treeList;
    }

    @GetMapping("/getOrgListByPId")
    public Object getOrgListByPId(@RequestParam(value = "pid",required = false) String pid,Integer page,Integer limit){
        return organizationService.getOrgListByPId(pid,page,limit);
    }

    @GetMapping("/getOrgById")
    public FormResponse<Organization> getOrgById(@RequestParam(value = "id",required = false) String id){
        Organization organization = organizationService.getOrgById(id);
        FormResponse formResponse = new FormResponse(organization);
        return formResponse;
    }

}
