Ext.define('Kits.store.Rider', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.Rider',
    proxy: {
        type: 'rest',
        url: '/api/riders',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true

});