package com.snjtjj.webapi;

import com.snjtjj.entity.RptTab;
import com.snjtjj.entity.RptTabExample;
import com.snjtjj.entity.SystemInfo;
import com.snjtjj.entity.SystemInfoExample;
import com.snjtjj.mapper.RptTabMapper;
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

    @Autowired
    private RptTabMapper rptTabMapper;

    @PostMapping("/save")
    public FormResponse<String> post(SystemInfo info){
        String id = info.getId();
        FormResponse formResponse;
        if(id != null && (id.toUpperCase().indexOf("KIT") >= 0 || id.toUpperCase().indexOf("EXT") >= 0)){
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

    @PostMapping("/list")
    public FormResponse<List<SystemInfo>> get(){
        SystemInfoExample example = new SystemInfoExample();
        List<SystemInfo> list = systemInfoMapper.selectByExample(example);
        return new FormResponse<List<SystemInfo>>(list);
    }

    @PostMapping("/delete")
    public FormResponse<String> delete(String id){
        RptTabExample example = new RptTabExample();
        example.createCriteria().andSysteminfoidEqualTo(id);
        List<RptTab> list = rptTabMapper.selectByExample(example);
        if(list.size() > 0){
            FormResponse response = new FormResponse("存在明细数据无法删除");
            response.setSuccess(false);
            return response;
        }
        systemInfoMapper.deleteByPrimaryKey(id);
        return new FormResponse("删除成功！");
    }
}
