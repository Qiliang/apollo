package com.snjtjj.webapi;

import com.snjtjj.entity.RptTab;
import com.snjtjj.entity.RptTabExample;
import com.snjtjj.entity.RptTabSetting;
import com.snjtjj.entity.RptTabSettingExample;
import com.snjtjj.mapper.RptTabMapper;
import com.snjtjj.mapper.RptTabSettingMapper;
import com.snjtjj.service.RptTabSettingService;
import com.snjtjj.utils.IdGen;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.FormResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/api/rpt/setting")
public class RptTabSettingAPI {

    @Autowired
    private RptTabSettingService rptTabSettingService;

    @Autowired
    private RptTabSettingMapper rptTabSettingMapper;

    @Autowired
    private RptTabMapper rptTabMapper;

    @PostMapping("/list")
    public FormResponse<List<RptTabSetting>> list(String id,Integer typeid){
        RptTabSettingExample example = new RptTabSettingExample();
        example.createCriteria()
                .andTabidEqualTo(id)
                .andTypeidEqualTo(typeid);
        example.setOrderByClause("orderno asc");
        List<RptTabSetting> list = rptTabSettingMapper.selectByExample(example);
        return new FormResponse<List<RptTabSetting>>(list);
    }

    @PostMapping("/add")
    public FormResponse<String> add(@RequestBody List<RptTabSetting> list){
        String tabid = null,item=null;
        Integer type = null;
        Integer tabdeep = 0;
        Integer tabdeep1 = 0;
        //noinspection Duplicates
        for(RptTabSetting tab : list){
            String id = tab.getId();
            tabid = tab.getTabid();
            item = tab.getItemcode();
            type = tab.getTypeid();
            Pattern p = Pattern.compile("▪",Pattern.CASE_INSENSITIVE);
            Matcher m = p.matcher(item);
            int count = 1;
            while(m.find()){
                count ++;
            }
            if(type == 0){
                if(count > tabdeep){
                    tabdeep = count;
                }
            }
            else{
                if(count > tabdeep1){
                    tabdeep1 = count;
                }
            }
            if(id != null && (id.toUpperCase().indexOf("KIT") >= 0 || id.toUpperCase().indexOf("EXT") >= 0)) {
                tab.setId(IdGen.nextS());
                rptTabSettingMapper.insertSelective(tab);
            }
            else{
                rptTabSettingMapper.updateByPrimaryKey(tab);
            }
        }
        RptTab table = rptTabMapper.selectByPrimaryKey(tabid);
        Integer dp0 = table.getTabdeep();
        Integer dp1 = table.getTabdeep1();
        if(dp0 == null || dp0 < tabdeep){
            table.setTabdeep(tabdeep);
            rptTabMapper.updateByPrimaryKey(table);
        }
        if(dp1 == null || dp1 < tabdeep1){
            table.setTabdeep1(tabdeep1);
            rptTabMapper.updateByPrimaryKey(table);
        }

        return new FormResponse("创建成功！");
    }
    @PostMapping("/update")
    public FormResponse<String> update(@RequestBody List<RptTabSetting> list){
        String tabid = null,item=null;
        Integer type = null;
        Integer tabdeep = 0;
        Integer tabdeep1 = 0;
        //noinspection Duplicates
        for(RptTabSetting tab : list){
            String id = tab.getId();
            tabid = tab.getTabid();
            item = tab.getItemcode();
            type = tab.getTypeid();
            Pattern p = Pattern.compile("▪",Pattern.CASE_INSENSITIVE);
            Matcher m = p.matcher(item);
            int count = 1;
            while(m.find()){
                count ++;
            }
            if(type == 0){
                if(count > tabdeep){
                    tabdeep = count;
                }
            }
            else{
                if(count > tabdeep1){
                    tabdeep1 = count;
                }
            }
            rptTabSettingMapper.updateByPrimaryKey(tab);
        }
        RptTab table = rptTabMapper.selectByPrimaryKey(tabid);
        Integer dp0 = table.getTabdeep();
        Integer dp1 = table.getTabdeep1();
        if(dp0 == null || dp0 < tabdeep){
            table.setTabdeep(tabdeep);
            rptTabMapper.updateByPrimaryKey(table);
        }
        if(dp1 == null || dp1 < tabdeep1){
            table.setTabdeep1(tabdeep1);
            rptTabMapper.updateByPrimaryKey(table);
        }
        return new FormResponse("更新成功！");
    }
    @PostMapping("/delete")
    public FormResponse<String> delete(@RequestBody List<RptTabSetting> list){
        list.forEach(tab -> {
            rptTabSettingMapper.deleteByPrimaryKey(tab.getId());
        });
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
