Ext.define('Kits.view.diaoChaDuiXiang.QiYeList', {
    extend: 'Ext.grid.Panel',
    title: '企业列表',
    store: Ext.create('Kits.store.QiYe'),
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                panel.getStore().load();
            }
        }
    ],
    tbar: [
        {
            xtype: 'textfield',
            fieldLabel: '详细名称',
            width: 220,
            name: 'xxmc',
            id: 'xxmc'
        },
        {
            xtype: 'textfield',
            fieldLabel: '组织机构代码',
            name: 'zzjgdm',
            id: 'zzjgdm'
        },
        {
            xtype: 'button',
            text: '查询',
            handler: function () {
                var grid = this.up('grid');
                grid.getStore().load({
                    params: {
                        xxmc: Ext.getCmp('xxmc').getValue(),
                        zzjgdm: Ext.getCmp('zzjgdm').getValue()
                    }
                });
            }
        }, {
            xtype: 'button',
            text: '添加',
            handler: function () {
                var btn = this;
                var win = Ext.create('Ext.window.Window', {
                    title: '添加企业',
                    height: 400,
                    width: 600,
                    layout: 'fit',
                    modal: true,
                    closeToolText: '关闭',
                    items: Ext.create('Kits.view.diaoChaDuiXiang.AddQiYeView', {
                        callBack: function () {
                            btn.up('grid').getStore().load();
                            win.close();
                        }
                    })
                });
                win.show();
            }
        }, {
            xtype: 'button',
            text: '导入',
            handler: function () {
                var btn = this;
                var win = Ext.create('Ext.window.Window', {
                    title: '添加直报',
                    height: 200,
                    width: 400,
                    layout: 'fit',
                    modal: true,
                    closeToolText: '关闭',
                    items: Ext.create('Kits.view.diaoChaDuiXiang.importView', {
                        callBack: function () {
                            btn.up('grid').getStore().load();
                            win.close();
                    }})
                });
                win.show();
            }
        }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        emptyMsg: "无数据...",
    },
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '详细名称',
            dataIndex: 'xxmc',
            width:350
        },
        {
            text: '组织机构代码',
            dataIndex: 'zzjgdm'
        },
        {
            text: '所在地址',
            dataIndex: 'xxdz',
            width:250
        },
        {
            text: '行业类别代码',
            dataIndex: 'hydm11'
        },
        {
            text: '登记注册类别',
            dataIndex: 'djzclx'
        },
        {
            text: '操作',
            xtype: 'actioncolumn',
            width: 70,
            items: [{
                iconCls: 'x-fa fa-pencil-square-o',
                tooltip: '修改',
                handler: function (view, recIndex, cellIndex, item, e, record) {
                    var btn = this;
                    var win = Ext.create('Ext.window.Window', {
                        title: '修改',
                        height: 400,
                        width: 600,
                        layout: 'fit',
                        closeToolText: '关闭',
                        // closeAction:'hide',
                        modal: true,
                        items: Ext.create('Kits.view.diaoChaDuiXiang.AddQiYeView',{
                            paraId:record.data.id,
                            callBack:function(){
                                btn.up('grid').getStore().reload();
                                win.close();
                            }})
                    })
                    win.show();
                    // alert("查看 " + rec.get('id'));
                }
            }, '-', {
                iconCls: 'x-fa fa-trash-o',
                tooltip: '删除',
                handler: function (view, recIndex, cellIndex, item, e, record) {
                    var btn = this;
                    Ext.MessageBox.confirm('提示', '是否确认删除该条记录?', function (btn, text) {
                        Ext.Ajax.request({
                            url: '/api/company/deleteById',
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
                    }, this);
                }
            }]
        }

    ]
})
;