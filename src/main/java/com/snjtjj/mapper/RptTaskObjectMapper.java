package com.snjtjj.mapper;

import com.snjtjj.entity.RptTaskObject;
import com.snjtjj.entity.RptTaskObjectExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface RptTaskObjectMapper {
    int countByExample(RptTaskObjectExample example);

    int deleteByExample(RptTaskObjectExample example);

    int deleteByPrimaryKey(String id);

    int insert(RptTaskObject record);

    int insertSelective(RptTaskObject record);

    List<RptTaskObject> selectByExample(RptTaskObjectExample example);

    RptTaskObject selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") RptTaskObject record, @Param("example") RptTaskObjectExample example);

    int updateByExample(@Param("record") RptTaskObject record, @Param("example") RptTaskObjectExample example);

    int updateByPrimaryKeySelective(RptTaskObject record);

    int updateByPrimaryKey(RptTaskObject record);
}