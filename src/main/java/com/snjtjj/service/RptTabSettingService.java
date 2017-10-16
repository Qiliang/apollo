package com.snjtjj.service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.snjtjj.entity.RptTab;
import com.snjtjj.entity.RptTabExample;
import com.snjtjj.entity.RptTabSetting;
import com.snjtjj.entity.RptTabSettingExample;
import com.snjtjj.mapper.RptTabMapper;
import com.snjtjj.mapper.RptTabSettingMapper;
import com.snjtjj.utils.IdGen;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.apache.commons.beanutils.BeanUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.*;
import java.lang.reflect.InvocationTargetException;
import java.util.*;

@Service
public class RptTabSettingService {

    @Autowired
    private RptTabSettingMapper rptTabSettingMapper;

    @Autowired
    private RptTabMapper rptTabMapper;

    private List<Column> columnsList = new ArrayList<>();

    private static String buildPath(String path){
        File directory = new File("");
        String fullPath = null;
        try{
            fullPath = directory.getAbsolutePath()+"/"+path;
        }catch (Exception e){}
        return fullPath;
    }

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
    private Column buildColumn(String text, String unit, String code, int colspan, int icol, RptTabSetting setting, Object editor){
        int end = text.indexOf("▪");
        String id = end == -1 ? text : text.substring(0,end);
        Column column = findColumn(columnsList,id);
        if(column == null) {
            column = new Column(id);
            columnsList.add(column);
        }
        if(end > 0){
            column.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22),id);
            column.buildColumn(text.substring(end+1),unit,code,colspan+1,icol,setting,editor);
        }
        else{
            column.leaf = true;
            column.setting = setting;
            column.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(icol * 22 + 22 + icol*13),id);
            //noinspection Duplicates
            if(code.indexOf("code") >= 0 || code.indexOf("num") >= 0){
                Column codeColumn = new Column(unit,code,unit,setting.getColwidth(),setting.getColalign(),editor);
                codeColumn.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22),unit);
                column.columns = new ArrayList<Column>() {{
                    add(codeColumn);
                }};
            }
            else{
                Column codeColumn = new Column(code,code,unit,setting.getColwidth(),setting.getColalign(),editor);
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
        @JsonIgnore
        public RptTabSetting setting;

        public String text;
        public String dataIndex;
        public String align;
        public Integer width;
        public Object editor;
        public List<Column> columns;

        public Column(){}
        public Column(String id){
            this.id = id;
            this.leaf = false;
            this.hzcode = "—";
            this.unitcode = "—";
        }
        public Column(String id,String dataIndex,String unit,Integer width,String align,Object editor){
            this.id = id;
            this.leaf = false;
            this.dataIndex = dataIndex;
            this.hzcode = dataIndex;
            this.unitcode = unit;
            if(dataIndex.indexOf("num") >= 0) {
                this.editor = editor;
            }
            this.width = width == null ? 100 : width;
            if(align == null){
                this.align = "center";
            }
            else{
                if(!"left".equals(align)){
                    this.align = align;
                }
            }
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
        public void buildColumn(String text,String unit,String code,int colspan,int icol,RptTabSetting setting,Object editor){
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
                column.buildColumn(text.substring(end+1),unit,code,colspan+1,icol,setting,editor);
            }
            else {
                column.leaf = true;
                column.setting = setting;
                column.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf((icol-colspan) * 22 + 22 + (icol-colspan)*13),id);
                //noinspection Duplicates
                if(code.indexOf("code") >= 0 || code.indexOf("num") >= 0){
                    Column codeColumn = new Column(unit,code,unit,setting.getColwidth(),setting.getColalign(),editor);
                    codeColumn.text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22),unit);
                    column.columns = new ArrayList<Column>() {{
                        add(codeColumn);
                    }};
                }
                else{
                    Column codeColumn = new Column(code,code,unit,setting.getColwidth(),setting.getColalign(),editor);
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

    /**
     * 生成汇总表单
     * @param tab
     */
    private void buildTotalTemplate(RptTab tab){
        RptTabSettingExample settingExample = new RptTabSettingExample();
        settingExample.createCriteria()
                .andTabidEqualTo(tab.getId())
                .andTypeidEqualTo(0);
        settingExample.setOrderByClause("orderno asc");
        List<RptTabSetting> list = rptTabSettingMapper.selectByExample(settingExample);
        columnsList.clear();
        List<Map<String,String>> fields = new ArrayList<>();
        //noinspection Duplicates
        for(RptTabSetting setting : list){
            String text = setting.getItemcode();
            String unit = setting.getUnitcode();
            String code = setting.getHzcode();
            buildColumn(text,unit,code,0,tab.getTabdeep(),setting,null);
            Map<String,String> field = new HashMap<>();
            field.put("name",code);
            field.put("type","string");
            fields.add(field);
        }
        String tabcode = tab.getTabcode();
        String tabname = tab.getTabname();
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);

        String tplPath = buildPath("src/main/resources/static/ftl");
        String appPath = buildPath(String.format("src/main/resources/static/app/view/tablehz/%s.js",tabcode));
        Map<String,Object> model = new HashMap<>();
        model.put("tabcode",tabcode);
        model.put("tabname",tabname);
        try {
            model.put("fields",mapper.writerWithDefaultPrettyPrinter().writeValueAsString(fields));
            model.put("columns",mapper.writerWithDefaultPrettyPrinter().writeValueAsString(columnsList));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        try {
            Configuration cfg = new Configuration();
            cfg.setEncoding(Locale.getDefault(), "utf-8");
            cfg.setDirectoryForTemplateLoading(new File(tplPath));
            BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(appPath),"UTF-8"));
            try {
                Template template = cfg.getTemplate("total_table.ftl");
                template.process(model,writer);
            }
            catch (TemplateException e) {
                e.printStackTrace();
            }
            writer.flush();
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    /**
     * 生成填报表单
     * @param tab
     */
    private void buildFormTemplate(RptTab tab){
        Map<String,Object> model = new HashMap<>();
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);

        RptTabSettingExample settingExample1 = new RptTabSettingExample();
        settingExample1.createCriteria()
                .andTabidEqualTo(tab.getId())
                .andTypeidEqualTo(1);
        settingExample1.setOrderByClause("orderno asc");
        List<RptTabSetting> list1 = rptTabSettingMapper.selectByExample(settingExample1);
        columnsList.clear();
        List<Map<String,String>> fields = new ArrayList<>();
        List<String> colList = new ArrayList<>();
        //noinspection Duplicates
        Integer deep = tab.getTabdeep1();
        Map<String,Object> editor = new HashMap<>();
        Map<String,Object> child = new HashMap<>();
        child.put("xtype","numberfield");
        child.put("minValue",0);
        child.put("allowBlank",true);
        editor.put("field",child);
        for(RptTabSetting setting : list1){
            String text = setting.getItemcode();
            String unit = setting.getUnitcode();
            String code = setting.getHzcode();
            buildColumn(text,unit,code,0,deep > 2 ? deep-2 : 0,setting,editor);
            Map<String,String> field = new HashMap<>();
            field.put("name",code);
            field.put("type","string");
            fields.add(field);
            colList.add(code);
        }
        try {
            model.put("columns",mapper.writerWithDefaultPrettyPrinter().writeValueAsString(columnsList));
            model.put("fields",mapper.writerWithDefaultPrettyPrinter().writeValueAsString(fields));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        RptTabSettingExample settingExample2 = new RptTabSettingExample();
        settingExample2.createCriteria()
                .andTabidEqualTo(tab.getId())
                .andTypeidEqualTo(0)
                .andFixcolumnIsNull();
        settingExample2.setOrderByClause("orderno asc");
        List<RptTabSetting> list2 = rptTabSettingMapper.selectByExample(settingExample2);
        columnsList.clear();
        //noinspection Duplicates
        for(RptTabSetting setting : list2){
            String text = setting.getItemcode();
            String unit = setting.getUnitcode();
            String code = setting.getHzcode();
            buildColumn(text,unit,code,0,tab.getTabdeep(),setting,null);
        }
        List<Map<String,Object>> datas = new ArrayList<>();
        buildData(datas,colList);
        Collections.reverse(datas);
        try {
            model.put("datas",mapper.writerWithDefaultPrettyPrinter().writeValueAsString(datas));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        String tabcode = tab.getTabcode();
        String tabname = tab.getTabname();
        model.put("tabcode",tabcode);
        model.put("tabname",tabname);
        model.put("tabid",tab.getId());

        String tplPath = buildPath("src/main/resources/static/ftl");
        String appPath = buildPath(String.format("src/main/resources/static/app/view/tables/%s.js",tabcode));
        //noinspection Duplicates
        try {
            Configuration cfg = new Configuration();
            cfg.setEncoding(Locale.getDefault(), "utf-8");
            cfg.setDirectoryForTemplateLoading(new File(tplPath));
            BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(appPath),"UTF-8"));
            try {
                Template template = cfg.getTemplate("form_table.ftl");
                template.process(model,writer);
            }
            catch (TemplateException e) {
                e.printStackTrace();
            }
            writer.flush();
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void buildTemplate(String tabcode){
        RptTabExample tabExample = new RptTabExample();
        tabExample.createCriteria()
                .andTabcodeEqualTo(tabcode);
        List<RptTab> tabs = rptTabMapper.selectByExample(tabExample);
        RptTab tab = tabs.get(0);

        //生成汇总表单
        buildTotalTemplate(tab);

        //生成填报表单
        buildFormTemplate(tab);
    }

    public List<RptTabSetting> findSingleTable(String tabcode,Integer typeid,Boolean isTemplate){
        RptTabSettingExample example = new RptTabSettingExample();
        if(isTemplate){
            example.createCriteria()
                    .andTabidEqualTo(tabcode)
                    .andTypeidEqualTo(typeid)
                    .andFixcolumnIsNull();
        }
        else {
            example.createCriteria()
                    .andTabidEqualTo(tabcode)
                    .andTypeidEqualTo(typeid);
        }
        example.setOrderByClause("orderno asc");
        List<RptTabSetting> list = rptTabSettingMapper.selectByExample(example);
        return list;
    }

    @Transactional
    public void putSingleTable(List<RptTabSetting> settingList){
        for(RptTabSetting setting : settingList){
            String id = setting.getId();
            if(id == null || id.toUpperCase().startsWith("EXT")){
                setting.setId(IdGen.nextS());
                rptTabSettingMapper.insertSelective(setting);
            }
            else{
                rptTabSettingMapper.updateByPrimaryKeySelective(setting);
            }
        }
    }
}
