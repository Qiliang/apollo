Ext.define('Kits.view.tables.SNN01', {
    extend: 'Kits.view.tables.Base',
    title: '测试表单',
    hzcolumn:'hzcode',
    tableid: '917553004334900864',
    headerItems:[
        {
            html: '<br /><br /><br />综合机关名称：',
        },
        {
            html: '<br /><br /><br />2016年',
        },
        {
            html: '表    号：鄂农年01表<br /> ' +
            '制表机关：湖北省统计局 <br />' +
            '批准文号：国统制［2016］122号<br />' +
            '有效期至：2017年6月'
        }
    ],
    store: Ext.create('Ext.data.Store', {
        fields: [ {
  "name" : "itemcode",
  "type" : "string"
}, {
  "name" : "unitcode",
  "type" : "string"
}, {
  "name" : "hzcode",
  "type" : "string"
}, {
  "name" : "num1",
  "type" : "string"
} ],
        data: [ {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "一、农村基层组织情况",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（一）乡镇政府个数",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "01",
  "unitcode" : "个",
  "itemcode" : "",
  "num1" : "2",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中",
  "num1" : "—",
  "i" : 2
}, {
  "hzcode" : "02",
  "unitcode" : "个",
  "itemcode" : "1、乡政府",
  "num1" : "3",
  "i" : 3
}, {
  "hzcode" : "03",
  "unitcode" : "个",
  "itemcode" : "2、镇政府",
  "num1" : "4",
  "i" : 3
}, {
  "hzcode" : "04",
  "unitcode" : "个",
  "itemcode" : "（二）办事处",
  "num1" : "5",
  "i" : 1
}, {
  "hzcode" : "05",
  "unitcode" : "个",
  "itemcode" : "（三）村 民委员会",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "06",
  "unitcode" : "个",
  "itemcode" : "（四）村  民  小 组",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "二、农村社会基础设施",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "07",
  "unitcode" : "个",
  "itemcode" : "自来水受益村数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "08",
  "unitcode" : "个",
  "itemcode" : "通汽车村数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "09",
  "unitcode" : "个",
  "itemcode" : "通有线电视村",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "10",
  "unitcode" : "个",
  "itemcode" : "通宽带村数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "三、乡村、人口、户数及农村从业人员情况",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "11",
  "unitcode" : "个",
  "itemcode" : "（一）乡村 户 数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（二）乡村人口数",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "12",
  "unitcode" : "个",
  "itemcode" : "",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中",
  "num1" : "—",
  "i" : 2
}, {
  "hzcode" : "13",
  "unitcode" : "个",
  "itemcode" : "男",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "14",
  "unitcode" : "个",
  "itemcode" : "女",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（三）乡村劳动力资  源",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "15",
  "unitcode" : "个",
  "itemcode" : "",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中",
  "num1" : "—",
  "i" : 2
}, {
  "hzcode" : "16",
  "unitcode" : "个",
  "itemcode" : "男",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "17",
  "unitcode" : "个",
  "itemcode" : "女",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（四）乡村从业人员数",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "18",
  "unitcode" : "个",
  "itemcode" : "",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "男",
  "num1" : "—",
  "i" : 2
}, {
  "hzcode" : "19",
  "unitcode" : "个",
  "itemcode" : "其中：从事农业人员数",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "女",
  "num1" : "—",
  "i" : 2
}, {
  "hzcode" : "20",
  "unitcode" : "个",
  "itemcode" : "其中：从事农业人员数",
  "num1" : "",
  "i" : 3
} ]
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:127px'>指标名称</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>甲</div>",
    "dataIndex" : "itemcode",
    "width" : 100
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>计量单位</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>乙</div>",
    "dataIndex" : "unitcode",
    "width" : 100
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>代码</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>丙</div>",
    "dataIndex" : "hzcode",
    "width" : 100
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>数量</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1</div>",
    "dataIndex" : "num1",
    "width" : 100
  } ]
} ],
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