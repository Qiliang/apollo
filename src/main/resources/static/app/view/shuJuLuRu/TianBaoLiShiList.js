Ext.define('Kits.view.shuJuLuRu.TianBaoLiShiList', {
    extend: 'Ext.grid.Panel',
    title: '填报历史列表',
    store: Ext.create('Kits.store.TianBaoList'),
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
            id:'viewName'
        },
        {
            xtype: 'button',
            text: '查询',
            handler:function () {
                var grid = this.up('grid');
                grid.getStore().getProxy().setExtraParams({
                    name: Ext.getCmp('viewName').getValue()
                })
                grid.getStore().load();
            }
        }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '任务名称',
            dataIndex: 'name',
            width:220,
        },
        {
            text: '报送开始时间',
            dataIndex: 'startDate',
            width:150
        },
        {
            text: '报送截止时间',
            dataIndex: 'endDate',
            width:150
        },
        {
            text: '所属制度名称',
            dataIndex: 'systemName'
        },
        {
            text: '所属表名',
            dataIndex: 'tableName'
        },
        {
            text: '填报时间',
            dataIndex: 'fillDate',
            width:150
        },
        {
            text: '操作',
            xtype:'actioncolumn',
            width:70,
            items: [{
                iconCls: 'x-fa fa-eye',
                tooltip: '查看',
                handler: function (view, recIndex, cellIndex, item, e, record) {
                    var btn = this;
                    var win = Ext.create('Ext.window.Window', {
                        title: '查看',
                        height: 700,
                        width: 1100,
                        layout: 'fit',
                        closeToolText:'关闭',
                        // closeAction:'hide',
                        modal:true,
                        items: Ext.create('Kits.view.shuJuLuRu.TianBaoView',{
                            isView: true, recordData: record,
                            callBack: function () {
                                btn.up('grid').getStore().reload();
                                win.close();
                            }})
                    });
                    win.show();
                }
            }]
        }

    ]
})
;