package com.snjtjj.webapi;

import com.snjtjj.entity.Area;
import com.snjtjj.entity.Organization;
import com.snjtjj.service.AreaService;
import com.snjtjj.service.OrganizationService;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.FormResponse;
import com.snjtjj.vo.TreeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/area")
public class AreaAPI {
    @Autowired
    private AreaService areaService;

    /**
     * 获取所有的行政区划
     * @return
     */
    @GetMapping
    public TreeVo<Area> area() {
        return areaService.getTree();
    }

    /**
     * 获取所有的行政区划
     * @return
     */
    @GetMapping("/all")
    public List<Area> all() {
        return areaService.getAllList();
    }
}
