Ext.define('Kits.store.AllRole', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',
        url: '/api/role/getAllRoleList',
        reader: {
            type: 'json'
        }
    },
    autoLoad: false,
    autoSync: false
});