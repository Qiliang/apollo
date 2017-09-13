Ext.define('Kits.view.quanXian.Branch', {
    extend: 'Ext.grid.Panel',
    collapsible: false,
    columnLines: true,
    bodyBorder: false,
    store: Ext.create('Kits.store.Branch'),
    tbar: [{
        text: '添加机构',
        handler: function () {
            var win = Ext.create('Ext.window.Window', {
                title: '添加机构',
                height: 300,
                width: 500,
                layout: 'fit',
                closeToolText:'关闭',
                // closeAction:'hide',
                modal:true,
                items: {
                    xtype:'form',
                    bodyPadding: 10,
                    fieldDefaults: {
                        width:450,
                        msgTarget: 'side',
                        autoFitErrors: false
                    },
                    defaultType: 'textfield',
                    items: [{
                        allowBlank: false,
                        fieldLabel: '机构名称',
                        name: 'name',
                        emptyText: '',
                    }, {
                        allowBlank: false,
                        xtype: 'textareafield',
                        fieldLabel: '机构描述',
                        name: 'desc',
                        emptyText: '',
                    }]
                },
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
            text: '机构名称',
            width: 120,
            dataIndex: 'name',
            editor: {
                allowBlank: false
            }
        },
        {
            text: '机构描述',
            width: 280,
            dataIndex: 'desc',
            editor: {
                allowBlank: false
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