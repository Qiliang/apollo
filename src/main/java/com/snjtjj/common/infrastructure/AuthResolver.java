package com.snjtjj.common.infrastructure;

import com.snjtjj.common.security.JwtTokenUtil;
import com.snjtjj.common.security.JwtUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.method.annotation.AbstractNamedValueMethodArgumentResolver;

@Component
public class AuthResolver extends AbstractNamedValueMethodArgumentResolver {
    @Override
    protected NamedValueInfo createNamedValueInfo(MethodParameter parameter) {
        return new NamedValueInfo("userId", false, null);
    }

    @Override
    protected Object resolveName(String name, MethodParameter parameter, NativeWebRequest request) throws Exception {
        JwtUser jwtUser = (JwtUser) SecurityContextHolder.getContext().getAuthentication() .getPrincipal();
        String userId = jwtUser.getUser().getId();
        return userId;
    }

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        if (parameter.getParameterName().equals("userId")) {
            return true;
        }
        return false;
    }


//    @Override
//    public boolean supportsParameter(MethodParameter parameter) {
//
//        if (parameter.getParameterType().isAssignableFrom(Long.class) &&
//                (parameter.hasParameterAnnotation(Auth.class) || parameter.getParameterName().equals("user_id"))) {
//            return true;
//        }
//        return false;
//    }
//
//    @Override
//    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
//        Long currentUserId = Long.valueOf(webRequest.getAttribute(CURRENT_USER_ID, RequestAttributes.SCOPE_REQUEST).toString());
//        //String token = webRequest.getHeader(AUTHORIZATION);
//
//        return currentUserId;
//        //throw new MissingServletRequestPartException(CURRENT_USER_ID);
//    }


}