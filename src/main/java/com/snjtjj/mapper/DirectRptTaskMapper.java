package com.snjtjj.mapper;

import com.snjtjj.entity.DirectRptTask;
import com.snjtjj.entity.DirectRptTaskExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface DirectRptTaskMapper {
    int countByExample(DirectRptTaskExample example);

    int deleteByExample(DirectRptTaskExample example);

    int deleteByPrimaryKey(String id);

    int insert(DirectRptTask record);

    int insertSelective(DirectRptTask record);

    List<DirectRptTask> selectByExample(DirectRptTaskExample example);

    DirectRptTask selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") DirectRptTask record, @Param("example") DirectRptTaskExample example);

    int updateByExample(@Param("record") DirectRptTask record, @Param("example") DirectRptTaskExample example);

    int updateByPrimaryKeySelective(DirectRptTask record);

    int updateByPrimaryKey(DirectRptTask record);

    List<DirectRptTask> selectListByUserID(@Param("name") String name,@Param("xzqhIds") String xzqh_ids,@Param("ids") String ids);
}