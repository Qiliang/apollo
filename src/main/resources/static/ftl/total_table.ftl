Ext.define('Kits.view.tablehz.${tabcode}', {
    extend: 'Kits.view.tablehz.Base',
    title: '${tabname}',
    xtype: 'tablehz${tabcode}',
    tableid: '${tabid}',
    itemcode:'${itemcode}',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：A 3 0 4<br /> ' +
            '制表机关：省 统 计 局'
        }
    ],
    store: Ext.create('Ext.data.Store', {
        fields: ${fields},
        data: []
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
            html: '说明：1.统计范围是辖区内全部农业生产经营户和经营单位。<br>'+
            '2.设施，设施包括温室、大棚和中小棚。设施数量，凡是设施连为一个整体，无论内部结构如何，均按一个统计。设施占地面积，指三类面积的总和：一是实际使用面积，指沿墙内侧的围绕面积；二是墙体面积，指设施的墙体等其他支撑体自身的占地面积；三是采光占用面积，指设施距遮光物体（其他设施、房屋等）的必要距离所占的面积。<br>'+
            '3.面积，设施内的农作物按种植与收获方式，确定该作物按播种面积或占地面积统计。在日历年度内，凡是本年度收获的农作物，一次性种植和收获的，按播种面积统计，播种一次算一次；种植之后多次收获的，按占地面积统计，只统计一次。<br>'+
            '4.产量，花卉苗木以万支为单位统计；食用菌按干鲜混合产量统计，其中蘑菇按鲜品统计。5.资料取得方法采用全面上报。'
        }
    ]
});