package com.snjtjj.webapi;

import com.github.pagehelper.PageInfo;
import com.snjtjj.entity.Company;
import com.snjtjj.service.CompanyService;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.FormResponse;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.*;
import java.io.PrintWriter;

@RestController
@RequestMapping("/api/content")
public class ContentAPI {
@Value("upload.img.path")
private String uploadPath;

    @PostMapping("/saveOrUpdate")
    public FormResponse<String> save(HttpServletRequest request) {
        FormResponse formResponse = new FormResponse("保存成功！");
        return formResponse;
    }

    @PostMapping("/uploadFile")
    public void uploadFile(@RequestParam("upload") MultipartFile upload,HttpServletRequest request,HttpServletResponse response) throws IOException {
        boolean b = true;
        response.setCharacterEncoding("utf-8");
        String fullContentType = "text/html;charset=UTF-8";
        response.setContentType(fullContentType);
        PrintWriter out = response.getWriter();
        // CKEditor提交的很重要的一个参数
        String callback = request.getParameter("CKEditorFuncNum");
        String expandedName = ""; // 文件扩展名
        String uploadContentType = upload.getContentType();
        if (uploadContentType.equals("image/pjpeg")
                || uploadContentType.equals("image/jpeg")) {
            // IE6上传jpg图片的headimageContentType是image/pjpeg，而IE9以及火狐上传的jpg图片是image/jpeg
            expandedName = ".jpg";
        } else if (uploadContentType.equals("image/png")
                || uploadContentType.equals("image/x-png")) {
            // IE6上传的png图片的headimageContentType是"image/x-png"
            expandedName = ".png";
        } else if (uploadContentType.equals("image/gif")) {
            expandedName = ".gif";
        } else if (uploadContentType.equals("image/bmp")) {
            expandedName = ".bmp";
        } else {
            out.println("<script type=\"text/javascript\">");
            out.println("window.parent.CKEDITOR.tools.callFunction(" + callback
                    + ",''," + "'文件格式不正确（必须为.jpg/.gif/.bmp/.png文件）');");
            out.println("</script>");
            b = false;
        }
        if (upload.getSize() > 600 * 1024) {
            out.println("<script type=\"text/javascript\">");
            out.println("window.parent.CKEDITOR.tools.callFunction(" + callback
                    + ",''," + "'文件大小不得大于600k');");
            out.println("</script>");
            b = false;
        }

        if(b) {
            InputStream is = upload.getInputStream();
            //图片上传路径
            String fileName = java.util.UUID.randomUUID().toString(); // 采用时间+UUID的方式随即命名
            fileName += expandedName;
            File file = new File(uploadPath);
            if (!file.exists()) { // 如果路径不存在，创建
                file.mkdirs();
            }
            File toFile = new File(uploadPath, fileName);
            OutputStream os = new FileOutputStream(toFile);
            byte[] buffer = new byte[1024];
            int length = 0;
            while ((length = is.read(buffer)) > 0) {
                os.write(buffer, 0, length);
            }
            is.close();
            os.close();

            // 返回"图像"选项卡并显示图片  request.getContextPath()为web项目名
            out.println("<script type=\"text/javascript\">");
            out.println("window.parent.CKEDITOR.tools.callFunction(" + callback
                    + ",'" + request.getContextPath() + "/api/content/showImg?fileName=" + fileName + "','')");
            out.println("</script>");
        }
    }

    @RequestMapping(value = "/showImg", method = RequestMethod.GET)
    public void showImg(HttpServletRequest req,HttpServletResponse res) {
        res.setHeader("content-type", "image");
        try {
            String path = uploadPath+"/"+req.getParameter("fileName");
            res.getOutputStream().write(FileUtils.readFileToByteArray(new File(path)));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
