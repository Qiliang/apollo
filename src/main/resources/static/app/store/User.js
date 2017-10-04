Ext.define('Kits.store.User', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.User',
    proxy: {
        type: 'ajax',
        url: '/users',
        method:'GET',
        reader: {
            type: 'json',
            rootProperty: 'list',
            totalProperty: 'total'
        },
        limitParam:'limit',
        pageParam:'page'
    },
    autoLoad: true
});