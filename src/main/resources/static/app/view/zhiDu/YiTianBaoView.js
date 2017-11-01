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
    initComponent: function() {
        var me = this;
        me.items[0].store.proxy.extraParams={id:me.recordId,state:me.state};
        me.callParent();
    },
    items: [
        {
            width: 200,
            xtype:'grid',
            store: {
                xtype: 'store.store',
                proxy: {
                    type: 'ajax',
                    url: '/api/directRptTask/getListByFillState',
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
            columns: [
                {
                    text: '行政区划/单位名称',
                    dataIndex: 'objName',
                    width:'50%'
                },
                {
                    text: '填报时间',
                    dataIndex: 'fillDate',
                    width:220
                },
                {
                    text: '操作',
                    xtype:'actioncolumn',
                    width:50,
                    items: [{
                        iconCls: 'x-fa fa-eye',
                        tooltip: '查看',
                        handler: function(view, recIndex, cellIndex, item, e, record) {
                            var btn = this;
                            var win = Ext.create('Ext.window.Window', {
                                title: '查看',
                                height: 700,
                                width: 1100,
                                layout: 'fit',
                                closeToolText: '关闭',
                                // closeAction:'hide',
                                modal: true,
                                items: Ext.create('Kits.view.shuJuLuRu.TianBaoView', {
                                    isView: true, recordData: record,
                                    callBack: function () {
                                        btn.up('grid').getStore().reload();
                                        win.close();
                                    }
                                })
                            });
                            win.show();
                        }
                    }]
                }
            ]
        }
    ]
})
;