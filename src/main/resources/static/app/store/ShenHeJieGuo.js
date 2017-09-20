Ext.define('Kits.store.ShenHeJieGuo', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.ShenHeJieGuo',
    proxy: {
        type: 'rest',
        url: '/data/ShenHeJieGuo.json',
        reader: {
            type: 'json',
            rootProperty: 'list',
            totalProperty: 'totalCount'
        }
    },
    autoLoad: true,
    autoSync: true

});