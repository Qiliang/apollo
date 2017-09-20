Ext.define('Kits.view.zhiDu.ZhiDuView', {
    extend: 'Ext.panel.Panel',
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
                    cmp.removeAll(true);
                    cmp.add(Ext.create(record.get("tableName"),{height:2000,width:800}));
                }
            }
        },
        {
            xtype:'panel',
            layout: 'table',
            columns: 1,
            tableAttrs: {
                style: {
                    width: '100%'
                }
            },
            region: 'center',
            margin: '5 0 0 0',
            scrollable:true,
            items:[{
                xtype:'panel',
                id:'ZhiDuViewCenter',
                layout: 'fit',
                html:'请点击左侧选择要查看的表样'
            }]
        }
    ]
})
;