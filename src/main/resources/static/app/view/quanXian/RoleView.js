Ext.define('Kits.view.quanXian.RoleView', {
    extend: 'Ext.form.Panel',
    layout: 'border',
    bodyBorder: false,
    listeners: {
        afterrender: function (me) {
            if (this.paraId) {
                this.load({
                    url: '/role/getRoleById',
                    method: 'get',
                    params: {id: this.paraId},
                    failure: function (form, action) {
                        Ext.Msg.alert('提示', "加载失败");
                    }
                });
                this.getComponent('multiselector').getStore().load({params:{roleId:this.paraId}});
            }
            this.getComponent('multiselector').getSearch().store.load();
        }
    },

    items: [{
        xtype: 'panel',
        region: 'north',
        defaultType: 'textfield',
        bodyPadding: 10,
        items: [{xtype: 'hiddenfield', name: 'id'}, {
            allowBlank: false,
            fieldLabel: '角色名',
            name: 'name',
            blankText: '角色名为必填项',
            maxLength: 50,
            width: 460
        }, {
            xtype: 'textareafield',
            fieldLabel: '描述',
            name: 'remark',
            emptyText: '',
            maxLength: 500,
            width: 460
        }, {
            xtype: 'radiogroup',
            fieldLabel: '是否可用',
            cls: 'x-check-group-alt',
            name: 'useable',
            width: 300,
            items: [
                {boxLabel: '是', inputValue: '1', checked: true},
                {boxLabel: '否', inputValue: '0'}
            ]
        }]
    }, {
        allowBlank: false,
        xtype: 'multiselector',
        region: 'center',
        title: '选择菜单',
        fieldName: 'id',
        store: Ext.create('Kits.store.RoleMenu'),
        itemId: 'multiselector',
        addToolText: '选择菜单',
        columns: {
            items: [
                {text: '菜单名称', dataIndex: 'text', flex: 1}
            ]
        },
        viewConfig: {
            deferEmptyText: false,
            emptyText: '请选择角色拥有的菜单'
        },
        search: {
            field: 'text',
            store: Ext.create('Kits.store.Menu')
        }
    }
    ],
    buttons: [
        {
            text: '提交', handler: function (e) {
            var form = this.up('form').getForm();
            var menuData = this.up("form").getComponent('multiselector').getStore().data.items;
            var menuList = [];
            if (!menuData || menuData.length == 0) {
                Ext.Msg.alert("提示", "请选择菜单");
                return;
            } else {
                for (var i = 0; i < menuData.length; i++) {
                    menuList.push(menuData[i].data)
                }
            }
            var callBack = this.up('form').callBack;
            if (form.isValid()) {
                form.submit({
                    url: '/role/saveOrUpdate',
                    method: 'POST',
                    params: {
                        menuListJson: Ext.JSON.encode(menuList)
                    },
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