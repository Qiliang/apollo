Ext.define('Kits.view.zhiDuManage.TabSetting',{
    extend:'Ext.grid.Panel',
    xtype:'zhiDuManage.TabSetting',
    rbar:{
        xtype: 'toolbar',
        itemId: 'hzToolBar',
        items: [
            {text:'新增',itemId:'hz_toolbar_add',iconCls:'add',iconAlign: 'left'},
            {text:'删除',itemId:'hz_toolbar_remove',iconCls:'remove',iconAlign: 'left'},
            {text:'上移',itemId:'hz_toolbar_up',iconCls:'arrow_green_up',iconAlign: 'left'},
            {text:'下移',itemId:'hz_toolbar_down',iconCls:'arrow_green_down',iconAlign: 'left'}
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
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['个'],['只'],['人']]})
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
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
            }
        },
        {text:'2',dataIndex:'num2',width:60,align:'center',
            editor:{
                xtype:'combobox',
                dataIndex:'num2',
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
            }
        },
        {text:'3',dataIndex:'num3',width:60,align:'center',
            editor:{
                xtype:'combobox',
                dataIndex:'num3',
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
            }
        },
        {text:'4',dataIndex:'num4',width:60,align:'center',
            editor:{
                xtype:'combobox',
                dataIndex:'num4',
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
            }
        },
        {text:'5',dataIndex:'num5',width:60,align:'center',
            editor:{
                xtype:'combobox',
                dataIndex:'num5',
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
            }
        },
        {text:'6',dataIndex:'num6',width:60,align:'center',
            editor:{
                xtype:'combobox',
                dataIndex:'num6',
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
            }
        },
        {text:'7',dataIndex:'num7',width:60,align:'center',
            editor:{
                xtype:'combobox',
                dataIndex:'num7',
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
            }
        },
        {text:'8',dataIndex:'num8',width:60,align:'center',
            editor:{
                xtype:'combobox',
                dataIndex:'num8',
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
            }
        },
        {text:'9',dataIndex:'num9',width:60,align:'center',
            editor:{
                xtype:'combobox',
                dataIndex:'num9',
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
            }
        },
        {text:'10',dataIndex:'num10',width:60,align:'center',
            editor:{
                xtype:'combobox',
                dataIndex:'num10',
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
            }
        }
    ]
})