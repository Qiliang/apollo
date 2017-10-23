Ext.define('Kits.store.RptTabRule', {
    extend: 'Ext.data.Store',
    model: 'Kits.model.RptTabRule',
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
            writeAllFields: true
        },
        api: {
            create : '/api/rpt/rule/add',
            read   : '/api/rpt/rule/list',
            update : '/api/rpt/rule/update',
            destroy: '/api/rpt/rule/delete',
        }
    },
    autoLoad: false,
    autoSync: false
});