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
    listeners: {
        afterrender: function (me) {
            var btn = this;
            if (this.paraId) {
                btn.load({
                    url: '/api/company/getCompanyById',
                    method: 'get',
                    params: {id: btn.paraId},
                    failure: function (form, action) {
                        Ext.Msg.alert('提示', "加载失败");
                    }
                });
            }
        }
    },
    items: [
        {xtype: 'hiddenfield', name: 'id'},
        {
            xtype: 'textfield',
            name: 'xxmc',
            fieldLabel: '详细名称',
            allowBlank: false,
            blankText: '详细名称为必填项',
            maxLength: 100
        },
        {
            xtype: 'textfield',
            name: 'zzjgdm',
            fieldLabel: '组织机构代码',
            allowBlank: false,
            blankText: '组织机构代码为必填项',
            maxLength: 100
        },
        {
            xtype: 'numberfield',
            name: 'xzqhdm',
            fieldLabel: '行政区划代码',
            allowBlank: false,
            blankText: '行政区划代码为必填项',
            maxLength: 9
        },
        {
            xtype: 'textfield',
            name: 'xxdz',
            fieldLabel: '所在地址',
            allowBlank: false,
            blankText: '所在地址为必填项',
            maxLength: 200
        },
        {
            xtype: 'textfield',
            name: 'hydm11',
            fieldLabel: '行业类别代码',
            maxLength: 100
        },
        {
            xtype: 'textfield',
            name: 'djzclx',
            fieldLabel: '登记注册类别',
            maxLength: 100
        },
        {
            xtype: 'textfield',
            name: 'mobile',
            fieldLabel: '移动电话',
            vtype: 'mobile'
        },
        {
            xtype: 'textfield',
            name: 'fzrMobile',
            fieldLabel: '法定代表人（单位负责人）移动电话',
            vtype: 'mobile'
        },
        {
            xtype: 'textfield',
            name: 'email',
            fieldLabel: '电子信箱',
            vtype: 'email',
            maxLength: 100
        },
        {xtype: 'textfield', name: 'tbrName', fieldLabel: '填报人姓名', allowBlank: false, blankText: '填报人姓名为必填项'}
    ],
    buttons: [
        {
            text: '提交', handler: function (e) {
            var form = this.up('form').getForm();
            var callBack = this.up('form').callBack;
            if (form.isValid()) {
                form.submit({
                    url: '/api/company/saveOrUpdate',
                    method: 'POST',
                    waitMsg: '提交中，请稍后...',
                    waitTitle: '提示',
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
        }
    ]
})
;