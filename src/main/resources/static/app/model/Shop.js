Ext.define('Kits.model.Shop', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'meituanId', type: 'string'},
        {name: 'name', type: 'string',},
        {name: 'address', type: 'string'},
        {name: 'loginName', type: 'string'},
        {name: 'loginPassword', type: 'string'},
        {name: 'stealing', type: 'boolean'}
    ]
})