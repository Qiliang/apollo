Ext.define('Kits.model.ZhiBiao', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'name',  type: 'string'},
        {name: 'unit', type: 'string'},
        {name: 'code', type: 'string'},
        {name: 'count', type: 'string'}
    ],


})