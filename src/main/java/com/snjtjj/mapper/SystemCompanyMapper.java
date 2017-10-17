package com.snjtjj.mapper;

import com.snjtjj.entity.SystemCompany;
import com.snjtjj.entity.SystemCompanyExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
public interface SystemCompanyMapper {
    int countByExample(SystemCompanyExample example);

    int deleteByExample(SystemCompanyExample example);

    int deleteByPrimaryKey(String id);

    int insert(SystemCompany record);

    int insertSelective(SystemCompany record);

    List<SystemCompany> selectByExample(SystemCompanyExample example);

    SystemCompany selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") SystemCompany record, @Param("example") SystemCompanyExample example);

    int updateByExample(@Param("record") SystemCompany record, @Param("example") SystemCompanyExample example);

    int updateByPrimaryKeySelective(SystemCompany record);

    int updateByPrimaryKey(SystemCompany record);
}