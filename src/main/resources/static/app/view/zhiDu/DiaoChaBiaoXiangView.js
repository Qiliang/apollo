Ext.define('Kits.view.zhiDu.DiaoChaBiaoXiangView', {
    extend: 'Ext.form.Panel',
    layout: 'fit',
    bodyBorder: false,
    items: [
        {
            xtype: 'grid',
            id: 'zdxxGrid',
            store: Ext.create('Kits.store.ZhiDuTable'),
            tbar: [{

                xtype: 'combobox',
                fieldLabel: '所属制度',
                queryMode: 'local',
                id: 'sszd',
                name: 'sszd',
                valueField: 'id',
                displayField: 'name',
                editable: false,
                emptyText: "--请选择所属制度--",
                store: Ext.create('Kits.store.ZhiDuQiYe')
            }, {
                xtype: 'textfield',
                fieldLabel: '表名',
                name: 'name',
                id: 'name',
            },
                {
                    xtype: 'button',
                    text: '查询',
                    handler: function () {
                        var grid = this.up('grid');
                        grid.getStore().load();
                        var filters = grid.getStore().getFilters();

                        function sszdFilter(item) {
                            var sszd = Ext.getCmp('sszd').getValue();
                            if (sszd) {
                                return item.data.systeminfoid.indexOf(sszd) != -1;
                            } else {
                                return true
                            }
                        }

                        function bmFilter(item) {
                            var name = Ext.getCmp('name').getValue();
                            if (name) {
                                return item.data.tabname.indexOf(name) != -1;
                            } else {
                                return true
                            }
                        }

                        filters.add(sszdFilter);
                        filters.add(bmFilter);
                    }
                }],
            columns: [
                {
                    text: '制度名称',
                    dataIndex: 'systeminfoName',
                    width: '30%'
                }, {
                    text: '表名',
                    dataIndex: 'tabname',
                    width: '50%'
                }, {
                    text: '发布年份',
                    dataIndex: 'validitydate',
                    width: '12%'
                }
            ]
        }
    ],
    buttons: [
        {
            text: '选择', handler: function (e) {
            var me = this.up('panel');
            var grid = Ext.getCmp('zdxxGrid');
            var selection = grid.getSelection();
            if (selection.length == 0) {
                Ext.toast('未选择任何记录！');
                return;
            }
            var returnData = {id: selection[0].getData().id, name: selection[0].getData().tabname,systeminfoid:selection[0].getData().systeminfoid,systemInfoFillPersonType:selection[0].getData().systemInfoFillPersonType};
            me.callback(returnData);
            this.up('window').close();
        }
        }
    ]
})
;