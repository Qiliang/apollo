Ext.define('Kits.store.Role', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',
        url: '/role/getRoleList',
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