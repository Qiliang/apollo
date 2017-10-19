package com.snjtjj.mapper;

import com.snjtjj.entity.FillUser;
import com.snjtjj.entity.FillUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface FillUserMapper {
    int countByExample(FillUserExample example);

    int deleteByExample(FillUserExample example);

    int deleteByPrimaryKey(String id);

    int insert(FillUser record);

    int insertSelective(FillUser record);

    List<FillUser> selectByExample(FillUserExample example);

    FillUser selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") FillUser record, @Param("example") FillUserExample example);

    int updateByExample(@Param("record") FillUser record, @Param("example") FillUserExample example);

    int updateByPrimaryKeySelective(FillUser record);

    int updateByPrimaryKey(FillUser record);

    FillUser selectByLoginUserName(String loginUserName);
}