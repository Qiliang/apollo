Ext.define('Kits.view.shouJIDuan.WenZhangList', {
    extend: 'Ext.grid.Panel',
    title: '文章列表',
    store: Ext.create('Kits.store.WenZhang'),
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
            fieldLabel: '标题',
            width: 220,
            name: 'title',
            id: 'title'
        },
        {
            xtype: 'button',
            text: '查询',
            handler: function () {
                var grid = this.up('grid');
                grid.getStore().load({
                    params: {
                        title: Ext.getCmp('title').getValue()
                    }
                });
            }
        }, {
            xtype: 'button',
            text: '添加',
            handler: function () {
                var center = Ext.getCmp('center');
                center.removeAll(true);
                center.add(Ext.create('Kits.view.shouJIDuan.wenZhangView', {
                    callBack: function () {
                        center.removeAll(true);
                        var WenZhangList = Ext.create('Kits.view.shouJIDuan.WenZhangList');
                        center.add(WenZhangList);
                        WenZhangList.getStore().load();
                    }
                }));
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
            text: '标题',
            dataIndex: 'title',
            width: 150
        },
        {
            text: '简介',
            dataIndex: 'introduction',
            width: 350
        },
        {
            text: '发布时间',
            dataIndex: 'createDate',
            width: 150
        },
        {
            text: '操作',
            xtype: 'actioncolumn',
            width: 70,
            items: [{
                iconCls: 'x-fa fa-pencil-square-o',
                tooltip: '修改',
                handler: function (view, recIndex, cellIndex, item, e, record) {
                    var center = Ext.getCmp('center');
                    center.removeAll(true);
                    center.add(Ext.create('Kits.view.shouJIDuan.wenZhangView', {
                        paraId: record.data.id,
                        callBack: function () {
                            center.removeAll(true);
                            var WenZhangList = Ext.create('Kits.view.shouJIDuan.WenZhangList');
                            center.add(WenZhangList);
                            WenZhangList.getStore().reload();
                        }
                    }));
                }
            }, '-', {
                iconCls: 'x-fa fa-trash-o',
                tooltip: '删除',
                handler: function (view, recIndex, cellIndex, item, e, record) {
                    var btn = this;
                    Ext.MessageBox.confirm('提示', '是否确认删除该条记录?', function (btn, text) {
                        Ext.Ajax.request({
                            url: '/api/company/deleteById',
                            params: {id: record.data.id},
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