Ext.define('Kits.view.liShiShuju.ComplexImport', {
    extend: 'Ext.panel.Panel',
    title: '历史综合数据导入',
    layout: 'center',
    items: {
        title: '请选择上传文件',
        frame: true,
        width:500,
        height:160,
        bodyPadding: '10 10 0',
        layout:'fit',
        defaults: {
            anchor: '100%',
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 50
        },
        items: [{
            xtype: 'filefield',
            emptyText: 'Select an excel',
            fieldLabel: '文件',
            name: 'photo-path',
            buttonText: '',
            buttonConfig: {
                iconCls: 'fa fa-file-excel-o'
            }
        }],

        buttons: [{
            text: '导入',
            handler: 'firstFormSave'
        }, {
            text: '重置',
            handler: 'firstFormReset'
        }]
    }

});