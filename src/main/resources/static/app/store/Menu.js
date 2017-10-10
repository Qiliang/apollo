Ext.define('Kits.store.Menu', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',
        url: '/api/menu',
        method:'GET'

    },
    autoLoad: false,
    autoSync: false
});