package com.snjtjj.service;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.common.utils.ResponseException;
import com.snjtjj.entity.*;
import com.snjtjj.entity.base.BaseEntity;
import com.snjtjj.mapper.RptTabCollectMapper;
import com.snjtjj.mapper.RptTabCollectMapper;
import com.snjtjj.mapper.RptTabMapper;
import com.snjtjj.mapper.RptTabSettingMapper;
import com.snjtjj.utils.IdGen;
import com.snjtjj.utils.StringUtils;
import com.snjtjj.vo.BaseSearchListVo;
import com.snjtjj.vo.BaseSearchVo;
import com.snjtjj.vo.ColumnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.*;

@Service
public class RptTabCollectService {

    private ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    private RptTabCollectMapper rptTabCollectMapper;

    @Autowired
    private RptTabSettingMapper rptTabSettingMapper;

    public List<RptTabCollect> findSingleTable(String tabcode, String usercode) {
        RptTabCollectExample repotExample = new RptTabCollectExample();
        repotExample.createCriteria()
                .andTabidEqualTo(tabcode)
                .andUsercodeEqualTo(usercode);
        List<RptTabCollect> list = rptTabCollectMapper.selectByExample(repotExample);
        return list;
    }

    @Transactional
    public void putSingleTable(List<RptTabCollect> collectList) {
        for (RptTabCollect collect : collectList) {
            String id = collect.getId();
            if (id == null || id.toUpperCase().startsWith("EXT")) {
                collect.setId(IdGen.nextS());
                rptTabCollectMapper.insertSelective(collect);
            } else {
                rptTabCollectMapper.updateByPrimaryKeySelective(collect);
            }
        }
    }

    public List<ColumnVo<RptTabSetting>> findColumnsByTable(String tableId){
        List<ColumnVo<RptTabSetting>> columnVoList = new ArrayList<>();
        RptTabSettingExample rptTabSettingExample = new RptTabSettingExample();
        rptTabSettingExample.createCriteria().andTabidEqualTo(tableId);
        rptTabSettingExample.setOrderByClause("orderno");
        List<RptTabSetting> rptTabSettingList = rptTabSettingMapper.selectByExample(rptTabSettingExample);
        rptTabSettingList.forEach(item -> {
            if (StringUtils.isNotBlank(item.getHzcode()) && StringUtils.isNumeric(item.getHzcode())) {
                ColumnVo<RptTabSetting> columnVo = new ColumnVo<>();
                columnVo.setData(item);
                columnVo.setText(item.getItemcode() + "【"+item.getHzcode()+"】" + "（" + item.getUnitcode() + "）");
                columnVo.setDataIndex("code"+item.getHzcode());
                columnVoList.add(columnVo);
            }
        });
        return columnVoList;
    }

    public PageInfo findListByTable(String tableId, String searchJson, String fieldJson,Integer page,Integer limit) {
        List<BaseSearchVo> baseSearchVoList = null;
        String searchList = null;
        if(StringUtils.isNotBlank(searchJson)) {
            JavaType javaType = objectMapper.getTypeFactory().constructParametricType(List.class, BaseSearchVo.class);
            try {
                baseSearchVoList = objectMapper.readValue(searchJson, javaType);
            } catch (IOException e) {
                e.printStackTrace();
                throw new ResponseException("服务器异常！", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            StringBuilder query = new StringBuilder();
            for(BaseSearchVo baseSearchVo:baseSearchVoList){
                query.append(" ");
                query.append(baseSearchVo.getLogical());
                query.append(" ");
                query.append(baseSearchVo.getDataIndex());
                query.append(baseSearchVo.getUnit());
                query.append(baseSearchVo.getNumber());
                query.append(" ");
            }
            if(StringUtils.isNotBlank(query)){
                searchList = query.toString();
            }
        }
        List<ColumnVo<RptTabSetting>> columnVoList = findColumnsByTable(tableId);
        Set<String> sqlList = new LinkedHashSet<>();
        columnVoList.forEach(item -> {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("sum(case hzcode when '");
            stringBuilder.append(item.getData().getHzcode());
            stringBuilder.append("' then num1 else 0 end) as ");
            stringBuilder.append(item.getDataIndex());
            sqlList.add(stringBuilder.toString());
        });
        String fieldSql = StringUtils.join(sqlList, ",");
        PageHelper.startPage(page, limit);
        List<Map<String,Object>> data = rptTabCollectMapper.selectByTableId(fieldSql,tableId,searchList);
        PageInfo pageInfo = new PageInfo(data);
        return pageInfo;
    }
}
