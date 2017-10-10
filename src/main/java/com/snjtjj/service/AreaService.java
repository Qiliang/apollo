package com.snjtjj.service;
import com.snjtjj.entity.Area;
import com.snjtjj.entity.AreaExample;
import com.snjtjj.mapper.AreaMapper;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.TreeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by bozhou on 2017/9/28. 913584875902427136
 */
@Service
public class AreaService {
    @Autowired
    private AreaMapper areaMapper;

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
        }
        return treeVo;
    }

}
