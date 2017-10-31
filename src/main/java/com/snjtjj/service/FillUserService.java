package com.snjtjj.service;

import com.snjtjj.common.security.JwtUser;
import com.snjtjj.entity.Company;
import com.snjtjj.entity.CompanyExample;
import com.snjtjj.entity.FillUser;
import com.snjtjj.mapper.CompanyMapper;
import com.snjtjj.mapper.FillUserMapper;
import com.snjtjj.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class FillUserService {
    @Autowired
    private FillUserMapper fillUserMapper;
    @Autowired
    private CompanyMapper companyMapper;

    public FillUser getFillUserByID() {
        //获得当前登录用户
        JwtUser jwtUser = (JwtUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return fillUserMapper.selectByPrimaryKey(jwtUser.getFillUser().getId());
    }

    @Transactional
    public void update(FillUser fillUser) {
        JwtUser jwtUser = (JwtUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (StringUtils.isBlank(fillUser.getLoginPassword())) {
            fillUser.setLoginPassword(null);
        } else {
            fillUser.setLoginPassword(new BCryptPasswordEncoder().encode(fillUser.getLoginPassword()));
            fillUser.setPasswordResetDate(new Date());
        }
        fillUser.setUpdateDate(new Date());
        fillUser.setUpdateBy(jwtUser.getFillUser().getId());
        fillUserMapper.updateByPrimaryKeySelective(fillUser);
        if ("0".equals(fillUser.getObjType())) {
            CompanyExample companyExample = new CompanyExample();
            companyExample.createCriteria().andDelFlagEqualTo("0").andZzjgdmEqualTo(jwtUser.getFillUser().getLoginUserName());
            List<Company> companyList = companyMapper.selectByExample(companyExample);
            for (Company company : companyList) {
                company.setMobile(fillUser.getMobile());
                company.setEmail(fillUser.getEmail());
                company.setTbrName(fillUser.getFillName());
                company.setFzrMobile(fillUser.getLeaderMobile());
                company.setFddbr(fillUser.getFddbr());
                companyMapper.updateByPrimaryKeySelective(company);
            }
        }
    }
}
