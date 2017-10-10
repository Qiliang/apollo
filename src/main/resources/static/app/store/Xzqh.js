Ext.define('Kits.store.Xzqh', {
    extend: 'Ext.data.TreeStore',
    proxy: {
        type: 'ajax',
        url: '/api/area',
        method:'get'
    },
    root: {
        text: '神龙架统计局',
        id: '1',
        expanded: true
    }
});