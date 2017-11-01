Ext.define('Kits.view.tablehz.Base', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    itemcode:'汇总代码',
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
                fillData:function(data){
                    var panel = this.up('panel');
                    var store = this.getStore();
                    Ext.Array.map(data,function (item) {
                        var model = store.findRecord(panel.itemcode,item.usercode);
                        if(!model){
                            var obj = {};
                            obj[panel.itemcode] = item.usercode;
                            model = store.createModel(obj);
                            store.add(model);
                        }
                        model.set(item.hzcode,item.num1);
                        model.commit();
                    })
                },
                listeners: {
                    afterrender: function (me) {
                        var parent = me.up('panel');
                        Ext.Ajax.request({
                            url:'/api/rpt/hz/list',
                            params:{
                                tabid:parent.tableid
                            },
                            success: function(response, opts) {
                                var data = Ext.decode(response.responseText);
                                me.fillData(data);
                            },
                            failure: function(response, opts) {
                                console.log('server-side failure with status code ' + response.status);
                            }
                        });
                    }
                },

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