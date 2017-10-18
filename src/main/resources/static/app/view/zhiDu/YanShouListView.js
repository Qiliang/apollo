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
    initComponent: function() {
        var me = this;
        me.items[0].store.proxy.extraParams={id:me.recordId,state:me.state};
        me.callParent();
    },
    items: [
        {
            xtype:'grid',
            store: {
                xtype: 'store.store',
                proxy: {
                    type: 'ajax',
                    url: '/api/directRptTask/getCheckList',
                    method: 'GET',
                    reader: {
                        type: 'json',
                        rootProperty: 'list',
                        totalProperty: 'total'
                    },
                    limitParam: 'limit',
                    pageParam: 'page'
                },
                autoLoad: true
            },
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                emptyMsg: "无数据...",
            },
            // tbar: [
            //     {
            //         xtype: 'textfield',
            //         fieldLabel: '行政区划/单位名称',
            //         labelWidth:150,
            //         name: 'objName',
            //     },
            //     {
            //         xtype: 'button',
            //         text: '查询',
            //         handler: function () {
            //             var grid = this.up('grid');
            //             grid.getStore().getProxy().setExtraParams({
            //                 objName: Ext.getCmp('viewName').getValue()
            //             })
            //             grid.getStore().load();
            //         }
            //     }],
            columns: [
                {
                    text: '行政区划/单位名称',
                    dataIndex: 'objName',
                    width:150
                },{
                    text: '报送任务名称',
                    dataIndex: 'name'
                },{
                    text: '所属制度',
                    dataIndex: 'systemName'
                },{
                    text: '所属表',
                    dataIndex: 'tableName'
                },{
                    text: '区验收状态',
                    dataIndex: 'areaSuggestionsState'
                },{
                    text: '区验收意见',
                    dataIndex: 'townSuggestions'
                },{
                    text: '镇验收状态',
                    dataIndex: 'townSuggestionsState'
                },{
                    text: '镇验收意见',
                    dataIndex: 'areaSuggestions'
                },{
                    text: '操作',
                    xtype: 'actioncolumn',
                    width: 70,
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
                                items: Ext.create('Kits.view.zhiDu.YanShouView', {buttons:[]})
                            }).show();
                        }
                    }]
                }
            ]
        }
    ]
})
;