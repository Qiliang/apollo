Ext.define('Kits.view.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border'
    ],
    layout: 'border',
    bodyBorder: false,
    listeners: {
        afterRender: function (me, eOpts) {
            var menu = Ext.getCmp('mainMenuList');
            menu.getStore().addAfterListener("load",function(){
                menu.setSelection(menu.getStore().getAt(0))
            })
            //menu.setSelection();
        }
    },

    items: [
        {
            region: 'north',
            height: 40,
            layout: 'border',
            bodyBorder: false,
            margin: '0 0 5 0',
            items: [{region: 'center', html: '欢迎进入系统'},
                {
                    region: 'east', xtype: 'button', text: '退出',
                    handler: function () {
                        Ext.util.Cookies.set('token', '');
                        window.location.reload();
                    }
                }]
        }
        ,
        {
            collapsible: false,
            layout: 'border',
            bodyBorder: false,
            defaults: {
                collapsible: false,
                split: true,
                bodyPadding: 10
            },
            region: 'center',
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
                },
                {
                    margin: '0 0 0 0',
                    id:'center',
                    region: 'center',
                    layout:'fit'
                }
            ]
            //items:Ext.create('Kits.view.Shop',{})
        }
    ]

});
