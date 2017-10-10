Ext.define('Kits.view.shouJIDuan.wenZhangView', {
    extend: 'Ext.form.Panel',
    layout: {
        type: 'table',
        columns: 1,
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
            fieldLabel: '标题',
            width: '95%',
            name:'title',
            allowBlank: false,
            blankText: '标题不能为空'
        }, {
            xtype: 'textfield',
            fieldLabel: '简介',
            width: '95%',
            name:'introduction',
            allowBlank: false,
            blankText: '简介不能为空'
        }, {
            xtype: 'BaseTextArea',
            fieldLabel: '内容',
            width: '95%',
            name:'content'
        }

    ],

    buttons: [
        {
            text: '保存',
            handler: function (e) {
                var form = this.up('form').getForm();
                var callBack = this.up('form').callBack;
                if (form.isValid()) {
                    form.submit({
                        url:'/api/content/saveOrUpdate',
                        method:'POST',
                        waitMsg:'提交中，请稍后...',
                        waitTitle:'提示',
                        success: function (form, action) {
                            Ext.Msg.alert('成功！', action.result.data);
                            callBack();
                        },
                        failure: function (form, action) {
                            Ext.Msg.alert('失败！', action.result.data);
                        }
                    });
                }
            }
        },
        {
            text: '返回',
            handler: function (e) {
                var callBack = this.up('form').callBack;
                if (callBack) {
                    callBack();
                }
            }
        }
    ]
})
;