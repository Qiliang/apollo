Ext.define('Kits.view.Home', {
    extend: 'Ext.panel.Panel',
    title: '首页',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {

            }
        }
    ]


});