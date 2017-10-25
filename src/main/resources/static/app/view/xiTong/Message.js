Ext.define('Kits.view.xiTong.Message', {
    extend: 'Ext.grid.Panel',
    title: '消息列表',
    columnLines: true,
    store: Ext.create('Kits.store.Message'),
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
    columns: [
        {
            xtype: 'rownumberer',
            text: '序号'
        },
        {
            text: '时间',
            width:200,
            dataIndex: 'createTime'
        },
        {
            text: '来源',
            width:300,
            dataIndex: 'formName'
        },
        {
            text: '消息正文',
            width:500,
            dataIndex: 'content'
        }
    ]
})
;