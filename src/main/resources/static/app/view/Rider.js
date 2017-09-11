Ext.define('Kits.view.Rider', {
    extend: 'Ext.grid.Panel',
    title: '骑手管理',
    store: Ext.create('Kits.store.Rider'),
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                panel.getStore().load();
            }
        }
    ],
    plugins: [{
        ptype: 'rowediting',
        clicksToMoveEditor: 1,
        autoCancel: false
    }],
    tbar: [{
        iconCls: 'x-fa fa-plus',
        text: '骑手',
        handler: function () {
            var me = this.up('grid');
            var rec = Ext.create('Kits.model.Rider', {
                id: null
            });

            me.getStore().insert(0, rec);
        }
    }],
    columns: [
        {
            xtype: 'rownumberer'
        },
        {text: 'id', dataIndex: 'id'},
        {
            text: '名称',
            dataIndex: 'name',
            editor: {
                allowBlank: false
            }
        },
        {
            flex:1,
            text: '手机',
            dataIndex: 'phone',
            editor: {
                allowBlank: false,
                regex: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
                invalidText: '请输入正确的手机号码'
            }
        },
        {
            flex:1,
            text: '登录名',
            dataIndex: 'loginName',
            editor: {
                allowBlank: false
            }
        },
        {
            flex:1,
            text: '登录密码',
            dataIndex: 'loginPassword',
            editor: {
                allowBlank: false
            }
        },
        {
            flex:1,
            text: '最后活跃时间',
            dataIndex: 'lastModifyTime',
            xtype: 'datecolumn',
            format: 'Y-m-d H:i:s'
        },
        {
            flex:1,
            xtype: 'actioncolumn',
            width: 30,

            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'actionColumnRed x-fa fa-ban',
                tooltip: '删除',
                style: {
                    color: 'red',
                    marginBottom: '10px'
                },
                handler: function (view, recIndex, cellIndex, item, e, record) {
                    Ext.Msg.confirm('确认', '确认删除?', function (r) {
                        if (r == 'yes') record.drop();
                    }, this);
                }
            }]
        }

    ],
    bbar: [
        ''
    ]
});