Ext.define('Kits.view.gongShiShenhe.GongShiList', {
    extend: 'Ext.grid.Panel',
    title: '审核公式查看',
    columnLines: true,
    store: Ext.create('Kits.store.GongShi'),
    tbar: [{
        xtype: 'combobox',
        hideLabel: true,
        store: Ext.create('Kits.store.ZhiDu'),
        displayField: 'zdmc',
        typeAhead: true,
        queryMode: 'local',
        triggerAction: 'all',
        emptyText: '选制度...',
        selectOnFocus: true,
        width: 185,
        indent: true
    },{
        xtype: 'combobox',
        hideLabel: true,
        displayField: 'zdmc',
        typeAhead: true,
        queryMode: 'local',
        triggerAction: 'all',
        emptyText: '选数据表...',
        selectOnFocus: true,
        width: 185,
        indent: true
    },{
        text: '查询',
        handler: function () {
            alert('查询')
        },
    }],
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
            text: '公式',
            width:200,
            dataIndex: 'name'
        },
        {
            text: '描述',
            width:500,
            dataIndex: 'desc'
        },
        {
            text: '字段4',
            width:100,
            dataIndex: 'field4'
        },
        {
            text: '字段5',
            width:100,
            dataIndex: 'field5'
        },
        {
            text: '字段6',
            width:100,
            dataIndex: 'field6'
        }
    ]
})
;