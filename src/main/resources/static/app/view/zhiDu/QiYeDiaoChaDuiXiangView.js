Ext.define('Kits.view.zhiDu.QiYeDiaoChaDuiXiangView', {
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
    initComponent: function() {
        var me = this;
        me.items[0].store.proxy.extraParams={systemId:this.systemId};
        me.items[2].store.proxy.extraParams={systemId:this.systemId};
        me.callParent();
    },
    items: [
        {
            flex: 2,
            xtype: 'grid',
            title: '单位',
            id: 'qyxxGrid',
            selType: 'checkboxmodel',
            store: {
                xtype: 'store.store',
                proxy: {
                    type: 'ajax',
                    url: '/api/company/getAllCompanyByNotInSystemId',
                    method: 'GET',
                    reader: {
                        type: 'json'
                    }
                },
                autoLoad: true
            },
            tbar: [{
                xtype: 'textfield',
                fieldLabel: '单位名称',
                id: 'viewXxmc',
                name: 'xxmc',
            }, {
                xtype: 'textfield',
                fieldLabel: '组织机构代码',
                name: 'zzjgdm',
                id: 'viewZzjgdm',
            },
                {
                    xtype: 'button',
                    text: '查询',
                    handler: function () {
                        var grid = this.up('grid');
                        grid.getStore().clearFilter(true);
                        var filters = grid.getStore().getFilters();

                        function qymcFilter(item) {
                            var qymc = Ext.getCmp('viewXxmc').getValue();
                            if (qymc) {
                                return item.data.xxmc.indexOf(qymc) != -1;
                            } else {
                                return true
                            }
                        }

                        function zzjgdmFilter(item) {
                            var zzjgdm = Ext.getCmp('viewZzjgdm').getValue();
                            if (zzjgdm) {
                                return item.data.zzjgdm.indexOf(zzjgdm) != -1;
                            } else {
                                return true
                            }
                        }

                        filters.add(qymcFilter);
                        filters.add(zzjgdmFilter);
                    }
                }],
            columns: [
                {
                    text: '单位名称',
                    dataIndex: 'xxmc',
                    width: '50%'
                }, {
                    text: '组织机构代码',
                    dataIndex: 'zzjgdm',
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
                proxy: {
                    type: 'ajax',
                    url: '/api/company/getAllCompanyBySystemId',
                    method: 'GET',
                    reader: {
                        type: 'json'
                    }
                },
                autoLoad: true
            },
            columns: [
                {
                    text: '单位名称',
                    dataIndex: 'xxmc',
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
                    dcdx = dcdx + rec.data.xxmc + ",";
                    dcdxIds = dcdxIds + rec.data.id+","
                });
                var btn = this.up('panel');
                btn.callBack({ids:dcdxIds,name:dcdx});
            }
        }
    ]
})
;