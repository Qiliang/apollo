package com.snjtjj.webapi;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.snjtjj.entity.*;
import com.snjtjj.mapper.RptTabCollectMapper;
import com.snjtjj.mapper.RptTabMapper;
import com.snjtjj.mapper.RptTabRuleMapper;
import com.snjtjj.service.RptTabCollectService;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.utils.UserUtils;
import com.snjtjj.vo.FormResponse;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

    @GetMapping("/table/list")
    public Object findListByTable(String tableId,String searchJson,String fieldJson,Integer page,Integer limit) throws IllegalAccessException, NoSuchMethodException, InvocationTargetException {
        //如果为空查询所有的字段
        return rptTabCollectService.findListByTable(tableId, searchJson, fieldJson,page,limit);
    }

    @GetMapping("/table/list/columns")
    public Object findColumnsByTable(String tableId){
        //如果为空查询所有的字段
        return rptTabCollectService.findColumnsByTable(tableId);
    }

    @Autowired
    private RptTabRuleMapper rptTabRuleMapper;
    @Autowired
    private RptTabMapper rptTabMapper;
    @Autowired
    private RptTabCollectMapper rptTabCollectMapper;

    private Map<String,String> tabMap;

    private ObjectMapper objectMapper = new ObjectMapper();

    private Map<String,String> initTabMap(String systemid){
        tabMap = new HashMap<>();
        RptTabExample example = new RptTabExample();
        example.createCriteria().andSysteminfoidEqualTo(systemid);
        List<RptTab> list = rptTabMapper.selectByExample(example);
        for(RptTab tab : list){
            tabMap.put(tab.getTabcode(),tab.getId());
        }
        return tabMap;
    }

    private String getValue( List<RptTabCollect> rptList,String hzcode,String inum){
        for(RptTabCollect r : rptList){
            if(hzcode.equals(r.getHzcode())){
                try {
                    String num = BeanUtils.getProperty(r,inum);
                    if(StringUtils.isBlank(num)){
                        return "0";
                    }
                    return num;
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                } catch (InvocationTargetException e) {
                    e.printStackTrace();
                } catch (NoSuchMethodException e) {
                    e.printStackTrace();
                }
            }
        }
        return "0";
    }

    private String selectValue(String tabid,String usercode,String hzcode,String inum){
        //根据usercode查询同组织机构的填报内容
        List<RptTabCollect> list = rptTabCollectMapper.selectTabByTabCode(tabid,hzcode,usercode);
        if(list.size() > 0){
            RptTabCollect tab = list.get(0);
            Object obj = null;
            try {
                obj = BeanUtils.getProperty(tab,inum);
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            } catch (NoSuchMethodException e) {
                e.printStackTrace();
            }
            if(obj != null){
                return obj.toString();
            }
        }
        return "0";
    }
    private String getRptValue( List<RptTabCollect> rptList,String tabcode,String usercode,String location){
        String[] lArr = location.split(":");
        String tabid,hzcode="0",inum="num1";
        tabid = tabMap.get(tabcode);
        if(lArr.length == 1){
            hzcode = location;
            return getValue(rptList,hzcode,inum);
        }
        else if(lArr.length == 2){
            if(tabMap.containsKey(lArr[0])){
                tabid = tabMap.get(lArr[0]);
                hzcode = lArr[1];
            }
            else{
                RptTabExample rpt = new RptTabExample();
                rpt.createCriteria().andTabcodeEqualTo(lArr[0]);
                List<RptTab> list = rptTabMapper.selectByExample(rpt);
                if(list.size()>0) {
                    tabid = list.get(0).getId();
                }
                hzcode = lArr[1];
            }
            if(lArr[0].equals(tabcode)){
                return getValue(rptList,hzcode,inum);
            }else{
                return selectValue(tabid,usercode,hzcode,inum);
            }
        }
        else if(lArr.length == 3){
            if(tabMap.containsKey(lArr[0])){
                tabid = tabMap.get(lArr[0]);
                hzcode = lArr[1];
            }
            else {
                RptTabExample rpt = new RptTabExample();
                rpt.createCriteria().andTabcodeEqualTo(lArr[0]);
                List<RptTab> list = rptTabMapper.selectByExample(rpt);
                if (list.size() > 0) {
                    tabid = list.get(0).getId();
                }
                hzcode = lArr[1];
            }
            inum = String.format("num%s",lArr[2]);
            if(lArr[0].equals(tabcode)){
                return getValue(rptList,hzcode,inum);
            }else{
                return selectValue(tabid,usercode,hzcode,inum);
            }
        }
        return "0";
    }
    @PostMapping("/validate")
    public FormResponse<List<RptTabRule>> validate(String tabInfo,String tabid,String usercode) throws IOException {
        List<RptTabCollect> rpt = new ArrayList<>();
        JavaType javaType = objectMapper.getTypeFactory().constructParametricType(List.class, RptTabCollect.class);
        rpt = objectMapper.readValue(tabInfo,javaType);
        RptTab tab = rptTabMapper.selectByPrimaryKey(tabid);
        initTabMap(tab.getSysteminfoid());
        String tabcode = tab.getTabcode();
        RptTabRuleExample example = new RptTabRuleExample();
        example.createCriteria().andTabidEqualTo(tabid);
        List<RptTabRule> list = rptTabRuleMapper.selectByExample(example);
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("javascript");
        List<RptTabRule> errList = new ArrayList<>();
        for(RptTabRule rule : list){
            String express = rule.getExpress();
            String param = rule.getParams();
            String text = rule.getErrortext();
            String[] pArr = param.split(",");
            int count = 1;
            for(String arr : pArr){
                String valNum = getRptValue(rpt,tabcode,usercode,arr);
                String target = String.format("[%s]",count);
                while(express.indexOf(target)>=0) {
                    express = express.replace(target, valNum.toString());
                }
                count++;
            }
            Object result = null;
            try {
                result = engine.eval(express);
            } catch (ScriptException e) {
                e.printStackTrace();
            }
            if(result != null){
                Boolean succ = (Boolean)result;
                if(!succ){
                    errList.add(rule);
                }
            }
        }
        if(errList.size() > 0) {
            FormResponse<List<RptTabRule>> response = new FormResponse(errList);
            response.setSuccess(false);
            return response;
        }
        else {
            return new FormResponse("验证成功！");
        }
    }
}
