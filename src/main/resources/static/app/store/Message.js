Ext.define('Kits.store.Message', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',
        url: '/api/messageInfo',
        reader: {
            type: 'json',
            rootProperty: 'list',
            totalProperty: 'total'
        },
        limitParam:'limit',
        pageParam:'page'

    },
    autoLoad: true,
    autoSync: false

});