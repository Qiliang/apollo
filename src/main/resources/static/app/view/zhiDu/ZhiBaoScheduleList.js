Ext.define('Kits.view.zhiDu.ZhiBaoScheduleList', {
    extend: 'Ext.grid.Panel',
    title: '直报定时提醒列表',
    store: Ext.create('Kits.store.ZhiBaoSchedule', {pageSize: 3}),
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
            fieldLabel: '任务名称',
            name: 'rwmc',
        },
        {
            xtype: 'button',
            text: '查询',
            handler:function () {
                var grid = this.up('grid');
                grid.getStore().load();
            }
        },{
            xtype: 'button',
            text: '添加',
            handler: function () {
                Ext.create('Ext.window.Window', {
                    title: '添加直报',
                    height: 400,
                    width: 600,
                    layout: 'fit',
                    modal: true,
                    closeToolText:'关闭',
                    items: Ext.create('Kits.view.zhiDu.AddZhiBaoScheduleView', {})
                }).show();
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
            dataIndex: 'rwmc'
        },
        {
            text: '所属制度名称',
            dataIndex: 'sszdmc'
        },
        {
            text: '所属表名',
            dataIndex: 'ssbm'
        },
        {
            text: '提醒开始时间',
            dataIndex: 'txkssj'
        },
        {
            text: '提醒结束时间',
            dataIndex: 'txjssj'
        },
        {
            text: '提醒频率',
            dataIndex: 'txpl'
        },
        {
            text: '提醒时间',
            dataIndex: 'txsj'
        },
        {
            text: '操作',
            xtype:'actioncolumn',
            width:70,
            items: [{
                iconCls: 'x-fa fa-pencil-square-o',
                tooltip: '修改',
                handler: function(grid, rowIndex, colIndex) {
                    Ext.create('Ext.window.Window', {
                        title: '修改',
                        height: 400,
                        width: 600,
                        layout: 'fit',
                        closeToolText:'关闭',
                        // closeAction:'hide',
                        modal:true,
                        items: Ext.create('Kits.view.zhiDu.AddZhiBaoScheduleView',{a:new Date()})
                    }).show();
                    // alert("查看 " + rec.get('id'));
                }
            },'-',{
                iconCls: 'x-fa fa-trash-o',
                tooltip: '删除',
                handler: function (grid, rowIndex, colIndex) {
                    Ext.MessageBox.confirm('提示', '是否确认删除该条记录?', function (btn, text) {
                    }, this);
                }
            }]
        }

    ]
})
;