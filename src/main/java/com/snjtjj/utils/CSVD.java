package com.snjtjj.utils;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.collections4.IteratorUtils;
import org.apache.commons.io.FileUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;

import java.beans.Transient;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class CSVD {


//    public static void main(String[] args) {
//        File dir = new File("C:\\Users\\XQL\\Desktop\\农业");
//        Arrays.stream(dir.list((d, name) -> name.endsWith(".csv"))).forEach(s -> {
//            String abs = dir.getAbsoluteFile() + "/" + s;
//            try {
//
//                FileUtils.writeLines(new File(abs + "1"), "GB2312", FileUtils.readLines(new File(abs), "GB2312").stream().map(line ->
//                        "[" + String.join(",", Arrays.stream(line.split(",")).map(p -> "'" + p + "'").collect(Collectors.toList())) + "],"
//                ).collect(Collectors.toList()));
//
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        });
//    }

    public static class Column {

        int row1;
        int cell1;
        int row2;
        int cell2;
        String text;
        Integer width;
        String dataIndex;
        List<Column> columns;

        public Column(int row1, int cell1, int row2, int cell2, String text) {
            this.row1 = row1;
            this.cell1 = cell1;
            this.row2 = row2;
            this.cell2 = cell2;
            this.text = text;
            this.width = null;
        }
        public Column(String text,int width,String dataIndex) {
            this.text = text;
            this.width = width;
            this.dataIndex = dataIndex;
        }
        public Column() {
        }

        public List<Column> getColumns() {
            return columns;
        }

        public void setColumns(List<Column> columns) {
            this.columns = columns;
        }

        @Transient
        public int getRow1() {
            return row1;
        }

        public void setRow1(int row1) {
            this.row1 = row1;
        }

        @Transient
        public int getCell1() {
            return cell1;
        }

        public void setCell1(int cell1) {
            this.cell1 = cell1;
        }

        @Transient
        public int getRow2() {
            return row2;
        }

        public void setRow2(int row2) {
            this.row2 = row2;
        }

        @Transient
        public int getCell2() {
            return cell2;
        }

        public void setCell2(int cell2) {
            this.cell2 = cell2;
        }


        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }

        public Integer getWidth() {
            return width;
        }

        public void setWidth(Integer width) {
            this.width = width;
        }

        public String getDataIndex() {
            return dataIndex;
        }

        public void setDataIndex(String dataIndex) {
            this.dataIndex = dataIndex;
        }
    }

    public static void main(String[] args) throws IOException {
        FileInputStream fs = FileUtils.openInputStream(new File("/Users/hadoop/Downloads/2016年农村统计年报汇总表.xls"));
        Workbook wb = new HSSFWorkbook(fs); //or new HSSFWorkbook();
        Sheet sheet = wb.getSheetAt(27);
        List<Column> columns = new ArrayList<>();
        List<Column> columnFlats = new ArrayList<>();
        List<Row> rows = IteratorUtils.toList(sheet.rowIterator());


        for (int i = 3; i < 10; i++) {
//            System.out.println("=====================================");
            Row row = rows.get(i);
            //System.out.println(row.getPhysicalNumberOfCells());
            IteratorUtils.toList(row.cellIterator()).forEach(cell -> {
                String v = value(cell);
                if ("BLANK".equals(v)) return;
                Optional<CellRangeAddress> regionOptional = sheet.getMergedRegions().stream().filter(r -> r.isInRange(cell)).findAny();
                Column column;
                if (regionOptional.isPresent()) {
                    CellRangeAddress region = regionOptional.get();
                    Integer colspan = region.getLastRow() - region.getFirstRow();
                    String labtext = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(colspan * 22 + 22 + colspan*13),v);
                    column = new Column(region.getFirstRow(), region.getFirstColumn(), region.getLastRow(), region.getLastColumn(), labtext);
                } else {
                    String labtext = String.format("<div style='white-space:pre-line;height:%spx'>%s</div>", String.valueOf(22),v);
                    column = new Column(cell.getRowIndex(), cell.getColumnIndex(), cell.getRowIndex(), cell.getColumnIndex(), labtext);
                    column.setWidth(60);
                }
//                System.out.println(String.format("%s,%s  %s,%s  %s", column.getRow1(), column.getCell1(), column.getRow2(), column.getCell2(), column.getText()));

                List<Column> parents = columnFlats.stream().filter(c -> c.getRow2() + 1 == cell.getRowIndex()).collect(Collectors.toList());
                if (parents.size() > 0) {
                    Column last = null;
                    for (int j = 0; j < parents.size(); j++) {
                        Column c1 = parents.get(j);
                        if (c1.getCell1() <= column.getCell1() && c1.getCell2() >= column.getCell2()) {
                            last = c1;
                            break;

                        }
                    }
                    if(last != null) {
                        if (last.getColumns() == null) last.setColumns(new ArrayList<>());
                        last.setWidth(null);
                        last.getColumns().add(column);
                    }
                } else {
                    columns.add(column);
                }
                columnFlats.add(column);
                //System.out.println(v);
            });
        }


        fs.close();
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        System.out.println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(columns));

    }

    public static String value(Cell cell) {
        if (cell.getCellTypeEnum().equals(CellType.NUMERIC)) {
            return String.valueOf(cell.getNumericCellValue());
        } else if (cell.getCellTypeEnum().equals(CellType.STRING)) {
            return cell.getStringCellValue();
        } else if (cell.getCellTypeEnum().equals(CellType.BLANK)) {
            return "BLANK";
        }
        return "";
    }


}
