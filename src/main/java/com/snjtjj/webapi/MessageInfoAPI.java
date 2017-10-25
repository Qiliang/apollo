package com.snjtjj.webapi;

import com.github.pagehelper.PageInfo;
import com.snjtjj.entity.MessageInfo;
import com.snjtjj.service.MessageInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/messageInfo")
public class MessageInfoAPI {
    @Autowired
    private MessageInfoService messageInfoService;

    @GetMapping
    public PageInfo<MessageInfo> messageInfo(Integer page, Integer limit) {
        return messageInfoService.allMessageInfo(page, limit);
    }
}
