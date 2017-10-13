package com.snjtjj.webapi;

import com.snjtjj.entity.RptCollect;
import com.snjtjj.entity.RptSetting;
import com.snjtjj.entity.User;
import com.snjtjj.service.RptCollectService;
import com.snjtjj.service.RptSettingService;
import com.snjtjj.utils.UserUtils;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rpt/setting")
public class RptSettingAPI {

    @Autowired
    private RptSettingService rptSettingService;

    @GetMapping("/table/{typeid}/{tabcode}")
    public Object findListByTable(@PathVariable("tabcode") String tabcode,@PathVariable("typeid") Integer typeid){
        return rptSettingService.findSingleTable(tabcode,typeid,true);
    }

    @GetMapping("/build/{tabcode}")
    public FormResponse<String> buildTemplate(@PathVariable("tabcode") String tabcode){
        rptSettingService.buildTemplate(tabcode);
        return new FormResponse("保存成功！");
    }

    @PostMapping("/table/put")
    public FormResponse<String>  putList(@RequestBody List<RptSetting> list){
        rptSettingService.putSingleTable(list);
        return new FormResponse("保存成功！");
    }
}
