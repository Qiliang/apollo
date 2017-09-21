package com.snjtjj.utils;


import com.csvreader.CsvReader;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import freemarker.cache.FileTemplateLoader;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.output.FileWriterWithEncoding;

import java.io.*;
import java.nio.charset.Charset;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.apache.commons.codec.digest.MessageDigestAlgorithms.MD5;

public class RptImport {

    static int init = 0;
    static class TreeNode {
        public String iconCls = "x-fa fa-table";
        public String text;
        public String alias;
        public String itemid;
        public boolean leaf = true;
        public List<TreeNode> children;
        public TreeNode(){}
        public TreeNode(String text){
            this.text = text;
        }
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
            if(rootPath.toUpperCase().endsWith(".CSV")){
                ReadCSV(rootPath,node);
            }
            if(rootPath.toUpperCase().endsWith(".CSV")){
                ReadCSV(rootPath,node);
            }
            return;
        }
        node.children = new ArrayList<>();
        node.iconCls = "x-fa fa-folder-o";
        node.leaf = false;
        Arrays.stream(root.list()).forEach(dir -> {
            if(dir.startsWith(".") || dir.endsWith(".txt")) return;
            if(dir.toUpperCase().endsWith(".XLS")){
//                ReadXLS(rootPath+"/"+dir);
            }

            TreeNode child = new TreeNode(FilenameUtils.getBaseName(dir));
            node.children.add(child);
            listDir(rootPath+"/"+dir, child);
        });
    }

    static void ReadXLS(String path){
        System.out.println(path);
    }

    static void ReadCSV(String path,TreeNode node) {
        String appFile = FilenameUtils.getBaseName(path);
        String tplPath = buildPath("src/main/resources/static/data");
        String appPath = buildPath(String.format("src/main/resources/static/app/view/liShiShuju/%s.js",appFile));
        node.alias = String.format("Kits.view.liShiShuju.%s",appFile);
        node.itemid = Md5Utils.getMd5(node.alias);
        try {
            Map<String,Object> model = new HashMap<String,Object>();
            CsvReader csvReader = new CsvReader(path,',',Charset.forName("GBK"));
            csvReader.readHeaders();
            model.put("title",appFile);
            model.put("headers",csvReader.getHeaders());

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
}
