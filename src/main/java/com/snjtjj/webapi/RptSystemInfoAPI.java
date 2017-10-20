package com.snjtjj.webapi;

import com.snjtjj.entity.SystemInfo;
import com.snjtjj.entity.SystemInfoExample;
import com.snjtjj.mapper.SystemInfoMapper;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/info")
public class RptSystemInfoAPI {

    @Autowired
    private SystemInfoMapper systemInfoMapper;

    @PostMapping("/save")
    public FormResponse<String> post(SystemInfo info){
        String id = info.getId();
        FormResponse formResponse;
        if(id != null && id.toUpperCase().indexOf("KITS") >= 0){
            info.preInsert();
            systemInfoMapper.insert(info);
            formResponse = new FormResponse("保存成功！");
        }
        else{
            info.preUpdate();
            systemInfoMapper.updateByPrimaryKey(info);
            formResponse = new FormResponse("更新成功！");
        }
        return formResponse;
    }

    @GetMapping("/list")
    public FormResponse<List<SystemInfo>> get(){
        SystemInfoExample example = new SystemInfoExample();
        List<SystemInfo> list = systemInfoMapper.selectByExample(example);
        return new FormResponse<List<SystemInfo>>(list);
    }

    @PostMapping("/delete")
    public FormResponse<String> delete(String id){
        systemInfoMapper.deleteByPrimaryKey(id);
        return new FormResponse("保存成功！");
    }
}
