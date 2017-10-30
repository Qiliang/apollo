Ext.define('Kits.view.Menu', {
    extend: 'Ext.panel.Panel',
    layout: 'fit',
    id:'mainMenu',
    listeners: {
        afterrender: function (me) {
            var token = Ext.util.Cookies.get('token');
            if (token) {
                Ext.getCmp('mainMenuList').setStore({
                    type: 'tree',
                    proxy: {
                        type: 'ajax',
                        url: '/api/menu/menuTreeByUserID',
                        method: 'GET'
                    },
                    root: {
                        text: 'Ext JS',
                        id: 'src',
                        expanded: true
                    },
                    folderSort: false,
                    sorters: [{
                        property: 'sort',
                        direction: 'ASC'
                    }]
                });
            }
        }
    },
    items: {
        id: 'mainMenuList',
        xtype: 'treelist',
        rootVisible: false,
        useArrows: true,
        //ui:'nav',
        listeners: {
            selectionchange: function (me, selected, eOpts) {
                //selected.set('expanded',true)
                var center = Ext.getCmp('center');
                center.removeAll(true);
                var cmp = selected.get('cmp')
                if (!cmp)return;
                center.add(Ext.create(cmp));
            }
        }
    }
});
