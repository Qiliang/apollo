Ext.define('Kits.store.Branch', {
    extend: 'Ext.data.Store',
    fields:[
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'desc', type: 'string'}
    ],
    proxy: {
        type: 'ajax',
        url: '/org/getOrgListByPId',
        reader: {
            type: 'json',
            rootProperty: 'list',
            totalProperty: 'total'
        },
        limitParam:'limit',
        pageParam:'page'

    },
    autoLoad: true,
    autoSync: true
});