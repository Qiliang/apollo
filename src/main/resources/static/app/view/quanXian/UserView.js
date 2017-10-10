Ext.define('Kits.view.quanXian.UserView', {
    extend: 'Ext.form.Panel',
    bodyBorder: false,
    bodyPadding: 10,
    fieldDefaults: {
        width: 460,
        msgTarget: 'side',
        autoFitErrors: false
    },
    isFirstLoad: true,
    defaultType: 'textfield',
    listeners: {
        afterrender: function (me) {
            var btn = this;
            if (this.paraId) {
                this.getComponent("loginName").setReadOnly(true);
                me.remove(this.getComponent("confirmPass"));
                me.remove(this.getComponent("password"));
                this.getComponent('orgId').store.addAfterListener("load", function () {
                    btn.load({
                        url: '/api/users/getUserById',
                        method: 'get',
                        params: {id: btn.paraId},
                        success: function (form, action) {
                            var res = JSON.parse(action.response.responseText);
                            btn.getComponent('role').store.addAfterListener("load", function () {
                                btn.getComponent('role').setValue(res.data.role.id);
                            });
                            btn.getComponent('role').getStore().load();
                            if (res.data.orgId && res.data.orgId != '-1') {
                                var defaultRecord = btn.getComponent('orgId').store.getNodeById(res.data.orgId);
                                btn.getComponent('orgId').setDefaultValue(defaultRecord.get('id'), defaultRecord.get('text'));
                            } else {
                                btn.getComponent('pid').setDefaultValue('-1', '无上级组织');
                            }
                        },
                        failure: function (form, action) {
                            Ext.Msg.alert('提示', "加载失败");
                        }
                    });
                });
            } else {
                this.getComponent("loginName").setReadOnly(false);
                btn.getComponent('role').getStore().load();
                if (this.paraOrgId) {
                    this.getComponent('orgId').setDefaultValue(this.paraOrgId);
                }
            }
        }
    },

    items: [
        {xtype: 'hiddenfield', name: 'id'},
        {xtype: 'hiddenfield', name: 'oldLoginName', itemId: 'oldLoginName'},
        {
            allowBlank: false,
            fieldLabel: '帐号',
            name: 'loginName',
            itemId:'loginName',
            blankText: '帐号为必填项',
            validator: function () {
                return this.textValid;
            },
            listeners: {
                'change': function (textfield, newValue, oldValue) {
                    var isFirstLoad = textfield.up('panel').isFirstLoad;
                    var oldLoginName = textfield.up('panel').getComponent("oldLoginName").getValue();
                    if (!isFirstLoad) {
                        debugger
                        Ext.Ajax.request({
                            url: '/api/users/validate',
                            method: 'GET',
                            params: {loginName: newValue},
                            scope: textfield,
                            success: function (response) {
                                if (response.responseText) {
                                    var data = JSON.parse(response.responseText).data;
                                    if (data && newValue != oldLoginName) {
                                        this.markInvalid('用户名不能重复');
                                        this.textValid = false;
                                    } else {
                                        this.clearInvalid();
                                        this.textValid = true;
                                    }
                                } else {
                                    this.markInvalid('用户名不能重复');
                                    this.textValid = false;
                                }
                            }
                        });
                    } else {
                        this.clearInvalid();
                        this.textValid = true;
                        textfield.up('panel').isFirstLoad = false;
                    }
                }
            }
        }, {
            allowBlank: false,
            fieldLabel: '显示名',
            name: 'displayName',
            blankText: '帐号为必填项'
        }, {
            allowBlank: false,
            fieldLabel: '密码',
            name: 'loginPassword',
            inputType: 'password',
            blankText: '密码为必填项',
            itemId: 'password'
        }, {
            itemId: 'confirmPass',
            allowBlank: false,
            fieldLabel: '确认密码',
            name: 'confirmPass',
            emptyText: '',
            inputType: 'password',
            vtype: 'password',
            initialPassField: 'password',
            blankText: '确认密码为必填项'
        },
        {
            allowBlank: false,
            blankText: '所属组织为必填项',
            xtype: 'comboBoxTree',
            itemId: 'orgId',
            name: 'orgId',
            fieldLabel: '所属组织',
            editable: false,
            emptyText: '请选择所属组织',
            url: '/api/org'
        }, {
            xtype: 'combobox',
            itemId: 'role',
            editable: false,
            name: 'role.id',
            fieldLabel: '角色',
            valueField: 'id',
            displayField: 'name',
            queryMode: 'local',
            store: {
                xtype: 'Ext.data.Store',
                proxy: {
                    type: 'ajax',
                    url: '/api/role/getAllRoleList',
                    reader: {
                        type: 'json'
                    }
                },
                autoLoad: false,
                autoSync: false
            }
        }
    ],
    buttons: [
        {
            text: '提交', handler: function (e) {
            var form = this.up('form').getForm();
            var callBack = this.up('form').callBack;
            if (form.isValid()) {
                form.submit({
                    url: '/api/users/saveOrUpdate',
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