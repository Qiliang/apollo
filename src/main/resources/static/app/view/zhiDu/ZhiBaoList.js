Ext.define('Kits.view.zhiDu.ZhiBaoList', {
    extend: 'Ext.grid.Panel',
    title: '直报列表',
    store: Ext.create('Kits.store.ZhiBao', {}),
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
            fieldLabel: '报送任务名称',
            name: 'name',
            id: 'viewName'
        },
        {
            xtype: 'button',
            text: '查询',
            handler: function () {
                var grid = this.up('grid');
                grid.getStore().getProxy().setExtraParams({
                    name: Ext.getCmp('viewName').getValue()
                })
                grid.getStore().load();
            }
        },
        {
            xtype: 'button',
            text: '添加',
            handler: function () {
                var btn = this;
                var win = Ext.create('Ext.window.Window', {
                    title: '添加直报',
                    height: 400,
                    width: 600,
                    layout: 'fit',
                    modal: true,
                    closeToolText: '关闭',
                    items: Ext.create('Kits.view.zhiDu.AddZhiBaoView', {
                        callBack: function () {
                            win.close();
                            btn.up('grid').getStore().load();
                        }
                    })
                });
                win.show();
            }
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        emptyMsg: "无数据...",
    },

    gotoYTb: function (record) {
        Ext.create('Ext.window.Window', {
            title: '已填报单位',
            height: 400,
            width: 600,
            layout: 'fit',
            modal: true,
            closeToolText: '关闭',
            items: Ext.create('Kits.view.zhiDu.YiTianBaoView', {recordId:record.data.id,state:'ytb'})
        }).show();
    },

    gotoWTb: function (record) {
        Ext.create('Ext.window.Window', {
            title: '未填报单位',
            height: 400,
            width: 400,
            layout: 'fit',
            modal: true,
            closeToolText: '关闭',
            items: Ext.create('Kits.view.zhiDu.WeiTianBaoView', {recordId:record.data.id,state:'wtb'})
        }).show();
    },

    listeners: {
        cellclick: function (view, td, cellIndex, record, tr, rowIndex, e, eOpts) {
            //record.get('已填报')
            var grid = view.up('grid');
            var fieldName = grid.getColumns()[cellIndex].dataIndex;
            if (fieldName === 'ytb') {
                grid.gotoYTb(record);
            } else if (fieldName === 'wtb') {
                grid.gotoWTb(record);
            }
        }
    },
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '报送任务名称',
            dataIndex: 'name'
        },
        {
            text: '开始时间',
            dataIndex: 'startDate'
        },
        {
            text: '结束时间',
            dataIndex: 'endDate'
        },
        {
            text: '所属制度',
            dataIndex: 'systemName'
        },
        {
            text: '所属表',
            dataIndex: 'tableName'
        },
        {
            text: '已填报',
            dataIndex: 'ytb',
            renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                if (value && value > 0)
                    return "<a href='javascript:void(0)'>" + value + "</a>";
                else
                    return value;
            }
        },
        {
            text: '未填报',
            dataIndex: 'wtb',
            renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                if (value && value > 0)
                    return "<a href='javascript:void(0)'>" + value + "</a>";
                else
                    return value;
            }
        },
        {
            text: '填报率',
            dataIndex: 'tbl'
        },
        {
            text: '操作',
            xtype: 'actioncolumn',
            width: 220,
            items: [{
                iconCls: 'x-fa fa-check',
                tooltip: '数据验收',
                handler: function (view, recIndex, cellIndex, item, e, record) {
                    Ext.create('Ext.window.Window', {
                        title: '数据验收',
                        height: 600,
                        width: 1000,
                        layout: 'fit',
                        modal: true,
                        closeToolText: '关闭',
                        items: Ext.create('Kits.view.zhiDu.YanShouListView', {recordId:record.data.id})
                    }).show();
                    // alert("查看 " + rec.get('id'));
                }
            }, '-', {
                iconCls: 'x-fa fa-trash-o',
                tooltip: '删除',
                handler: function (view, recIndex, cellIndex, item, e, record) {
                    var btn=this;
                    Ext.Msg.confirm('确认', '确认删除?', function (r) {
                        if (r == 'yes') {
                            Ext.Ajax.request({
                                url: '/api/directRptTask/deleteById',
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
})
;