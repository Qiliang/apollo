package com.snjtjj.common.scheduling;

import com.snjtjj.entity.DirectRptRemindTask;
import com.snjtjj.service.AreaService;
import com.snjtjj.service.CompanyService;
import com.snjtjj.service.DirectRptRemindTaskService;
import com.snjtjj.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Component
public class Job {
    @Autowired
    private CompanyService companyService;
    @Autowired
    private AreaService areaService;
    @Autowired
    private DirectRptRemindTaskService directRptRemindTaskService;

    /**
     * 创建企业账号
     */
    @Scheduled(initialDelay = 3000, fixedRate = 60000)
    public void saveCompanyFillUser() {
        companyService.saveFillUser();
    }

    /**
     * 创建area账号
     */
    @Scheduled(initialDelay = 3000, fixedRate = 100000)
    public void saveAreaFillUser() {
        areaService.saveFillUser();
    }

    @Scheduled(cron = "0 0 1 * * ?")
//    @Scheduled(initialDelay = 3000, fixedRate = 10000)
    //每天凌晨1点执行
    public void sendTaskMsg() {
        Date today = new Date();
        SimpleDateFormat monthSimpleDateFormat = new SimpleDateFormat("M");
        SimpleDateFormat daySimpleDateFormat = new SimpleDateFormat("d");
        List<DirectRptRemindTask> list = directRptRemindTaskService.getTaskList();
        String day = daySimpleDateFormat.format(today);
        String month = monthSimpleDateFormat.format(today);
        for (DirectRptRemindTask directRptRemindTask : list) {
            //判断报送类型，如果是按month，判断月份和日期是否都相同，如果是day，判断日是否相同
            if ("year".equals(directRptRemindTask.getRemindType())) {
                //判断二月份最后一天
                if ("2".equals(month)) {
                    String monthLastDay = DateUtils.getLastDayByMonth(today);
                    if (monthLastDay.equals(day) && directRptRemindTask.getRemindDay() >= Integer.valueOf(monthLastDay)) {
                        System.out.println("2月份超过30号的提醒发送");
                    }

                } else if (month.equals(directRptRemindTask.getRemindMonth().toString()) && day.equals(directRptRemindTask.getRemindDay().toString())) {
                    System.out.println("添加报送消息");
                }
            } else if ("month".equals(directRptRemindTask.getRemindType())) {
                if ("2".equals(month)) {
                    String monthLastDay = DateUtils.getLastDayByMonth(today);
                    if (monthLastDay.equals(day) && directRptRemindTask.getRemindDay() >= Integer.valueOf(monthLastDay)) {
                        System.out.println("2月份超过30号的提醒发送");
                    }
                } else if (day.equals(directRptRemindTask.getRemindDay().toString())) {
                    System.out.println("添加报送消息");
                }
            }
        }
    }
}
