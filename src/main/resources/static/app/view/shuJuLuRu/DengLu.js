Ext.define('Kits.view.shuJuLuRu.denglu', {
    extend: 'Ext.panel.Panel',
    layout: 'center',
    items:[
        {
            xtype:'form',
            frame:true,
            width: 400,
            bodyPadding: 10,
            title: '登录',
            defaultType: 'textfield',

            items: [{
                allowBlank: false,
                fieldLabel: '用户名',
                name: 'user',
                emptyText: '组织机构代码或行政区划代码',
                msgTarget: 'under'
            }, {
                allowBlank: false,
                fieldLabel: '密码',
                name: 'pass',
                emptyText: '密码',
                inputType: 'password'
            }],

            buttons: [
                { text:'登录' }
            ],

            defaults: {
                anchor: '100%',
                labelWidth: 120
            }
        }
    ]
})
;