Ext.define('Kits.store.RptTabSetting', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.RptTabSetting',
    proxy: {
        type: 'ajax',
        url: '/api/rpt/setting/list',
        actionMethods: {
            read   : 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        },
    },
    autoLoad: false,
    autoSync: false
});