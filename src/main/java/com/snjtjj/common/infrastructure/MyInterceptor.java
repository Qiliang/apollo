package com.snjtjj.common.infrastructure;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.snjtjj.entity.SystemInfo;
import com.snjtjj.entity.User;
import com.snjtjj.utils.Collections3;
import com.snjtjj.utils.UserUtils;
import org.apache.ibatis.executor.resultset.ResultSetHandler;
import org.apache.ibatis.executor.statement.StatementHandler;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.plugin.*;
import org.apache.ibatis.reflection.MetaObject;
import org.apache.ibatis.reflection.SystemMetaObject;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.sql.Connection;
import java.sql.Statement;
import java.util.List;
import java.util.Map;
import java.util.Properties;

@Intercepts({@Signature(type = StatementHandler. class, method = "prepare", args = {Connection. class, Integer.class}),
        @Signature(type = ResultSetHandler.class, method = "handleResultSets", args = {Statement.class})})
@Component
public class MyInterceptor implements Interceptor {
    private ObjectMapper objectMapper = new ObjectMapper();
    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        if (invocation.getTarget() instanceof StatementHandler) {
            StatementHandler statementHandler = (StatementHandler) invocation.getTarget();
            MetaObject metaStatementHandler = SystemMetaObject.forObject(statementHandler);
            // 分离代理对象链(由于目标类可能被多个插件拦截，从而形成多次代理，通过下面的两次循环
            // 可以分离出最原始的的目标类)
            while (metaStatementHandler.hasGetter("h")) {
                Object object = metaStatementHandler.getValue("h");
                metaStatementHandler = SystemMetaObject.forObject(object);
            }
            // 分离最后一个代理对象的目标类
            while (metaStatementHandler.hasGetter("target")) {
                Object object = metaStatementHandler.getValue("target");
                metaStatementHandler = SystemMetaObject.forObject(object);
            }
            MappedStatement mappedStatement = (MappedStatement) metaStatementHandler.getValue("delegate.mappedStatement");
            BoundSql boundSql = (BoundSql) metaStatementHandler.getValue("delegate.boundSql");
            String sql = boundSql.getSql();
            if(sql.indexOf("@ids@")!=-1){
                metaStatementHandler.setValue("delegate.boundSql.sql", buildSystemInfoSql(sql));
            }
        }
        return invocation.proceed();
    }

    private String buildSystemInfoSql(String sql) throws IOException, IllegalAccessException, NoSuchMethodException, InvocationTargetException {
        //将sql替换为登录用户的角色对应的sysid
        User user = UserUtils.getUser();
        if(user!=null&&"admin".equals(user.getLoginName())){
            sql = sql.replace("@ids@", "select id from system_info where del_flag='0'");
        }else {
            List<SystemInfo> list = UserUtils.getSystemInfoList();
            String ids = "";
            if (list != null && list.size() > 0) {
                List<String> idList = Collections3.extractToList(list, "id");
                idList.forEach(item -> {
                    item = "'" + item + "'";
                });
                ids = Collections3.convertToString(idList, ",");
            } else {
                ids = "'-1'";
            }
            sql = sql.replace("@ids@", ids);
        }
        return sql;
    }

    @Override
    public Object plugin(Object target) {
        return Plugin.wrap(target, this);
    }
    @Override
    public void setProperties(Properties properties) {
        // TODO Auto-generated method stub

    }
}