Ext.define('Kits.store.Branch', {
    extend: 'Ext.data.Store',
    fields:[
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'desc', type: 'string'}
    ],
    proxy: {
        type: 'rest',
        url: '/data/Branch.json',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true

});