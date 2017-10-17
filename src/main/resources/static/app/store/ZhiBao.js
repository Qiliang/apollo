Ext.define('Kits.store.ZhiBao', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.ZhiBao',
    proxy: {
        type: 'ajax',
        url: '/api/directRptTask/getListByUserID',
        reader: {
            type: 'json',
            rootProperty: 'list',
            totalProperty: 'total'
        },
        limitParam:'limit',
        pageParam:'page'

    },
    autoLoad: true,
    autoSync: false
});