Ext.define('Kits.view.shuJuLuRu.AddGeRenZhongXin', {
    extend: 'Ext.panel.Panel',
    title: '个人中心',
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                panel.getStore().load();
            }
        }
    ],
    items: [{
        xtype: 'form',
        width:600,
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
            {xtype: 'textfield', fieldLabel: '组织机构代码', colspan: 2, width: 590, readOnly: true},
            {
                xtype: 'textfield',
                fieldLabel: '移动电话',
                allowBlank: false,
                blankText: '移动电话为必填项'
            },
            {
                xtype: 'textfield',
                fieldLabel: '法定代表人（单位负责人）移动电话',
                allowBlank: false,
                blankText: '法定代表人（单位负责人）移动电话为必填项',
            },
            {
                xtype: 'textfield',
                vtype: 'email',
                fieldLabel: '电子信箱',
                allowBlank: false,
                blankText: '电子信箱为必填项'
            },
            {
                xtype: 'textfield',
                fieldLabel: '填报人姓名',
                allowBlank: false,
                blankText: '填报人姓名为必填项'
            }, {
                fieldLabel: '密码',
                name: 'pass',
                inputType: 'password',
                emptyMsg: '密码',
            }
        ]
    },{
        layout: 'center',
        width:600,
        items: [{
            xtype: 'button',
            text: '提交',
            handler: function (e) {
                alert('提交1');
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    alert('提交');
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
        }]
    }]
});