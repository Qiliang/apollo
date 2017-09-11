Ext.define('Kits.view.Order', {
    extend: 'Ext.grid.Panel',
    title: '订单',
    store: Ext.create('Kits.store.Order'),

    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                panel.getStore().load();
            }
        }
    ],

    columns: [
        {text: 'id', dataIndex: 'id',flex:1},
        {text: '描述', dataIndex: 'description',flex:4},
        {text: '下单时间', dataIndex: 'time', width: 150, xtype: 'datecolumn', format: 'Y-m-d H:i:s'},
        {text: '状态', dataIndex: 'state',flex:1},
        {text: '客户', dataIndex: 'userName',flex:1},
        {text: '地址', dataIndex: 'userAddress',flex:1},
        {text: '电话', dataIndex: 'userPhone',flex:1},
        {text: '备注', dataIndex: 'remark',flex:1},
        {text: '店铺', dataIndex: 'shopName',flex:1},
        {text: '系统创建时间', dataIndex: 'createdDate', width: 150, xtype: 'datecolumn', format: 'Y-m-d H:i:s'},
        {text: '系统最后修改时间', dataIndex: 'lastModifiedDate', width: 150, xtype: 'datecolumn', format: 'Y-m-d H:i:s'}
        // {text: '店铺经度', dataIndex: 'shopLng'},
        // {text: '店铺纬度', dataIndex: 'shopLat'},
        // {text: '用户经度', dataIndex: 'orderLng'},
        // {text: '用户纬度', dataIndex: 'orderLat'}
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display"
    }
});