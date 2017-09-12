Ext.define('Kits.model.ZhiDu', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'zdmc',  type: 'string'},
        {name: 'fbnf', type: 'string'},
        {name: 'cjsj', type: 'string'},
        {name: 'cjr', type: 'string'}
    ]

})