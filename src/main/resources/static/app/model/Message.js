Ext.define('Kits.model.Message', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'sn',  type: 'string'},
        {name: 'createTime', type: 'string'},
        {name: 'source', type: 'string'},
        {name: 'content', type: 'string'},
    ]

})