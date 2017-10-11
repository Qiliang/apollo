Ext.define('Kits.store.WenZhang', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',
        url: '/api/content',
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