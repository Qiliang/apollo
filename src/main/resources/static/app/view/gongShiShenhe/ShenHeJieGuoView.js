Ext.define('Kits.view.gongShiShenhe.ShenHeJieGuoView', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: false,
        split: true,
    },
    listeners: {
        afterrender: function (me) {
            console.log(me.a)
        }
    },
    items: [
        {
            height: 300,
            region: 'north',
            xtype: 'grid',
            columnLines: true,
            store: Ext.create('Kits.store.ShenHeJieGuo', {}),
            columns: [
                {
                    xtype: 'rownumberer',
                    text: '序号'
                },
                {
                    text: '类型',
                    dataIndex: 'type'
                },
                {
                    text: '机构名称',
                    dataIndex: 'name'
                },
                {
                    text: '不符合项描述',
                    dataIndex: 'desc',
                    width: 400
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'center',
            layout: 'border',
            scrollable: true,
            bodyBorder: false,
            defaults: {
                collapsible: false,
                split: true,
            },
            items: [{
                width: 350,
                region: 'west',
                xtype: 'grid',
                tbar: [
                    {
                        xtype: 'textfield',
                        fieldLabel: '机构名称',
                        name: 'qymc',
                    },
                    {
                        text: '查询',
                        handler: function () {
                            alert('查询')
                        },
                    }],
                store: Ext.create('Kits.store.QiYe', {}),
                columns: [
                    {
                        text: '机构名称',
                        dataIndex: 'qymc',
                        width: '100%'
                    }
                ],
                listeners: {
                    select: function (grid, record, index, eOpts) {
                        var cmp = Ext.getCmp('zhibaoGrid');
                        cmp.reload();
                    }
                }

            }, {
                region: 'center',
                xtype: 'grid',
                id:'zhibaoGrid',
                title: '表名称',
                requires: [
                    'Ext.selection.CellModel'
                ],
                plugins: {
                    cellediting: {
                        clicksToEdit: 1
                    }
                },
                store: Ext.create('Kits.store.ZhiBiao', {}),
                columns: [
                    {
                        text: '指标名称',
                        dataIndex: 'name',
                        width: '25%'
                    },
                    {
                        text: '计量单位',
                        dataIndex: 'unit',
                        width: '25%'
                    },
                    {
                        text: '代码',
                        dataIndex: 'code',
                        width: '25%'
                    },
                    {
                        text: '数量',
                        dataIndex: 'count',
                        width: '20%',
                        editor: {
                            xtype: 'numberfield',
                            allowBlank: false,
                            minValue: 0,
                            maxValue: 100000
                        }
                    }
                ]
            }]
        }
    ]
})
;