Ext.define('Kits.view.diaoChaDuiXiang.xzqh', {
    extend: 'Ext.tree.Panel',
    layout: 'fit',
    bodyBorder: false,
    bodyPadding: 10,
    title: '行政区划',
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                panel.getStore().load();
            }
        }
    ],
    store: Ext.create('Kits.store.Xzqh'),
    rootVisible: true,
});