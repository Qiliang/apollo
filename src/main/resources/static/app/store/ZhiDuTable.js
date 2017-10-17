Ext.define('Kits.store.ZhiDuTable', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.ZhiDuTable',
    proxy: {
        type: 'ajax',
        url: '/api/directRptTask/getListByUserRole',
        reader: {
            type: 'json'
        }

    },
    autoLoad: true,
    autoSync: false
});