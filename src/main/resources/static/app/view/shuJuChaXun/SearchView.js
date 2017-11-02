Ext.define('Kits.view.shuJuChaXun.SearchView', {
    extend: 'Ext.grid.Panel',
    selModel: 'cellmodel',
    id:'shuJuChaXunSearchView',
    plugins: {
        cellediting: {
            clicksToEdit: 1
        }
    },
    initComponent: function () {
        var me = this;
        me.store.proxy.extraParams = {tableId: me.tableId, systemId: me.systemId};
        me.callParent();
    },
    store: {
        xtype: 'store.store',
        proxy: {
            type: 'ajax',
            url: '/api/rpt/collect/table/list/columns',
            method: 'GET',
            reader: {
                type: 'json'
            },
        },
        autoLoad: true,
        listeners: {
            load: function (me, records, successful, operation, eOpts) {
                var searchJson = Ext.getCmp('shuJuChaXunSearchView').searchJson;
                if(searchJson){
                    for(var i = 0;i<searchJson.length;i++){
                        var index = me.find('dataIndex',searchJson[i].dataIndex);
                        me.getAt(index).set(searchJson[i]);
                    }
                }
            }
        }
    },
    columns: [
        {text: 'No.', xtype: 'rownumberer', width: 32},
        {
            text: '指标名称', sortable: false, dataIndex: 'text', width: 640
        },
        {
            text: '逻辑关系', sortable: false, dataIndex: 'logical', width: 100, align: 'center',
            editor: {
                xtype: 'combobox',
                dataIndex: 'unitcode',
                displayField: 'name',
                store: Ext.create('Ext.data.ArrayStore', {
                    fields: ['name'],
                    data: [['and'], ['or']]
                })
            }
        },
        {
            text: '运算符', sortable: false, dataIndex: 'unit', width: 100, align: 'center',
            editor: {
                xtype: 'combobox',
                dataIndex: 'unitcode',
                displayField: 'name',
                store: Ext.create('Ext.data.ArrayStore', {
                    fields: ['name'],
                    data: [['>'], ['>='], ['='], ['<'], ['<=']]
                })
            }
        }, {
            text: '数量', sortable: false, dataIndex: 'number', width: 80, align: 'center',
            editor: {
                field: {
                    xtype: 'numberfield',
                    allowBlank: true
                }
            }
        }
    ],

    buttons: [
        {
            text: '保存', handler: function (e) {
            this.up('grid').callBack(this.up('grid').getStore().getModifiedRecords());
        }
        }
    ]
})
;