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
    store: Ext.create('Ext.data.TreeStore', {
        root: {
            text:'神农架区',
            expanded: true,
            children: [
                { text: '镇1', expanded: true, children: [
                    { text: '村1', leaf: true },
                    { text: '村2', leaf: true}
                ] },
                { text: '镇2', expanded: true, children: [
                    { text: '村3', leaf: true },
                    { text: '村4', leaf: true}
                ] },
                { text: '镇3', expanded: true, children: [
                    { text: '村5', leaf: true },
                    { text: '村6', leaf: true}
                ] }
            ]
        }
    }),
    rootVisible: true,
});