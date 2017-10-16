Ext.define('Kits.view.XBase', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    title: '制度包管理',
    requires:[
        'Kits.view.zhiDuManage.TabContainer'
    ],
    initComponent: function () {
        var me = this;
        // var grid = me.items[0];
        // grid.bbar.store = grid.store;
        me.callParent();
    },
    listeners: {
        afterrender: function (me) {
        }
    },

    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
            }
        }
    ],
    items:[
        {
            region: 'north',
            layout: 'border',
            height: 150,
            items:[
                {
                    xtype:'grid',
                    region:'east',
                    minWidth : 0,
                    width: 350,
                    margin : '-1 0 2 -1',
                    collapseMode: 'mini',
                    collapsible : false,
                    collapsed : false,
                    hideCollapseTool : true,
                    maintainFlex : true,
                    split : true,
                    deferRowRender:true,
                    autoScroll : false,
                    columns:[
                        {text:'No.',xtype: 'rownumberer',width:32},
                        {text:'制度列表',dataIndex:'name',flex:1}
                    ],
                    store: Ext.create('Ext.data.Store', {
                        fields: ['id','name'],
                        data:[]
                    })
                },
                {
                    xtype:'form',
                    region: 'center',
                    height: 1*80+80,
                    doSwitchComponent: function (value,selector,groupid,trueFunc,falseFunc) {
                        var components = this.query(Ext.String.format('[{0}]',selector));
                        for(var i in components){
                            var component = components[i];
                            var status = component[selector];
                            if (status == groupid){
                                component[value ? trueFunc : falseFunc]();
                            }
                            if (status == '!'+groupid){
                                component[!value ? trueFunc : falseFunc]();
                            }
                        }
                    },
                    listeners: {
                        afterrender: function () {
                            this.doSwitchComponent(false,'mainEdit','editing','enable','disable');
                        },
                        dirtychange: function () {
                            this.doSwitchComponent(true,'mainEdit','editing','enable','disable');
                        }
                    },
                    tbar:{
                        xtype: 'toolbar',
                        items: [
                            {text:'新增',itemId:'toolbar_add',iconCls:'add',iconAlign: 'top', mainEdit:'!editing',handler:function(){
                                var form = this.up('form');
                                form.reset();
                                form.doSwitchComponent(true,'mainEdit','editing','enable','disable');
                            }},
                            {text:'保存',itemId:'toolbar_save',iconCls:'save',iconAlign: 'top', mainEdit:'editing',handler:function () {
                                var form = this.up('form');
                                form.doSwitchComponent(false,'mainEdit','editing','enable','disable');
                            }},
                            {text:'取消',itemId:'toolbar_cancel',iconCls:'cancel',iconAlign: 'top', mainEdit:'editing',handler:function () {
                                var form = this.up('form');
                                form.doSwitchComponent(false,'mainEdit','editing','enable','disable');
                            }},
                        ]
                    },
                    items:[
                        {layout:'column',items:[
                            {
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'制度名称',name:'name',itemId:'name',dataIndex:'name',xtype:'textfield'}
                                ]
                            },{
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'颁发年份',name:'release_year',itemId:'release_year',dataIndex:'release_year',xtype:'textfield'}
                                ]
                            }
                        ]}
                    ]
                }
            ]
        },
        {
            xtype:'zhiDuManage.TabContainer',
            region: 'center',
            frame: true
        }
    ]
});