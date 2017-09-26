package com.snjtjj.vo;

/**
 * Created by 48715 on 2016/12/1.
 * 返回对象
 */
public class ReturnVo<T> {
    public interface BaseInterface {
    }
    public interface ExceptionInfo{}
    private Boolean success = true;
    private int code = 200;
    private String message = "操作成功！";
    private T data;

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public static ReturnVo getSysError() {
        ReturnVo returnVo = new ReturnVo();
        returnVo.setSuccess(false);
        returnVo.setMessage("系统错误，请联系管理员！");
        returnVo.setCode(500);
        return returnVo;
    }
}
