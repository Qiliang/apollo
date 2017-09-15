Ext.define('Kits.view.zhiDu.DiaoChaDuiXiangView', {
    extend: 'Ext.form.Panel',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    bodyBorder: false,
    bodyPadding: 10,
    defaults: {
        bodyPadding: 0,
        frame: true
    },
    items: [
        {
            flex: 2,
            xtype: 'tabpanel',
            id:'DiaoChaDuiXiangView',
            items: [
                {
                    xtype: 'grid',
                    title: '企业',
                    id:'qyxxGrid',
                    selType: 'checkboxmodel',
                    store: Ext.create('Kits.store.QiYe', {}),
                    tbar: [{
                        xtype: 'textfield',
                        fieldLabel: '企业名称',
                        id:'qymc',
                        name: 'qymc',
                    }, {
                        xtype: 'textfield',
                        fieldLabel: '组织机构代码',
                        name: 'zzjgdm',
                        id:'zzjgdm',
                    },
                        {
                            xtype: 'button',
                            text: '查询',
                            handler: function () {
                                var grid = this.up('grid');
                                grid.getStore().clearFilter(true);
                                var filters = grid.getStore().getFilters();
                                function qymcFilter(item) {
                                    var qymc = Ext.getCmp('qymc').getValue();
                                    if(qymc){
                                        return item.data.qymc.indexOf(qymc) !=-1;
                                    }else{
                                        return true
                                    }
                                }
                                function zzjgdmFilter(item) {
                                    var zzjgdm = Ext.getCmp('zzjgdm').getValue();
                                    if(zzjgdm){
                                        return item.data.zzjgdm.indexOf(zzjgdm) != -1;
                                    }else{
                                        return true
                                    }
                                }
                                filters.add(qymcFilter);
                                filters.add(zzjgdmFilter);
                            }
                        }],
                    columns: [
                        {
                            text: '企业名称',
                            dataIndex: 'qymc',
                            width: '50%'
                        }, {
                            text: '组织机构代码',
                            dataIndex: 'zzjgdm',
                            width: '45%'
                        }
                    ]
                },
                {
                    xtype: 'grid',
                    title: '行政区划',
                    id:'xzqhGrid',
                    selType: 'checkboxmodel',
                    store: Ext.create('Kits.store.Xzqh', {}),
                    tbar: [{
                        xtype: 'combobox',
                        fieldLabel: '所属镇',
                        queryMode: 'local',
                        id:'ssz',
                        name: 'ssz',
                        displayField: 'value',
                        valueField: 'key',
                        editable: false,
                        emptyText: "--请选择所属镇--",
                        store: [
                            {key: '', value: '全部'},
                            {key: '00', value: '镇A'},
                            {key: '002', value: '镇B'},
                            {key: '003', value: '镇C'}
                        ]
                    }, {
                        xtype: 'textfield',
                        fieldLabel: '行政区划名称',
                        id:'xzqhmc',
                        name: 'xzqhmc',
                    },
                        {
                            xtype: 'button',
                            text: '查询',
                            handler: function () {
                                var grid = this.up('grid');
                                grid.getStore().clearFilter(true);
                                var filters = grid.getStore().getFilters();
                                function sszFilter(item) {
                                    var ssz = Ext.getCmp('ssz').getValue();
                                    if(ssz){
                                        return item.data.xzqhdm.indexOf(ssz) !=-1;
                                    }else{
                                        return true
                                    }
                                }
                                function xzqhmcFilter(item) {
                                    var xzqhmc = Ext.getCmp('xzqhmc').getValue();
                                    if(xzqhmc){
                                        return item.data.xzqhmc.indexOf(xzqhmc) != -1;
                                    }else{
                                        return true
                                    }
                                }
                                filters.add(sszFilter);
                                filters.add(xzqhmcFilter);
                            }
                        }],
                    columns: [
                        {
                            text: '行政区划名称',
                            dataIndex: 'xzqhmc',
                            width: '50%'
                        }, {
                            text: '行政区划代码',
                            dataIndex: 'xzqhdm',
                            width: '45%'
                        }
                    ]
                }
            ]


        },
        {
            width: 70,
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },
            bodyPadding: 10,
            items: [
                {
                    flex: 1,
                    layout: 'center',
                    items: [
                        {
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    iconCls: 'x-fa fa-angle-double-right',
                                    tooltip: '全部选中',
                                    margin: '0 0 10 0',
                                    handler: function (e) {
                                        var grid = Ext.getCmp('DiaoChaDuiXiangView').getActiveTab();
                                        var store = grid.getStore();
                                        store.each(function (rec) {
                                            var item = {};
                                            if(grid.getId()=='qyxxGrid')
                                                item = {id:rec.data.id+"-"+rec.data.zzjgdm,type:'1',mc:rec.data.qymc};
                                            else
                                                item = {id:rec.data.id+"-"+rec.data.xzqhdm,type:'2',mc:rec.data.xzqhmc};
                                            store.remove(rec);
                                            Ext.getCmp('targetGrid').getStore().add(item);
                                        });
                                    }
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'x-fa fa-angle-right',
                                    tooltip: '选择选中',
                                    margin: '0 0 10 0',
                                    handler: function (e) {
                                        var grid = Ext.getCmp('DiaoChaDuiXiangView').getActiveTab();
                                        var store = grid.getStore();
                                        var selection = grid.getSelection();
                                        if(selection.length==0){
                                            Ext.toast('未选中任何记录！');
                                            return;
                                        }
                                        for(var i=0;i<selection.length;i++){
                                            var rec = selection[i].getData();
                                            store.remove(selection[i]);
                                            var item={};
                                            if(grid.getId()=='qyxxGrid')
                                                    item = {id:rec.id+"-"+rec.zzjgdm,type:'1',mc:rec.qymc};
                                                else
                                                    item = {id:rec.id+"-"+rec.xzqhdm,type:'2',mc:rec.xzqhmc};
                                            Ext.getCmp('targetGrid').getStore().add(item);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    flex: 1,
                    layout: 'center',
                    items: [
                        {
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    iconCls: 'x-fa fa-angle-double-left',
                                    tooltip: '全部取消选中',
                                    margin: '0 0 10 0',
                                    handler: function (e) {
                                        var targetGrid = Ext.getCmp('targetGrid');
                                        var store = targetGrid.getStore();
                                        store.each(function (rec) {
                                            var item = {};
                                            var gridId='';
                                            if(rec.data.type=='1'){
                                                gridId='qyxxGrid';
                                                item = {id:rec.data.id.split("-")[0],zzjgdm:rec.data.id.split("-")[1],qymc:rec.data.mc};
                                            }
                                            else{
                                                gridId='xzqhGrid';
                                                item = {id:rec.data.id.split("-")[0],xzqhdm:rec.data.id.split("-")[1],xzqhmc:rec.data.mc};
                                            }
                                            store.remove(rec);
                                            Ext.getCmp(gridId).getStore().add(item);
                                        });
                                    }
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'x-fa fa-angle-left',
                                    tooltip: '取消选中',
                                    margin: '0 0 10 0',
                                    handler: function (e) {
                                        var grid = Ext.getCmp('targetGrid');
                                        var store = grid.getStore();
                                        var selection = grid.getSelection();
                                        if(selection.length==0){
                                            Ext.toast('未选中任何记录！');
                                            return;
                                        }
                                        for(var i=0;i<selection.length;i++){
                                            var rec = selection[i].getData();
                                            store.remove(selection[i]);
                                            var gridId = '';
                                            var item={};
                                            if(rec.type=='1'){
                                                gridId='qyxxGrid';
                                                item = {id:rec.id.split("-")[0],zzjgdm:rec.id.split("-")[1],qymc:rec.mc};
                                            }
                                            else{
                                                gridId='xzqhGrid';
                                                item = {id:rec.id.split("-")[0],xzqhdm:rec.id.split("-")[1],xzqhmc:rec.mc};
                                            }
                                            Ext.getCmp(gridId).getStore().add(item);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            flex: 1,
            xtype: 'grid',
            title: '已选择',
            id:'targetGrid',
            multiSelect: true,
            store: Ext.create('Ext.data.Store', {
                model: Ext.create('Ext.data.Model',{
                    fields: [
                        {name: 'id',  type: 'string'},
                        {name: 'mc',  type: 'string'},
                        {name: 'type', type: 'string'}
                ]}),
                data: [
                ],
            }),
            columns: [
                {
                    text: '行政区划/单位名称',
                    dataIndex: 'mc',
                    width: '98%'
                }
            ]
        }
    ],
    buttons: [
        {
            text: '选择', handler: function (e) {
            var grid = Ext.getCmp('targetGrid');
            var store = grid.getStore();
            if(grid.getStore().getData().length==0){
                Ext.toast('未选择任何记录！');
                return;
            }
            var dcdx = '';
            var dcdxIds = '';
            store.each(function (rec) {
                dcdx = dcdx + rec.data.mc + ",";
                dcdxIds = dcdxIds + rec.data.id+","
            });
            Ext.getCmp('dcdx').setValue(dcdx);
            Ext.getCmp('dcdxIds').setValue(dcdxIds);
            this.up('window').close();
        }
        }
    ]
})
;