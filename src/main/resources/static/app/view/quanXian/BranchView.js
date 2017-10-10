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
            var btn = this;
            if (this.paraId) {
                this.getComponent('pid').setUrl('/api/org?excludeId='+this.paraId);
                this.getComponent('pid').store.addAfterListener("load",function(){
                    btn.load({
                        url: '/api/org/getOrgById',
                        method: 'get',
                        params: {id: btn.paraId},
                        success: function(form, action) {
                            var res = JSON.parse(action.response.responseText);
                            if(res.data.parentId&&res.data.parentId!='-1'){
                                var defaultRecord = btn.getComponent('pid').store.getNodeById(res.data.parentId);
                                btn.getComponent('pid').setDefaultValue(defaultRecord.get('id'), defaultRecord.get('text'));
                            }else{
                                btn.getComponent('pid').setDefaultValue('-1', '无上级组织');
                            }
                        },
                        failure: function (form, action) {
                            Ext.Msg.alert('提示', "加载失败");
                        }
                    });
                })

            }
            else {
                if (this.paraPid) {
                    this.getComponent('pid').setDefaultValue(this.paraPid);
                }
            }
        }
    },
    initComponent: function() {
        var me = this;
        me.items[1].url='/api/org?excludeId='+this.paraId;
        me.callParent();
    },


    items: [
        {xtype: 'hiddenfield', name: 'id'},
        {
            xtype: 'comboBoxTree',
            itemId:'pid',
            name: 'parentId',
            fieldLabel: '所属组织',
            editable: false,
            emptyText: '请选择所属组织',
            url:'/api/org'
        },
        {
            xtype: 'textfield',
            fieldLabel: '组织机构名称',
            name: 'name',
            allowBlank: false,
            blankText: '组织机构名称为必填项',
            maxLength: 50
        },
        {
            xtype: 'textfield',
            fieldLabel: '组织机构代码',
            name: 'code',
            allowBlank: false,
            blankText: '组织机构代码为必填项',
            maxLength: 50
        },
        {xtype: 'textfield', fieldLabel: '电话号码', name: 'phone', maxLength: 20, vtype: 'mobile'},
        {xtype: 'textfield', fieldLabel: '负责人', name: 'master', maxLength: 10}
    ],

    buttons: [
        {
            text: '提交', handler: function (e) {
            var form = this.up('form').getForm();
            var callBack = this.up('form').callBack;
            if (form.isValid()) {
                form.submit({
                    url: '/api/org/saveOrUpdate',
                    method: 'POST',
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
        }
    ]
})
;