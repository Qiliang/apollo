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
    items: [
        {
            width: 200,
            region: 'west',
            items:Ext.create('Ext.panel.Panel',{html:"111111"})
            //items:Ext.create('Kits.view.Shop',{})
        },
        {
            collapsible: false,
            layout: 'fit',
            region: 'center',
            margin: '5 0 0 0',
            //items:Ext.create('Kits.view.Shop',{})
        }
    ]
})
;