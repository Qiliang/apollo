Ext.define('Kits.model.ShenHeJieGuo', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'type',  type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'desc', type: 'string'}
    ]
})