Ext.define('Kits.view.liShiShuju.MainQuery', {
    extend: 'Ext.tab.Panel',
    activeTab : 0,
    defaults : {
        closable : true
    },
    items:[
        {
            xtype:'treepanel',
            title:'历史数据',
            closable:false,
            reserveScrollbar: true,
            useArrows: true,
            rootVisible: false,
            multiSelect: false,
            singleExpand: true,
            store: {
                type: 'tree',
                fields:['text'],
                folderSort: false,
                proxy: {
                    type: 'ajax',
                    url: 'data/path.json'
                }
            },
            listeners: {
                itemdblclick: function(record, item) {
                    if(item.data.leaf){
                        var tabControl = this.up('tabpanel');
                        var aliasPath = item.data.alias;
                        if(aliasPath){
                            var itemid = 'tab-'+item.data.itemid;
                            var item = tabControl.child('#'+itemid);
                            if(!item){
                                item = tabControl.add(Ext.create(aliasPath,{itemId: itemid}));
                            }
                            tabControl.setActiveItem(item);
                        }
                    }
                }
            },
            columns: [{
                xtype: 'treecolumn',
                text: '报表分类',
                dataIndex: 'text',
                flex: 1,
                sortable: false
            }]
        }
    ]
});