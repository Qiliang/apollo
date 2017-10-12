package com.snjtjj.service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.snjtjj.entity.RptCollect;
import com.snjtjj.entity.RptCollectExample;
import com.snjtjj.entity.RptSetting;
import com.snjtjj.entity.RptSettingExample;
import com.snjtjj.mapper.RptCollectMapper;
import com.snjtjj.mapper.RptSettingMapper;
import com.snjtjj.utils.IdGen;
import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.collections4.map.HashedMap;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.util.CellRangeAddress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.lang.reflect.InvocationTargetException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class RptSettingService {

    @Autowired
    private RptSettingMapper rptSettingMapper;

    private List<Column> columnsList = new ArrayList<>();

    private Column findColumn(List<Column> columns,String id){
        for(Column column : columns){
            if(column.equals(id)){
                return column;
            }
        }
        return null;
    }
    private void buildData(List<Map<String,Object>> putList,List<String> colList){
        int len = columnsList.size();
        while (len > 0){
            Column column = columnsList.get(--len);
            column.buildData(putList,colList,0);
        }
    }
    private Column buildColumn(String text,String unit,String code,int colspan,int icol,RptSetting setting){
        int end = text.indexOf("▪");
        String id = end == -1 ? text : text.substring(0,end);
        Column column = findColumn(columnsList,id);
        if(column == null) {
            column = new Column(id);
            columnsList.add(column);
        }
        if(end > 0){
            column.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22),id);
            column.buildColumn(text.substring(end+1),unit,code,colspan+1,icol,setting);
        }
        else{
            column.leaf = true;
            column.setting = setting;
            column.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(icol * 22 + 22 + icol*13),id);
            //noinspection Duplicates
            if(code.indexOf("code") >= 0 || code.indexOf("num") >= 0){
                Column codeColumn = new Column(unit,code,unit,100);
                codeColumn.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22),unit);
                column.columns = new ArrayList<Column>() {{
                    add(codeColumn);
                }};
            }
            //noinspection Duplicates
            else{
                Column codeColumn = new Column(code,code,unit,100);
                codeColumn.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22),code);
                Column unitColumn = new Column(unit);
                unitColumn.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22), unit);
                unitColumn.columns = new ArrayList<Column>() {{
                    add(codeColumn);
                }};
                column.columns = new ArrayList<Column>(){{
                    add(unitColumn);
                }};
            }
        }
        return column;
    }
    class Column {
        @JsonIgnore
        public String id;
        @JsonIgnore
        public String unitcode;
        @JsonIgnore
        public String hzcode;
        @JsonIgnore
        public Boolean leaf;

        public String text;
        public String dataIndex;
        public Integer width;
        public List<Column> columns;
        public RptSetting setting;
        public Column(){}
        public Column(String id){
            this.id = id;
            this.leaf = false;
            this.hzcode = "—";
            this.unitcode = "—";
        }
        public Column(String id,String dataIndex,String unit,Integer width){
            this.id = id;
            this.leaf = false;
            this.dataIndex = dataIndex;
            this.hzcode = dataIndex;
            this.unitcode = unit;
            this.width = width;
        }
        public boolean equals(String value){ return this.id.equals(value); }

        public void buildData(List<Map<String,Object>> putList,List<String> colList,int icol){
            Map<String,Object> item = new HashMap<>();
            item.put("i",icol);
            item.put("itemcode",id);
            item.put("unitcode",this.unitcode);
            item.put("hzcode",this.hzcode);
            colList.forEach(col->{
                if(col.indexOf("num") >= 0){
                    if(this.leaf && this.setting != null){
                        try {
                            String v = BeanUtils.getProperty(this.setting,col);
                            item.put(col,v==null ? "" : v);
                        } catch (IllegalAccessException e) {
                            e.printStackTrace();
                        } catch (InvocationTargetException e) {
                            e.printStackTrace();
                        } catch (NoSuchMethodException e) {
                            e.printStackTrace();
                        }
                    }
                    else{
                        item.put(col, "—");
                    }
                }
            });
            if(this.leaf && columns != null){
                if(this.hzcode.indexOf("code") == -1 && this.hzcode.indexOf("num") == -1){
                    Column unitColumn = columns.get(0);
                    Column codeColumn = unitColumn.columns.get(0);
                    item.put("unitcode",unitColumn.id);
                    item.put("hzcode",codeColumn.id);
                    putList.add(item);
                    return;
                }
            }
            else {
                int len = columns != null ? columns.size() : 0;
                while (len > 0) {
                    Column column = columns.get(--len);
                    column.buildData(putList,colList, icol + 1);
                }
                putList.add(item);
            }
        }
        public void buildColumn(String text,String unit,String code,int colspan,int icol,RptSetting setting){
            int end = text.indexOf("▪");
            String id = end == -1 ? text : text.substring(0,end);
            if(columns == null){
                columns = new ArrayList<>();
            }
            Column column = findColumn(columns,id);
            if(column == null) {
                column = new Column(id);
                columns.add(column);
            }
            if(end > 0){
                column.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22),id);
                column.buildColumn(text.substring(end+1),unit,code,colspan+1,icol,setting);
            }
            else {
                column.leaf = true;
                column.setting = setting;
                column.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf((icol-colspan) * 22 + 22 + (icol-colspan)*13),id);
                //noinspection Duplicates
                if(code.indexOf("code") >= 0 || code.indexOf("num") >= 0){
                    Column codeColumn = new Column(unit,code,unit,100);
                    codeColumn.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22),unit);
                    column.columns = new ArrayList<Column>() {{
                        add(codeColumn);
                    }};
                }
                //noinspection Duplicates
                else{
                    Column codeColumn = new Column(code,code,unit,100);
                    codeColumn.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22),code);
                    Column unitColumn = new Column(unit);
                    unitColumn.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22), unit);
                    unitColumn.columns = new ArrayList<Column>() {{
                        add(codeColumn);
                    }};
                    column.columns = new ArrayList<Column>(){{
                        add(unitColumn);
                    }};
                }
            }
        }
    }

    public List<RptSetting> findSingleTable(String tabcode,Integer typeid,Boolean isTemplate){
        RptSettingExample example = new RptSettingExample();
        if(isTemplate){
            example.createCriteria()
                    .andTabcodeEqualTo(tabcode)
                    .andTypeidEqualTo(typeid)
                    .andFixcolumnIsNull();
        }
        else {
            example.createCriteria()
                    .andTabcodeEqualTo(tabcode)
                    .andTypeidEqualTo(typeid);
        }
        example.setOrderByClause("orderno asc");
        List<RptSetting> list = rptSettingMapper.selectByExample(example);
        columnsList.clear();
        for(RptSetting setting : list){
            String text = setting.getItemcode();
            String unit = setting.getUnitcode();
            String code = setting.getHzcode();
            buildColumn(text,unit,code,0,3,setting);
        }
        List<Map<String,Object>> results = new ArrayList<>();
        List colList = new ArrayList<String>(){{add("itemcode");add("unitcode");add("hzcode");add("num1");}};
        buildData(results,colList);
        Collections.reverse(results);
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        try {
            System.out.println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(results));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return list;
    }

    @Transactional
    public void putSingleTable(List<RptSetting> settingList){
        for(RptSetting setting : settingList){
            String id = setting.getId();
            if(id == null || id.toUpperCase().startsWith("EXT")){
                setting.setId(IdGen.nextS());
                rptSettingMapper.insertSelective(setting);
            }
            else{
                rptSettingMapper.updateByPrimaryKeySelective(setting);
            }
        }
    }
}
