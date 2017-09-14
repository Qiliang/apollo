Ext.define('Kits.view.zhiDu.AddZhiBaoView', {
    extend: 'Ext.form.Panel',
    layout: {
        type: 'table',
        columns: 2,
        tableAttrs: {
            style: {
                width: '100%',
                'margin-top':'20px',
                'margin-left':'10px',
                'margin-right':'10px'
            }
        }
    },
    bodyBorder: false,
    defaults: {
        bodyPadding: 10
    },
    items: [
            {xtype:'textfield', fieldLabel: '直报名称',colspan:2,width:'96%',allowBlank: false,blankText:'直报名称为必填项'},
            {xtype:'datefield',format: 'Y-m-d', fieldLabel: '报送开始时间',allowBlank: false,blankText:'报送开始时间为必填项'},
            {xtype:'datefield',format: 'Y-m-d', fieldLabel: '报送结束时间',allowBlank: false,blankText:'报送结束时间为必填项'},
            {xtype:'textfield', fieldLabel: '调查对象',allowBlank: false,blankText:'调查对象为必填项',id:'dcdx',readOnly:true},
            {xtype:'hiddenfield',id:'dcdxIds'},
            {xtype:'button', text:'选择',margin:'-12,0,0,0',handler:function(e){
                Ext.create('Ext.window.Window', {
                    title: '选择调查对象',
                    height: 600,
                    width: 1100,
                    layout: 'fit',
                    modal: true,
                    closeToolText:'关闭',
                    items: Ext.create('Kits.view.zhiDu.DiaoChaDuiXiangView', {})
                }).show();
            }},
            {xtype:'textfield', fieldLabel: '调查表样',id:'dcby',allowBlank: false,blankText:'调查表样为必填项',readOnly:true},
            {xtype:'button', text:'选择',margin:'-12,0,0,0',handler:function(e){

            }},
        ],

    buttons: [
        { text: '提交',handler:function(e){
            alert('提交');
        }}
    ]
})
;