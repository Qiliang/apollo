package com.snjtjj.webapi;

import com.github.pagehelper.PageInfo;
import com.snjtjj.entity.Company;
import com.snjtjj.service.CompanyService;
import com.snjtjj.service.ContentService;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.FormResponse;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api/app")
public class AppAPI {
    @Autowired
    private CompanyService companyService;
    @Autowired
    private ContentService contentService;

    /**
     * 获取所有的企业信息
     *
     * @return
     */
    @GetMapping("/company")
    public PageInfo company(String xxmc, String zzjgdm, Integer page, Integer limit) {
        return companyService.allCompany(xxmc, zzjgdm, page, limit);
    }


    @GetMapping("/content")
    public PageInfo content(String title,Integer page, Integer limit) {
        return contentService.allContent(title, page, limit);
    }
}
