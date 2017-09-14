Ext.define('Kits.view.quanXian.Role', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.layout.container.Border',
        'Ext.view.MultiSelector'
    ],
    collapsible: false,
    columnLines: true,
    bodyBorder: false,
    store: Ext.create('Kits.store.User'),
    tbar: [{
        text: '添加角色',
        handler: function () {
            var win = Ext.create('Ext.window.Window', {
                title: '添加角色',
                height: 550,
                width: 500,
                layout: 'border',
                closeToolText:'关闭',
                // closeAction:'hide',
                modal:true,
                items: [{
                    xtype:'form',
                    bodyPadding: 10,
                    region:'north',
                    fieldDefaults: {
                        width:460,
                        msgTarget: 'side',
                        autoFitErrors: false
                    },
                    defaultType: 'textfield',
                    items: [{
                        allowBlank: false,
                        fieldLabel: '角色名',
                        name: 'name',
                        emptyText: '',
                    }, {
                        allowBlank: false,
                        xtype:'textareafield',
                        fieldLabel: '描述',
                        name: 'desc',
                        emptyText: '',
                    }]
                },{
                    xtype: 'multiselector',
                    region:'center',
                    title: '选择制度包',
                    fieldName: 'zdmc',
                    columns:{
                        items:[
                            {text:'名称',dataIndex:'zdmc',flex: 3},
                            {text:'创建',xtype: 'checkcolumn',flex: 1,dataIndex:'add',editor: {
                                xtype: 'checkbox',
                                cls: 'x-grid-checkheader-editor'
                            }},
                            {text:'修改',xtype: 'checkcolumn',flex: 1,dataIndex:'mod',editor: {
                                xtype: 'checkbox',
                                cls: 'x-grid-checkheader-editor'
                            }},
                            {text:'查看',xtype: 'checkcolumn',flex: 1,dataIndex:'view',editor: {
                                xtype: 'checkbox',
                                cls: 'x-grid-checkheader-editor'
                            }}
                        ]
                    },
                    viewConfig: {
                        deferEmptyText: false,
                        emptyText: ''
                    },
                    search: {
                        field: 'zdmc',
                        store: Ext.create('Kits.store.ZhiDu')
                    }
                }],
                buttons: [
                    { text:'保存',handler:function(){
                        win.close();
                    } },
                    { text:'取消',handler:function(){
                        win.close();
                    } }
                ]
            });
            win.show();
        },
        iconCls: 'fa fa-plus-circle'
    }],
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '角色名称',
            width: 120,
            dataIndex: 'name',
            editor: {
                allowBlank: false
            }
        },
        {
            text: '角色描述',
            width: 280,
            dataIndex: 'desc',
            editor: {
                allowBlank: false
            }
        },
        {
            xtype: 'checkcolumn',
            header: '状态',
            width: 100,
            dataIndex: 'alive',
            editor: {
                xtype: 'checkbox',
                cls: 'x-grid-checkheader-editor'
            }
        },
        {
            xtype: 'actioncolumn',
            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'x-fa fa-trash-o',
                tooltip: '删除',
                handler: function (view, recIndex, cellIndex, item, e, record) {
                    Ext.Msg.confirm('确认', '确认删除?', function (r) {
                        if (r == 'yes') record.drop();
                    }, this);
                }
            }]
        }
    ]
})
;