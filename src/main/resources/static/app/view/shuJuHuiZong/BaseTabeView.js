Ext.define('Kits.view.shuJuHuiZong.BaseTabeView', {
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'table',
        columns:4,
        tableAttrs: {
            style: {width: '100%'}
        }
    },
    defaults: {
        height:30,
        bodyStyle: 'padding:0 10px;'
    },
    items: [{
        colspan:4,
        html: '农业生产条件 （一）',
        height:40,
        bodyStyle: 'textAlign:center;lineHeight:40px;fontSize:16px;fontWeight:800'
    },{
        colspan:4,
        bodyStyle: 'textAlign:right;',
        html: '表 号：神农年02表'
    },{
        html: '填报单位：_____',
    },{
        html: '2016年',
    },{
        html: '',
    },{
        bodyStyle: 'textAlign:right',
        html: '制表机关：神农架林区统计局'
    }]
});