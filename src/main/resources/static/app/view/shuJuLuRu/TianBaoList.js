Ext.define('Kits.view.shuJuLuRu.TianBaoList', {
    extend: 'Ext.grid.Panel',
    title: '填报列表',
    store: Ext.create('Kits.store.ZhiBao', {pageSize: 3}),
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
            name: 'bsrwmc',
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
                var grid = this.up('grid');
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
            dataIndex: 'bsrwmc',
            width:220,
        },
        {
            text: '报送开始时间',
            dataIndex: 'kssj',
            width:150
        },
        {
            text: '报送截止时间',
            dataIndex: 'jssj',
            width:150
        },
        {
            text: '所属制度名称',
            dataIndex: 'sszd'
        },
        {
            text: '所属表名',
            dataIndex: 'ssb'
        },
        {
            text: '验收状态',
            dataIndex: 'yszt'
        },
        {
            text: '操作',
            xtype:'actioncolumn',
            width:70,
            items: [{
                iconCls: 'x-fa fa-pencil-square-o',
                tooltip: '填报',
                handler: function(grid, rowIndex, colIndex) {
                    //TODO 判断验收状态是否为未验收，未验收前可以修改
                    Ext.create('Ext.window.Window', {
                        title: '填报',
                        height: 700,
                        width: 1100,
                        layout: 'fit',
                        closeToolText:'关闭',
                        // closeAction:'hide',
                        modal:true,
                        items: Ext.create('Kits.view.shuJuLuRu.TianBaoView',{a:new Date()})
                    }).show();
                    // alert("查看 " + rec.get('id'));
                }
            },'-',{
                iconCls: 'x-fa fa-eye',
                tooltip: '查看',
                handler: function (grid, rowIndex, colIndex) {
                    Ext.create('Ext.window.Window', {
                        title: '查看',
                        height: 700,
                        width: 1100,
                        layout: 'fit',
                        closeToolText:'关闭',
                        // closeAction:'hide',
                        modal:true,
                        items: Ext.create('Kits.view.shuJuLuRu.TianBaoView',{a:new Date()})
                    }).show();
                }
            }]
        }

    ]
})
;