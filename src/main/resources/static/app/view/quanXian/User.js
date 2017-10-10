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
        split: true
    },
    listeners:{
        afterrender:function (me) {
        }
    },
    pid:'',
    items: [
        {
            title: '组织机构',
            region: 'west',
            width: 240,
            xtype: 'treepanel',
            rootVisible: true,
            tools: [
                {
                    type: 'refresh',
                    tooltip: '刷新',
                    callback: function (panel, tool, event) {
                        panel.getStore().load();
                    }
                }
            ],
            store: Ext.create('Kits.store.BranchTree'),
            listeners: {
                cellclick : function (me, td, cellIndex, record, tr, rowIndex, e, eOpts )  {
                    var userGrid = Ext.getCmp("userGrid");
                    this.up('panel').pid = record.data.id;
                    userGrid.getStore().reload({
                        params : {
                            orgId : this.up('panel').pid
                        }
                    });
                }
            }
        },
        {
            title: '用户列表',
            collapsible: false,
            columnLines: true,
            xtype: 'grid',
            tools: [
                {
                    type: 'refresh',
                    tooltip: '刷新',
                    callback: function (panel, tool, event) {
                        panel.getStore().load();
                    }
                }
            ],
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                emptyMsg: "无数据...",
            },
            id:'userGrid',
            tbar: [
                {
                    xtype: 'textfield',
                    id:'displayName',
                    fieldLabel: '显示名',
                    name: 'displayName',
                }, {
                    xtype: 'button',
                    text: '查询',
                    handler: function (me) {
                        var grid = this.up('grid');
                        var panel = grid.up('panel');
                        var displayName = Ext.getCmp('displayName').getValue();
                        grid.getStore().load({params: { displayName: displayName,pid:panel.pid}});
                    }
                },{
                text: '添加用户',
                handler: function () {
                    var btn = this;
                    var pid = this.up('grid').up('panel').pid;
                    var win = Ext.create('Ext.window.Window', {
                        title: '添加用户',
                        height: 550,
                        width: 500,
                        layout: 'fit',
                        closeToolText: '关闭',
                        // closeAction:'hide',
                        modal: true,
                        items: [Ext.create('Kits.view.quanXian.UserView', {
                            callBack: function () {
                                btn.up('grid').getStore().load();
                                win.close();
                            },paraOrgId:pid
                        })]
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
                    dataIndex: 'loginName'
                },
                {
                    text: '显示名',
                    width: 180,
                    dataIndex: 'displayName'
                },
                {
                    text: '角色',
                    width: 100,
                    dataIndex: 'role'
                },
                {
                    xtype: 'actioncolumn',
                    width: 70,
                    text:'操作',
                    sortable: false,
                    menuDisabled: true,
                    items: [{
                        iconCls: 'x-fa fa-pencil-square-o',
                        tooltip: '修改',
                        handler: function(view, recIndex, cellIndex, item, e, record) {
                            var btn=this;
                            var win = Ext.create('Ext.window.Window', {
                                title: '修改用户',
                                height: 550,
                                width: 500,
                                layout: 'fit',
                                closeToolText:'关闭',
                                modal:true,
                                items: [Ext.create('Kits.view.quanXian.UserView',{
                                    paraId:record.data.id,
                                    callBack:function(){
                                        btn.up('grid').getStore().reload();
                                        win.close();
                                    }})]
                            });
                            win.show();
                        }
                    },'-',{
                        iconCls: 'x-fa fa-trash-o',
                        tooltip: '删除',
                        handler: function (view, recIndex, cellIndex, item, e, record) {
                            var btn=this;
                            Ext.Msg.confirm('确认', '确认删除?', function (r) {
                                if (r == 'yes') {
                                    Ext.Ajax.request({
                                        url: '/api/users/deleteById',
                                        params: { id: record.data.id},
                                        method: 'POST',
                                        success: function (response, options) {
                                            btn.up('grid').getStore().reload();
                                        },
                                        failure: function (response, options) {
                                            var res = JSON.parse(response.responseText);
                                            Ext.MessageBox.alert('失败', '错误信息：' + res.message);
                                        }
                                    });
                                }
                            }, this);
                        }
                    }]
                }

            ]
        }
    ]
})