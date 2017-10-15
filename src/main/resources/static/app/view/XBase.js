Ext.define('Kits.view.XBase', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    initComponent: function () {
        var me = this;
        // var grid = me.items[0];
        // grid.bbar.store = grid.store;
        me.callParent();
    },
    items:[
        {
            xtype:'grid',
            title:'农业制度',
            region:'west',
            minWidth : 0,
            width: 350,
            margin : '-1 0 2 -1',
            collapseMode: 'mini',
            collapsible : true,
            collapsed : false,
            hideCollapseTool : true,
            maintainFlex : true,
            split : true,
            deferRowRender:true,
            autoScroll : false,
            frame: true,
            tools :[
                {itemId: 'toolbar_refresh',type: 'refresh',tooltip:'刷新'}
            ],
            bbar:{
                xtype: 'pagingtoolbar',
                displayInfo: true,
                dock: 'bottom',
                layout: 'hbox',
                displayMsg: '显示 {0} - {1} 条 共 {2} 条',
                emptyMsg: "没有记录"
            },
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
                {text:'报表名称',dataIndex:'name',flex:1}
            ]
        },{
            layout: 'border',
            region: 'center',
            frame: true,
            items:[
                {
                    xtype:'form',
                    region: 'north',
                    height: 2*80+80,
                    tbar:{
                        xtype: 'toolbar',
                        itemId: 'cmdToolBar',
                        items: [
                            {text:'新增',itemId:'toolbar_add',iconCls:'add',iconAlign: 'top', mainEdit:'editing'},
                            {text:'保存',itemId:'toolbar_save',iconCls:'save',iconAlign: 'top', mainEdit:'editing'},
                            {text:'取消',itemId:'toolbar_cancel',iconCls:'cancel',iconAlign: 'top', mainEdit:'editing'},
                            {text:'删除',itemId:'toolbar_remove',iconCls:'remove',iconAlign: 'top',disabled:true, mainRemove:'canRemove',mainAdd:'!editing'},
                        ]
                    },
                    items:[
                        {layout:'column',items:[
                            {
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'表号',name:'tabcode',itemId:'tabcode',dataIndex:'tabcode',xtype:'textfield'}
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
                            title: '汇总表单',
                            xtype:'grid',
                            rbar:{
                                xtype: 'toolbar',
                                itemId: 'hzToolBar',
                                items: [
                                    {tooltip:'新增',itemId:'hz_toolbar_add',iconCls:'add',iconAlign: 'top'},
                                    {tooltip:'删除',itemId:'hz_toolbar_remove',iconCls:'remove',iconAlign: 'top'},
                                    {tooltip:'上移',itemId:'hz_toolbar_up',iconCls:'arrow_green_up',iconAlign: 'top'},
                                    {tooltip:'下移',itemId:'hz_toolbar_down',iconCls:'arrow_green_down',iconAlign: 'top'}
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
                                {text:'指标名称',dataIndex:'itemcode',width:640,
                                    editor: {
                                        field: {
                                            xtype: 'textfield',
                                            allowBlank: true
                                        }
                                    }
                                },
                                {text:'计算单位',dataIndex:'unitcode',width:100,align:'center',
                                    editor:{
                                        xtype:'combobox',
                                        dataIndex:'unitcode',
                                        displayField:'id',
                                        store:Ext.create('Ext.data.ArrayStore',{fields:['id'],data:[['个'],['只'],['人']]})
                                    }
                                },
                                {text:'汇总代码',dataIndex:'hzcode',width:100,align:'center',
                                    editor: {
                                        field: {
                                            xtype: 'textfield',
                                            allowBlank: true
                                        }
                                    }
                                },
                                {text:'1',dataIndex:'num1',width:60,align:'center',
                                    editor:{
                                        xtype:'combobox',
                                        dataIndex:'num1',
                                        displayField:'id',
                                        store:Ext.create('Ext.data.ArrayStore',{fields:['id'],data:[['—']]})
                                    }
                                },
                                {text:'2',dataIndex:'num2',width:60,align:'center',
                                    editor:{
                                        xtype:'combobox',
                                        dataIndex:'num2',
                                        displayField:'id',
                                        store:Ext.create('Ext.data.ArrayStore',{fields:['id'],data:[['—']]})
                                    }
                                },
                                {text:'3',dataIndex:'num3',width:60,align:'center',
                                    editor:{
                                        xtype:'combobox',
                                        dataIndex:'num3',
                                        displayField:'id',
                                        store:Ext.create('Ext.data.ArrayStore',{fields:['id'],data:[['—']]})
                                    }
                                },
                                {text:'4',dataIndex:'num4',width:60,align:'center',
                                    editor:{
                                        xtype:'combobox',
                                        dataIndex:'num4',
                                        displayField:'id',
                                        store:Ext.create('Ext.data.ArrayStore',{fields:['id'],data:[['—']]})
                                    }
                                },
                                {text:'5',dataIndex:'num5',width:60,align:'center',
                                    editor:{
                                        xtype:'combobox',
                                        dataIndex:'num5',
                                        displayField:'id',
                                        store:Ext.create('Ext.data.ArrayStore',{fields:['id'],data:[['—']]})
                                    }
                                },
                                {text:'6',dataIndex:'num6',width:60,align:'center',
                                    editor:{
                                        xtype:'combobox',
                                        dataIndex:'num6',
                                        displayField:'id',
                                        store:Ext.create('Ext.data.ArrayStore',{fields:['id'],data:[['—']]})
                                    }
                                },
                                {text:'7',dataIndex:'num7',width:60,align:'center',
                                    editor:{
                                        xtype:'combobox',
                                        dataIndex:'num7',
                                        displayField:'id',
                                        store:Ext.create('Ext.data.ArrayStore',{fields:['id'],data:[['—']]})
                                    }
                                },
                                {text:'8',dataIndex:'num8',width:60,align:'center',
                                    editor:{
                                        xtype:'combobox',
                                        dataIndex:'num8',
                                        displayField:'id',
                                        store:Ext.create('Ext.data.ArrayStore',{fields:['id'],data:[['—']]})
                                    }
                                },
                                {text:'9',dataIndex:'num9',width:60,align:'center',
                                    editor:{
                                        xtype:'combobox',
                                        dataIndex:'num9',
                                        displayField:'id',
                                        store:Ext.create('Ext.data.ArrayStore',{fields:['id'],data:[['—']]})
                                    }
                                },
                                {text:'10',dataIndex:'num10',width:60,align:'center',
                                    editor:{
                                        xtype:'combobox',
                                        dataIndex:'num10',
                                        displayField:'id',
                                        store:Ext.create('Ext.data.ArrayStore',{fields:['id'],data:[['—']]})
                                    }
                                },
                            ]
                        },{
                            title: '提报表单',
                        },{
                            title: '表单规则'
                        }
                    ]
                }
            ]
        }
    ]
});