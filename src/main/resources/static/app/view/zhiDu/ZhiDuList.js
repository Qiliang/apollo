Ext.define('Kits.view.zhiDu.ZhiDuList', {
    extend: 'Ext.grid.Panel',
    title: '制度列表',
    store: Ext.create('Kits.store.ZhiDu'),
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                panel.getStore().load();
            }
        }
    ],
    tbar: [
        {
            itemId:'searchName',
            xtype: 'textfield',
            fieldLabel: '制度名称',
            name: 'name',
        },
        {
            itemId:'searchReleaseYear',
            xtype: 'combobox',
            fieldLabel: '发布年份',
            queryMode: 'local',
            name: 'releaseYear',
            displayField: 'key',
            valueField: 'value',
            editable: false,
            emptyText: "--请选择年份--",
            store: {
                xtype: 'store.store',
                proxy: {
                    type: 'ajax',
                    url: '/api/systemInfo/yearList',
                    reader: {
                        type: 'json'
                    }
                },
                autoLoad: true,
                autoSync: false
            }
        },
        {
            xtype: 'button',
            text: '查询',
            handler: function () {
                var grid = this.up('grid');
                grid.getStore().getProxy().setExtraParams({
                    name: grid.queryById('searchName').getValue(),
                    releaseYear:grid.queryById('searchReleaseYear').getValue()
                })
                grid.getStore().load();
            }
        }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '制度名称',
            dataIndex: 'name',
            width: 200
        },
        {
            text: '发布年份',
            dataIndex: 'releaseYear',
            width: 200
        },
        {
            text: '填报类型',
            dataIndex: 'fillPersonType',
            renderer: function (value) {
                if(value){
                    if("qy"==value){
                        return "企业";
                    }else if("xzqh"==value){
                        return "行政区划";
                    }
                }else{
                    return "无"
                }
                return Ext.util.Format.plural(value, 'person', 'people');
            }
        },
        {
            text: '创建时间',
            dataIndex: 'createDate',
            width: 200
        },
        {
            text: '操作',
            xtype: 'actioncolumn',
            width: 50,
            items: [{
                iconCls: 'x-fa fa-eye',
                tooltip: '查看',
                handler: function (view, recIndex, cellIndex, item, e, record) {
                    Ext.create('Ext.window.Window', {
                        title: '查看制度',
                        height: 600,
                        width: 1100,
                        layout: 'fit',
                        closeToolText: '关闭',
                        // closeAction:'hide',
                        modal: true,
                        items: Ext.create('Kits.view.zhiDu.ZhiDuView', {recordId:record.data.id})
                    }).show();
                    // alert("查看 " + rec.get('id'));
                }
            }]
        }

    ]
})
;