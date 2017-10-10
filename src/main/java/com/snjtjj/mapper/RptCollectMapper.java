package com.snjtjj.mapper;

import com.snjtjj.entity.RptCollect;
import com.snjtjj.entity.RptCollectExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface RptCollectMapper {
    int countByExample(RptCollectExample example);

    int deleteByExample(RptCollectExample example);

    int deleteByPrimaryKey(String id);

    int insert(RptCollect record);

    int insertSelective(RptCollect record);

    List<RptCollect> selectByExample(RptCollectExample example);

    RptCollect selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") RptCollect record, @Param("example") RptCollectExample example);

    int updateByExample(@Param("record") RptCollect record, @Param("example") RptCollectExample example);

    int updateByPrimaryKeySelective(RptCollect record);

    int updateByPrimaryKey(RptCollect record);
}