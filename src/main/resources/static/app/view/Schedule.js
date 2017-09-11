Ext.define('Kits.view.Schedule', {
    extend: 'Ext.panel.Panel',
    title: '调度管理',
    store: Ext.create('Kits.store.User'),
    layout: 'fit',
    requires: ['Kits.view.BMap'],
    items: {xtype: 'bmap'},

    afterComponentLayout: function (w, h) {
        this.callParent(arguments);



    },
});