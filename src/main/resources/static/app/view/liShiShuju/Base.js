Ext.define('Kits.view.liShiShuju.Base', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    initComponent: function () {
        var me = this;
        var items = Ext.clone(me.defConfig.items);
        Ext.apply(items[0].items, this.headerItems);
        Ext.apply(items[1].store, this.store);
        Ext.apply(items[1].columns.items, this.columns);
        Ext.apply(items[2].items, this.footerItems);
        me.items = items;
        me.callParent();
    },
    defConfig: {
        items: [
            {
                region: 'north',
                layout: {
                    type: 'table',
                    columns: 3,
                    tableAttrs: {
                        style: {
                            width: '100%'
                        }
                    }
                },
                defaults: {
                    bodyPadding: '10',
                    border: false
                },
                items: []
            },
            {
                xtype: 'grid',
                region: 'center',
                store: Ext.create('Ext.data.ArrayStore', {
                    fields: ['甲', '乙', '丙', '1'],
                    data: []
                }),
                defaults: {
                    flex: 1,
                    align: 'center',
                },
                columns: {
                    items: [],
                    defaults: {}
                }
            },
            {
                region: 'south',
                layout: {
                    type: 'table',
                    columns: 3,
                    tableAttrs: {
                        style: {
                            width: '100%'
                        }
                    }
                },
                defaults: {
                    bodyPadding: '10',
                    border: false
                },

                items: [
                    {
                        html: '单位负责人：'
                    },
                    {
                        html: '填报人',
                    },
                    {
                        html: '填报日期：      年    月    日'
                    },
                    {
                        colspan: 3,
                        html: '说明：1.本表由各市、州、直管市、林区统计局报送。'
                    }
                ]
            }
        ]
    }
});