Ext.define('Kits.view.zhiDu.ZhiDuList', {
    extend: 'Ext.grid.Panel',
    title: '制度列表',
    store: Ext.create('Ext.data.Store', {
        fields: ['zdmc', 'fbnf', 'cjsj','cjr','id'],
        pageSize: 3,
        data: [
            { 'zdmc': '制度1',  'fbnf': '2017','cjsj': '2017-01-01 13:00:00','cjr':'张三','id':'1' },
            { 'zdmc': '制度1',  'fbnf': '2017','cjsj': '2017-01-01 13:00:00','cjr':'张三','id':'2' },
            { 'zdmc': '制度1',  'fbnf': '2017','cjsj': '2017-01-01 13:00:00','cjr':'张三','id':'3' },
            { 'zdmc': '制度1',  'fbnf': '2017','cjsj': '2017-01-01 13:00:00','cjr':'张三','id':'4' },
            { 'zdmc': '制度1',  'fbnf': '2017','cjsj': '2017-01-01 13:00:00','cjr':'张三','id':'5' },
            { 'zdmc': '制度1',  'fbnf': '2017','cjsj': '2017-01-01 13:00:00','cjr':'张三','id':'6' },
            { 'zdmc': '制度1',  'fbnf': '2017','cjsj': '2017-01-01 13:00:00','cjr':'张三','id':'7' },
            { 'zdmc': '制度1',  'fbnf': '2017','cjsj': '2017-01-01 13:00:00','cjr':'张三','id':'8' },
            { 'zdmc': '制度1',  'fbnf': '2017','cjsj': '2017-01-01 13:00:00','cjr':'张三','id':'9' },
        ]
    }),
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
            fieldLabel: '制度名称',
            name: 'zdmc',
        },
        {
            xtype: 'combobox',
            fieldLabel: '发布年份',
            queryMode: 'local',
            name:'fbnf',
            displayField: 'value',
            valueField: 'key',
            editable: false,
            emptyText: "--请选择年份--",
            store: [
                { key: '', value: '全部' },
                { key: '2017', value: '2017年' },
                { key: '2016', value: '2016年' },
                { key: '2015', value: '2015年' }
            ]
        },
        {
            xtype: 'button',
            text: '查询',
            handler:function () {
                alert('查询！！！');
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
            text: '制度名称',
            dataIndex: 'zdmc'
        },
        {
            text: '发布年份',
            dataIndex: 'fbnf'
        },
        {
            text: '创建时间',
            dataIndex: 'cjsj'
        },
        {
            text: '创建人',
            dataIndex: 'cjr'
        },
        {
            text: '操作',
            xtype:'actioncolumn',
            width:50,
            items: [{
                iconCls: 'x-fa fa-eye',
                tooltip: '查看',
                handler: function(grid, rowIndex, colIndex) {
                    Ext.create('Ext.window.Window', {
                        title: '查看制度',
                        height: 600,
                        width: 900,
                        layout: 'fit',
                        modal:true,
                        items: Ext.create('Kits.view.zhiDu.ZhiDuView',{})
                    }).show();
                    // alert("查看 " + rec.get('id'));
                }
            }]
        }

    ]
})
;