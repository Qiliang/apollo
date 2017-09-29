package com.snjtjj.common.utils;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.INTERNAL_SERVER_ERROR,reason="111")
public class ServerException extends Exception {
    public ServerException(String message) {
        super(message);
    }
}