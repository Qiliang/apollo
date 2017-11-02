Ext.define('Kits.view.shuJuChaXun.BaseQuery', {
    extend: 'Ext.grid.Panel',
    title: '基础数据查询',
    columnLines: true,
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    columns: [],
    tbar: [
        {xtype: 'hiddenfield', name: 'searchJson',itemId:'searchJson'},
        {
            itemId: 'system',
            xtype: 'combobox',
            hideLabel: true,
            valueField: 'id',
            displayField: 'name',
            queryMode: 'local',
            store: Ext.create('Kits.store.ZhiDuQiYe'),
            typeAhead: true,
            triggerAction: 'all',
            emptyText: '选制度...',
            selectOnFocus: true,
            width: 185,
            indent: true,
            listeners: {
                change: function (me, newValue, oldValue, eOpts) {
                    var table = me.up('panel').queryById('table');
                    me.up('grid').queryById('searchJson').setValue('');
                    //重新加载
                    table.getStore().getProxy().setExtraParams({
                        id: newValue
                    })
                    table.getStore().load();
                }
            }

        },
        {
            itemId: 'table',
            xtype: 'combobox',
            hideLabel: true,
            valueField: 'id',
            displayField: 'tabname',
            typeAhead: true,
            store: {
                xtype: 'store.store',
                proxy: {
                    type: 'ajax',
                    actionMethods: {
                        read: 'POST'
                    },
                    url: '/api/tab/list',
                    reader: {
                        type: 'json',
                        rootProperty: 'data',
                    }

                },
                autoLoad: false,
                autoSync: false
            },
            queryMode: 'local',
            triggerAction: 'all',
            emptyText: '选数据表...',
            selectOnFocus: true,
            width: 250,
            indent: true
        },
        {
            text: '选择查询字段',
            handler: function (me) {
                //获得制度id，表样id，查询条件json，查询字段名称json
                var table = me.up('grid').queryById('table');
                var system = me.up('grid').queryById('system');
                if (!table.getValue()) {
                    Ext.MessageBox.alert('失败', '请选择数据表');
                    return;
                }
                if (!system.getValue()) {
                    Ext.MessageBox.alert('失败', '请选择制度');
                    return;
                }
                var jsonStr = me.up('grid').queryById('searchJson').getValue();
                var json = null;
                if(jsonStr){
                    json = Ext.JSON.decode(jsonStr);
                }
                var win = Ext.create('Ext.window.Window', {
                    title: '查询字段',
                    height: 700,
                    width: 1100,
                    layout: 'fit',
                    closeToolText: '关闭',
                    // closeAction:'hide',
                    modal: true,
                    items: Ext.create('Kits.view.shuJuChaXun.SearchView', {
                        tableId: table.getValue(), systemId: system.getValue(),
                        searchJson:json,
                        callBack: function (data) {
                            var searchJson = [];
                            for(var i=0;i<data.length;i++){
                                var d = data[i].data;
                                if(d.logical&&d.unit&&d.number!=null){
                                    searchJson.push(d);
                                }
                            }
                            me.up('grid').queryById('searchJson').setValue(Ext.JSON.encode(searchJson));
                            win.close();
                        }
                    })
                });
                win.show();
            }
        },
        , {
            text: '查询',
            handler: function (me) {
                //获得制度id，表样id，查询条件json，查询字段名称json
                var table = me.up('grid').queryById('table');
                var system = me.up('grid').queryById('system');
                var searchJson = me.up('grid').queryById('searchJson');
                if (!table.getValue()) {
                    Ext.MessageBox.alert('失败', '请选择数据表');
                    return;
                }
                if (!system.getValue()) {
                    Ext.MessageBox.alert('失败', '请选择制度');
                    return;
                }
                Ext.Ajax.request({
                    url: '/api/rpt/collect/table/list/columns',
                    method: 'GET',
                    params: {tableId: table.getValue(), systemId: system.getValue()},
                    success: function (response, opts) {
                        var res = JSON.parse(response.responseText);
                        var c = [{xtype: 'rownumberer', width: 32}];
                        for (var i = 0; i < res.length; i++) {
                            c.push(res[i]);
                        }
                        c.push({
                            text: '操作',
                            xtype: 'actioncolumn',
                            width: 70,
                            items: [{
                                iconCls: 'x-fa fa-eye',
                                tooltip: '查看',
                                handler: function (view, recIndex, cellIndex, item, e, record) {
                                    var btn = this;
                                    //ajax查询填报信息
                                    Ext.Ajax.request({
                                        url: '/api/directRptTask/getRptTaskObjectById',
                                        method: 'GET',
                                        params: {id: record.data.usercode},
                                        success: function (response, opts) {
                                            var res1 = JSON.parse(response.responseText);
                                            var recordData = Ext.create('Ext.data.Model', res1);
                                            var win = Ext.create('Ext.window.Window', {
                                                title: '查看',
                                                height: 700,
                                                width: 1100,
                                                layout: 'fit',
                                                closeToolText: '关闭',
                                                // closeAction:'hide',
                                                modal: true,
                                                items: Ext.create('Kits.view.shuJuLuRu.TianBaoView', {
                                                    isView: true, recordData: recordData,
                                                    callBack: function () {
                                                        win.close();
                                                    }
                                                })
                                            });
                                            win.show();
                                        },
                                        failure: function (response, opts) {
                                            var res1 = JSON.parse(response.responseText);
                                            Ext.MessageBox.alert('失败', '错误信息：' + res1.data);
                                        }
                                    });
                                }
                            }]
                        });
                        me.up('grid').reconfigure({
                            xtype: 'store.store',
                            proxy: {
                                type: 'ajax',
                                url: '/api/rpt/collect/table/list',
                                extraParams: {tableId: table.getValue(),searchJson:searchJson.getValue()},
                                reader: {
                                    type: 'json',
                                    rootProperty: 'list',
                                    totalProperty: 'total'
                                },
                                limitParam: 'limit',
                                pageParam: 'page'

                            },
                            autoLoad: true,
                            autoSync: false
                        }, c);
                    },
                    failure: function (response, opts) {
                        var res = JSON.parse(response.responseText);
                        Ext.MessageBox.alert('失败', '错误信息：' + res.data);
                    }
                });
            }
        }
    ]
})
;