Ext.define('Kits.view.diaoChaDuiXiang.ZhiDuQiYeList', {
    extend: 'Ext.grid.Panel',
    title: '制度对应企业列表',
    store: Ext.create('Kits.store.QiYeZhiDu'),
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                panel.getStore().load();
                Ext.getCmp('sszd').getStore().load();
            }
        }
    ],
    tbar: [
        {
            xtype: 'combobox',
            itemId: 'role',
            editable: false,
            name: 'sszd',
            fieldLabel: '所属制度',
            valueField: 'id',
            displayField: 'name',
            queryMode: 'local',
            store: Ext.create('Kits.store.ZhiDuQiYe'),
            id: 'sszd'
        },
        {
            xtype: 'textfield',
            fieldLabel: '详细名称',
            width: 220,
            name: 'xxmc',
            id: 'xxmc'
        },
        {
            xtype: 'textfield',
            fieldLabel: '组织机构代码',
            name: 'zzjgdm',
            id: 'zzjgdm'
        },
        {
            xtype: 'button',
            text: '查询',
            handler: function () {
                var grid = this.up('grid');
                grid.getStore().getProxy().setExtraParams({
                    xxmc: Ext.getCmp('xxmc').getValue(),
                    zzjgdm: Ext.getCmp('zzjgdm').getValue(),
                    systemId: Ext.getCmp('sszd').getValue()
                })
                grid.getStore().load();
            }
        }, {
            xtype: 'button',
            text: '编辑',
            handler: function () {
                var systemId = Ext.getCmp('sszd').getValue();
                if (!systemId) {
                    Ext.MessageBox.alert('提示', '请先选中要编辑的制度');
                    return
                }
                var btn = this;
                var win = Ext.create('Ext.window.Window', {
                    title: '编辑',
                    height: 600,
                    width: 1100,
                    layout: 'fit',
                    modal: true,
                    closeToolText: '关闭',
                    items: Ext.create('Kits.view.diaoChaDuiXiang.QiYeDiaoChaDuiXiangView', {
                        callBack: function () {
                            btn.up('grid').getStore().load();
                            win.close();
                        }, systemId: systemId
                    })
                });
                win.show();
            }
        }],
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
            text: '详细名称',
            dataIndex: 'xxmc',
            width: 350
        },
        {
            text: '组织机构代码',
            dataIndex: 'zzjgdm'
        },
        {
            text: '所在地址',
            dataIndex: 'xxdz',
            width: 250
        },
        {
            text: '行业类别代码',
            dataIndex: 'hydm11'
        },
        {
            text: '登记注册类别',
            dataIndex: 'djzclx'
        }

    ]
})
;