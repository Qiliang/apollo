package com.snjtjj.mapper;

import com.snjtjj.entity.RptTab;
import com.snjtjj.entity.RptTabExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

public interface RptTabMapper {
    int countByExample(RptTabExample example);

    int deleteByExample(RptTabExample example);

    int deleteByPrimaryKey(String id);

    int insert(RptTab record);

    int insertSelective(RptTab record);

    List<RptTab> selectByExample(RptTabExample example);

    RptTab selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") RptTab record, @Param("example") RptTabExample example);

    int updateByExample(@Param("record") RptTab record, @Param("example") RptTabExample example);

    int updateByPrimaryKeySelective(RptTab record);

    int updateByPrimaryKey(RptTab record);
}