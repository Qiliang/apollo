package com.snjtjj.webapi;

import com.snjtjj.entity.RptTab;
import com.snjtjj.entity.RptTabExample;
import com.snjtjj.entity.RptTabSetting;
import com.snjtjj.entity.RptTabSettingExample;
import com.snjtjj.mapper.RptTabSettingMapper;
import com.snjtjj.service.RptTabSettingService;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rpt/setting")
public class RptTabSettingAPI {

    @Autowired
    private RptTabSettingService rptTabSettingService;

    @Autowired
    private RptTabSettingMapper rptTabSettingMapper;

    @PostMapping("/save")
    public FormResponse<String> save(RptTabSetting tab){
        String id = tab.getId();
        FormResponse formResponse;
        if(id != null && (id.toUpperCase().indexOf("KIT") >= 0 || id.toUpperCase().indexOf("EXT") >= 0)){
            rptTabSettingMapper.insert(tab);
            formResponse = new FormResponse("保存成功！");
        }
        else{
            rptTabSettingMapper.updateByPrimaryKey(tab);
            formResponse = new FormResponse("更新成功！");
        }
        return formResponse;
    }

    @PostMapping("/list")
    public FormResponse<List<RptTabSetting>> list(String id,Integer typeid){
        RptTabSettingExample example = new RptTabSettingExample();
        example.createCriteria()
                .andTabidEqualTo(id)
                .andTypeidEqualTo(typeid);
        List<RptTabSetting> list = rptTabSettingMapper.selectByExample(example);
        return new FormResponse<List<RptTabSetting>>(list);
    }

    @PostMapping("/delete")
    public FormResponse<String> delete(String id){
        rptTabSettingMapper.deleteByPrimaryKey(id);
        return new FormResponse("删除成功！");
    }

    @GetMapping("/table/{typeid}/{tabcode}")
    public Object findListByTable(@PathVariable("tabcode") String tabcode,@PathVariable("typeid") Integer typeid){
        return rptTabSettingService.findSingleTable(tabcode,typeid,true);
    }

    @GetMapping("/build/{tabcode}")
    public FormResponse<String> buildTemplate(@PathVariable("tabcode") String tabcode){
        rptTabSettingService.buildTemplate(tabcode);
        return new FormResponse("保存成功！");
    }

    @PostMapping("/table/put")
    public FormResponse<String>  putList(@RequestBody List<RptTabSetting> list){
        rptTabSettingService.putSingleTable(list);
        return new FormResponse("保存成功！");
    }
}
