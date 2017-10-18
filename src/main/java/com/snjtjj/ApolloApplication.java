package com.snjtjj;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.freemarker.FreeMarkerAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.core.convert.converter.Converter;
import org.springframework.scheduling.annotation.EnableAsync;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
@EnableAutoConfiguration(exclude = {FreeMarkerAutoConfiguration.class})
@EnableAsync
@MapperScan("com.snjtjj.mapper")
public class ApolloApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApolloApplication.class, args);
	}
	@Bean
	public Converter<String, Date> addNewConvert() {
		return new Converter<String, Date>() {
			@Override
			public Date convert(String source) {
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				Date date = null;
				try {
					date = sdf.parse((String) source);
				} catch (ParseException e) {
					e.printStackTrace();
				}
				return date;
			}
		};
	}
}
