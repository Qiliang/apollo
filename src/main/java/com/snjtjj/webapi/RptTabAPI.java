package com.snjtjj.webapi;

import com.snjtjj.entity.*;
import com.snjtjj.mapper.RptTabMapper;
import com.snjtjj.mapper.RptTabRuleMapper;
import com.snjtjj.mapper.RptTabSettingMapper;
import com.snjtjj.mapper.SystemInfoMapper;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/tab")
public class RptTabAPI {

    @Autowired
    private RptTabMapper rptTabMapper;
    @Autowired
    private RptTabSettingMapper rptTabSettingMapper;
    @Autowired
    private RptTabRuleMapper rptTabRuleMapper;

    @PostMapping("/save")
    public FormResponse<String> save(RptTab tab){
        String id = tab.getId();
        FormResponse formResponse;
        //noinspection Duplicates
        if(id != null && (id.toUpperCase().indexOf("KIT") >= 0 || id.toUpperCase().indexOf("EXT") >= 0)){
            tab.preInsert();
            rptTabMapper.insert(tab);
            formResponse = new FormResponse("保存成功！");
        }
        else{
            tab.preUpdate();
            rptTabMapper.updateByPrimaryKeySelective(tab);
            formResponse = new FormResponse("更新成功！");
        }
        return formResponse;
    }

    @PostMapping("/list")
    public FormResponse<List<RptTab>> list(String id){
        RptTabExample example = new RptTabExample();
        if(StringUtils.isNoneBlank(id)){
            example.createCriteria().andSysteminfoidEqualTo(id);
        }
        else{
            example.createCriteria().andSysteminfoidIsNull();
        }
        List<RptTab> list = rptTabMapper.selectByExample(example);
        return new FormResponse<List<RptTab>>(list);
    }

    @PostMapping("/delete")
    public FormResponse<String> delete(String id){
        RptTabSettingExample example = new RptTabSettingExample();
        example.createCriteria().andTabidEqualTo(id);
        List<RptTabSetting> list = rptTabSettingMapper.selectByExample(example);
        if(list.size() > 0){
            FormResponse response = new FormResponse("存在明细数据无法删除");
            response.setSuccess(false);
            return response;
        }
        RptTabRuleExample example1 = new RptTabRuleExample();
        example1.createCriteria().andTabidEqualTo(id);
        List<RptTabRule> list1 = rptTabRuleMapper.selectByExample(example1);
        if(list1.size() > 0){
            FormResponse response = new FormResponse("存在明细数据无法删除");
            response.setSuccess(false);
            return response;
        }
        rptTabMapper.deleteByPrimaryKey(id);
        return new FormResponse("删除成功！");
    }
}
