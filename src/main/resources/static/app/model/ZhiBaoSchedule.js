Ext.define('Kits.model.ZhiBaoSchedule', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'rwmc',  type: 'string'},
        {name:'sszdmc',type:'string'},
        {name:'ssbm',type:'string'},
        {name:'txkssj',type:'string'},
        {name:'txjssj',type:'string'},
        {name:'txpl',type:'string'},
        {name:'txsj',type:'string'}
    ]

})