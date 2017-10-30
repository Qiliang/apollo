Ext.define('Kits.view.tables.A307', {
    extend: 'Kits.view.tables.Base',
    title: '林业生产情况表（一）',
    xtype: 'tablesA307',
    hzcolumn:'hzcode',
    tableid: '923004058412867584',
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
  "itemcode" : "一、荒山荒（沙）地造林面积",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "按造林方式分",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "1",
  "unitcode" : "亩",
  "itemcode" : "1.人工造林",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中",
  "num1" : "—",
  "i" : 2
}, {
  "hzcode" : "2",
  "unitcode" : "亩",
  "itemcode" : "竹林面积",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "3",
  "unitcode" : "亩",
  "itemcode" : "乔木林面积",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "4",
  "unitcode" : "亩",
  "itemcode" : "2.飞播造林",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "5",
  "unitcode" : "亩",
  "itemcode" : "3.无林地和疏林地新封",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "按经济成份分",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "6",
  "unitcode" : "亩",
  "itemcode" : "1.公有经济造林",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "9",
  "unitcode" : "亩",
  "itemcode" : "2.非公有经济造林",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "按林种用途分",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "10",
  "unitcode" : "亩",
  "itemcode" : "1.用材林",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中",
  "num1" : "—",
  "i" : 2
}, {
  "hzcode" : "11",
  "unitcode" : "亩",
  "itemcode" : "速生丰产林",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "12",
  "unitcode" : "亩",
  "itemcode" : "2.经济林",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "13",
  "unitcode" : "亩",
  "itemcode" : "3.防护林",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "14",
  "unitcode" : "亩",
  "itemcode" : "4.薪炭林",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "15",
  "unitcode" : "亩",
  "itemcode" : "5.特种用途林",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "16",
  "unitcode" : "",
  "itemcode" : "二、有林地和灌木林地新封",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "20",
  "unitcode" : "亩",
  "itemcode" : "三、更新造林",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "21",
  "unitcode" : "亩",
  "itemcode" : "四、低产低效林改造面积",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "22",
  "unitcode" : "株",
  "itemcode" : "五、四旁（零星）植树",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "23",
  "unitcode" : "亩",
  "itemcode" : "六、年末实有封山（沙）育林面积",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "25",
  "unitcode" : "亩",
  "itemcode" : "七、未成林抚育作业面积",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "26",
  "unitcode" : "亩",
  "itemcode" : "八、未成林抚育实际面积",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "27",
  "unitcode" : "",
  "itemcode" : "九、成林抚育面积",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "29",
  "unitcode" : "立方米",
  "itemcode" : "十、抚育改造出材量",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "31",
  "unitcode" : "公斤",
  "itemcode" : "十一、林木种子采集量",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "32",
  "unitcode" : "株",
  "itemcode" : "十二、当年苗木产量",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "33",
  "unitcode" : "",
  "itemcode" : "十三、育苗面积",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "35",
  "unitcode" : "亩",
  "itemcode" : "十四、年末实有母树林面积",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "36",
  "unitcode" : "亩",
  "itemcode" : "十五、年末实有种子园面积",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "十七、竹林采伐",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "46",
  "unitcode" : "立方米",
  "itemcode" : "1.木材",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "49",
  "unitcode" : "根",
  "itemcode" : "其中：村及村以下采伐",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "48",
  "unitcode" : "根",
  "itemcode" : "2.竹材",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "十八、其他补充产品产量",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "52",
  "unitcode" : "吨",
  "itemcode" : "1.核桃",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "52",
  "unitcode" : "吨",
  "itemcode" : "2.板栗",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "53",
  "unitcode" : "吨",
  "itemcode" : "3.松子",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "54",
  "unitcode" : "吨",
  "itemcode" : "4.花椒",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "56",
  "unitcode" : "吨",
  "itemcode" : "5.八角",
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