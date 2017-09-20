Ext.define('Kits.store.GongShi', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.GongShi',
    proxy: {
        type: 'rest',
        url: '/data/GongShi.json',
        reader: {
            type: 'json',
            rootProperty: 'list',
            totalProperty: 'totalCount'
        }
    },
    autoLoad: true,
    autoSync: true

});