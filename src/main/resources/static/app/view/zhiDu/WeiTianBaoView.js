Ext.define('Kits.view.zhiDu.WeiTianBaoView', {
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
                    width:'100%'
                }
            ]
        }
    ]
})
;