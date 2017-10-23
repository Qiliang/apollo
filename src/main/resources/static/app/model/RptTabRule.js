Ext.define('Kits.model.RptTabRule', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'tabid',  type: 'string'},
        {name: 'express',  type: 'string'},
        {name: 'params',  type: 'string'},
        {name: 'errortext',  type: 'string'},
        {name: 'orderno',  type: 'string'}
    ]
})