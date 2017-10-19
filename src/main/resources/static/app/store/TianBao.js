Ext.define('Kits.store.TianBao', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',
        url: '/api/directRptTask/getFillList',
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