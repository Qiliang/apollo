package com.snjtjj.webapi;

import com.snjtjj.entity.RptCollect;
import com.snjtjj.entity.User;
import com.snjtjj.mapper.RptCollectMapper;
import com.snjtjj.service.RptCollectService;
import com.snjtjj.utils.UserUtils;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rpt")
public class RptCollectAPI {

    @Autowired
    private RptCollectService rptCollectService;

    @GetMapping("/table/{tabcode}")
    public Object findListByTable(@PathVariable("tabcode") String tabcode){
        User user = UserUtils.getUser();
        return rptCollectService.findSingleTable(tabcode,user.getId());
    }

    @PostMapping("/table/put")
    public FormResponse<String>  putList(@RequestBody List<RptCollect> list){
        User user = UserUtils.getUser();
        String id = user.getId();
        list.forEach(li ->{
            li.setUsercode(id);
        });
        rptCollectService.putSingleTable(list);
        return new FormResponse("保存成功！");
    }
}
