Ext.define('Kits.model.ZhiDuTable', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'name',  type: 'string'},
        {name:'tableHtml',type:'string'},
        {name:'sszdmc',type:'string'},
        {name:'sszdid',type:'string'}
    ]

})