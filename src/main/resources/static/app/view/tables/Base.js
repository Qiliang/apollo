Ext.define('Kits.view.tables.Base', {
    extend: 'Ext.panel.Panel',
    layout: 'border',

    initComponent: function () {
        var me = this;
        Ext.apply(this.columns[0].columns[0],{
            renderer: function (value, record) {
                var i = record.record.data['i'];
                var indent = [];
                while(i > 0){
                    i = i-1;
                    indent.push('&nbsp;&nbsp;&nbsp;&nbsp;')
                }
                return indent.join('')+ value;
            }
        });

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
                items: [
                    {
                        html: '综合机关名称：'
                    },
                    {
                        html: '2016年',
                    },
                    {
                        html: '表    号：鄂农年01表<br /> ' +
                        '制表机关：湖北省统计局 <br />' +
                        '批准文号：国统制［2016］122号<br />' +
                        '有效期至：2017年6月'
                    }
                ]
            },
            {
                xtype: 'grid',
                region: 'center',
                plugins: {
                    cellediting: {
                        clicksToEdit: 1,
                        listeners: {
                            beforeedit: function (editor, context, eOpts) {
                                return !Ext.Array.contains(Ext.Object.getValues(context.record.data), '—');
                            }
                        },
                    }
                },
                listeners: {
                    afterrender: function (me) {

                    }
                },

                store: Ext.create('Ext.data.ArrayStore', {

                    fields: ['甲', '乙', '丙', '1'],
                    data: [
                        ['一、农村基层组织情况', '—', '—'],
                        ['&nbsp;&nbsp;(一)乡镇个数', '个', '1'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;其中：镇个数', '个', '2'],
                        ['&nbsp;&nbsp;(二)办事处', '个', '3'],
                        ['&nbsp;&nbsp;(三)村民委员会', '个', '4'],
                        ['&nbsp;&nbsp;(四)村民小组', '个', '5'],
                        ['二、农村基础设施', '—', '—'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;自来水受益村数', '个', '6'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;通有线电视村数', '个', '7'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;通宽带村数??', '个', '8'],
                        ['三、乡村人口与从业人员', '—', '—'],
                        ['&nbsp;&nbsp;（一）乡村户数', '万户', '9'],
                        ['&nbsp;&nbsp;（二）乡村人口数', '万人', '10'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;1．男', '万人', '11'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;2．女', '万人', '12'],
                        ['（三）乡村劳动力资源数', '万人', '13'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;1．男', '万人', '14'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;2．女', '万人', '15'],
                        ['（四）乡村从业人员数', '万人', '16'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;1．男', '万人', '17'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;其中：从事农业人员', '万人', '18'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;2．女', '万人', '19'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;其中：从事农业人员', '万人', '20'],
                        ['四、国有农林牧渔场情况', '—', '—'],
                        ['&nbsp;&nbsp;（一）国有农林牧渔场总人口', '万人', '21'],
                        ['&nbsp;&nbsp;（二）国有农林牧渔场从业人员', '万人', '22'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;1、农业从业人员', '万人', '23'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;2、非农业从业人员', '万人', '24'],
                        ['五、农业用地情况', '—', '—'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;1．耕地', '千公顷', '25'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;2．园地', '千公顷', '26'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;3．林地', '千公顷', '27'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;4．草地', '千公顷', '28'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;5..农业设施用地', '千公顷', '29'],
                        ['附报', '—', '—'],
                        ['&nbsp;&nbsp;国有农林牧渔场', '个', '30'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;其中：农场', '个', '31'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;林场', '个', '32'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;畜牧场', '个', '33'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;渔场', '个', '34'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;果园场', '个', '35'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;茶场', '个', '36'],
                        ['&nbsp;&nbsp;&nbsp;&nbsp;其他', '个', '37']
                    ]

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
                        html: '说明：1.本表由各市、州、直管市、林区统计局报送。<br />' +
                        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.此表中乡镇个数、镇个数、办事处、村委会(居委会)个数必须与当地民政部门的数据一致。<br />' +
                        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.平衡关系：06、 07、08≤04，10=11+12，13=14+15，16=17+19，18≤17，20≤19，21﹥22，22=23+24<br />' +
                        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.报送时间为2016年12月25日。'
                    }
                ],
                bbar: [
                    {
                        xtype: 'button',
                        text: '导出',
                        handler: function () {

                        }
                    },
                    {
                        xtype: 'button',
                        text: '检查',
                        handler: function () {

                        }
                    },
                    {
                        xtype: 'button',
                        text: '提交',
                        handler: function () {
                            var grid = this.up('panel').up('panel').down('grid');
                            var store = grid.getStore();
                            var data = Ext.Array.map(store.getData().items, function (item) {
                                return item.data
                            });

                            console.log(data)

                        }
                    }
                ]
            }
        ]

    }


});