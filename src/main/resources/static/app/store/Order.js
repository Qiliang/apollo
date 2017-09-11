Ext.define('Kits.store.Order', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.Order',
    proxy: {
        type: 'rest',
        url: '/meituan/orders',
        limitParam: 'size',
        pageParam: 'page',
        reader: {
            type: 'json',
            rootProperty: 'content',
            totalProperty: 'totalElements',
        }
    },
    remoteSort: true,
    sorters: [{
        property: 'time',
        direction: 'DESC'
    }],
    autoLoad: true

});