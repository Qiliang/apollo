Ext.define('Kits.view.zhiDu.YanShouListView', {
    extend: 'Ext.panel.Panel',
    layout: 'fit',
    bodyBorder: false,
    defaults: {
        collapsible: false,
        split: true,
        bodyPadding: 10
    },
    listeners:{
        afterrender:function (me) {
        }
    },
    items: [
        {
            xtype:'grid',
            store: Ext.create('Kits.store.YanShou', {}),
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                emptyMsg: "无数据...",
            },
            tbar: [
                {
                    xtype: 'textfield',
                    fieldLabel: '行政区划/单位名称',
                    labelWidth:150,
                    name: 'ssdw',
                },
                {
                    xtype: 'button',
                    text: '查询',
                    handler: function () {
                        var grid = this.up('grid');
                        grid.getStore().load();
                    }
                }],
            columns: [
                {
                    text: '行政区划/单位名称',
                    dataIndex: 'ssdw'
                },{
                    text: '报送任务名称',
                    dataIndex: 'bsrwmc'
                },{
                    text: '所属制度',
                    dataIndex: 'sszd'
                },{
                    text: '所属表',
                    dataIndex: 'ssb'
                },{
                    text: '区验收状态',
                    dataIndex: 'qyszt'
                },{
                    text: '区验收意见',
                    dataIndex: 'qysyj'
                },{
                    text: '镇验收意见',
                    dataIndex: 'zysyj'
                },{
                    text: '镇验收意见',
                    dataIndex: 'zysyj'
                },{
                    text: '操作',
                    xtype: 'actioncolumn',
                    width: 220,
                    items: [{
                        iconCls: 'x-fa fa-check',
                        tooltip: '验收',
                        handler: function (grid, rowIndex, colIndex) {
                            Ext.create('Ext.window.Window', {
                                title: '数据验收',
                                height: 700,
                                width: 900,
                                layout: 'fit',
                                modal: true,
                                closeToolText:'关闭',
                                items: Ext.create('Kits.view.zhiDu.YanShouView', {})
                            }).show();
                            // alert("查看 " + rec.get('id'));
                        }
                    }, '-', {
                        iconCls: 'x-fa fa-eye',
                        tooltip: '查看',
                        handler: function (grid, rowIndex, colIndex) {
                            Ext.create('Ext.window.Window', {
                                title: '数据验收查看',
                                height: 700,
                                width: 900,
                                layout: 'fit',
                                modal: true,
                                closeToolText:'关闭',
                                items: Ext.create('Kits.view.zhiDu.YanShouView', {bbar:[]})
                            }).show();
                        }
                    }]
                }
            ]
        }
    ]
})
;