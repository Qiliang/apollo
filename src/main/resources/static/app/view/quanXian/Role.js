Ext.define('Kits.view.quanXian.Role', {
    extend: 'Ext.grid.Panel',
    collapsible: false,
    columnLines: true,
    bodyBorder: false,
    store: Ext.create('Kits.store.Role'),
    tbar: [{
        text: '添加角色',
        handler: function () {
            var btn = this;
            var win = Ext.create('Ext.window.Window', {
                title: '添加角色',
                height: 550,
                width: 500,
                layout: 'fit',
                closeToolText: '关闭',
                // closeAction:'hide',
                modal: true,
                items: [Ext.create('Kits.view.quanXian.RoleView', {
                    callBack: function () {
                        btn.up('grid').getStore().load();
                        win.close();
                    }
                })]
            });
            win.show();
        },
        iconCls: 'fa fa-plus-circle'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        emptyMsg: "无数据...",
    },
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                panel.getStore().load();
            }
        }
    ],
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '角色名称',
            width: 120,
            dataIndex: 'name'
        },
        {
            text: '角色描述',
            width: 280,
            dataIndex: 'remark'
        },
        {
            header: '是否可用',
            width: 100,
            dataIndex: 'useable',
            renderer: function(value){
                return value==1?'是':'否';
            }
        },
        {
            xtype: 'actioncolumn',
            width: 70,
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'x-fa fa-pencil-square-o',
                tooltip: '修改',
                handler: function(view, recIndex, cellIndex, item, e, record) {
                    var btn=this;
                    var win = Ext.create('Ext.window.Window', {
                        title: '修改角色',
                        height: 550,
                        width: 500,
                        layout: 'fit',
                        closeToolText:'关闭',
                        modal:true,
                        items: [Ext.create('Kits.view.quanXian.RoleView',{
                            paraId:record.data.id,
                            callBack:function(){
                                btn.up('grid').getStore().reload();
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
                                url: '/role/deleteById',
                                params: { id: record.data.id},
                                method: 'POST',
                                success: function (response, options) {
                                    btn.up('grid').getStore().reload();
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
})
;