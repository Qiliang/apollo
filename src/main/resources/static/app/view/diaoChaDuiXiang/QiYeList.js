Ext.define('Kits.view.diaoChaDuiXiang.QiYeList', {
    extend: 'Ext.grid.Panel',
    title: '企业列表',
    store: Ext.create('Kits.store.QiYe', {pageSize: 3}),
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                panel.getStore().load();
            }
        }
    ],
    tbar: [
        {
            xtype: 'textfield',
            fieldLabel: '企业名称',
            width:220,
            name: 'qymc',
        },
        {
            xtype: 'textfield',
            fieldLabel: '组织机构代码',
            name: 'zzjgdm',
        },
        {
            xtype: 'button',
            text: '查询',
            handler:function () {
                var grid = this.up('grid');
                grid.getStore().load();
            }
        },{
            xtype: 'button',
            text: '添加',
            handler: function () {
                Ext.create('Ext.window.Window', {
                    title: '添加直报',
                    height: 400,
                    width: 600,
                    layout: 'fit',
                    modal: true,
                    closeToolText:'关闭',
                    items: Ext.create('Kits.view.diaoChaDuiXiang.AddQiYeView', {})
                }).show();
            }
        },{
            xtype: 'button',
            text: '导入',
            handler: function () {
                Ext.create('Ext.window.Window', {
                    title: '添加直报',
                    height: 200,
                    width: 400,
                    layout: 'fit',
                    modal: true,
                    closeToolText:'关闭',
                    items: Ext.create('Kits.view.diaoChaDuiXiang.importView', {})
                }).show();
            }
        }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '企业名称',
            dataIndex: 'qymc'
        },
        {
            text: '组织机构代码',
            dataIndex: 'zzjgdm'
        },
        {
            text: '所在地址',
            dataIndex: 'szdz'
        },
        {
            text: '行业类别代码',
            dataIndex: 'hylbdm'
        },
        {
            text: '登记注册类别',
            dataIndex: 'djzclb'
        },
        {
            text: '操作',
            xtype:'actioncolumn',
            width:70,
            items: [{
                iconCls: 'x-fa fa-pencil-square-o',
                tooltip: '修改',
                handler: function(grid, rowIndex, colIndex) {
                    Ext.create('Ext.window.Window', {
                        title: '修改',
                        height: 400,
                        width: 600,
                        layout: 'fit',
                        closeToolText:'关闭',
                        // closeAction:'hide',
                        modal:true,
                        items: Ext.create('Kits.view.diaoChaDuiXiang.AddQiYeView',{a:new Date()})
                    }).show();
                    // alert("查看 " + rec.get('id'));
                }
            },'-',{
                iconCls: 'x-fa fa-trash-o',
                tooltip: '删除',
                handler: function (grid, rowIndex, colIndex) {
                    Ext.MessageBox.confirm('提示', '是否确认删除该条记录?', function (btn, text) {
                    }, this);
                }
            }]
        }

    ]
})
;