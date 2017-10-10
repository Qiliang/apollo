Ext.define('Kits.view.diaoChaDuiXiang.importView', {
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
            xtype: 'fileuploadfield',
            fieldLabel: '数据包',
            width: '95%',
            name:'file',
            buttonConfig: {
                text: '浏览'
            },
            allowBlank: false,
            blankText: '数据包不能为空'
        }

    ],

    buttons: [
        {
            text: '导入',
            handler: function (e) {
                var form = this.up('form').getForm();
                var callBack = this.up('form').callBack;
                if (form.isValid()) {
                    form.submit({
                        url:'/api/company/uploadFile',
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
        }, {
            text:'下载模板',
            handler:function(e){
                window.open("/api/company/downloadModel");
            }
        }
    ]
})
;