package com.snjtjj.mapper;

import com.snjtjj.entity.Area;
import com.snjtjj.entity.AreaExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
@Mapper
public interface AreaMapper {
    int countByExample(AreaExample example);

    int deleteByExample(AreaExample example);

    int deleteByPrimaryKey(String id);

    int insert(Area record);

    int insertSelective(Area record);

    List<Area> selectByExample(AreaExample example);

    Area selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") Area record, @Param("example") AreaExample example);

    int updateByExample(@Param("record") Area record, @Param("example") AreaExample example);

    int updateByPrimaryKeySelective(Area record);

    int updateByPrimaryKey(Area record);
}