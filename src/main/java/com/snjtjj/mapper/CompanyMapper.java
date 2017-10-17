package com.snjtjj.mapper;

import com.snjtjj.entity.Company;
import com.snjtjj.entity.CompanyExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
public interface CompanyMapper {
    int countByExample(CompanyExample example);

    int deleteByExample(CompanyExample example);

    int deleteByPrimaryKey(String id);

    int insert(Company record);

    int insertSelective(Company record);

    List<Company> selectByExample(CompanyExample example);

    Company selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") Company record, @Param("example") CompanyExample example);

    int updateByExample(@Param("record") Company record, @Param("example") CompanyExample example);

    int updateByPrimaryKeySelective(Company record);

    int updateByPrimaryKey(Company record);

    List<Company> selectCompanyBySystemId(@Param("systemId") String systemId,@Param("xxmc") String xxmc,@Param("zzjgdm") String zzjgdm);

    List<Company> selectCompanyByNotInSystemId(@Param("systemId") String systemId,@Param("xxmc") String xxmc,@Param("zzjgdm") String zzjgdm);
}