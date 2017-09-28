package com.snjtjj.vo;

/**
 * Created by bozhou on 2017/9/28.
 */
public class FormResponse<T> {
    public FormResponse(Boolean success, T data) {
        this.success = success;
        this.data = data;
    }

    public FormResponse( T data) {
        this.success = true;
        this.data = data;
    }

    private Boolean success;
    private T data;

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
