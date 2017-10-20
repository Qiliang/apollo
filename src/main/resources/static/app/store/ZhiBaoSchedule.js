Ext.define('Kits.store.ZhiBaoSchedule', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',
        url: '/api/directRptRemindTask',
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