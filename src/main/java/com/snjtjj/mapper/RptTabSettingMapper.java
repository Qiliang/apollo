package com.snjtjj.mapper;

import com.snjtjj.entity.RptTabSetting;
import com.snjtjj.entity.RptTabSettingExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface RptTabSettingMapper {
    int countByExample(RptTabSettingExample example);

    int deleteByExample(RptTabSettingExample example);

    int deleteByPrimaryKey(String id);

    int insert(RptTabSetting record);

    int insertSelective(RptTabSetting record);

    List<RptTabSetting> selectByExample(RptTabSettingExample example);

    RptTabSetting selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") RptTabSetting record, @Param("example") RptTabSettingExample example);

    int updateByExample(@Param("record") RptTabSetting record, @Param("example") RptTabSettingExample example);

    int updateByPrimaryKeySelective(RptTabSetting record);

    int updateByPrimaryKey(RptTabSetting record);
}