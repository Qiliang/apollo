package com.snjtjj.common.Security;
 
import java.util.ArrayList;
import java.util.Collection;
import java.util.Set;
 
import javax.annotation.Resource;

import com.snjtjj.entity.User;
import com.snjtjj.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.dao.DataAccessException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.SpringSecurityMessageSource;
import org.springframework.security.core.authority.GrantedAuthorityImpl;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

 
/**
 * 实现UserDetailsService 接口，主要是在loadUserByUsername方法中验证一个用户
 * 这里需要从数据库中读取验证表单提交过来的用户
 * 
 * @author xian.wenbing
 * 
 */
@Service
public class WebUserDetailsService implements UserDetailsService {
    protected MessageSourceAccessor messages = SpringSecurityMessageSource
            .getAccessor();
 
    @Autowired
    private UserMapper userDao;
     
 
 
    @Transactional
    public UserDetails loadUserByUsername(String userName)
            throws UsernameNotFoundException, DataAccessException {
        User user = userDao.se(userName);
        if (user == null) {
            throw new UsernameNotFoundException(messages.getMessage(
                    "User.notFound", new Object[] { userName },
                    "UserName {0} not found"));
        }
        String userId = user.getId();
        String passWord = user.getLoginPassword();
        boolean userEnabled = user.getStats() == 1;
        // 读取当前用户有哪些角色权限
        Collection<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        Set<Role> userRoles = user.getRoles();
        for (Role userRole : userRoles) {
            // 和WebSecurityMetadataSource中的SecurityConfig参数对应
            GrantedAuthorityImpl authority = new GrantedAuthorityImpl("ROLE_"
                    + userRole.getId());
            authorities.add(authority);
        }
        // 创建 UserDetails 对象
        WebUserDetails webUserDetails = new WebUserDetails(userId, userName,
                passWord, userEnabled, authorities);
 
        return webUserDetails;
    }
}