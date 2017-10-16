package com.snjtjj.mapper;

import com.snjtjj.entity.RoleSystem;
import com.snjtjj.entity.RoleSystemExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface RoleSystemMapper {
    int countByExample(RoleSystemExample example);

    int deleteByExample(RoleSystemExample example);

    int deleteByPrimaryKey(String id);

    int insert(RoleSystem record);

    int insertSelective(RoleSystem record);

    List<RoleSystem> selectByExample(RoleSystemExample example);

    RoleSystem selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") RoleSystem record, @Param("example") RoleSystemExample example);

    int updateByExample(@Param("record") RoleSystem record, @Param("example") RoleSystemExample example);

    int updateByPrimaryKeySelective(RoleSystem record);

    int updateByPrimaryKey(RoleSystem record);
}