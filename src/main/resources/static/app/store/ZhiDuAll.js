Ext.define('Kits.store.ZhiDuAll', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.ZhiDu',
    proxy: {
        type: 'ajax',
        url: '/api/systemInfo/fillPersonType',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: false
});