Ext.define('Kits.view.zhiDu.AddZhiBaoView', {
    extend: 'Ext.form.Panel',
    layout: {
        type: 'table',
        columns: 2,
        tableAttrs: {
            style: {
                width: '100%',
                'margin-top': '20px',
                'margin-left': '10px',
                'margin-right': '10px'
            }
        }
    },
    bodyBorder: false,
    defaults: {
        bodyPadding: 10
    },
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '直报名称',
            colspan: 2,
            width: 572,
            name: 'name',
            maxLength: 50,
            allowBlank: false,
            blankText: '直报名称为必填项'
        },
        {
            xtype: 'datefield',
            name: 'startDate',
            itemId: 'startDate',
            format: 'Y-m-d',
            fieldLabel: '报送开始时间',
            allowBlank: false,
            blankText: '报送开始时间为必填项',
            vtype: 'daterange',
            endDateField: 'endDate' // id of the end date field
        },
        {
            xtype: 'datefield',
            format: 'Y-m-d',
            name: 'endDate',
            itemId: 'endDate',
            fieldLabel: '报送结束时间',
            allowBlank: false,
            blankText: '报送结束时间为必填项',
            vtype: 'daterange',
            startDateField: 'startDate' // id of the start date field
        },
        {
            colspan: 2,
            xtype: 'fieldcontainer',
            fieldLabel: '调查表样',
            layout: 'hbox',
            combineErrors: true,
            defaultType: 'textfield',
            defaults: {
                hideLabel: 'true'
            },
            items: [{
                fieldLabel: '调查表样',
                id: 'dcby',
                allowBlank: false,
                blankText: '调查表样为必填项',
                readOnly: true,
                width: 416
            }, {
                xtype: 'button',
                text: '选择',
                flex: 1,
                handler: function (e) {
                    Ext.create('Ext.window.Window', {
                        title: '选择调查表样',
                        height: 600,
                        width: 700,
                        layout: 'fit',
                        modal: true,
                        closeToolText: '关闭',
                        items: Ext.create('Kits.view.zhiDu.DiaoChaBiaoXiangView', {
                            callback: function (selection) {
                                //清空调查对象
                                Ext.getCmp('dcdx').setValue('');
                                Ext.getCmp('dcdxIds').setValue('');
                                Ext.getCmp('dcby').setValue(selection.name);
                                Ext.getCmp('tableId').setValue(selection.id);
                                Ext.getCmp('systemId').setValue(selection.systeminfoid);
                                Ext.getCmp('systemInfoFillPersonType').setValue(selection.systemInfoFillPersonType);
                            }
                        })
                    }).show();
                }
            }]
        },
        {
            colspan: 2,
            xtype: 'fieldcontainer',
            fieldLabel: '调查对象',
            layout: 'hbox',
            combineErrors: true,
            defaultType: 'textfield',
            defaults: {
                hideLabel: 'true'
            },
            items: [{
                fieldLabel: '调查对象',
                id: 'dcdx',
                allowBlank: false,
                blankText: '调查对象为必填项',
                readOnly: true,
                width: 416
            }, {
                xtype: 'button',
                text: '选择',
                flex: 1,
                handler: function (e) {
                    //判断是否选择调查表样
                    var tabId = Ext.getCmp("tableId").getValue();
                    if (tabId) {
                        var systemInfoFillPersonType = Ext.getCmp("systemInfoFillPersonType").getValue();
                        var btn = this;
                        if (systemInfoFillPersonType) {
                            var itemName = '';
                            if ('qy' == systemInfoFillPersonType) {
                                itemName = 'Kits.view.zhiDu.QiYeDiaoChaDuiXiangView'
                            }else if('xzqh' == systemInfoFillPersonType){
                                itemName = 'Kits.view.zhiDu.XzqhDiaoChaDuiXiangView';
                            }
                            var win = Ext.create('Ext.window.Window', {
                                title: '选择调查对象',
                                height: 600,
                                width: 1100,
                                layout: 'fit',
                                modal: true,
                                closeToolText: '关闭',
                                items: Ext.create(itemName, {
                                    systemId: Ext.getCmp('systemId').getValue(), callBack: function (data) {
                                        Ext.getCmp('dcdx').setValue(data.name);
                                        Ext.getCmp('dcdxIds').setValue(data.ids);
                                        win.close();
                                    }
                                })
                            });
                            win.show();
                        } else {
                            Ext.Msg.alert('提示', '所选制度未设置填报类型！');
                        }
                    } else {
                        Ext.Msg.alert('提示', '请先选择调查表样！');
                    }
                }
            }]
        },
        {xtype: 'hiddenfield', name: 'dcdxIds', id: 'dcdxIds'},
        {xtype: 'hiddenfield', name: 'tableId', id: 'tableId'},
        {xtype: 'hiddenfield', name: 'systemId', id: 'systemId'},
        {xtype: 'hiddenfield', name: 'systemInfoFillPersonType', id: 'systemInfoFillPersonType'}

    ],

    buttons: [
        {
            text: '提交', handler: function (e) {
            var form = this.up('form').getForm();
            var callBack = this.up('form').callBack;
            if (form.isValid()) {
                form.submit({
                    url:'/api/directRptTask/save',
                    method:'POST',
                    waitMsg:'提交中，请稍后...',
                    waitTitle:'提示',
                    success: function (form, action) {
                        Ext.Msg.alert('成功！', '定时任务执行中，请稍后在消息列表中查看添加结果');
                        callBack();
                    },
                    failure: function (form, action) {
                        Ext.Msg.alert('失败！', action.result.data);
                    }
                });
            }
        }
        }
    ]
})
;