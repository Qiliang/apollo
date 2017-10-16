Ext.define('Kits.view.zhiDuManage.TabContainer',{
    extend: 'Ext.panel.Panel',
    layout: 'border',
    xtype:'zhiDuManage.TabContainer',
    requires:[
        'Kits.view.zhiDuManage.TabSetting'
    ],
    initComponent: function () {
        var me = this;
        // var grid = me.items[0];
        // grid.bbar.store = grid.store;
        me.callParent();
    },
    items:[
        {
            xtype:'grid',
            // title:false,
            region:'west',
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
            store: Ext.create('Ext.data.ArrayStore', {
                fields: ['id','name'],
                data:[
                    [0,'报表名称1'],
                    [1,'报表名称2'],
                    [2,'报表名称3'],
                    [3,'报表名称4'],
                    [4,'报表名称5'],
                    [5,'报表名称6'],
                    [6,'报表名称7'],
                    [7,'报表名称8']
                ]
            }),
            columns:[
                {text:'No.',xtype: 'rownumberer',width:32},
                {text:'制度报表',dataIndex:'name',flex:1}
            ]
        },{
            layout: 'border',
            region: 'center',
            items:[
                {
                    xtype:'form',
                    region: 'north',
                    height: 2*80+80,
                    tbar:{
                        xtype: 'toolbar',
                        itemId: 'cmdToolBar',
                        items: [
                            {text:'新增',itemId:'toolbar_add',iconCls:'add',iconAlign: 'left', mainEdit:'editing'},
                            {text:'保存',itemId:'toolbar_save',iconCls:'save',iconAlign: 'left', mainEdit:'editing'},
                            {text:'取消',itemId:'toolbar_cancel',iconCls:'cancel',iconAlign: 'left', mainEdit:'editing'},
                            {text:'删除',itemId:'toolbar_remove',iconCls:'remove',iconAlign: 'left',disabled:true, mainRemove:'canRemove',mainAdd:'!editing'},
                        ]
                    },
                    items:[
                        {layout:'column',items:[
                            {
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'报表编号',name:'tabcode',itemId:'tabcode',dataIndex:'tabcode',xtype:'textfield'}
                                ]
                            },{
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'制表机关',name:'zbjg',itemId:'zbjg',dataIndex:'zbjg',xtype:'textfield'}
                                ]
                            },{
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'批准文号',name:'pjwh',itemId:'pjwh',dataIndex:'pjwh',xtype:'textfield'}
                                ]
                            },
                            {
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'有效期至',name:'yxq',itemId:'yxq',dataIndex:'yxq',xtype:'textfield'}
                                ]
                            }
                        ]},
                        {layout:'column',items:[
                            {
                                columnWidth:1,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'规则描述',name:'remark',itemId:'remark',dataIndex:'remark',xtype:'textarea'}
                                ]
                            }
                        ]}
                    ]
                },{
                    xtype: 'tabpanel',
                    region: 'center',
                    deferredRender: false,
                    plain: true,
                    items:[
                        {
                            xtype:'zhiDuManage.TabSetting',
                            title: '汇总表单'
                        },
                        {
                            xtype:'zhiDuManage.TabSetting',
                            title: '提报表单',
                        },{
                            xtype:'grid',
                            title: '表单规则',
                            rbar:{
                                xtype: 'toolbar',
                                itemId: 'hzToolBar',
                                items: [
                                    {text:'新增',itemId:'hz_toolbar_add',iconCls:'add',iconAlign: 'left'},
                                    {text:'删除',itemId:'hz_toolbar_remove',iconCls:'remove',iconAlign: 'left'}
                                ]
                            },
                            store: Ext.create('Ext.data.ArrayStore', {
                                fields: ['id','itemcode'],
                                data:[
                                    [0,''],
                                    [1,''],
                                    [2,''],
                                    [3,''],
                                    [4,''],
                                    [5,''],
                                    [6,''],
                                    [7,'']
                                ]
                            }),
                            selModel: 'cellmodel',
                            plugins: {
                                cellediting: {
                                    clicksToEdit: 1
                                }
                            },
                            columns:[
                                {text:'No.',xtype: 'rownumberer',width:32},
                                {text:'平衡关系',dataIndex:'express',width:240,
                                    editor: {
                                        field: {
                                            xtype: 'textfield',
                                            allowBlank: true
                                        }
                                    }
                                },
                                {text:'参数列表',dataIndex:'params',width:220,
                                    editor: {
                                        field: {
                                            xtype: 'textfield',
                                            allowBlank: true
                                        }
                                    }
                                },
                                {text:'错误提示',dataIndex:'error',width:360,
                                    editor: {
                                        field: {
                                            xtype: 'textfield',
                                            allowBlank: true
                                        }
                                    }
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});