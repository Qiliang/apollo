Ext.define('Kits.model.SystemInfo', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'name',  type: 'string'},
        {name: 'type',  type: 'string'},
        {name: 'releaseYear',  type: 'string'},
        {name: 'fillPersonType',  type: 'string'}
    ]
})