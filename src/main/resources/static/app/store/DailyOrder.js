Ext.define('Kits.store.DailyOrder', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.Order',
    proxy: {
        type: 'rest',
        url: '/api/dailyOrders/stat'
    },
    autoLoad: true

});