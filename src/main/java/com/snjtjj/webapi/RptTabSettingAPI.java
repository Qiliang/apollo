package com.snjtjj.webapi;

import com.snjtjj.entity.RptTabSetting;
import com.snjtjj.service.RptTabSettingService;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rpt/setting")
public class RptTabSettingAPI {

    @Autowired
    private RptTabSettingService rptTabSettingService;

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
