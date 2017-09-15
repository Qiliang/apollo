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
        {xtype: 'textfield', fieldLabel: '直报名称', colspan: 2, width: 572, allowBlank: false, blankText: '直报名称为必填项'},
        {xtype: 'datefield', format: 'Y-m-d', fieldLabel: '报送开始时间', allowBlank: false, blankText: '报送开始时间为必填项'},
        {xtype: 'datefield', format: 'Y-m-d', fieldLabel: '报送结束时间', allowBlank: false, blankText: '报送结束时间为必填项'},
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
                    Ext.create('Ext.window.Window', {
                        title: '选择调查对象',
                        height: 600,
                        width: 1100,
                        layout: 'fit',
                        modal: true,
                        closeToolText: '关闭',
                        items: Ext.create('Kits.view.zhiDu.DiaoChaDuiXiangView', {})
                    }).show();
                }
            }]
        },
        {xtype: 'hiddenfield', id: 'dcdxIds'},
        {xtype: 'hiddenfield', id: 'dcbyId'},
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
                                Ext.getCmp('dcby').setValue(selection.name);
                                Ext.getCmp('dcbyId').setValue(selection.dcbyId);
                            }
                        })
                    }).show();
                }
            }]
        },
    ],

    buttons: [
        {
            text: '提交', handler: function (e) {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                form.submit({
                    success: function (form, action) {
                        Ext.Msg.alert('Success', action.result.msg);
                    },
                    failure: function (form, action) {
                        Ext.Msg.alert('Failed', action.result.msg);
                    }
                });
            }
        }
        }
    ]
})
;