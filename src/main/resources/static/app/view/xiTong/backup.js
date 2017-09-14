Ext.define('Kits.view.xiTong.Backup', {
    extend: 'Ext.panel.Panel',
    title: '数据备份',
    layout: 'center',
    items: {
        border: true,
        layout: 'center',
        scrollable: false,
        width: 300,
        height: 300,
        items: [
            {
                layout: {
                    type: 'table',
                    columns: 1,
                    tdAttrs: { style: 'padding: 5px 10px;' }
                },
                tdAttrs: { style: 'padding: 5px 10px;' },
                items:[
                    {
                        xtype: 'button',
                        text: '立即备份',
                        scale: 'large'
                    }, {
                        xtype: 'button',
                        text: '定时备份',
                        scale: 'large'
                    }
                ]
            }
        ]


    }

});