Ext.define('Kits.view.shuJuLuRu.TianBaoView', {
    extend: 'Ext.panel.Panel',
    scrollable:true,
    requires: [
        'Kits.view.tables.01'
    ],
    layout: {
        type: 'table',
        columns: 1,
        tableAttrs: {
            style: {
                width: '100%'
            }
        }
    },
    bodyBorder: false,
    defaults: {
        bodyPadding: '15 20',
        border: true

    },
    listeners:{
        afterrender:function (me) {
            //动态删除验收意见
            // me.remove(Ext.getCmp('qysyj'));
        }
    },
    items: [
        {
            title:'填报内容（表1）',
            height:1900,
            xtype:'tables01'
        },{
            id:'zysyj',
            title:'镇验收意见',
            items: [{
                xtype: 'radiogroup',
                fieldLabel: '镇是否验收通过',
                cls: 'x-check-group-alt',
                name: 'rb-auto',
                width:300,
                items: [
                    {boxLabel: '不通过', inputValue: 0},
                    {boxLabel: '通过', inputValue: 2, checked: true}
                ]
            },
                {
                    xtype: 'textareafield',
                    fieldLabel: '镇验收意见',
                    name: 'theField',
                    width:400
                }],
        },{
            id:'qysyj',
            title:'区验收意见',
            items: [{
                xtype: 'radiogroup',
                fieldLabel: '区是否验收通过',
                cls: 'x-check-group-alt',
                name: 'rb-auto',
                width:300,
                items: [
                    {boxLabel: '不通过', inputValue: 0},
                    {boxLabel: '通过', inputValue: 2, checked: true}
                ]
            },
                {
                    xtype: 'textareafield',
                    fieldLabel: '区验收意见',
                    name: 'theField',
                    width:400
                }],
        }
    ]
})
;