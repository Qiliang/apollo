package com.snjtjj.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.common.utils.ResponseException;
import com.snjtjj.entity.Organization;
import com.snjtjj.entity.OrganizationExample;
import com.snjtjj.mapper.OrganizationMapper;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.TreeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by bozhou on 2017/9/28. 913584875902427136
 */
@Service
public class OrganizationService {
    @Autowired
    private OrganizationMapper organizationMapper;

    public TreeVo getOrgTreeList(TreeVo treeVo,List<Organization> allOrgList){
        List<Organization> removeList = new ArrayList<>();
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
        treeVo.setLeaf(cList.size()==0);
        allOrgList.removeAll(removeList);
        for(TreeVo treeVo1:cList){
            treeVo1 = getOrgTreeList(treeVo1,allOrgList);
        }
        treeVo.setChildren(cList);
        return treeVo;
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

    public void save(Organization organization){
        if(StringUtils.isBlank(organization.getParentId())){
            organization.setParentId("-1");
        }
        organization.preInsert();
        organizationMapper.insert(organization);
    }

    public void edit(Organization organization){
        if(StringUtils.isBlank(organization.getParentId())){
            organization.setParentId("-1");
        }
        organization.preUpdate();
        organizationMapper.updateByPrimaryKeySelective(organization);
    }

    public void delete(String id){
        //判断是否有子节点
        OrganizationExample organizationExample = new OrganizationExample();
        organizationExample.createCriteria().andParentIdEqualTo(id);
        List<Organization> list = organizationMapper.selectByExample(organizationExample);
        if(list.size()>0){
            throw new ResponseException("无法删除有下属节点的组织机构！", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        organizationMapper.deleteByPrimaryKey(id);
    }

}
