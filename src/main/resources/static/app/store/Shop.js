Ext.define('Kits.store.Shop', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.Shop',
    proxy: {
        type: 'rest',
        url: '/meituan/shops'
    },
    autoLoad: true,
    autoSync: true
});