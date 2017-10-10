Ext.define('Kits.store.Branch', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',
        url: '/api/org/getOrgListByPId',
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