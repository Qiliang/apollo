Ext.define('Kits.store.RoleMenu', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',
        url: '/menu/menuByRoleId',
        method:'GET'

    },
    autoLoad: false,
    autoSync: false
});