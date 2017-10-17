package com.snjtjj.mapper;

import com.snjtjj.entity.RptTabCollect;
import com.snjtjj.entity.RptTabCollectExample;
import java.util.List;

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
}