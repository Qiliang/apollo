package com.snjtjj.webapi;

import com.snjtjj.entity.RptTabCollect;
import com.snjtjj.entity.User;
import com.snjtjj.service.RptTabCollectService;
import com.snjtjj.utils.UserUtils;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rpt/collect")
public class RptTabCollectAPI {

    @Autowired
    private RptTabCollectService rptTabCollectService;

    @GetMapping("/table/{tabcode}/{usercode}")
    public Object findListByTable(@PathVariable("tabcode") String tabcode,@PathVariable("usercode") String usercode){
        return rptTabCollectService.findSingleTable(tabcode,usercode);
    }

    @PostMapping("/table/put")
    public FormResponse<String>  putList(@RequestBody List<RptTabCollect> list){
        rptTabCollectService.putSingleTable(list);
        return new FormResponse("保存成功！");
    }
}
