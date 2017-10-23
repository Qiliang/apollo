Ext.define('Kits.store.RptTabSetting', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.RptTabSetting',
    proxy: {
        type: 'ajax',
        actionMethods: {
            create : 'POST',
            read   : 'POST',
            update : 'POST',
            destroy: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        },
        writer: {
            type: 'json',
            allowSingle: false,
            encode: false,
            writeAllFields: false
        },
        api: {
            create : '/api/rpt/setting/add',
            read   : '/api/rpt/setting/list',
            update : '/api/rpt/setting/update',
            destroy: '/api/rpt/setting/delete',
        }
    },
    autoLoad: false,
    autoSync: false
});