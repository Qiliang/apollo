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
    items: [
        {
            xtype:'grid',
            store: Ext.create('Kits.store.YiTianBao', {}),
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                emptyMsg: "无数据...",
            },
            columns: [
                {
                    text: '行政区划/单位名称',
                    dataIndex: 'dwmc',
                    width:'100%'
                }
            ]
        }
    ]
})
;