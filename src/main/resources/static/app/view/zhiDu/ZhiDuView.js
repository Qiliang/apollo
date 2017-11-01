Ext.define('Kits.view.zhiDu.ZhiDuView', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: false,
        split: true,
        bodyPadding: 10
    },
    initComponent: function () {
        var me = this;
        me.items[0].store.proxy.extraParams = {id: me.recordId};
        me.callParent();
    },
    items: [
        {
            width: 200,
            region: 'west',
            xtype: 'grid',
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
                        root: 'data'
                    }

                },
                autoLoad: true,
                autoSync: false
            },
            columns: [
                {
                    text: '表名称',
                    dataIndex: 'tabname',
                    width: '100%'
                }
            ],
            listeners: {
                select: function (grid, record, index, eOpts) {
                    var cmp = Ext.getCmp('ZhiDuViewCenter');
                    cmp.removeAll(true);
                    cmp.add(Ext.create("Kits.view.tables." + record.get("tabcode"), {
                        width:650,
                        commConfig: {
                            hiddenExport: true,
                            hiddenValidate: true,
                            hiddenSubmit: true,
                            autoHeight: true
                        }
                    }));
                }
            }
        },
        {
            xtype: 'panel',
            layout: 'table',
            columns: 1,
            tableAttrs: {
                style: {
                    width: '100%'
                }
            },
            region: 'center',
            margin: '5 0 0 0',
            scrollable: true,
            items: [{
                xtype: 'panel',
                id: 'ZhiDuViewCenter',
                layout: 'fit',
                html: '请点击左侧选择要查看的表样'
            }]
        }
    ]
})
;