package com.snjtjj.webapi;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.snjtjj.entity.RptTab;
import com.snjtjj.entity.RptTabSetting;
import com.snjtjj.mapper.RptTabMapper;
import com.snjtjj.mapper.RptTabSettingMapper;
import com.snjtjj.utils.IdGen;
import com.snjtjj.vo.FormResponse;
import org.apache.commons.io.FileUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/rpt/import")
public class RptTabImportAPI {

    @Autowired
    private RptTabMapper rptTabMapper;
    @Autowired
    private RptTabSettingMapper rptTabSettingMapper;

    private static String buildPath(String path){
        File directory = new File("");
        String fullPath = null;
        try{
            fullPath = directory.getAbsolutePath()+"/"+path;
        }catch (Exception e){}
        return fullPath;
    }

    @PostMapping("/hzxls")
    public FormResponse<String> hzXLS() throws IOException {
        String rptPath = buildPath("src/main/resources/static/ftl/2016年农村统计年报汇总表.xls");
        FileInputStream fs = FileUtils.openInputStream(new File(rptPath));
        Workbook wb = new HSSFWorkbook(fs);
        Map<String,String> groups = new HashMap<>();
        Map<String,Map<String,String>> results = new HashMap<>();
        String firstRow1 = null,lastRow1 = null;
        for(int s = 2; s <= 27; s++){
            Sheet sheet = wb.getSheetAt(s);
            String sheetName = sheet.getSheetName();
            String fix1 = sheetName.length() >= 6 ? sheetName.substring(0,6) : sheetName;
            Map<String,String> measureRow = new HashMap<>();
            int lastRowNum = sheet.getLastRowNum();
            for(Integer r = lastRowNum; r > 0; r--){
                Cell cell = sheet.getRow(r).getCell(0);
                String val = cell != null ? getCellValue(cell) : "";
                if("汇总代码".equals(val) || "代码总汇".equals(val) || "甲".equals(val) || "代码".equals(val)){
                    measureRow.put("lastRow",r.toString());
                    lastRow1 = r.toString();
                }
                if("指标名称".equals(val)){
                    measureRow.put("firstRow",r.toString());
                    firstRow1 = r.toString();
                    break;
                }
                if(cell != null) {
                    CellStyle cStyle = cell.getCellStyle();
                    BorderStyle bStyle = cStyle.getBorderTopEnum();
                    if (bStyle == BorderStyle.THICK && val != "") {
                        measureRow.put("firstRow", r.toString());
                        firstRow1 = r.toString();
                        break;
                    }
                }
                if(r > 0){
                    Cell cell1 = sheet.getRow(r-1).getCell(0);
                    if(cell1 != null) {
                        String tmp = getCellValue(cell1);
                        if(tmp!=null && tmp.indexOf("填报单位")>=0){
                            measureRow.put("firstRow", r.toString());
                            firstRow1 = r.toString();
                            break;
                        }
                    }
                }
            }
            groups.put(fix1,null);
            if(measureRow.size() == 0){
                measureRow.put("firstRow",firstRow1);
                measureRow.put("lastRow",lastRow1);
            }
            results.put(sheetName,measureRow);
        }
        List<Map<String,String>> headList = null;
        String preSheetName = null;
        for(Integer s = 2; s <= 27; s++){
            Sheet sheet = wb.getSheetAt(s);
            String sheetName = sheet.getSheetName();
            String fix1 = sheetName.length() >= 6 ? sheetName.substring(0,6) : sheetName;
            Map<String,String> measureRow = results.get(sheetName);
            Integer firstRow = Integer.parseInt(measureRow.get("firstRow"));
            Integer lastRow = Integer.parseInt(measureRow.get("lastRow"));
            String codeRow = groups.get(fix1);
            Integer beginCol = 0;
            Row row = sheet.getRow(lastRow);
            Short endCol = row.getLastCellNum();
            if(codeRow!=null){
                for(int c = 0; c <= endCol; c++){
                    Cell cell = row.getCell(c);
                    if(cell != null){
                        String val = getCellValue(cell);
                        Float hzValue = getNumeric(val);
                        if(hzValue != null && codeRow.equals(String.format("%d",hzValue.intValue()))){
                            beginCol = c;
                            break;
                        }
                    }
                }
            }
            else {
                if(headList!=null){
                    insertTab(preSheetName,headList);
                }
                preSheetName = sheetName;
                headList = new ArrayList<>();
            }
            for(int c = beginCol; c <= endCol; c++){
                int setp = 0;
                Map<String,String> colMap = new HashMap<>();
                Cell cell = sheet.getRow(lastRow).getCell(c);
                String val = cell!=null ? getCellValue(cell) : "";
                if(val == ""){
                    continue;
                }
                Float hzValue = getNumeric(val);
                if(hzValue != null) {
                    colMap.put("hzcode",String.format("%d",hzValue.intValue()));
                    groups.put(fix1,String.format("%d", hzValue.intValue() + 1));
                }
                else{
                    colMap.put("hzcode",val);
                }
                setp++;
                if(!"劳动力转移情".equals(fix1)){
                    cell = sheet.getRow(lastRow-1).getCell(c);
                    val = getCellValue(cell);
                    colMap.put("unitcode",val);
                    setp++;
                }
                else{
                    colMap.put("unitcode","人");
                }
                List<String> itemList = new ArrayList<>();
                for(int r = firstRow; r <= lastRow-setp; r++){
                    cell = sheet.getRow(r).getCell(c);
                    val = cell != null ? getCellValue(cell) : null;
                    if(val != null){
                        if(val != "") {
                            itemList.add(val);
                        }
                        else{
                            val = "□";
                            int size = headList.size();
                            if(size > 0){
                                Map<String,String> colMap1 = headList.get(size-1);
                                String item1 = colMap1.get("itemlist");
                                String[] arr = item1.split("▪");
                                Integer cindex = itemList.size();
                                if(arr.length > cindex){
                                    if(cindex == 0){
                                        val = arr[cindex];
                                    }
                                    else{
                                        Boolean compare = true;
                                        for(int a = 0; a < cindex; a++){
                                            String v1 = itemList.get(a);
                                            String v2 = arr[a];
                                            if(!v1.equals(v2)){
                                                compare = false;
                                                break;
                                            }
                                        }
                                        if(compare){
                                            val = arr[cindex];
                                        }
                                    }
                                }
                            }
                            itemList.add(val);
                        }
                    }
                }
                if(itemList.size() > 0) {
                    colMap.put("itemlist",String.join("▪", itemList));
                    List objList = Arrays.stream(itemList.toArray()).filter(v->{return !"□".equals(v);}).collect(Collectors.toList());
                    colMap.put("itemcode", String.join("▪", objList));
                    headList.add(colMap);
                }
            }
        }
        if(headList!=null){
            insertTab(preSheetName,headList);
        }
        return new FormResponse("导入成功！");
    }

    private void insertTab(String tabName,List<Map<String,String>> headList){
        RptTab tab = new RptTab();
        tab.preInsert();
        tab.setTabname(tabName);
        tab.setSysteminfoid("923000515782074368");
        rptTabMapper.insertSelective(tab);
        Integer iNum = 10;
        for(Map<String,String> head : headList){
            RptTabSetting setting = new RptTabSetting();
            setting.setId(IdGen.nextS());
            setting.setTabid(tab.getId());
            setting.setTypeid(0);
            setting.setItemcode(head.get("itemcode"));
            setting.setUnitcode(head.get("unitcode"));
            setting.setHzcode(head.get("hzcode"));
            setting.setOrderno(iNum);
            setting.setColalign("center");
            setting.setColwidth(100);
            iNum += 10;
            rptTabSettingMapper.insertSelective(setting);
        }
    }
    public static String getCellValue(Cell cell) {
        //noinspection Duplicates
        if (cell.getCellTypeEnum().equals(CellType.NUMERIC)) {
            return String.valueOf(cell.getNumericCellValue());
        } else if (cell.getCellTypeEnum().equals(CellType.STRING)) {
            return cell.getStringCellValue();
        } else if (cell.getCellTypeEnum().equals(CellType.BLANK)) {
            return "";
        }
        return "";
    }
    public static Float getNumeric(String str){
        Float hzValue = null;
        try{
            hzValue = Float.parseFloat(str);
        }catch (Exception e){}
        return hzValue;
    }
//    public static void main(String[] args) throws IOException {
//        String rptPath = buildPath("src/main/resources/static/ftl/2016年湖北农林牧渔业综合统计报表制度.xls");
//        FileInputStream fs = FileUtils.openInputStream(new File(rptPath));
//        Workbook wb = new HSSFWorkbook(fs);
//        List<Map<String,String>> headList = null;
//        for(Integer s = 0; s <= 21; s++){
//            Sheet sheet = wb.getSheetAt(s);
//            String sheetName = sheet.getSheetName();
//            Cell cell = sheet.getRow(0).getCell(1);
//            String rowString = getCellValue(cell);
//            String[] rowArr = rowString.split(",");
//            Integer firstRow = Integer.parseInt(rowArr[0]);
//            Integer beginCol = Integer.parseInt(rowArr[1]);
//            Integer endCol = Integer.parseInt(rowArr[2]);
//            headList = new ArrayList<>();
//            for(int c = beginCol; c <= endCol; c++){
//                Map<String,String> colMap = new HashMap<>();
//                List<String> itemList = new ArrayList<>();
//                for(int r = firstRow; r <= firstRow+5; r++){
//                    cell = sheet.getRow(r).getCell(c);
//                    String val = cell != null ? getCellValue(cell) : null;
//                    if(val != null){
//                        CellStyle style = cell.getCellStyle();
//                        BorderStyle borderStyle = style.getBorderBottomEnum();
//                        if(borderStyle != BorderStyle.THICK && borderStyle != BorderStyle.MEDIUM){
//                            break;
//                        }
//                        if(val != "") {
//                            Float hzValue = getNumeric(val);
//                            if(hzValue != null) {
//                                itemList.add(String.format("%d",hzValue.intValue()));
//                            }
//                            else {
//                                itemList.add(val);
//                            }
//                        }
//                        else{
//                            val = "□";
//                            int size = headList.size();
//                            if(size > 0){
//                                Map<String,String> colMap1 = headList.get(size-1);
//                                String item1 = colMap1.get("itemlist");
//                                String[] arr = item1.split("▪");
//                                Integer cindex = itemList.size();
//                                if(arr.length > cindex){
//                                    if(cindex == 0){
//                                        val = arr[cindex];
//                                    }
//                                    else{
//                                        Boolean compare = true;
//                                        for(int a = 0; a < cindex; a++){
//                                            String v1 = itemList.get(a);
//                                            String v2 = arr[a];
//                                            if(!v1.equals(v2)){
//                                                compare = false;
//                                                break;
//                                            }
//                                        }
//                                        if(compare){
//                                            val = arr[cindex];
//                                        }
//                                    }
//                                }
//                            }
//                            itemList.add(val);
//                        }
//                    }
//                }
//                if(itemList.size() > 0) {
//                    colMap.put("itemlist",String.join("▪", itemList));
//                    List objList = Arrays.stream(itemList.toArray()).filter(v->{return !"□".equals(v);}).collect(Collectors.toList());
//                    colMap.put("itemcode", String.join("▪", objList));
//                    headList.add(colMap);
//                }
//            }
//            ObjectMapper mapper = new ObjectMapper();
//            mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
//            System.out.println(String.format("========================%s=================================",sheetName));
//            System.out.println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(headList));
//        }
//    }
}
