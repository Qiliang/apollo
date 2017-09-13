Ext.define('Kits.store.Message', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.Message',
    proxy: {
        type: 'rest',
        url: '/data/Message.json',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true

});