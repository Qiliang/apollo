Ext.define('Kits.view.zhiDuManage.Tab1Setting',{
    extend:'Ext.grid.Panel',
    doRefresh:function (record) {
        var store = this.getStore();
        this.parentid = record.getId();
        // var pa = {
        //     id:this.parentid,
        //         typeid:this.typeId
        // };
        // console.log(pa);
        store.load({
            params:{
                id:this.parentid,
                typeid:0
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
            {text:'新增',iconCls:'add',iconAlign: 'left',handler:function () {
                var grid = this.up('grid');
                var store = grid.getStore();
                debugger;
                var record = store.createModel({tabid:grid.parentid,typeid:grid.typeId});
                store.add(record);
            }},
            {text:'保存',itemId:'toolbar_save',iconCls:'save',iconAlign: 'left', handler:function(){
                var grid = this.up('grid');
                var store = grid.getStore();
                store.sync({
                    success:function (batch,options) {
                        store.reload();
                        console.log(options);
                    }
                });
            }},
            {text:'删除',iconCls:'remove',iconAlign: 'left',handler:function () {
                var grid = this.up('grid');
                if(grid.currentId == null){
                    alert('请选择一行再执行删除操作');
                    return;
                }
                var store = grid.getStore();
                var record = store.findRecord('id',grid.currentId);
                store.remove(record);
                store.sync({
                    success:function (response) {
                        console.log(response);
                    }
                });
            }},
            {text:'上移',iconCls:'arrow_green_up',iconAlign: 'left',handler:function () {

            }},
            {text:'下移',iconCls:'arrow_green_down',iconAlign: 'left',handler:function () {

            }}
        ]
    },
    store: Ext.create('Kits.store.RptTabSetting', {}),
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