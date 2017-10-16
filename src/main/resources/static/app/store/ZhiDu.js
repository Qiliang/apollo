Ext.define('Kits.store.ZhiDu', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.ZhiDu',
    proxy: {
        type: 'ajax',
        url: '/api/systemInfo/all',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: false
});