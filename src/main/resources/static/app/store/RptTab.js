Ext.define('Kits.store.RptTab', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.RptTab',
    proxy: {
        type: 'ajax',
        url: '/api/tab/list',
        actionMethods: {
            read   : 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        },
    },
    autoLoad: false,
    autoSync: true
});