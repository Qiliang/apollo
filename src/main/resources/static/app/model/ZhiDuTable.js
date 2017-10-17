Ext.define('Kits.model.ZhiDuTable', {
    extend: 'Ext.data.Model',
    identifier: 'uuid',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'systeminfoid',  type: 'string'},
        {name: 'systeminfoName',  type: 'string'},
        {name:'tabcode',type:'string'},
        {name:'tabname',type:'string'},
        {name:'makedept',type:'string'},
        {name:'approvalno',type:'string'},
        {name:'validitydate',type:'string'},
        {name:'tabdeep',type:'string'},
        {name:'tabdeep1',type:'string'},
        {name:'create_date',type:'string'},
        {name:'create_by',type:'string'},
        {name:'update_by',type:'string'},
        {name:'update_date',type:'string'},
        {name:'del_flag',type:'string'},
        {name:'systemInfoFillPersonType',type:'string'}
    ]

})