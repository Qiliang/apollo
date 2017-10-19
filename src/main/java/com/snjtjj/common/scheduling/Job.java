package com.snjtjj.common.scheduling;

import com.snjtjj.service.AreaService;
import com.snjtjj.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class Job {
    @Autowired
    private CompanyService companyService;
    @Autowired
    private AreaService areaService;

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

}
