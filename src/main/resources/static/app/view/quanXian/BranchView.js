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
                        Ext.Msg.alert('提示', "加载失败");
                    }
                });
            }else{
                if(this.paraPid){
                    this.getComponent('pid').setValue(this.paraPid);
                }
            }
        }
    },
    items: [
        {xtype: 'hiddenfield', name: 'id'},
        {xtype: 'hiddenfield', name: 'parentId',itemId:'pid'},
        {xtype: 'textfield', fieldLabel: '组织机构名称', name: 'name', allowBlank: false, blankText: '组织机构名称为必填项',maxLength:50},
        {xtype: 'textfield', fieldLabel: '组织机构代码', name: 'code', allowBlank: false, blankText: '组织机构代码为必填项',maxLength:50},
        {xtype: 'textfield', fieldLabel: '电话号码', name: 'phone',maxLength:20,vtype:'mobile'},
        {xtype: 'textfield', fieldLabel: '负责人', name: 'master',maxLength:10}
    ],

    buttons: [
        {
            text: '提交', handler: function (e) {
            var form = this.up('form').getForm();
            var callBack = this.up('form').callBack;
            if (form.isValid()) {
                form.submit({
                    url: '/org/saveOrUpdate',
                    method: 'POST',
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