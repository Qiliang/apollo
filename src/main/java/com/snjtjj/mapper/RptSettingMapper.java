package com.snjtjj.mapper;

import com.snjtjj.entity.RptSetting;
import com.snjtjj.entity.RptSettingExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface RptSettingMapper {
    int countByExample(RptSettingExample example);

    int deleteByExample(RptSettingExample example);

    int deleteByPrimaryKey(String id);

    int insert(RptSetting record);

    int insertSelective(RptSetting record);

    List<RptSetting> selectByExample(RptSettingExample example);

    RptSetting selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") RptSetting record, @Param("example") RptSettingExample example);

    int updateByExample(@Param("record") RptSetting record, @Param("example") RptSettingExample example);

    int updateByPrimaryKeySelective(RptSetting record);

    int updateByPrimaryKey(RptSetting record);
}