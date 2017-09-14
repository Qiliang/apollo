Ext.define('Kits.view.liShiShuju.ComplexQuery', {
    extend: 'Ext.grid.Panel',
    title: '历史综合数据查询',
    columnLines: true,
    store: Ext.create('Kits.store.Message'),
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
        }
    }],
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
            dataIndex: 'source'
        },
        {
            text: '消息正文',
            width:500,
            dataIndex: 'content'
        }
    ]
})
;