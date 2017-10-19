Ext.define('Kits.view.shuJuLuRu.AddGeRenZhongXin', {
    extend: 'Ext.panel.Panel',
    title: '个人中心',
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                panel.down("form").load({
                    url: '/api/fillUser/getUser',
                    method: 'Get',
                    failure: function (form, action) {
                        Ext.Msg.alert('提示', "加载失败");
                    }
                });
            }
        }
    ],
    layout: 'center',
    items: [{
        xtype: 'form',
        frame: true,
        width: 600,
        bodyPadding: 5,
        waitMsgTarget: true,
        listeners: {
            afterrender: function (me) {
                var btn = this;
                btn.load({
                    url: '/api/fillUser/getUser',
                    method: 'Get',
                    failure: function (form, action) {
                        Ext.Msg.alert('提示', "加载失败");
                    }
                });
            }
        },
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 85,
            msgTarget: 'side'
        },
        bodyBorder: false,
        items: [{
            xtype: 'fieldset',
            title: '用户信息',
            defaultType: 'textfield',
            defaults: {
                width: 500,
                labelWidth: 190
            },
            items: [
                {xtype: 'hiddenfield', name: 'id'},
                {
                    xtype: 'textfield',
                    fieldLabel: '移动电话',
                    allowBlank: false,
                    blankText: '移动电话为必填项',
                    name: 'mobile'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: '法定代表人（单位负责人）移动电话',
                    allowBlank: false,
                    blankText: '法定代表人（单位负责人）移动电话为必填项',
                    name: 'leaderMobile'
                },
                {
                    xtype: 'textfield',
                    vtype: 'email',
                    fieldLabel: '电子信箱',
                    allowBlank: false,
                    blankText: '电子信箱为必填项',
                    name: 'email'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: '填报人姓名',
                    allowBlank: false,
                    blankText: '填报人姓名为必填项',
                    name: 'fillName'
                }, {
                    xtype: 'textfield',
                    fieldLabel: '密码',
                    name: 'loginPassword',
                    inputType: 'password'
                }]
        }],

        buttons: [{
            text: '修改',
            handler: function (e) {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        url: '/api/fillUser/update',
                        method: 'POST',
                        waitMsg: '提交中，请稍后...',
                        waitTitle: '提示',
                        success: function (form, action) {
                            Ext.Msg.alert('成功！', action.result.data);
                        },
                        failure: function (form, action) {
                            Ext.Msg.alert('失败！', action.result.data);
                        }
                    });
                }
            }
        }]
    }]
});