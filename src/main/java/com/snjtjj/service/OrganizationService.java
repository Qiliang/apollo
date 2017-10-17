package com.snjtjj.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.common.utils.ResponseException;
import com.snjtjj.entity.Organization;
import com.snjtjj.entity.OrganizationExample;
import com.snjtjj.entity.base.BaseEntity;
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
        OrganizationExample organizationExample = new OrganizationExample();
        organizationExample.createCriteria().andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        return organizationMapper.selectByExample(organizationExample);
    }

    public List<Organization> allOrg(String excludeId){
        OrganizationExample organizationExample = new OrganizationExample();
        organizationExample.createCriteria().andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL).andIdNotEqualTo(excludeId);
        return organizationMapper.selectByExample(organizationExample);
    }

    public PageInfo getOrgListByPId(String pid,Integer page,Integer limit){
        OrganizationExample organizationExample = new OrganizationExample();
        OrganizationExample.Criteria criteria = organizationExample.createCriteria();
        if(pid!=null&&!pid.equals("-1"))
            criteria.andParentIdEqualTo(pid);
        criteria.andDelFlagEqualTo(BaseEntity.DEL_FLAG_NORMAL);
        PageHelper.startPage(page,limit);
        List<Organization> list = organizationMapper.selectByExample(organizationExample);
        PageInfo pageInfo = new PageInfo(list);
        return pageInfo;
    }

    public Organization getOrgById(String id){
        return organizationMapper.selectByPrimaryKey(id);
    }

    public void save(Organization organization){
        setParentIds(organization);
        organization.preInsert();
        organizationMapper.insert(organization);
    }

    private Organization setParentIds(Organization organization){
        if(StringUtils.isBlank(organization.getParentId())){
            organization.setParentId("-1");
            organization.setParentIds("-1");
        }else if("-1".equals(organization.getParentId())){
            organization.setParentIds("-1");
        }
        else{
            //获取上级组织
            Organization p = organizationMapper.selectByPrimaryKey(organization.getParentId());
            if(p!=null&&StringUtils.isNotBlank(p.getParentIds())){
                String parentIds = p.getParentIds()+","+p.getId();
                organization.setParentIds(parentIds);
            }
        }
        return organization;
    }

    public void edit(Organization organization){
        setParentIds(organization);
        organization.preUpdate();
        //获取上级组织

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
        Organization organization = new Organization();
        organization.setId(id);
        organization.setDelFlag(BaseEntity.DEL_FLAG_DELETE);
        organizationMapper.updateByPrimaryKeySelective(organization);
    }

}
