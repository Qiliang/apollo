Ext.define('Kits.model.User', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'displayName',  type: 'string'},
        {name: 'orgId', type: 'string'},
        {name: 'loginPassword', type: 'string'},
        {name: 'displayName', type: 'string'},
        {name:'role',convert: function (value, record) {
            return value.name;
        }}
    ]

})