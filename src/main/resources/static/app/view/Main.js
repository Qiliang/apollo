Ext.define('Kits.view.Main', {
    extend: 'Ext.container.Viewport',
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
    listeners: {
        afterRender: function (me, eOpts) {
            var menu = Ext.ComponentQuery.query('#mainMenu')[0];
            menu.setSelection(menu.getStore().getAt(0))
            //menu.setSelection();
            console.log(menu)
        }
    },

    items: [
        {
            width: 200,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            border: false,
            scrollable: 'y',
            title: '',
            region: 'west',
            colspan: 2,
            items: Ext.create('Kits.view.Menu', {}),
            tools: [
                {
                    type: 'unpin',
                    id:'menuUnpin',
                    tooltip: '收起菜单',
                    callback: function (panel, tool, event) {
                        panel.down('#menuPin').show();
                        var menu = panel.down('#mainMenu');
                        menu.setMicro(true);
                        var ct = menu.ownerCt;
                        ct.oldWidth = ct.width;
                        ct.setWidth(44);
                        this.hide();
                    }
                },
                {
                    type: 'pin',
                    id:'menuPin',
                    hidden: true,
                    tooltip: '展开菜单',
                    callback: function (panel, tool, event) {
                        panel.down('#menuUnpin').show();
                        var menu = panel.down('#mainMenu');
                        menu.setMicro(false);
                        var ct = menu.ownerCt;
                        if(ct.oldWidth)ct.setWidth(ct.oldWidth);
                        this.hide();
                    }
                }
            ],

        },
        {
            collapsible: false,
            id:'center',
            layout: 'fit',
            region: 'center',
            margin: '5 0 0 0',
            //items:Ext.create('Kits.view.Shop',{})
        }
    ]

});
