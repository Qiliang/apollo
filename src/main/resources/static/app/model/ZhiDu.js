Ext.define('Kits.model.ZhiDu', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'name',  type: 'string'},
        {name: 'releaseYear', type: 'string'},
        {name: 'createDate', type: 'string'},
        {name: 'updateBy', type: 'string'},
        {name: 'fillPersonType', type: 'string'}
    ]
})