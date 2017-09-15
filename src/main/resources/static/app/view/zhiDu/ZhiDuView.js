Ext.define('Kits.view.zhiDu.ZhiDuView', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border'
    ],
    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: false,
        split: true,
        bodyPadding: 10
    },
    listeners:{
        afterrender:function (me) {
            console.log(me.a)
        }
    },
    items: [
        {
            width: 200,
            region: 'west',
            xtype:'grid',
            store: Ext.create('Kits.store.ZhiDuTable', {}),
            columns: [
                {
                    text: '表名称',
                    dataIndex: 'name',
                    width:'100%'
                }
            ],
            listeners: {
                select : function(grid, record, index, eOpts ){
                    var cmp = Ext.getCmp('ZhiDuViewCenter');
                    if(cmp)
                        cmp.update(record.get("tableHtml"));
                    console.log(record.get("name"));
                }
            }
        },
        {
            collapsible: false,
            xtype:'panel',
            id:'ZhiDuViewCenter',
            layout: 'fit',
            region: 'center',
            margin: '5 0 0 0',
            html:'请点击左侧选择要查看的表样'
        }
    ]
})
;