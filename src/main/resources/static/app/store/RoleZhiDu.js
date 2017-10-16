Ext.define('Kits.store.RoleZhiDu', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.ZhiDu',
    proxy: {
        type: 'ajax',
        url: '/api/systemInfo/systemInfoByRoleId',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: false
});