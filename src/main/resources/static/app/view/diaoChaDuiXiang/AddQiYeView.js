Ext.define('Kits.view.diaoChaDuiXiang.AddQiYeView', {
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
        {xtype: 'textfield', fieldLabel: '组织机构代码', allowBlank: false, blankText: '组织机构代码为必填项'},
        {xtype: 'textfield', fieldLabel: '移动电话', allowBlank: false, blankText: '移动电话为必填项'},
        {xtype: 'textfield', fieldLabel: '法定代表人（单位负责人）移动电话', allowBlank: false, blankText: '法定代表人（单位负责人）移动电话为必填项'},
        {xtype: 'textfield', fieldLabel: '电子信箱', allowBlank: false,vtype:'email', blankText: '电子信箱为必填项'},
        {xtype: 'textfield', fieldLabel: '填报人姓名', allowBlank: false, blankText: '填报人姓名为必填项'}
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