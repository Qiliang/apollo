package com.snjtjj.utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by bozhou on 2017/10/20.
 */
public class DateUtils {

    public static String getLastDayByMonth(Date today){
        Calendar calendar = Calendar.getInstance();
        // 设置时间,当前时间不用设置
         calendar.setTime(today);
        // 设置日期为本月最大日期
        calendar.set(Calendar.DATE, calendar.getActualMaximum(Calendar.DATE));
        // 打印
        DateFormat format = new SimpleDateFormat("dd");
        return format.format(calendar.getTime());
    }
}
