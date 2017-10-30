package com.snjtjj.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.snjtjj.entity.DirectRptRemindTask;
import com.snjtjj.entity.DirectRptTask;
import com.snjtjj.entity.MessageInfo;
import com.snjtjj.entity.MessageInfoExample;
import com.snjtjj.mapper.MessageInfoMapper;
import com.snjtjj.utils.IdGen;
import com.snjtjj.utils.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MessageInfoService {
    @Autowired
    private MessageInfoMapper messageInfoMapper;

    public PageInfo<MessageInfo> allMessageInfo(Integer page, Integer limit) {
        MessageInfoExample messageInfoExample = new MessageInfoExample();
        PageHelper.startPage(page, limit);
        messageInfoExample.createCriteria().andToUserIdEqualTo(UserUtils.getUser().getId());
        List<MessageInfo> list = messageInfoMapper.selectByExample(messageInfoExample);
        PageInfo<MessageInfo> pageInfo = new PageInfo<>(list);
        return pageInfo;
    }

    public void save(MessageInfo messageInfo){
        messageInfoMapper.insert(messageInfo);
    }

    public MessageInfo getMessageInfoByTask(DirectRptRemindTask directRptRemindTask){
        MessageInfo messageInfo = new MessageInfo();
        messageInfo.setId(IdGen.nextS());
        messageInfo.setContent("《"+directRptRemindTask.getTitle()+"》直报任务提醒！");
        messageInfo.setTitle("直报任务提醒");
        messageInfo.setCreateTime(new Date());
        messageInfo.setFormName("system");
        messageInfo.setReadState("0");
        messageInfo.setToUserId(directRptRemindTask.getCreateBy());
        messageInfo.setType("zbtx");
        return messageInfo;
    }

    public MessageInfo getMessageInfoBySendTask(DirectRptTask directRptTask){
        MessageInfo messageInfo = new MessageInfo();
        messageInfo.setId(IdGen.nextS());
        messageInfo.setContent("《"+directRptTask.getName()+"》直报任务添加成功！");
        messageInfo.setTitle("直报任务添加成功提醒");
        messageInfo.setCreateTime(new Date());
        messageInfo.setFormName("system");
        messageInfo.setReadState("0");
        messageInfo.setToUserId(directRptTask.getCreateBy());
        messageInfo.setType("zbrwtjtx");
        return messageInfo;
    }
}
