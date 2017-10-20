Ext.define('Kits.view.zhiDu.ZhiBaoScheduleList', {
    extend: 'Ext.grid.Panel',
    title: '直报定时提醒列表',
    store: Ext.create('Kits.store.ZhiBaoSchedule'),
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                panel.getStore().load();
            }
        }
    ],
    tbar: [
        {
            id:'viewName',
            xtype: 'textfield',
            fieldLabel: '任务名称',
            name: 'title',
        },
        {
            xtype: 'button',
            text: '查询',
            handler: function () {
                var grid = this.up('grid');
                grid.getStore().getProxy().setExtraParams({
                    title: Ext.getCmp('viewName').getValue()
                })
                grid.getStore().load();
            }
        }, {
            xtype: 'button',
            text: '添加',
            handler: function () {
                var btn = this;
                var win = Ext.create('Ext.window.Window', {
                    title: '添加直报',
                    height: 400,
                    width: 600,
                    layout: 'fit',
                    modal: true,
                    closeToolText: '关闭',
                    items: Ext.create('Kits.view.zhiDu.AddZhiBaoScheduleView', {
                        callBack: function () {
                            win.close();
                            btn.up('grid').getStore().load();
                        }
                    })
                });
                win.show();
            }
        }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '任务名称',
            dataIndex: 'title'
        },
        {
            text: '所属制度名称',
            dataIndex: 'tableName'
        },
        {
            text: '所属表名',
            dataIndex: 'systemName'
        },
        {
            text: '提醒开始时间',
            dataIndex: 'remindStartDate',
            renderer: function(value){
                if(value){
                    return value;
                }else{
                    return "无结束时间";
                }
            }
        },
        {
            text: '提醒结束时间',
            dataIndex: 'remindEndDate'
        },
        {
            text: '提醒频率',
            dataIndex: 'remindTypeStr'
        },
        {
            text: '提醒时间',
            dataIndex: 'remindTime'
        },
        {
            text: '操作',
            xtype: 'actioncolumn',
            width: 70,
            items: [{
                iconCls: 'x-fa fa-pencil-square-o',
                tooltip: '修改',
                handler: function (view, recIndex, cellIndex, item, e, record) {
                    var btn=this;
                    var win = Ext.create('Ext.window.Window', {
                        title: '修改',
                        height: 400,
                        width: 600,
                        layout: 'fit',
                        closeToolText:'关闭',
                        modal:true,
                        items: [Ext.create('Kits.view.zhiDu.AddZhiBaoScheduleView',{
                            paraId:record.data.id,
                            callBack:function(){
                                btn.up('grid').getStore().reload();
                                win.close();
                            }})]
                    });
                    win.show();
                }
            }, '-', {
                iconCls: 'x-fa fa-trash-o',
                tooltip: '删除',
                handler: function (view, recIndex, cellIndex, item, e, record) {
                    var btn=this;
                    Ext.Msg.confirm('确认', '确认删除?', function (r) {
                        if (r == 'yes') {
                            Ext.Ajax.request({
                                url: '/api/directRptRemindTask/deleteById',
                                params: { id: record.data.id},
                                method: 'POST',
                                success: function (response, options) {
                                    btn.up('grid').getStore().reload();
                                },
                                failure: function (response, options) {
                                    var res = JSON.parse(response.responseText);
                                    Ext.MessageBox.alert('失败', '错误信息：' + res.message);
                                }
                            });
                        }
                    }, this);
                }
            }]
        }

    ]
})
;