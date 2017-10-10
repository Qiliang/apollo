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
    pid:'',
    items: [
        {
            title: '组织机构',
            region: 'west',
            width: 240,
            xtype: 'treepanel',
            itemId:'orgTreePanel',
            tools: [
                {
                    type: 'refresh',
                    tooltip: '刷新',
                    callback: function (panel, tool, event) {
                        panel.getStore().load();
                    }
                }
            ],
            rootVisible: true,
            store: Ext.create('Kits.store.BranchTree'),
            listeners: {
                cellclick : function (me, td, cellIndex, record, tr, rowIndex, e, eOpts )  {
                    var orgGrid = Ext.getCmp("orgGrid");
                    this.up('panel').pid = record.data.id;
                    orgGrid.getStore().reload({
                        params : {
                            pid : this.up('panel').pid
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
            tools: [
                {
                    type: 'refresh',
                    tooltip: '刷新',
                    callback: function (panel, tool, event) {
                        panel.getStore().load();
                    }
                }
            ],
            tbar: [{
                text: '添加组织机构',
                handler: function () {
                    var btn=this;
                    var pid = this.up('grid').up('panel').pid;
                    var win = Ext.create('Ext.window.Window', {
                        title: '添加组织机构',
                        height: 300,
                        width: 600,
                        layout: 'fit',
                        closeToolText:'关闭',
                        modal:true,
                        items: [Ext.create('Kits.view.quanXian.BranchView',{paraPid:pid,
                            callBack:function(){
                                btn.up('grid').getStore().load();
                                btn.up('grid').up('panel').getComponent('orgTreePanel').getStore().reload();
                                win.close();
                        }})]
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
                    dataIndex: 'master'
                },
                {
                    xtype: 'actioncolumn',
                    text: '操作',
                    width: 70,
                    sortable: false,
                    menuDisabled: true,
                    items: [{
                        iconCls: 'x-fa fa-pencil-square-o',
                        tooltip: '修改',
                        handler: function(view, recIndex, cellIndex, item, e, record) {
                            var btn=this;
                            var win = Ext.create('Ext.window.Window', {
                                title: '修改组织机构',
                                height: 300,
                                width: 600,
                                layout: 'fit',
                                closeToolText:'关闭',
                                modal:true,
                                items: [Ext.create('Kits.view.quanXian.BranchView',{
                                    paraId:record.data.id,
                                    callBack:function(){
                                        btn.up('grid').getStore().reload();
                                        btn.up('grid').up('panel').getComponent('orgTreePanel').getStore().reload();
                                        win.close();
                                    }})]
                            });
                            win.show();
                        }
                    },'-',{
                        iconCls: 'x-fa fa-trash-o',
                        tooltip: '删除',
                        handler: function (view, recIndex, cellIndex, item, e, record) {
                            var btn=this;
                            Ext.Msg.confirm('确认', '确认删除?', function (r) {
                                if (r == 'yes') {
                                    Ext.Ajax.request({
                                        url: '/api/org/deleteById',
                                        params: { id: record.data.id},
                                        method: 'POST',

                                        success: function (response, options) {
                                            btn.up('grid').getStore().reload();
                                            btn.up('grid').up('panel').getComponent('orgTreePanel').getStore().reload();
                                        },
                                        failure: function (response, options) {
                                            var res = JSON.parse(response.responseText);
                                            Ext.MessageBox.alert('失败', '错误信息：' + res.message);
                                        }
                                    });
                                }
                            }, this);
                        }
                    }]
                }

            ]
        }
    ]
})