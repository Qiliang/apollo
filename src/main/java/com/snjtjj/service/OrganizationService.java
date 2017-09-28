package com.snjtjj.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.entity.Organization;
import com.snjtjj.entity.OrganizationExample;
import com.snjtjj.mapper.OrganizationMapper;
import com.snjtjj.vo.TreeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by bozhou on 2017/9/28.
 */
@Service
public class OrganizationService {
    @Autowired
    private OrganizationMapper organizationMapper;

    public void getOrgTreeList(List<TreeVo> treeList,List<Organization> allOrgList){
        List<Organization> removeList = new ArrayList<>();
        if(treeList.size()==0){
            for(Organization organization:allOrgList){
                if(organization.getParentId().equals("-1")){
                    TreeVo<Organization> treeVo = new TreeVo<>();
                    treeVo.setAttrs(organization);
                    treeVo.setId(organization.getId());
                    treeVo.setParent_id(organization.getParentId());
                    treeVo.setSort(organization.getSort());
                    treeVo.setText(organization.getName());
                    removeList.add(organization);
                }
            }
            allOrgList.removeAll(removeList);
        }else{
            for(TreeVo<Organization> treeVo:treeList){
                List<TreeVo> cList = new ArrayList<>();
                for(Organization organization:allOrgList){
                    if(organization.getParentId().equals(treeVo.getId())){
                        TreeVo<Organization> cTreeVo = new TreeVo<>();
                        cTreeVo.setAttrs(organization);
                        cTreeVo.setId(organization.getId());
                        cTreeVo.setParent_id(organization.getParentId());
                        cTreeVo.setSort(organization.getSort());
                        cTreeVo.setText(organization.getName());
                        cList.add(cTreeVo);
                        removeList.add(organization);
                    }
                }
                allOrgList.removeAll(removeList);
                treeVo.setChildren(cList);
                treeVo.setLeaf(cList.size()>0);
                getOrgTreeList(cList,allOrgList);
            }
        }

    }

    public List<Organization> allOrg(){
        return organizationMapper.selectByExample(new OrganizationExample());
    }

    public PageInfo getOrgListByPId(String pid,Integer page,Integer limit){
        OrganizationExample organizationExample = new OrganizationExample();
        if(pid!=null&&!pid.equals("-1"))
            organizationExample.createCriteria().andParentIdEqualTo(pid);
        PageHelper.startPage(page,limit);
        List<Organization> list = organizationMapper.selectByExample(organizationExample);
        PageInfo pageInfo = new PageInfo(list);
        return pageInfo;
    }

    public Organization getOrgById(String id){
        return organizationMapper.selectByPrimaryKey(id);
    }
}
