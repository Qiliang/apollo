package com.snjtjj.common.utils;


import org.springframework.http.HttpStatus;

/**
 * 异常返回
 */
public class ResponseException extends RuntimeException {

    private final HttpStatus status;

    public ResponseException(HttpStatus status) {
        this.status = status;
    }

    public ResponseException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }

    public ResponseException(String message, Throwable cause, HttpStatus status) {
        super(message, cause);
        this.status = status;
    }

    public ResponseException(Throwable cause, HttpStatus status) {
        super(cause);
        this.status = status;
    }

    public ResponseException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, HttpStatus status) {
        super(message, cause, enableSuppression, writableStackTrace);
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }
}
