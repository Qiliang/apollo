Ext.define('Kits.view.tables.M304', {
    extend: 'Kits.view.tables.Base',
    title: '其它畜牧业生产情况表',
    xtype: 'tablesM304',
    hzcolumn:'hzcode',
    tableid: '923004088574107648',
    rowNum: 28,
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
}, {
  "name" : "num2",
  "type" : "string"
}, {
  "name" : "num3",
  "type" : "string"
} ],
        data: [ {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "一、",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "1",
  "unitcode" : "头",
  "itemcode" : "活牲畜（除猪、牛、羊外）",
  "num1" : "",
  "i" : 1,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "2",
  "unitcode" : "头",
  "itemcode" : "其中：能繁母牛",
  "num1" : "",
  "i" : 1,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "二",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "7",
  "unitcode" : "吨",
  "itemcode" : "家兔",
  "num1" : "",
  "i" : 1,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "三",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "8",
  "unitcode" : "吨",
  "itemcode" : "其它肉产量",
  "num1" : "",
  "i" : 1,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "四",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "9",
  "unitcode" : "吨",
  "itemcode" : "其它奶产量",
  "num1" : "",
  "i" : 1,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "五",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "10",
  "unitcode" : "吨",
  "itemcode" : "山羊毛产量",
  "num1" : "",
  "i" : 1,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "11",
  "unitcode" : "吨",
  "itemcode" : "1.山羊粗毛",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "12",
  "unitcode" : "吨",
  "itemcode" : "2.山羊绒",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "六",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "13",
  "unitcode" : "吨",
  "itemcode" : "绵羊毛产量",
  "num1" : "",
  "i" : 1,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "14",
  "unitcode" : "吨",
  "itemcode" : "细羊毛",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "15",
  "unitcode" : "吨",
  "itemcode" : "半细羊毛",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "七",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "16",
  "unitcode" : "吨",
  "itemcode" : "天然蜂蜜产量",
  "num1" : "",
  "i" : 1,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "八",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "17",
  "unitcode" : "吨",
  "itemcode" : "其他禽蛋产量（除鸡蛋）",
  "num1" : "",
  "i" : 1,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "九",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "18",
  "unitcode" : "",
  "itemcode" : "蚕茧产量",
  "num1" : "",
  "i" : 1,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "19",
  "unitcode" : "",
  "itemcode" : "桑蚕茧",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "20",
  "unitcode" : "",
  "itemcode" : "柞蚕茧",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
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
  "text" : "<div style='white-space:pre-line;height:22px'>年末存栏数</div>",
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
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>当年出栏数</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>2</div>",
    "dataIndex" : "num2",
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
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>（肉、产品）产  量</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>3</div>",
    "dataIndex" : "num3",
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