Ext.define('Kits.view.tables.Base', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    hzcolumn:'hzcode',
    tableid: '',
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
        var config = Ext.clone(me.commConfig);
        var items = Ext.clone(me.defConfig.items);
        Ext.apply(items[0].items, this.headerItems);
        Ext.apply(items[1].store, this.store);
        Ext.apply(items[1].columns.items, this.columns);
        Ext.apply(items[2].items, this.footerItems);
        Ext.apply(items[2].bbar,[
            {
                xtype: 'button',
                text: '导出',
                hidden:config.hiddenExport,
                handler: function () {
                    var cmp = Ext.ComponentQuery.query('#zhiDuSubmitForm')[0];
                    if(cmp.commFunc.export){
                        cmp.commFunc.export.call(this);
                    }
                }
            },
            {
                xtype: 'button',
                text: '检查',
                hidden:config.hiddenValidate,
                handler: function () {
                    var cmp = Ext.ComponentQuery.query('#zhiDuSubmitForm')[0];
                    if(cmp.commFunc.validate){
                        cmp.commFunc.validate.call(this);
                    }
                }
            },
            {
                xtype: 'button',
                text: '提交',
                hidden:config.hiddenSubmit,
                handler: function () {
                    var cmp = Ext.ComponentQuery.query('#zhiDuSubmitForm')[0];
                    if(cmp.commFunc.submit){
                        cmp.commFunc.submit.call(this);
                    }
                }
            }
        ]);
        me.items = items;
        me.callParent();
    },
    fillData: function (data) {
        var me = this;
        var grid = this.down('grid');
        var store = grid.getStore();
        Ext.Array.map(data,function (item) {
            var model = store.findRecord(me.hzcolumn,item.hzcode);
            if(model){
                model.setId(item.id);
                model.set('num1',item.num1);
                model.set('num2',item.num2);
                model.set('num3',item.num3);
                model.set('num4',item.num4);
                model.set('num5',item.num5);
                model.set('num6',item.num6);
                model.set('num7',item.num7);
                model.set('num8',item.num8);
                model.set('num9',item.num9);
                model.set('num10',item.num10);
                model.commit();
            }
        })
    },
    loadData: function () {
        var me = this;
        var token = Ext.util.Cookies.get('token');
        Ext.Ajax.request({
            url: '/api/rpt/collect/table/'+this.tableid,
            method: 'GET',
            headers: {'Authorization':'Bearer '+token},
            success: function(response, opts) {
                var data = Ext.decode(response.responseText);
                me.fillData(data);
            },
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },
    commFunc:{
        export:function (callFunc) {
            alert('export');
            callFunc && callFunc();
        },
        validate:function (callFunc) {
            alert('validate');
            callFunc && callFunc();
        },
        submit:function (callFunc) {
            var me = Ext.ComponentQuery.query('#zhiDuSubmitForm')[0];
            var grid = me.down('grid');
            var store = grid.getStore();
            var data = [];
            store.each(function (model) {
                if(model.isDirty()){
                    data.push({
                        id:model.data['id'],
                        tabid: me.tableid,
                        hzcode:model.data[me.hzcolumn],
                        num1:model.data['num1'],
                        num2:model.data['num2'],
                        num3:model.data['num3'],
                        num4:model.data['num4'],
                        num5:model.data['num5'],
                        num6:model.data['num6'],
                        num7:model.data['num7'],
                        num8:model.data['num8'],
                        num9:model.data['num9'],
                        num10:model.data['num10']
                    })
                }
            });
            var token = Ext.util.Cookies.get('token');
            Ext.Ajax.request({
                url: '/api/rpt/collect/table/put',
                method: 'POST',
                jsonData: JSON.stringify(data),
                headers: {'Authorization':'Bearer '+token},
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if(obj.success){
                        me.loadData();
                        callFunc && callFunc();
                    }
                },
                failure: function(response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                }
            });
        }
    },
    commConfig:{
        hiddenExport:false,
        hiddenValidate:false,
        hiddenSubmit:false
    },
    itemId:'zhiDuSubmitForm',
    listeners: {
        afterrender: function (me) {
            me.loadData();
        }
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
                plugins: {
                    cellediting: {
                        clicksToEdit: 1,
                        listeners: {
                            beforeedit: function (editor, context, eOpts) {
                                return !Ext.Array.contains(Ext.Object.getValues(context.value), '—');
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

                items: [],
                bbar: []
            }
        ]

    }


});