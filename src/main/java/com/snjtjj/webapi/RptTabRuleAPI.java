package com.snjtjj.webapi;

import com.snjtjj.entity.*;
import com.snjtjj.mapper.RptTabRuleMapper;
import com.snjtjj.utils.IdGen;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rpt/rule")
public class RptTabRuleAPI {

    @Autowired
    private RptTabRuleMapper rptTabRuleMapper;

    @PostMapping("/list")
    public FormResponse<List<RptTabRule>> list(String id){
        RptTabRuleExample example = new RptTabRuleExample();
        example.createCriteria().andTabidEqualTo(id);
        example.setOrderByClause("orderno asc");
        List<RptTabRule> list = rptTabRuleMapper.selectByExample(example);
        return new FormResponse<List<RptTabRule>>(list);
    }

    @PostMapping("/add")
    public FormResponse<String> add(@RequestBody List<RptTabRule> list){
        //noinspection Duplicates
        list.forEach(tab -> {
            String id = tab.getId();
            if(id != null && (id.toUpperCase().indexOf("KIT") >= 0 || id.toUpperCase().indexOf("EXT") >= 0)) {
                tab.setId(IdGen.nextS());
                rptTabRuleMapper.insertSelective(tab);
            }
            else{
                rptTabRuleMapper.updateByPrimaryKey(tab);
            }
        });
        return new FormResponse("创建成功！");
    }

    @PostMapping("/update")
    public FormResponse<String> update(@RequestBody List<RptTabRule> list){
        list.forEach(tab -> {
            rptTabRuleMapper.updateByPrimaryKey(tab);
        });
        return new FormResponse("更新成功！");
    }
    @PostMapping("/delete")
    public FormResponse<String> delete(@RequestBody List<RptTabRule> list){
        list.forEach(tab -> {
            rptTabRuleMapper.deleteByPrimaryKey(tab.getId());
        });
        return new FormResponse("删除成功！");
    }
}
