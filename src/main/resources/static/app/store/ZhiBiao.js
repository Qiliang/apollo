Ext.define('Kits.store.ZhiBiao', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.ZhiBiao',
    proxy: {
        type: 'rest',
        url: '/data/ZhiBiao.json',
        reader: {
            type: 'json',
            rootProperty: 'list',
            totalProperty: 'totalCount'
        }
    },
    autoLoad: true,
    autoSync: true

});