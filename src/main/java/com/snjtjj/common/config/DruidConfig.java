package com.snjtjj.common.config;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.List;

@Configuration
public class DruidConfig {
    public Logger LOG = LoggerFactory.getLogger(getClass());

    @Bean
    public ServletRegistrationBean druidServlet() {
        return new ServletRegistrationBean(new StatViewServlet(), "/druid/*");
    }

    @Bean
    public DataSource druidDataSource(
            @Value("${spring.datasource.driver-class-name}") String driverClass,
            @Value("${spring.datasource.url}") String url,
            @Value("${spring.datasource.username}") String username,
            @Value("${spring.datasource.password}") String password,
            @Value("${spring.datasource.druid.initialSize}") int initialSize,
            @Value("${spring.datasource.druid.minIdle}") int minIdle,
            @Value("${spring.datasource.druid.maxActive}") int maxActive,
            @Value("${spring.datasource.druid.maxWait}") int maxWait,
            @Value("${spring.datasource.druid.timeBetweenEvictionRunsMillis}") int timeBetweenEvictionRunsMillis,
            @Value("${spring.datasource.druid.minEvictableIdleTimeMillis}") int minEvictableIdleTimeMillis,
            @Value("${spring.datasource.druid.validationQuery}") String validationQuery,
            @Value("${spring.datasource.druid.testWhileIdle}") boolean testWhileIdle,
            @Value("${spring.datasource.druid.testOnBorrow}") boolean testOnBorrow,
            @Value("${spring.datasource.druid.testOnReturn}") boolean testOnReturn,
            @Value("${spring.datasource.druid.poolPreparedStatements}") boolean poolPreparedStatements,
            @Value("${spring.datasource.druid.maxPoolPreparedStatementPerConnectionSize}") int maxPoolPreparedStatementPerConnectionSize,
            @Value("${spring.datasource.druid.filters}") String filters,
            @Value("${spring.datasource.druid.connectionProperties}") String connectionProperties,
            @Value("#{'${spring.datasource.druid.connectionInitSqls}'.split(',')}") List<String> connectionInitSqls
    ) {
        DruidDataSource ds = new DruidDataSource();
        ds.setDriverClassName(driverClass);
        ds.setUrl(url);
        ds.setUsername(username);
        ds.setPassword(password);
        try {
            ds.setInitialSize(initialSize);
            ds.setMinIdle(minIdle);
            ds.setMaxActive(maxActive);
            ds.setMaxWait(maxWait);
            ds.setTimeBetweenEvictionRunsMillis(timeBetweenEvictionRunsMillis);
            ds.setMinEvictableIdleTimeMillis(minEvictableIdleTimeMillis);
            ds.setValidationQuery(validationQuery);
            ds.setTestWhileIdle(testWhileIdle);
            ds.setTestOnBorrow(testOnBorrow);
            ds.setTestOnReturn(testOnReturn);
            ds.setPoolPreparedStatements(poolPreparedStatements);
            ds.setMaxPoolPreparedStatementPerConnectionSize(maxPoolPreparedStatementPerConnectionSize);
            ds.setFilters(filters);
            ds.setConnectionProperties(connectionProperties);
            ds.setConnectionInitSqls(connectionInitSqls);
        } catch (SQLException e) {
            LOG.error("druid err:{}", e);
        }
        return ds;
    }


    @Bean
    public FilterRegistrationBean filterRegistrationBean() {
        FilterRegistrationBean fb = new FilterRegistrationBean();
        fb.setFilter(new WebStatFilter());
        fb.addUrlPatterns("/*");
        fb.addInitParameter("exclusions", "*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*");
        return fb;
    }
} 