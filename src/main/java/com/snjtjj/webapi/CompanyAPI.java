package com.snjtjj.webapi;

import com.github.pagehelper.PageInfo;
import com.snjtjj.entity.Area;
import com.snjtjj.entity.Company;
import com.snjtjj.service.AreaService;
import com.snjtjj.service.CompanyService;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.FormResponse;
import com.snjtjj.vo.TreeVo;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

@RestController
@RequestMapping("/api/company")
public class CompanyAPI {
    @Autowired
    private CompanyService companyService;

    /**
     * 获取所有的企业信息
     *
     * @return
     */
    @GetMapping
    public PageInfo company(String xxmc, String zzjgdm, Integer page, Integer limit) {
        return companyService.allCompany(xxmc, zzjgdm, page, limit);
    }

    @PostMapping("/saveOrUpdate")
    public FormResponse<String> save(Company company) {
        if (StringUtils.isNotBlank(company.getId())) {
            companyService.edit(company);
        } else {
            companyService.save(company);
        }
        FormResponse formResponse = new FormResponse("保存成功！");
        return formResponse;
    }

    @GetMapping("/getCompanyById")
    public FormResponse<Company> getCompanyById(@RequestParam(value = "id", required = false) String id) {
        Company company = companyService.getCompanyById(id);
        FormResponse<Company> formResponse = new FormResponse(company);
        return formResponse;
    }

    @PostMapping("/deleteById")
    public FormResponse<String> deleteById(@RequestParam(value = "id", required = false) String id) {
        companyService.delete(id);
        FormResponse formResponse = new FormResponse("删除成功！");
        return formResponse;
    }

    @PostMapping("/uploadFile")
    public FormResponse<String> uploadFile(@RequestParam("file") MultipartFile file) {
        companyService.uploadFile(file);
        FormResponse formResponse = new FormResponse("导入成功！");
        return formResponse;
    }

    @RequestMapping(value = "/downloadModel", method = RequestMethod.GET)
    public void downloadModel(HttpServletRequest req,HttpServletResponse res) {
        String fileName = "model.zip";
        res.setHeader("content-type", "application/octet-stream");
        res.setContentType("application/octet-stream");
        res.setHeader("Content-Disposition", "attachment;filename=" + fileName);
        try {
            String path = ClassUtils.getDefaultClassLoader().getResource("").getPath();;
            path = path+"//export_model//qyxx.zip";
            res.getOutputStream().write(FileUtils.readFileToByteArray(new File(path)));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
