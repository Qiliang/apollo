package com.snjtjj.mapper;

import com.snjtjj.entity.RptTabCollect;
import com.snjtjj.entity.RptTabCollectExample;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

public interface RptTabCollectMapper {
    int countByExample(RptTabCollectExample example);

    int deleteByExample(RptTabCollectExample example);

    int deleteByPrimaryKey(String id);

    int insert(RptTabCollect record);

    int insertSelective(RptTabCollect record);

    List<RptTabCollect> selectByExample(RptTabCollectExample example);

    RptTabCollect selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") RptTabCollect record, @Param("example") RptTabCollectExample example);

    int updateByExample(@Param("record") RptTabCollect record, @Param("example") RptTabCollectExample example);

    int updateByPrimaryKeySelective(RptTabCollect record);

    int updateByPrimaryKey(RptTabCollect record);

    List<RptTabCollect> selectGroupByTab(@Param("tabid") String tabid);

    List<RptTabCollect> selectTabByTabCode(@Param("tabid") String tabid,@Param("hzcode") String hzcode,@Param("tabcode") String tabcode);

    List<Map<String,Object>> selectByTableId(@Param("fieldSql") String fieldSql,@Param("tabid") String tabid,@Param("searchList") String searchList,@Param("xzqhIds") String xzqhIds,@Param("ids") String ids);
}