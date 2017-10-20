Ext.define('Kits.store.SystemInfo', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.SystemInfo',
    proxy: {
        type: 'ajax',
        url: '/api/info/list',
        method:'GET',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        },
    },
    autoLoad: true,
    autoSync: true
});