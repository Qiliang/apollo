Ext.define('Kits.store.User', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.User',
    proxy: {
        type: 'rest',
        url: '/data/User.json',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true

});