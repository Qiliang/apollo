package com.snjtjj.utils;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.stream.Collectors;

/**
 * Created by XQL on 2017/9/12.
 */
public class CSV {

    public static void main(String[] args) {
        File dir = new File("C:\\Users\\XQL\\Desktop\\农业");
        Arrays.stream(dir.list((d, name) -> name.endsWith(".csv"))).forEach(s -> {
            String abs = dir.getAbsoluteFile() + "/" + s;
            try {

                FileUtils.writeLines(new File(abs + "1"), "GB2312", FileUtils.readLines(new File(abs), "GB2312").stream().map(line ->
                        "[" + String.join(",", Arrays.stream(line.split(",")).map(p -> "'" + p + "'").collect(Collectors.toList())) + "],"
                ).collect(Collectors.toList()));

            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }
}
