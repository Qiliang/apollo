Ext.define('Kits.store.ZhiDuQiYe', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.ZhiDu',
    proxy: {
        type: 'ajax',
        url: '/api/systemInfo/fillPersonType',
        extraParams:{fillPersonType:'qy'},
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: false
});