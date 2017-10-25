Ext.define('Kits.view.Home', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    xtype:'ViewXBase',
    title: '制度包管理',
    requires:[
        'Kits.view.zhiDuManage.TabContainer'
    ],
    initComponent: function () {
        var me = this;
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
                Ext.Ajax.request({
                    url:'/api/rpt/import/hzxls',
                    method:'POST',
                    success:function (response) {
                        var obj = JSON.parse(response.responseText);
                        Ext.Msg.alert('提示', obj.data);
                    }
                });
            }
        }
    ],
    itemId:'zhiDuBagContainer',
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
                    listeners:{
                        selectionchange: function (selmodel,selected) {
                            if (selected && selected.length > 0){
                                var form = this.up('box').down('form');
                                var grid = this;
                                var record = grid.getStore().createModel(selected[0]);
                                form.doLoadRecord(record);
                                form.doSwitchComponent(false,'mainEdit','editing','enable','disable');
                                form.doSwitchComponent(true,'mainRemove','canRemove','enable','disable');
                            }
                            else{
                                var form = this.up('box').down('form');
                                var grid = this;
                                var record = grid.getStore().createModel({});
                                form.doLoadRecord(record);
                            }
                        }
                    },
                    store: Ext.create('Kits.store.SystemInfo',{
                        listeners:{
                            load:function (store, records) {
                                var cmp = Ext.ComponentQuery.query('#zhiDuBagContainer')[0];
                                var grid = cmp.down('grid[region=east]');
                                var selModel = grid.getSelectionModel();
                                if (records && records.length > 0){
                                    selModel.selectRange(records.length-1,records.length-1);
                                }
                                else {
                                    grid.fireEvent('selectionchange',selModel,null);
                                }
                            }
                        }
                    })
                },
                {
                    xtype:'form',
                    region: 'center',
                    url:'/api/info/save',
                    method:'POST',
                    height: 1*80+80,
                    doLoadRecord: function (record) {
                        this.loadRecord(record);
                        var cmp = this.up('#zhiDuBagContainer');
                        var tab = cmp.down('#zhiDuTabContainer');
                        tab.doRefresh(record);
                    },
                    doSwitchComponent: function (value,selector,groupid,trueFunc,falseFunc) {
                        var cmp = this.up('#zhiDuBagContainer');
                        cmp.doSwitchComponent(value,selector,groupid,trueFunc,falseFunc);
                    },
                    listeners: {
                        afterrender: function () {
                            this.doSwitchComponent(false,'mainEdit','editing','enable','disable');
                        }
                    },
                    tbar:{
                        xtype: 'toolbar',
                        items: [
                            {text:'新增',itemId:'toolbar_add',iconCls:'add',iconAlign: 'top', mainEdit:'!editing',handler:function(){
                                var form = this.up('form');
                                var grid = form.up('box').down('grid');
                                var record = grid.getStore().createModel({name:''});
                                form.loadRecord(record);
                                form.doSwitchComponent(true,'mainEdit','editing','enable','disable');
                                form.doSwitchComponent(true,'mainAdd','adding','enable','disable');
                            }},
                            {text:'修改',itemId:'toolbar_modify',iconCls:'application_edit',iconAlign: 'top', mainEdit:'!editing',handler:function(){
                                var form = this.up('form');
                                form.doSwitchComponent(true,'mainEdit','editing','enable','disable');
                            }},
                            {text:'保存',itemId:'toolbar_save',iconCls:'save',iconAlign: 'top', mainEdit:'editing',handler:function () {
                                var form = this.up('form');
                                var grid = form.up('box').down('grid');
                                form.submit({
                                    success: function(baseform, action) {
                                        if(action.response.status == 200){
                                            grid.getStore().reload();
                                            form.doSwitchComponent(false,'mainEdit','editing','enable','disable');
                                        }
                                    },
                                });
                            }},
                            {text:'取消',itemId:'toolbar_cancel',iconCls:'cancel',iconAlign: 'top', mainEdit:'editing',handler:function () {
                                var form = this.up('form');
                                var grid = form.up('box').down('grid');
                                var store = grid.getStore();
                                store.removeAll();
                                store.reload();
                                form.doSwitchComponent(false,'mainEdit','editing','enable','disable');
                            }},
                            {text:'删除',itemId:'toolbar_remove',iconCls:'remove',iconAlign: 'top', disabled:true, mainRemove:'canRemove',mainAdd:'!adding',handler:function () {
                                var form = this.up('form');
                                var grid = form.up('box').down('grid');
                                var idValue = form.getForm().findField('id').getValue();
                                Ext.Msg.show({
                                    title:'提示',
                                    message: '是否删除?',
                                    buttons: Ext.Msg.YESNO,
                                    icon: Ext.Msg.QUESTION,
                                    fn: function(btn) {
                                        if (btn === 'yes') {
                                            Ext.Ajax.request({
                                                url:'/api/info/delete',
                                                params:{id:idValue},
                                                success:function (response) {
                                                    var obj = JSON.parse(response.responseText);
                                                    if(obj.success){
                                                        grid.getStore().reload();
                                                    }
                                                    else{
                                                        Ext.Msg.alert('提示', obj.data);
                                                    }
                                                }
                                            });
                                        }
                                    }
                                });
                            }}
                        ]
                    },
                    items:[
                        {layout:'column',items:[
                            {
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'制度名称',name:'name',itemId:'name',dataIndex:'name',mainEdit:'editing',xtype:'textfield'}
                                ]
                            },{
                                columnWidth:1/4,layout:'form',
                                margin:'2 10 2 10',
                                items:[
                                    {fieldLabel:'颁发年份',name:'releaseYear',itemId:'releaseYear',mainEdit:'editing',dataIndex:'releaseYear',xtype:'textfield'}
                                ]
                            },{name:'id',xtype:'hidden'}
                        ]}
                    ]
                }
            ]
        },
        {
            xtype:'zhiDuTabContainer',
            region: 'center',
            itemId:'zhiDuTabContainer',
            frame: true,
            doRefresh:function(record){
                var grid = this.down('grid[region=west]');
                var store = grid.getStore();
                this.parentid = record.getId();
                store.load({
                    params : {
                        id : this.parentid
                    }
                });
            }
        }
    ]
});