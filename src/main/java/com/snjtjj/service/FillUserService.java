package com.snjtjj.service;

import com.snjtjj.common.security.JwtUser;
import com.snjtjj.entity.FillUser;
import com.snjtjj.mapper.FillUserMapper;
import com.snjtjj.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class FillUserService {
    @Autowired
    private FillUserMapper fillUserMapper;
    public FillUser getFillUserByID(){
        //获得当前登录用户
        JwtUser jwtUser = (JwtUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return fillUserMapper.selectByPrimaryKey(jwtUser.getFillUser().getId());
    }

    public void update(FillUser fillUser){
        if(StringUtils.isBlank(fillUser.getLoginPassword())){
            fillUser.setLoginPassword(null);
        }else{
            fillUser.setLoginPassword(new BCryptPasswordEncoder().encode(fillUser.getLoginPassword()));
            fillUser.setPasswordResetDate(new Date());
        }
        fillUserMapper.updateByPrimaryKeySelective(fillUser);
    }
}
