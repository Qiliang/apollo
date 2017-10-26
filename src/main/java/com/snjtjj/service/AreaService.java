package com.snjtjj.service;
import com.snjtjj.entity.Area;
import com.snjtjj.entity.AreaExample;
import com.snjtjj.entity.FillUser;
import com.snjtjj.entity.base.DataEntity;
import com.snjtjj.mapper.AreaMapper;
import com.snjtjj.mapper.FillUserMapper;
import com.snjtjj.utils.IdGen;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.TreeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by bozhou on 2017/9/28. 913584875902427136
 */
@Service
public class AreaService {
    @Autowired
    private AreaMapper areaMapper;
    @Autowired
    private FillUserMapper fillUserMapper;

    private TreeVo<Area> getAreaList(TreeVo treeVo,List<Area> allAreaList){
        List<Area> removeList = new ArrayList<>();
        List<TreeVo> cList = new ArrayList<>();
        for(Area area:allAreaList){
            if(StringUtils.isNotBlank(area.getParentId())&&area.getParentId().equals(treeVo.getId())){
                TreeVo<Area> cTreeVo = new TreeVo<>();
                cTreeVo.setAttrs(area);
                cTreeVo.setId(area.getId());
                cTreeVo.setParent_id(area.getParentId());
                cTreeVo.setText(area.getName());
                cList.add(cTreeVo);
                removeList.add(area);
            }
        }
        treeVo.setLeaf(cList.size()==0);
        allAreaList.removeAll(removeList);
        for(TreeVo treeVo1:cList){
            treeVo1 = getAreaList(treeVo1,allAreaList);
        }
        treeVo.setChildren(cList);
        return treeVo;
    }

    public TreeVo<Area> getTree(){
        TreeVo<Area> treeVo = new TreeVo<>();
        AreaExample areaExample = new AreaExample();
        areaExample.createCriteria().andParentIdIsNull();
        List<Area> rootList = areaMapper.selectByExample(areaExample);
        if(rootList.size()>0){
            AreaExample allAreaExample = new AreaExample();
            allAreaExample.setOrderByClause("code");
            List<Area> allAreaList = areaMapper.selectByExample(allAreaExample);
            Area root = rootList.get(0);
            treeVo.setId(root.getId());
            treeVo.setText(root.getName());
            treeVo = getAreaList(treeVo,allAreaList);
            treeVo.setAttrs(root);
        }
        TreeVo<Area> rootVo = new TreeVo<>();
        rootVo.setId("-1");
        List<TreeVo> list = new ArrayList<>();
        list.add(treeVo);
        rootVo.setChildren(list);
        return rootVo;
    }

    public List<Area> getAllList(){
        AreaExample areaExample = new AreaExample();
        areaExample.createCriteria().andParentIdIsNotNull();
        areaExample.setOrderByClause("code");
        return areaMapper.selectByExample(areaExample);
    }

    public void saveFillUser(){
        List<Area> areaList = areaMapper.selectAreaNotInFillUserList();
        for(Area area : areaList){
            FillUser fillUser = new FillUser();
            fillUser.setId(IdGen.nextS());
            fillUser.setCreateBy("1");
            fillUser.setCreateDate(new Date());
            fillUser.setDelFlag(DataEntity.DEL_FLAG_NORMAL);
            fillUser.setUpdateBy("1");
            fillUser.setUpdateDate(new Date());
            fillUser.setObjType("1");
            fillUser.setObjId(area.getId());
            fillUser.setLoginPassword(new BCryptPasswordEncoder().encode("123456"));
            fillUser.setLoginUserName(area.getCode());
            fillUserMapper.insert(fillUser);
        }
    }

}
