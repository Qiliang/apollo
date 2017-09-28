Ext.define('Kits.view.quanXian.Branch', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border',
    ],
    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: false,
        split: true
    },
    listeners:{
        afterrender:function (me) {
        }
    },
    items: [
        {
            title: '组织机构',
            region: 'west',
            width: 240,
            xtype: 'treepanel',
            rootVisible: true,
            store: Ext.create('Kits.store.BranchTree'),
            listeners: {
                cellclick : function (me, td, cellIndex, record, tr, rowIndex, e, eOpts )  {
                    var orgGrid = Ext.getCmp("orgGrid");
                    orgGrid.getStore().reload({
                        params : {
                            pid : record.data.id
                        }
                    });
                }
            }
        },
        {
            title: '下属组织机构列表',
            collapsible: false,
            columnLines: true,
            id:'orgGrid',
            xtype: 'grid',
            tbar: [{
                text: '添加组织机构',
                handler: function () {
                    var win = Ext.create('Ext.window.Window', {
                        title: '添加组织机构',
                        height: 300,
                        width: 600,
                        layout: 'fit',
                        closeToolText:'关闭',
                        // closeAction:'hide',
                        modal:true,
                        items: [Ext.create('Kits.view.quanXian.BranchView',{paraId:'1'})]
                    });
                    win.show();
                },
                iconCls: 'fa fa-plus-circle'
            }],
            region: 'center',
            store: Ext.create('Kits.store.Branch'),
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                emptyMsg: "无数据...",
            },
            columns: [
                {
                    xtype: 'rownumberer'
                },
                {
                    text: '组织机构名称',
                    width: 180,
                    dataIndex: 'name'
                },
                {
                    text: '组织机构代码',
                    width: 150,
                    dataIndex: 'code'
                },
                {
                    text: '电话',
                    width: 150,
                    dataIndex: 'phone'
                },
                {
                    text: '负责人',
                    width: 150,
                    dataIndex: 'masteer'
                },
                {
                    xtype: 'actioncolumn',
                    text: '操作',
                    width: 70,
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
        }
    ]
})