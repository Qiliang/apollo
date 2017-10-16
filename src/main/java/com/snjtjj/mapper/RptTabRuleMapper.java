package com.snjtjj.mapper;

import com.snjtjj.entity.RptTabRule;
import com.snjtjj.entity.RptTabRuleExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface RptTabRuleMapper {
    int countByExample(RptTabRuleExample example);

    int deleteByExample(RptTabRuleExample example);

    int deleteByPrimaryKey(String id);

    int insert(RptTabRule record);

    int insertSelective(RptTabRule record);

    List<RptTabRule> selectByExample(RptTabRuleExample example);

    RptTabRule selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") RptTabRule record, @Param("example") RptTabRuleExample example);

    int updateByExample(@Param("record") RptTabRule record, @Param("example") RptTabRuleExample example);

    int updateByPrimaryKeySelective(RptTabRule record);

    int updateByPrimaryKey(RptTabRule record);
}