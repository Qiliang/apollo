Ext.define('Kits.view.shuJuLuRu.ValidateDataView', {
    extend: 'Ext.grid.Panel',
    listeners: {
        afterrender: function (me) {

        }
    },
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '错误信息',
            dataIndex: 'errortext',
            width: '92%',
        }
    ]
})
;