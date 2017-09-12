Ext.define('Kits.view.zhiDu.YiTianBaoView', {
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
            width: 200,
            xtype:'grid',
            store: Ext.create('Kits.store.YiTianBao', {}),
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                emptyMsg: "无数据...",
            },
            columns: [
                {
                    text: '行政区划/单位名称',
                    dataIndex: 'dwmc',
                    width:'50%'
                },
                {
                    text: '填报时间',
                    dataIndex: 'tbsj',
                    width:220
                },
                {
                    text: '操作',
                    xtype:'actioncolumn',
                    width:50,
                    items: [{
                        iconCls: 'x-fa fa-eye',
                        tooltip: '查看',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            Ext.create('Ext.window.Window', {
                                title: '查看填报内容',
                                height: 600,
                                width: 700,
                                layout: 'fit',
                                closeToolText:'关闭',
                                // closeAction:'hide',
                                modal:true,
                                items: Ext.create('Kits.view.zhiDu.TianBaoTableView',{a:rec.get('id')})
                            }).show();
                            // alert("查看 " + rec.get('id'));
                        }
                    }]
                }
            ]
        }
    ]
})
;