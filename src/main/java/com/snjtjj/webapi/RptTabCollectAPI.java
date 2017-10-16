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

    @GetMapping("/table/{tabcode}")
    public Object findListByTable(@PathVariable("tabcode") String tabcode){
        User user = UserUtils.getUser();
        return rptTabCollectService.findSingleTable(tabcode,user.getId());
    }

    @PostMapping("/table/put")
    public FormResponse<String>  putList(@RequestBody List<RptTabCollect> list){
        User user = UserUtils.getUser();
        String id = user.getId();
        list.forEach(li ->{
            li.setUsercode(id);
        });
        rptTabCollectService.putSingleTable(list);
        return new FormResponse("保存成功！");
    }
}
