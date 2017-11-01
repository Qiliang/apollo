Ext.define('Kits.view.tables.${tabcode}', {
    extend: 'Kits.view.tables.Base',
    title: '${tabname}',
    xtype: 'tables${tabcode}',
    hzcolumn:'hzcode',
    tableid: '${tabid}',
    rowNum: ${rowNum},
    headerItems:[
        {
            html: '<br /><br /><br />综合机关名称：',
        },
        {
            html: '<br /><br /><br />2016年',
        },
        {
            html: '表    号：${tabcode}<br /> ' +
            '制表机关：${makedept} <br />' +
            '批准文号：${approvalno}<br />' +
            '有效期至：${validitydate}'
        }
    ],
    store: Ext.create('Ext.data.Store', {
        fields: ${fields},
        data: ${datas}
    }),
    columns: ${columns},
    footerItems: [
        {
            html: '单位负责人：'
        },
        {
            html: '填报人',
        },
        {
            html: '填报日期：      年    月    日'
        },
        {
            colspan: 3,
            html: '${comment}'
        }
    ]
});