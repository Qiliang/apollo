Ext.define('Kits.store.QiYe', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.QiYe',
    proxy: {
        type: 'ajax',
        url: '/api/company',
        method: 'GET',
        reader: {
            type: 'json',
            rootProperty: 'list',
            totalProperty: 'total'
        },
        limitParam: 'limit',
        pageParam: 'page'
    },
    autoLoad: true
});