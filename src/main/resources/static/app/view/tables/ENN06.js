Ext.define('Kits.view.tables.ENN06', {
    extend: 'Kits.view.tables.Base',
    title: '渔业生产情况',
    xtype: 'tablesENN06',
    hzcolumn:'hzcode',
    tableid: '923004112859127808',
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
  "hzcode" : "代码总汇",
  "unitcode" : "计量单位",
  "itemcode" : "指标名称",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "--",
  "unitcode" : "--",
  "itemcode" : "编码",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "一、水产品产量",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（一）淡水捕捞产量",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "1",
  "unitcode" : "吨",
  "itemcode" : "",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "2",
  "unitcode" : "吨",
  "itemcode" : "1.鱼类",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "3",
  "unitcode" : "吨",
  "itemcode" : "2.虾类",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "4",
  "unitcode" : "吨",
  "itemcode" : "3.贝类",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "5",
  "unitcode" : "吨",
  "itemcode" : "4.其它类",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（二）淡水养殖产量",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "6",
  "unitcode" : "吨",
  "itemcode" : "",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "7",
  "unitcode" : "吨",
  "itemcode" : "1.鱼类",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "2.虾蟹类",
  "num1" : "—",
  "i" : 2
}, {
  "hzcode" : "8",
  "unitcode" : "吨",
  "itemcode" : "",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "9",
  "unitcode" : "吨",
  "itemcode" : "其中：螃蟹",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "10",
  "unitcode" : "吨",
  "itemcode" : "克氏原螯虾",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "11",
  "unitcode" : "吨",
  "itemcode" : "3.贝类",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "4.其它类",
  "num1" : "—",
  "i" : 2
}, {
  "hzcode" : "12",
  "unitcode" : "吨",
  "itemcode" : "",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "13",
  "unitcode" : "吨",
  "itemcode" : "其中：龟鳖",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "14",
  "unitcode" : "吨",
  "itemcode" : "珍珠",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "二、淡水养殖面积",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "15",
  "unitcode" : "顷",
  "itemcode" : "",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "16",
  "unitcode" : "顷",
  "itemcode" : "1.池塘养殖",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "17",
  "unitcode" : "顷",
  "itemcode" : "2.湖泊养殖",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "18",
  "unitcode" : "顷",
  "itemcode" : "3.河沟养殖",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "19",
  "unitcode" : "顷",
  "itemcode" : "4.水库养殖",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "20",
  "unitcode" : "顷",
  "itemcode" : "5.其他养殖",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "21",
  "unitcode" : "顷",
  "itemcode" : "附报：稻田养殖面积",
  "num1" : "",
  "i" : 1
} ]
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:22px'>指 标 名 称</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>甲</div>",
    "dataIndex" : "itemcode",
    "width" : 300
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>计量单位</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>乙</div>",
    "dataIndex" : "unitcode",
    "align" : "center",
    "width" : 100
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>代  码</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>丙</div>",
    "dataIndex" : "hzcode",
    "align" : "center",
    "width" : 100
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>数量</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1</div>",
    "dataIndex" : "num1",
    "align" : "center",
    "width" : 100,
    "editor" : {
      "field" : {
        "allowBlank" : true,
        "minValue" : 0,
        "xtype" : "numberfield"
      }
    }
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