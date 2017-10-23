package com.snjtjj.webapi;

import com.snjtjj.entity.RptTab;
import com.snjtjj.entity.RptTabExample;
import com.snjtjj.entity.SystemInfo;
import com.snjtjj.entity.SystemInfoExample;
import com.snjtjj.mapper.RptTabMapper;
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
            rptTabMapper.updateByPrimaryKey(tab);
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
        rptTabMapper.deleteByPrimaryKey(id);
        return new FormResponse("删除成功！");
    }
}
