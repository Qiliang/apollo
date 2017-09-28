Ext.define('Kits.view.quanXian.BranchView', {
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
            if (this.paraId) {
                this.load({
                    url: '/org/getOrgById',
                    method: 'get',
                    params: {id: this.paraId},
                    failure:function (form, action) {
                        debugger
                        Ext.Msg.alert('提示', "加载失败");
                    }
                });
            }
        }
    },
    items: [
        {xtype: 'hiddenfield', name: 'id'},
        {xtype: 'textfield', fieldLabel: '组织机构名称', name: 'name', allowBlank: false, blankText: '组织机构名称为必填项'},
        {xtype: 'textfield', fieldLabel: '组织机构代码', name: 'code', allowBlank: false, blankText: '组织机构代码为必填项'},
        {xtype: 'textfield', fieldLabel: '电话号码', name: 'phone'},
        {xtype: 'textfield', fieldLabel: '负责人', name: 'master'}
    ],

    buttons: [
        {
            text: '提交', handler: function (e) {
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
        }
    ]
})
;