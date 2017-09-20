Ext.define('Kits.model.GongShi', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'name',  type: 'string'},
        {name: 'isUse', type: 'string'},
        {name: 'desc', type: 'string'}
    ],


})