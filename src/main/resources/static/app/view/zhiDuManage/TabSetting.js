Ext.define('Kits.view.zhiDuManage.TabSetting',{
    extend:'Ext.grid.Panel',
    xtype:'zhiDuTabSetting',
    doRefresh:function (record) {
        var store = this.getStore();
        this.parentid = record ? record.getId() : 'undefine';
        store.load({
            params:{
                id:this.parentid,
                typeid:this.typeId
            }
        });
    },
    currentId:null,
    typeId:null,
    listeners:{
        selectionchange: function (selmodel,selected) {
            if (selected && selected.length > 0){
                var model = selected[0];
                this.currentId = model.getId();
            }
            else{
                this.currentId = null;
            }
        }
    },
    rbar:{
        xtype: 'toolbar',
        itemId: 'hzToolBar',
        items: [
            {text:'新增',iconCls:'add',iconAlign: 'left',childAdd:'!adding',mainAdd:'!adding',handler:function () {
                var grid = this.up('grid');
                var store = grid.getStore();
                var count = store.getCount();
                var record = store.createModel({tabid:grid.parentid,colwidth:100,colalign:'center',typeid:grid.typeId,orderno:10*(count+1)});
                store.add(record);
            }},
            {text:'插入',iconCls:'arrow_left',iconAlign: 'left',childAdd:'!adding',mainAdd:'!adding',handler:function () {
                var grid = this.up('grid');
                if(grid.currentId == null){
                    alert('请选择一行再执行删除操作');
                    return;
                }
                var store = grid.getStore();
                var row = store.find('id',grid.currentId);
                var model = store.findRecord('id',grid.currentId);
                var orderno = model.get('orderno');
                var record = store.createModel({tabid:grid.parentid,colwidth:100,colalign:'center',typeid:grid.typeId,orderno:orderno-1});
                store.insert(row,record);
            }},
            {text:'保存',itemId:'toolbar_save',iconCls:'save',iconAlign: 'left',childAdd:'!adding',mainAdd:'!adding', handler:function(){
                var grid = this.up('grid');
                var store = grid.getStore();
                store.sync({
                    success:function (batch,options) {
                        store.reload();
                    }
                });
            }},
            {text:'取消',itemId:'toolbar_cancel',iconCls:'cancel',iconAlign: 'left',childAdd:'!adding', childEdit:'editing',mainAdd:'!adding',handler:function(){
                var grid = this.up('grid');
                var store = grid.getStore();
                store.reload();
            }},
            {text:'删除',iconCls:'remove',iconAlign: 'left',childAdd:'!adding',mainAdd:'!adding',handler:function () {
                var grid = this.up('grid');
                if(grid.currentId == null){
                    alert('请选择一行再执行删除操作');
                    return;
                }
                var store = grid.getStore();
                var record = store.findRecord('id',grid.currentId);
                store.remove(record);
                store.sync({
                    success: function (batch, options) {
                        store.reload();
                    }
                });
            }}
        ]
    },
    selModel: 'cellmodel',
    plugins: {
        cellediting: {
            clicksToEdit: 1
        }
    },
    columns:[
        {text:'No.',xtype: 'rownumberer',width:32},
        {text:'指标名称',sortable:false,dataIndex:'itemcode',width:640,
            editor: {
                field: {
                    xtype: 'textfield',
                    allowBlank: true
                }
            }
        },
        {text:'计算单位',sortable:false,dataIndex:'unitcode',width:100,align:'center',
            editor:{
                xtype:'combobox',
                dataIndex:'unitcode',
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['个'],['只'],['人']]})
            }
        },
        {text:'汇总代码',sortable:false,dataIndex:'hzcode',width:100,align:'center',
            editor: {
                field: {
                    xtype: 'textfield',
                    allowBlank: true
                }
            }
        },
        {text:'排序',sortable:false,dataIndex:'orderno',width:80,align:'center',
            editor: {
                field: {
                    xtype: 'numberfield',
                    maxValue: 10000,
                    allowBlank: true
                }
            }
        },
        {text:'列宽',sortable:false,dataIndex:'colwidth',width:80,align:'center',
            editor: {
                field: {
                    xtype: 'numberfield',
                    maxValue: 500,
                    minValue: 100,
                    allowBlank: true
                }
            }
        },
        {text:'对齐',sortable:false,dataIndex:'colalign',width:60,align:'center',
            editor:{
                xtype:'combobox',
                dataIndex:'colalign',
                displayField:'name',
                store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['left'],['center'],['right']]})
            }
        },
        {text:'1',sortable:false,dataIndex:'num1',width:60,align:'center',
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
        // {text:'3',sortable:false,dataIndex:'num3',width:60,align:'center',
        //     editor:{
        //         xtype:'combobox',
        //         dataIndex:'num3',
        //         displayField:'name',
        //         store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
        //     }
        // },
        // {text:'4',sortable:false,dataIndex:'num4',width:60,align:'center',
        //     editor:{
        //         xtype:'combobox',
        //         dataIndex:'num4',
        //         displayField:'name',
        //         store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
        //     }
        // },
        // {text:'5',sortable:false,dataIndex:'num5',width:60,align:'center',
        //     editor:{
        //         xtype:'combobox',
        //         dataIndex:'num5',
        //         displayField:'name',
        //         store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
        //     }
        // },
        // {text:'6',sortable:false,dataIndex:'num6',width:60,align:'center',
        //     editor:{
        //         xtype:'combobox',
        //         dataIndex:'num6',
        //         displayField:'name',
        //         store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
        //     }
        // },
        // {text:'7',sortable:false,dataIndex:'num7',width:60,align:'center',
        //     editor:{
        //         xtype:'combobox',
        //         dataIndex:'num7',
        //         displayField:'name',
        //         store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
        //     }
        // },
        // {text:'8',sortable:false,dataIndex:'num8',width:60,align:'center',
        //     editor:{
        //         xtype:'combobox',
        //         dataIndex:'num8',
        //         displayField:'name',
        //         store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
        //     }
        // },
        // {text:'9',sortable:false,dataIndex:'num9',width:60,align:'center',
        //     editor:{
        //         xtype:'combobox',
        //         dataIndex:'num9',
        //         displayField:'name',
        //         store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
        //     }
        // },
        // {text:'10',sortable:false,dataIndex:'num10',width:60,align:'center',
        //     editor:{
        //         xtype:'combobox',
        //         dataIndex:'num10',
        //         displayField:'name',
        //         store:Ext.create('Ext.data.ArrayStore',{fields:['name'],data:[['—']]})
        //     }
        // }
    ]
})