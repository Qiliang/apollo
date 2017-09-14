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
            buttonConfig: {
                text: '浏览'
            },
            allowBlank: false,
            blankText: '数据包不能为空'
        }
    ],

    buttons: [
        {
            text: '导入', handler: function (e) {
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