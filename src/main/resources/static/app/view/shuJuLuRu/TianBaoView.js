Ext.define('Kits.view.shuJuLuRu.TianBaoView', {
    extend: 'Ext.panel.Panel',
    scrollable:true,
    requires: [
        'Kits.view.tables.01'
    ],
    id:'TianBaoView',
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
            Ext.require(['Kits.view.tables.01'],function(){ me.insert( 0,{
                title:me.recordData.tableName,
                xtype:'tables01', // tabcode
                height:1900
            })},me);
            //获得当前填报状态和是否是查看
            //如果是查看则删除按钮
            if(me.isView){
                me.queryById('dc').hide();
                me.queryById('jc').hide();
                me.queryById('tj').hide();
            }
            switch (me.recordData.reportState){
                case 'wtb' :
                case 'ytb' : me.remove(me.getComponent('qysyj')); me.remove(me.getComponent('zysyj')); break;
                case 'zyswtg' :
                case 'zystg' : me.remove(me.getComponent('qysyj')); break;
                default : break;
            }
            //动态删除验收意见
            // me.remove(Ext.getCmp('qysyj'));
        }
    },
    items: [{
            itemId:'zysyj',
            title:'镇验收意见',
            items: [{
                xtype: 'radiogroup',
                fieldLabel: '镇是否验收通过',
                cls: 'x-check-group-alt',
                name: 'rb-auto',
                width:300,
                disabled:true,
                items: [
                    {boxLabel: '不通过', inputValue: 0},
                    {boxLabel: '通过', inputValue: 2, checked: true}
                ]
            },
                {
                    xtype: 'textareafield',
                    fieldLabel: '镇验收意见',
                    name: 'theField',
                    disabled:true,
                    width:400
                }],
        },{
            itemId:'qysyj',
            title:'区验收意见',
            items: [{
                xtype: 'radiogroup',
                fieldLabel: '区是否验收通过',
                cls: 'x-check-group-alt',
                name: 'rb-auto',
                width:300,
                disabled:true,
                items: [
                    {boxLabel: '不通过', inputValue: 0},
                    {boxLabel: '通过', inputValue: 2, checked: true}
                ]
            },
                {
                    xtype: 'textareafield',
                    fieldLabel: '区验收意见',
                    disabled:true,
                    name: 'theField',
                    width:400
                }],
        }
    ],

    buttons: [
        {
            itemId:'dc',
            text: '导出',
            handler: function (e) {

            }
        },{
            itemId:'jc',
            text: '检查',
            handler: function (e) {

            }
        },{
            itemId:'tj',
            text: '提交',
            handler: function (e) {

            }
        }
    ]
})
;