Ext.define('Kits.view.Shop', {
    extend: 'Ext.grid.Panel',
    title: '商家',
    store: Ext.create('Kits.store.Shop'),
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
        text: '商家',
        handler: function () {
            var me = this.up('grid');
            var rec = Ext.create('Kits.model.Shop', {
                id: null
            });

            me.getStore().insert(0, rec);
        }
    }
    //     {
    //     iconCls: 'x-fa fa-hand-paper-o',
    //     text: '抓取数据',
    //     handler: function () {
    //         var grid = this.up('grid')
    //         grid.mask('开启抓取工具，请耐心等待');
    //         Ext.Ajax.request({
    //             method: 'POST',
    //             timeout: 2 * 60 * 1000,
    //             url: '/meituan/spider/onAll',
    //             success: function (response, opts) {
    //                 grid.unmask();
    //                 grid.getStore().load();
    //             },
    //             failure: function (response, opts) {
    //                 grid.unmask();
    //                 console.log('server-side failure with status code ' + response.status);
    //             }
    //         });
    //     }
    // }
    ],
    columns: [
        {
            text: 'id',
            dataIndex: 'id'
        },
        {
            flex:1,
            text: '名称',
            dataIndex: 'name',
            editor: {
                allowBlank: false
            }
        },
        // {
        //     flex:1,
        //     text: '爬取状态',
        //     dataIndex: 'stealing'
        // },
        {
            flex:2,
            text: '地址',
            dataIndex: 'address',
            editor: {
                allowBlank: false
            }
        },
        // {
        //     flex:1,
        //     text: '登录名',
        //     dataIndex: 'loginName',
        //     editor: {
        //         allowBlank: false
        //     }
        // },
        // {
        //     flex:1,
        //     text: '登录密码',
        //     dataIndex: 'loginPassword',
        //     editor: {
        //         allowBlank: false
        //     }
        // },
        {
            flex:1,
            text: '电话',
            dataIndex: 'phone',
            editor: {
                allowBlank: false,
                regex: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
                invalidText: '请输入正确的手机号码'
            }
        },
        {
            flex: 1,
            text: '抓取状态',
            dataIndex: 'stealing'

        },
        {
            flex:1,
            xtype: 'actioncolumn',
            sortable: false,
            menuDisabled: true,
            items: [
                {
                    iconCls: 'actionColumnRed x-fa fa-ban',
                    tooltip: '删除',
                    handler: function (view, recIndex, cellIndex, item, e, record) {
                        Ext.Msg.confirm('确认', '确认删除?', function (r) {
                            if (r == 'yes') record.drop();
                        }, this);
                    }
                },
                // {
                //     iconCls: 'actionColumnRed x-fa fa-file-image-o',
                //     tooltip: '爬取状态',
                //     handler: function (view, recIndex, cellIndex, item, e, record) {
                //         var grid = view.up('grid');
                //         Ext.Msg.confirm('确认', '爬取状态?', function (r) {
                //             if (r != 'yes') return;
                //             grid.mask('加载中');
                //             Ext.Ajax.request({
                //                 method: 'GET',
                //                 timeout: 60 * 1000,
                //                 url: '/meituan/spider/' + record.get('id') + '/screenshot',
                //                 success: function (response, opts) {
                //                     grid.unmask();
                //                     if (!response.responseText)return;
                //                     Ext.create('Ext.window.Window', {
                //                         maximized: true,
                //                         title:'截图',
                //                         layout: 'fit',
                //                         items: {xtype: 'image', src: 'data:image/jpeg;base64,' + response.responseText},
                //                         closeAction: 'destroy'
                //                     }).show();
                //                 },
                //
                //                 failure: function (response, opts) {
                //                     grid.unmask();
                //                     console.log('server-side failure with status code ' + response.status);
                //                 }
                //             });
                //         }, this);
                //     }
                // },

                // {
                //     iconCls: 'actionColumnRed x-fa fa-hand-paper-o',
                //     tooltip: '爬取',
                //     handler: function (view, recIndex, cellIndex, item, e, record) {
                //         var grid = view.up('grid');
                //         Ext.Msg.confirm('确认', '确认爬取?', function (r) {
                //             if (r != 'yes')return;
                //             grid.mask('加载中');
                //             Ext.Ajax.request({
                //                 method: 'POST',
                //                 timeout: 60 * 1000,
                //                 url: '/meituan/spider/' + record.get('id'),
                //                 success: function (response, opts) {
                //                     grid.unmask();
                //                     if (!response.responseText)return;
                //                     Ext.create('Ext.window.Window', {
                //                         height: 130,
                //                         width: 280,
                //                         layout: {
                //                             type: 'vbox',
                //                             pack: 'center'
                //                         },
                //                         items: [
                //                             {xtype: 'image', src: response.responseText},
                //                             {xtype: 'textfield', fieldLabel: '输入验证码', itemId: 'vCode'},
                //                             {
                //                                 xtype: 'button', text: '确认',
                //                                 handler: function () {
                //                                     var code = this.up('window').down('textfield').getValue();
                //                                     Ext.Ajax.request({
                //                                         method: 'POST',
                //                                         url: '/meituan/spider/' + record.get('id') + '/login?code=' + code
                //                                     })
                //                                 }
                //                             }
                //                         ],
                //                         closeAction: 'destroy'
                //                     }).show();
                //                 },
                //
                //                 failure: function (response, opts) {
                //                     grid.unmask();
                //                     console.log('server-side failure with status code ' + response.status);
                //                 }
                //             });
                //         }, this);
                //     }
                // }
            ]
        }
    ]
});