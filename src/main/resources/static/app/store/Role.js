Ext.define('Kits.store.Role', {
    extend: 'Ext.data.Store',
    fields:[
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'}
    ],
    proxy: {
        type: 'rest',
        url: '/data/Role.json',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true,
    autoSync: true

});