package com.snjtjj.mapper;

import com.snjtjj.entity.DirectRptRemindTask;
import com.snjtjj.entity.DirectRptRemindTaskExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface DirectRptRemindTaskMapper {
    int countByExample(DirectRptRemindTaskExample example);

    int deleteByExample(DirectRptRemindTaskExample example);

    int deleteByPrimaryKey(String id);

    int insert(DirectRptRemindTask record);

    int insertSelective(DirectRptRemindTask record);

    List<DirectRptRemindTask> selectByExample(DirectRptRemindTaskExample example);

    DirectRptRemindTask selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") DirectRptRemindTask record, @Param("example") DirectRptRemindTaskExample example);

    int updateByExample(@Param("record") DirectRptRemindTask record, @Param("example") DirectRptRemindTaskExample example);

    int updateByPrimaryKeySelective(DirectRptRemindTask record);

    int updateByPrimaryKey(DirectRptRemindTask record);
}