Ext.define('Kits.view.zhiDu.XzqhDiaoChaDuiXiangView', {
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    bodyBorder: false,
    bodyPadding: 10,
    defaults: {
        bodyPadding: 0,
        frame: true
    },
    items: [
        {
            flex: 2,
            xtype: 'grid',
            title: '行政区划',
            id: 'qyxxGrid',
            selType: 'checkboxmodel',
            store: {
                xtype: 'store.store',
                proxy: {
                    type: 'ajax',
                    url: '/api/area/all',
                    method: 'GET',
                    reader: {
                        type: 'json'
                    }
                },
                autoLoad: true
            },
            tbar: [{
                xtype: 'textfield',
                fieldLabel: '行政区划名称',
                id: 'viewXzqhmc',
                name: 'xzqhmc',
            }, {
                xtype: 'textfield',
                fieldLabel: '行政区划代码',
                name: 'xzqhdm',
                id: 'viewXzqhdm',
            },
                {
                    xtype: 'button',
                    text: '查询',
                    handler: function () {
                        var grid = this.up('grid');
                        grid.getStore().clearFilter(true);
                        var filters = grid.getStore().getFilters();

                        function sszFilter(item) {
                            var ssz = Ext.getCmp('viewXzqhdm').getValue();
                            if (ssz) {
                                return item.data.code.indexOf(ssz) != -1;
                            } else {
                                return true
                            }
                        }

                        function xzqhmcFilter(item) {
                            var xzqhmc = Ext.getCmp('viewXzqhmc').getValue();
                            if (xzqhmc) {
                                return item.data.name.indexOf(xzqhmc) != -1;
                            } else {
                                return true
                            }
                        }

                        filters.add(sszFilter);
                        filters.add(xzqhmcFilter);
                    }
                }],
            columns: [
                {
                    text: '行政区划名称',
                    dataIndex: 'name',
                    width: '50%'
                }, {
                    text: '行政区划代码',
                    dataIndex: 'code',
                    width: '45%'
                }
            ]
        },
        {
            width: 70,
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },
            bodyPadding: 10,
            items: [
                {
                    flex: 1,
                    layout: 'center',
                    items: [
                        {
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    iconCls: 'x-fa fa-angle-double-right',
                                    tooltip: '全部选中',
                                    margin: '0 0 10 0',
                                    handler: function (e) {
                                        var grid = Ext.getCmp('qyxxGrid');
                                        var store = grid.getStore();
                                        var data = Ext.getCmp('targetGrid').getStore().getData().items.concat(store.getData().items);
                                        store.setData([]);
                                        Ext.getCmp('targetGrid').getStore().setData(data);
                                    }
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'x-fa fa-angle-right',
                                    tooltip: '选择选中',
                                    margin: '0 0 10 0',
                                    handler: function (e) {
                                        var grid = Ext.getCmp('qyxxGrid');
                                        var store = grid.getStore();
                                        var selection = grid.getSelection();
                                        if (selection.length == 0) {
                                            Ext.toast('未选中任何记录！');
                                            return;
                                        }
                                        for (var i = 0; i < selection.length; i++) {
                                            var rec = selection[i].getData();
                                            store.remove(selection[i]);
                                            var item = {};
                                            item = rec;
                                            Ext.getCmp('targetGrid').getStore().add(item);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    flex: 1,
                    layout: 'center',
                    items: [
                        {
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    iconCls: 'x-fa fa-angle-double-left',
                                    tooltip: '全部取消选中',
                                    margin: '0 0 10 0',
                                    handler: function (e) {

                                        var targetGrid = Ext.getCmp('targetGrid');
                                        var store = targetGrid.getStore();
                                        var data = Ext.getCmp('qyxxGrid').getStore().getData().items.concat(store.getData().items);
                                        store.setData([]);
                                        Ext.getCmp('qyxxGrid').getStore().setData(data);
                                    }
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'x-fa fa-angle-left',
                                    tooltip: '取消选中',
                                    margin: '0 0 10 0',
                                    handler: function (e) {
                                        var grid = Ext.getCmp('targetGrid');
                                        var store = grid.getStore();
                                        var selection = grid.getSelection();
                                        if (selection.length == 0) {
                                            Ext.toast('未选中任何记录！');
                                            return;
                                        }
                                        for (var i = 0; i < selection.length; i++) {
                                            var rec = selection[i].getData();
                                            store.remove(selection[i]);
                                            var gridId = '';
                                            var item = {};
                                            gridId = 'qyxxGrid';
                                            item = {
                                                id: rec.id,
                                                zzjgdm: rec.zzjgdm,
                                                xxmc: rec.xxmc
                                            };
                                            Ext.getCmp(gridId).getStore().add(item);
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            flex: 1,
            xtype: 'grid',
            title: '已选择',
            id: 'targetGrid',
            multiSelect: true,
            store: {
                xtype: 'store.store',
                data: [],
            },
            columns: [
                {
                    text: '行政区划名称',
                    dataIndex: 'name',
                    width: '98%'
                }
            ]
        }
    ],
    buttons: [
        {
            text: '保存',
            handler: function (e) {
                var grid = Ext.getCmp('targetGrid');
                var store = grid.getStore();
                if (grid.getStore().getData().length == 0) {
                    Ext.toast('未选择任何记录！');
                    return;
                }
                var dcdx = '';
                var dcdxIds = '';
                store.each(function (rec) {
                    dcdx = dcdx + rec.data.name + ",";
                    dcdxIds = dcdxIds + rec.data.id + ","
                });
                var btn = this.up('panel');
                btn.callBack({ids: dcdxIds, name: dcdx});
            }
        }
    ]
})
;