Ext.define('Kits.view.gongShiShenhe.GongShiShenHeList', {
    extend: 'Ext.grid.Panel',
    title: '基础报送信息公式审核',
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
    },{
        text: '审核',
        handler: function () {
            Ext.create('Ext.window.Window', {
                title: '基础数据审核结果',
                height: 700,
                width: 1100,
                layout: 'fit',
                modal: true,
                closeToolText:'关闭',
                items: Ext.create('Kits.view.gongShiShenhe.ShenHeJieGuoView', {})
            }).show();
        }
    }],
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
            text: '是否应用',
            width:100,
            dataIndex: 'isUse'
        }
    ]
})
;