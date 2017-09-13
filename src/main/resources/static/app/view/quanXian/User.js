Ext.define('Kits.view.quanXian.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border',
    ],
    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: false,
        split: true,
        bodyPadding: 10
    },
    listeners:{
        afterrender:function (me) {
            console.log(me.a)
        }
    },
    items: [
        {
            title: '组织机构',
            region: 'west',
            width: 240,
            xtype: 'treepanel',
            rootVisible: true,
            store: Ext.create('Kits.store.BranchTree')
        },
        {
            title: '用户列表',
            collapsible: false,
            columnLines: true,
            xtype: 'grid',
            tbar: [{
                text: '添加用户',
                handler: function () {
                    var win = Ext.create('Ext.window.Window', {
                        title: '添加用户',
                        height: 400,
                        width: 500,
                        layout: 'fit',
                        closeToolText:'关闭',
                        // closeAction:'hide',
                        modal:true,
                        items: [{
                            xtype:'form',
                            bodyPadding: 10,
                            fieldDefaults: {
                                width:460,
                                msgTarget: 'side',
                                autoFitErrors: false
                            },
                            defaultType: 'textfield',
                            items: [{
                                allowBlank: false,
                                fieldLabel: '帐号',
                                name: 'code',
                                emptyText: '',
                            }, {
                                allowBlank: false,
                                fieldLabel: '显示名',
                                name: 'name',
                                emptyText: '',
                            }, {
                                allowBlank: false,
                                fieldLabel: '密码',
                                name: 'pass',
                                emptyText: '',
                                inputType: 'password'
                            }, {
                                allowBlank: false,
                                fieldLabel: '确认密码',
                                name: 'confirm',
                                emptyText: '',
                                inputType: 'password'
                            }, {
                                xtype: 'combobox',
                                editable:false,
                                reference: 'id',
                                publishes: 'id',
                                fieldLabel: '角色',
                                displayField: 'name',
                                anchor: '-15',
                                store:Ext.create('Kits.store.Role')
                            }]
                        }],
                        buttons: [
                            { text:'保存',handler:function(){
                                win.close();
                            } },
                            { text:'取消',handler:function(){
                                win.close();
                            } }
                        ]
                    });
                    win.show();
                },
                iconCls: 'fa fa-plus-circle'
            }],
            region: 'center',
            store: Ext.create('Kits.store.User'),
            columns: [
                {
                    xtype: 'rownumberer'
                },
                {
                    text: '帐号',
                    width: 120,
                    dataIndex: 'code',
                    editor: {
                        allowBlank: false
                    }
                },
                {
                    text: '显示名',
                    width: 180,
                    dataIndex: 'name',
                    editor: {
                        allowBlank: false
                    }
                },
                {
                    text: '密码',
                    width: 180,
                    dataIndex: 'pass',
                    editor: {
                        allowBlank: false
                    }
                },
                {
                    text: '角色',
                    width: 100,
                    dataIndex: 'role',
                    editor: {
                        allowBlank: false,
                        xtype: 'combo',
                        displayField: 'name',
                        valueField: 'value',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['name', 'value'],
                            data: [{name: "管理员", value: "ADMIN"}, {name: "调度员", value: "SCHEDULE"}]
                        })
                    }
                },
                {
                    xtype: 'actioncolumn',
                    width: 30,
                    sortable: false,
                    menuDisabled: true,
                    items: [{
                        iconCls: 'x-fa fa-trash-o',
                        tooltip: '删除',
                        handler: function (view, recIndex, cellIndex, item, e, record) {
                            Ext.Msg.confirm('确认', '确认删除?', function (r) {
                                if (r == 'yes') record.drop();
                            }, this);
                        }
                    }]
                }

            ]
        }
    ]
})