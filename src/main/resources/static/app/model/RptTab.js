Ext.define('Kits.model.RptTab', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'systeminfoid',  type: 'string'},
        {name: 'tabcode',  type: 'string'},
        {name: 'tabname',  type: 'string'},
        {name: 'makedept',  type: 'string'},
        {name: 'approvalno',  type: 'string'},
        {name: 'validitydate',  type: 'string'}
    ]
})