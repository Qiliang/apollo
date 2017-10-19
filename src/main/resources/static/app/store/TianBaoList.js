Ext.define('Kits.store.TianBaoList', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',
        url: '/api/directRptTask/getFillHistoryList',
        reader: {
            type: 'json',
            rootProperty: 'list',
            totalProperty: 'totalCount'
        },
        limitParam:'limit',
        pageParam:'page'
    },
    autoLoad: true,
    autoSync: true

});