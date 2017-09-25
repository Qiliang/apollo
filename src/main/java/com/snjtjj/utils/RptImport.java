package com.snjtjj.utils;


import com.csvreader.CsvReader;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.apache.commons.collections4.IteratorUtils;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.output.FileWriterWithEncoding;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;

import java.beans.Transient;
import java.io.*;
import java.nio.charset.Charset;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;


public class RptImport {

    static class TreeNode {
        public String iconCls = "x-fa fa-table";
        public String text;
        public String alias;
        public String itemid;
        public boolean leaf = true;
        public List<TreeNode> children;
        public String parent;
        public TreeNode(){}
        public TreeNode(String text){
            this.text = text;
        }
    }
    static class NavScan {
        public CSVD.Column title;
        public CSVD.Column header;
        public CSVD.Column field;
        public CSVD.Column data;
    }
    public static String buildPath(String path){
        File directory = new File("");
        String fullPath = null;
        try{
            fullPath = directory.getAbsolutePath()+"/"+path;
        }catch (Exception e){}
        return fullPath;
    }
    public static void main(String[] args) throws IOException {
        TreeNode root = new TreeNode(".");
        String rootPath = buildPath("src/main/resources/static/rpt");
        String jsonPath = buildPath("src/main/resources/static/data/path.json");
        listDir(rootPath,root);

        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        String data = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(root);
        FileWriterWithEncoding writer = new FileWriterWithEncoding(jsonPath, Charset.defaultCharset());
        writer.write(data);
        writer.close();
    }

    static void listDir(String rootPath,TreeNode node){
        File root = new File(rootPath);
        if(root.isFile() || root.list() == null) {
            if(rootPath.toUpperCase().endsWith(".XLS")){
                if(node.parent.equals("服务业上报数据")){
                    ReadXLS(rootPath,node);
                }
            }
//            if(rootPath.toUpperCase().endsWith(".CSV")){
//                ReadCSV(rootPath,node);
//            }
            return;
        }
        node.children = new ArrayList<>();
        node.iconCls = "x-fa fa-folder-o";
        node.leaf = false;
        Arrays.stream(root.list()).forEach(dir -> {
            if(dir.startsWith(".") || dir.endsWith(".txt")) return;
            TreeNode child = new TreeNode(FilenameUtils.getBaseName(dir));
            child.parent = node.text;
            node.children.add(child);
            listDir(rootPath+"/"+dir, child);
        });
    }

    static void ReadXLS(String path,TreeNode node) {
        Map<String,Object> model = new HashMap<String,Object>();
        FileInputStream fs = null;
        try {
            fs = FileUtils.openInputStream(new File(path));
        } catch (IOException e) {
            e.printStackTrace();
        }
        Workbook wb = null;
        try {
            wb = new HSSFWorkbook(fs);
        } catch (IOException e) {
            e.printStackTrace();
        }
        NavScan scan = ScanXLS(wb);
        node.text = scan.title.text;
        model.put("title",scan.title.text);
        model.put("fields",readFileds(wb,scan.field.row1));

        List<CSVD.Column> columns = readColumns(wb,scan.header.row1,scan.header.row2,scan.header.cell1);
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        try {
            model.put("headers",mapper.writerWithDefaultPrettyPrinter().writeValueAsString(columns));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        model.put("lines",readLines(wb,scan.data.row1,scan.data.row2,scan.data.cell1));

        try {
            fs.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        OutputFtl(path,node,model);
    }


    static void ReadCSV(String path,TreeNode node) {
        Map<String,Object> model = new HashMap<String,Object>();
        try {
            CsvReader csvReader = new CsvReader(path,',',Charset.forName("GBK"));
            csvReader.readHeaders();
            String appFile = FilenameUtils.getBaseName(path);
            model.put("title",appFile);
            model.put("fields",Arrays.stream(csvReader.getHeaders()).collect(Collectors.toList()));

            List<CSVD.Column> columns = Arrays.stream(csvReader.getHeaders()).map(v -> {
                String text = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(80),v);
                return new CSVD.Column(text,80,v);
            }).collect(Collectors.toList());
            ObjectMapper mapper = new ObjectMapper();
            mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
            String data = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(columns);
            model.put("headers",data);

            List<String> readLines = new ArrayList<>();
            while (csvReader.readRecord()){
                List<String> rawLine = new ArrayList<>();
                Arrays.stream(csvReader.getHeaders()).forEach(x ->{
                    try {
                        rawLine.add(String.format("'%s'",csvReader.get(x)));
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                });
                readLines.add(String.join(",",rawLine));
            }
            model.put("lines",readLines);
        } catch (IOException e) {
            e.printStackTrace();
        }
        OutputFtl(path,node,model);
    }

    static void OutputFtl(String path,TreeNode node,Map<String,Object> model){
        String tplPath = buildPath("src/main/resources/static/data");
        String appPath = buildPath(String.format("src/main/resources/static/app/view/liShiShuju/%s.js",node.text));
        node.alias = String.format("Kits.view.liShiShuju.%s",node.text);
        node.itemid = Md5Utils.getMd5(node.alias);
        try {
            CsvReader csvReader = new CsvReader(path,',',Charset.forName("GBK"));
            csvReader.readHeaders();
            Configuration cfg = new Configuration();
            cfg.setEncoding(Locale.getDefault(), "utf-8");
            cfg.setDirectoryForTemplateLoading(new File(tplPath));
            BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(appPath),"UTF-8"));
            try {
                Template template = cfg.getTemplate("CSVTemplate.ftl");
                template.process(model,writer);
            } catch (TemplateException e) {
                e.printStackTrace();
            }
            writer.flush();
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    static List<String> readFileds(Workbook wb,int beginRow){
        List<String> fields = new ArrayList<>();
        Sheet sheet = wb.getSheetAt(0);
        List<Row> rows = IteratorUtils.toList(sheet.rowIterator());
        Row row = rows.get(beginRow);
        IteratorUtils.toList(row.cellIterator()).forEach(cell -> {
            String v = CSVD.value(cell);
            if ("BLANK".equals(v)) return;
            fields.add(v);
        });
        return fields;
    }
    static List<String> readLines(Workbook wb,int beginRow,int endRow,int beginCol){
        List<String> lines = new ArrayList<>();
        Sheet sheet = wb.getSheetAt(0);
        List<Row> rows = IteratorUtils.toList(sheet.rowIterator());
        for (int i = beginRow; i < endRow; i++) {
            Row row = rows.get(i);
            List<Cell> cells = IteratorUtils.toList(row.cellIterator());
            List<String> rowList = new ArrayList<>();
            for(int j = beginCol; j < cells.size(); j++){
                Cell cell = cells.get(j);
                rowList.add(String.format("'%s'",valueFl(cell)));
            }
            lines.add(String.join(",",rowList));
        }
        return lines;
    }
    static String valueFl(Cell cell) {
        if (cell.getCellTypeEnum().equals(CellType.NUMERIC)) {
            return String.valueOf(cell.getNumericCellValue());
        } else if (cell.getCellTypeEnum().equals(CellType.STRING)) {
            return cell.getStringCellValue();
        } else if (cell.getCellTypeEnum().equals(CellType.BLANK)) {
            return "";
        }
        return "";
    }
    static List<CSVD.Column> readColumns(Workbook wb,int beginRow,int endRow,int beginCol){
        Sheet sheet = wb.getSheetAt(0);
        List<CSVD.Column> columns = new ArrayList<>();
        List<CSVD.Column> columnFlats = new ArrayList<>();
        List<Row> rows = IteratorUtils.toList(sheet.rowIterator());
        for (int i = beginRow; i <= endRow; i++) {
            Row row = rows.get(i);
            IteratorUtils.toList(row.cellIterator()).forEach(cell -> {
                String v = CSVD.value(cell);
                if ("BLANK".equals(v)) return;
                Optional<CellRangeAddress> regionOptional = sheet.getMergedRegions().stream().filter(r -> r.isInRange(cell)).findAny();
                CSVD.Column column;
                if (regionOptional.isPresent()) {
                    CellRangeAddress region = regionOptional.get();
                    Integer colspan = region.getLastRow() - region.getFirstRow();
                    String labtext = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(colspan * 22 + 22 + colspan*13),v);
                    column = new CSVD.Column(region.getFirstRow(), region.getFirstColumn(), region.getLastRow(), region.getLastColumn(), labtext);
                }
                else {
                    String labtext = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22),v);
                    column = new CSVD.Column(cell.getRowIndex(), cell.getColumnIndex(), cell.getRowIndex(), cell.getColumnIndex(), labtext);
                    if(beginCol == cell.getColumnIndex()){
                        column.setWidth(120);
                    }
                    else {
                        column.setWidth(60);
                    }
                }
                column.setDataIndex(v);
                List<CSVD.Column> parents = columnFlats.stream().filter(c -> c.getRow2() + 1 == cell.getRowIndex()).collect(Collectors.toList());
                if (parents.size() > 0) {
                    CSVD.Column last = null;
                    for (int j = 0; j < parents.size(); j++) {
                        CSVD.Column c1 = parents.get(j);
                        if (c1.getCell1() <= column.getCell1() && c1.getCell2() >= column.getCell2()) {
                            last = c1;
                            break;
                        }
                    }
                    if(last != null) {
                        if (last.getColumns() == null) {
                            last.setColumns(new ArrayList<>());
                        }
                        last.setWidth(null);
                        last.setDataIndex(null);
                        last.getColumns().add(column);
                    }
                } else {
                    columns.add(column);
                }
                columnFlats.add(column);
            });
        }
        return columns;
    }
    static NavScan ScanXLS(Workbook wb){
        NavScan scan = new NavScan();
        List<String> candidate = new ArrayList<String>(){{add("指 标 名 称"); add("地 区");add("指标");add("组织机构代码");add("全          省");add("代码");}};;
        Sheet sheet = wb.getSheetAt(0);
        Arrays.stream(IteratorUtils.toArray(sheet.rowIterator())).forEach(r ->{
            Row row = (Row)r;
            Arrays.stream(IteratorUtils.toArray(row.cellIterator())).forEach(c -> {
                Cell cell = (Cell)c;
                String v = CSVD.value(cell);
                if ("BLANK".equals(v)) return;
                if(scan.header == null && scan.title == null){
                    scan.title = new CSVD.Column();
                    scan.title.text = v;
                }
                if(scan.field == null && scan.header == null){
                    if(candidate.contains(v)){
                        CSVD.Column header = new CSVD.Column();
                        header.row1 = cell.getRowIndex();
                        header.row2 = cell.getRowIndex();
                        header.cell1 = cell.getColumnIndex();
                        scan.header = header;

                        CSVD.Column field = new CSVD.Column();
                        field.row1 = cell.getRowIndex();
                        field.cell1 = cell.getColumnIndex();
                        scan.field = field;

                        CSVD.Column data = new CSVD.Column();
                        data.row1 = field.row1+1;
                        data.row2 = field.row1+1;
                        data.cell1 = cell.getColumnIndex();
                        scan.data = data;
                    }
                }
                if("甲".equals(v) && scan.header != null){
                    scan.header.row2 = cell.getRowIndex();
                    scan.field.row1 = cell.getRowIndex();
                    scan.data.row1 = cell.getRowIndex()+1;
                    scan.data.row2 = cell.getRowIndex()+1;
                }
                if(scan.data != null){
                    scan.data.row2 = cell.getRowIndex();
                }
            });
        });
        return scan;
    }
}
