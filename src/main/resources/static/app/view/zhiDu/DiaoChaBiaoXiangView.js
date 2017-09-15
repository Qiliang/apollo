Ext.define('Kits.view.zhiDu.DiaoChaBiaoXiangView', {
    extend: 'Ext.form.Panel',
    layout: 'fit',
    bodyBorder: false,
    items: [
        {
            xtype: 'grid',
            id:'zdxxGrid',
            store: Ext.create('Kits.store.ZhiDuTable', {}),
            tbar: [{
                xtype: 'combobox',
                fieldLabel: '所属制度',
                queryMode: 'local',
                id:'sszd',
                name: 'sszd',
                displayField: 'value',
                valueField: 'key',
                editable: false,
                emptyText: "--请选择所属制度--",
                store: [
                    {key: '', value: '全部'},
                    {key: '00', value: '制度1'},
                    {key: '002', value: '制度2'},
                    {key: '003', value: '制度3'}
                ]
            }, {
                xtype: 'textfield',
                fieldLabel: '表名',
                name: 'name',
                id:'name',
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
                            if(sszd){
                                return item.data.sszdid.indexOf(sszd) !=-1;
                            }else{
                                return true
                            }
                        }
                        function bmFilter(item) {
                            var name = Ext.getCmp('name').getValue();
                            if(name){
                                return item.data.name.indexOf(name) != -1;
                            }else{
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
                    dataIndex: 'sszdmc',
                    width: '30%'
                }, {
                    text: '表名',
                    dataIndex: 'name',
                    width: '50%'
                },{
                    text: '发布年份',
                    dataIndex: 'fbnf',
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
            if(selection.length==0){
                Ext.toast('未选择任何记录！');
                return;
            }
            var returnData = {id:selection[0].getData().id,name:selection[0].getData().name};
            me.callback(returnData);
            this.up('window').close();
        }
        }
    ]
})
;