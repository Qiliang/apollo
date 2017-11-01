Ext.define('Kits.view.zhiDuManage.TabContainer',{
    extend: 'Ext.panel.Panel',
    layout: 'border',
    xtype:'zhiDuTabContainer',
    requires:[
        'Kits.view.zhiDuManage.TabSetting'
    ],
    initComponent: function () {
        var me = this;
        // var grid = me.items[0];
        // grid.bbar.store = grid.store;
        me.callParent();
    },
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
            listeners:{
                selectionchange: function (selmodel,selected) {
                    if (selected && selected.length > 0){
                        var form = this.up('box').down('form[region=north]');
                        var record = this.getStore().createModel(selected[0]);
                        form.doLoadRecord(record);
                    }
                    else{
                        var form = this.up('box').down('form');
                        form.doLoadRecord(null);
                    }
                }
            },
            store: Ext.create('Kits.store.RptTab', {
                listeners:{
                    load:function (store, records) {
                        var cmp = Ext.ComponentQuery.query('#zhiDuTabContainer')[0];
                        var grid = cmp.down('grid[region=west]');
                        var selModel = grid.getSelectionModel();
                        if (records && records.length > 0){
                            selModel.selectRange(records.length-1,records.length-1);
                        }
                        else {
                            grid.fireEvent('selectionchange',selModel,null);
                        }
                    }
                }
            }),
            columns:[
                {text:'No.',xtype: 'rownumberer',width:32},
                {text:'制度报表',dataIndex:'tabname',flex:1}
            ]
        },{
            layout: 'border',
            region: 'center',
            items:[
                {
                    xtype:'form',
                    region: 'north',
                    url:'/api/tab/save',
                    method:'POST',
                    doLoadRecord:function (record) {
                        var cmp = this.up('#zhiDuTabContainer');
                        var tab1 = cmp.down('#zhiDuTab1Container');
                        var tab2 = cmp.down('#zhiDuTab2Container');
                        var tab3 = cmp.down('#zhiDuTab3Container');
                        tab1.doRefresh(record);
                        tab2.doRefresh(record);
                        tab3.doRefresh(record);
                        if(record){
                            this.loadRecord(record);
                            this.doSwitchComponent(false,'childEdit','editing','enable','disable');
                            this.doSwitchComponent(false,'childAdd','adding','enable','disable');
                        }
                        else{
                            this.reset();
                            this.doSwitchComponent(true,'mainAdd','adding','enable','disable');
                        }
                    },
                    doSwitchComponent: function (value,selector,groupid,trueFunc,falseFunc) {
                        var cmp = this.up('#zhiDuTabContainer');
                        cmp.doSwitchComponent(value,selector,groupid,trueFunc,falseFunc);
                    },
                    listeners: {
                        afterrender: function () {
                            this.doSwitchComponent(false,'mainAdd','editing','enable','disable');
                        }
                    },
                    height: 2*80+50,
                    tbar:{
                        xtype: 'toolbar',
                        itemId: 'cmdToolBar',
                        items: [
                            {text:'新增',itemId:'toolbar_add',iconCls:'add',iconAlign: 'left', childEdit:'!editing',handler:function(){
                                var form = this.up('form');
                                var grid = form.up('box').down('grid');
                                var cmp = this.up('#zhiDuTabContainer');
                                var record = grid.getStore().createModel({systeminfoid:cmp.parentid});
                                form.reset();
                                form.doLoadRecord(record);
                                form.doSwitchComponent(true,'childEdit','editing','enable','disable');
                                form.doSwitchComponent(true,'childAdd','adding','enable','disable');
                            }},
                            {text:'修改',itemId:'toolbar_modify',iconCls:'application_edit',iconAlign: 'left', childEdit:'!editing',mainAdd:'!adding',handler:function(){
                                var form = this.up('form');
                                form.doSwitchComponent(true,'childEdit','editing','enable','disable');
                            }},
                            {text:'保存',itemId:'toolbar_save',iconCls:'save',iconAlign: 'left', childEdit:'editing',mainAdd:'!adding',handler:function(){
                                var cmp = this.up('#zhiDuTabContainer');
                                var grid = cmp.down('grid[region=west]');
                                var form = cmp.down('form[region=north]');
                                form.submit({
                                    success: function(baseform, action) {
                                        if(action.response.status == 200){
                                            grid.getStore().load({
                                                params : {
                                                    id : cmp.parentid
                                                }
                                            });
                                            form.doSwitchComponent(false,'childEdit','editing','enable','disable');
                                        }
                                    },
                                });
                            }},
                            {text:'取消',itemId:'toolbar_cancel',iconCls:'cancel',iconAlign: 'left', childEdit:'editing',mainAdd:'!adding',handler:function(){
                                var cmp = this.up('#zhiDuTabContainer');
                                var grid = cmp.down('grid[region=west]');
                                var form = cmp.down('form[region=north]');
                                var store = grid.getStore();
                                store.removeAll();
                                store.reload();
                                form.doSwitchComponent(false,'childEdit','editing','enable','disable');
                            }},
                            {text:'删除',itemId:'toolbar_remove',iconCls:'remove',iconAlign: 'left',disabled:true,childRemove:'canRemove',childEdit:'!editing',mainAdd:'!adding',handler:function(){
                                var cmp = this.up('#zhiDuTabContainer');
                                var grid = cmp.down('grid[region=west]');
                                var form = cmp.down('form[region=north]');
                                var idValue = form.getForm().findField('id').getValue();
                                Ext.Msg.show({
                                    title: '提示',
                                    message: '是否删除?',
                                    buttons: Ext.Msg.YESNO,
                                    icon: Ext.Msg.QUESTION,
                                    fn: function (btn) {
                                        if (btn === 'yes') {
                                            Ext.Ajax.request({
                                                url: '/api/tab/delete',
                                                params: {id: idValue},
                                                success: function (response) {
                                                    var obj = JSON.parse(response.responseText);
                                                    if(obj.success) {
                                                        grid.getStore().load({
                                                            params: {
                                                                id: cmp.parentid
                                                            }
                                                        });
                                                    }
                                                    else{
                                                        Ext.Msg.alert('提示', obj.data);
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }},
                            {text:'生成',itemId:'toolbar_rept',iconCls:'arrow_out',iconAlign: 'left',handler:function(){
                                var cmp = this.up('#zhiDuTabContainer');
                                var form = cmp.down('form[region=north]');
                                var tabcode = form.getForm().findField('tabcode').getValue();
                                Ext.Ajax.request({
                                    url: '/api/rpt/setting/build/'+tabcode,
                                    method:'GET',
                                    success: function (response) {
                                        var obj = JSON.parse(response.responseText);
                                        console.log(obj);
                                    }
                                });
                            }}
                        ]
                    },
                    items:[
                        {xtype:'hidden',name:'id'}, {xtype:'hidden',name:'systeminfoid'},
                        {layout:'column',items:[
                            {
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'报表编号',name:'tabcode',itemId:'tabcode',dataIndex:'tabcode',childEdit:'editing',xtype:'textfield'}
                                ]
                            },{
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'报表名称',name:'tabname',itemId:'tabname',dataIndex:'tabname',childEdit:'editing',xtype:'textfield'}
                                ]
                            },{
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'制表机关',name:'makedept',itemId:'makedept',dataIndex:'makedept',childEdit:'editing',xtype:'textfield'}
                                ]
                            },{
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'批准文号',name:'approvalno',itemId:'approvalno',dataIndex:'approvalno',childEdit:'editing',xtype:'textfield'}
                                ]
                            }
                        ]},
                        {layout:'column',items:[
                            {
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'有效期至',name:'validitydate',itemId:'validitydate',dataIndex:'validitydate',childEdit:'editing',xtype:'textfield'}
                                ]
                            },
                            {
                                columnWidth:3/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'规则描述',name:'comment',itemId:'comment',dataIndex:'comment',childEdit:'editing',xtype:'textarea'}
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
                            xtype:'zhiDuTabSetting',
                            itemId:'zhiDuTab1Container',
                            title: '汇总表头',
                            store: Ext.create('Kits.store.RptTabSetting', {}),
                            typeId:0,
                        },
                        {
                            xtype:'zhiDuTabSetting',
                            itemId:'zhiDuTab2Container',
                            title: '提报表头',
                            store: Ext.create('Kits.store.RptTabSetting', {}),
                            typeId:1
                        },{
                            xtype:'grid',
                            itemId:'zhiDuTab3Container',
                            title: '表单规则',
                            parentid: null,
                            currentId: null,
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
                            doRefresh:function (record) {
                                var store = this.getStore();
                                this.parentid = record ? record.getId() : 'undefine';
                                store.load({
                                    params:{
                                        id:this.parentid
                                    }
                                });
                            },
                            rbar:{
                                xtype: 'toolbar',
                                itemId: 'hzToolBar',
                                items: [
                                    {text:'新增',iconCls:'add',iconAlign: 'left',childAdd:'!adding',mainAdd:'!adding',handler:function () {
                                        var grid = this.up('grid');
                                        var store = grid.getStore();
                                        var count = store.getCount();
                                        var record = store.createModel({tabid:grid.parentid,orderno:count+1});
                                        store.add(record);
                                    }},
                                    {text:'保存',iconCls:'save',iconAlign: 'left',childAdd:'!adding',mainAdd:'!adding', handler:function(){
                                        var grid = this.up('grid');
                                        var store = grid.getStore();
                                        store.sync({
                                            success:function (batch,options) {
                                                store.reload();
                                            }
                                        });
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
                                            success:function (batch,options) {
                                                store.reload();
                                            }
                                        });
                                    }}
                                ]
                            },
                            store: Ext.create('Kits.store.RptTabRule', {}),
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
                                {text:'错误提示',dataIndex:'errortext',width:360,
                                    editor: {
                                        field: {
                                            xtype: 'textfield',
                                            allowBlank: true
                                        }
                                    }
                                },
                                {text:'排序',sortable:false,dataIndex:'orderno',width:60,align:'center',
                                    editor: {
                                        field: {
                                            xtype: 'numberfield',
                                            minValue: 0,
                                            allowBlank: true
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});