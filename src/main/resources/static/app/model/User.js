Ext.define('Kits.model.User', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'name',  type: 'string'},
        {name: 'loginName', type: 'string'},
        {name: 'loginPassword', type: 'string'},
        {name: 'role', type: 'string'},
        {name: 'alive', type: 'boolean'}
    ]

})