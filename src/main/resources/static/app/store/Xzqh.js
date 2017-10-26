Ext.define('Kits.store.Xzqh', {
    extend: 'Ext.data.TreeStore',
    proxy: {
        type: 'ajax',
        url: '/api/area',
        method:'get'
    }
});