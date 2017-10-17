Ext.define('Kits.model.ZhiBao', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'name',  type: 'string'},
        {name: 'startDate', type: 'string'},
        {name: 'endDate', type: 'string'},
        {name: 'systemName', type: 'string'},
        {name: 'tableName', type: 'string'},
        {name: 'ytb', type: 'string'},
        {name: 'wtb', type: 'string'},
        {name: 'tbl', type: 'string'}
    ]

})