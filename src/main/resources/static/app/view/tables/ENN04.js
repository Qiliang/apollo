Ext.define('Kits.view.tables.ENN04', {
    extend: 'Kits.view.tables.Base',
    title: '劳动力转移情况表（一）',
    xtype: 'tablesENN04',
    hzcolumn:'hzcode',
    tableid: '923004098938232832',
    rowNum: 67,
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
  "hzcode" : "1",
  "unitcode" : "人",
  "itemcode" : "一、 农村人口",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "3",
  "unitcode" : "人",
  "itemcode" : "农村劳动力资源",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "4",
  "unitcode" : "人",
  "itemcode" : "农村从业人数",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "5",
  "unitcode" : "人",
  "itemcode" : "在本乡镇从业人员",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "6",
  "unitcode" : "人",
  "itemcode" : "1.从事农林牧渔业人员",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "7",
  "unitcode" : "人",
  "itemcode" : "2.从事二、三产业人员",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "1、外出从业",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "8",
  "unitcode" : "人",
  "itemcode" : "总量",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "9",
  "unitcode" : "人",
  "itemcode" : "男",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "①.外出从业人员文化程度",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "10",
  "unitcode" : "人",
  "itemcode" : "小学及以下",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "11",
  "unitcode" : "人",
  "itemcode" : "初中",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "12",
  "unitcode" : "人",
  "itemcode" : "高中及以上",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "②按年龄状况分",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "13",
  "unitcode" : "人",
  "itemcode" : "20岁以下",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "14",
  "unitcode" : "人",
  "itemcode" : "21岁—49岁",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "15",
  "unitcode" : "人",
  "itemcode" : "50岁以上",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "2.外出渠道",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "16",
  "unitcode" : "人",
  "itemcode" : "①自发",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "17",
  "unitcode" : "人",
  "itemcode" : " ②政府有关部门组织",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "18",
  "unitcode" : "人",
  "itemcode" : "③中介组织介绍",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "19",
  "unitcode" : "人",
  "itemcode" : "④企业招收",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "3、外出从业时间",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "20",
  "unitcode" : "人",
  "itemcode" : "1个月-3个月",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "21",
  "unitcode" : "人",
  "itemcode" : "3个月个月",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "22",
  "unitcode" : "人",
  "itemcode" : "6个月以上",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "4、外出从业地点",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "23",
  "unitcode" : "人",
  "itemcode" : "①内乡外",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "24",
  "unitcode" : "人",
  "itemcode" : "②省内外",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "25",
  "unitcode" : "人",
  "itemcode" : "③省外",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "26",
  "unitcode" : "人",
  "itemcode" : "④港澳台",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "27",
  "unitcode" : "人",
  "itemcode" : "⑤境外",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "5.外出从业人员从事行业",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "28",
  "unitcode" : "人",
  "itemcode" : "①第一产业",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "29",
  "unitcode" : "人",
  "itemcode" : "②第二产业",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "30",
  "unitcode" : "人",
  "itemcode" : "③第三产业",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "6.外出从业形式",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "31",
  "unitcode" : "人",
  "itemcode" : "①务工",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "32",
  "unitcode" : "人",
  "itemcode" : "②经商",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "33",
  "unitcode" : "人",
  "itemcode" : "③其他",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "7.外出从业人员职业技能培训情况",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "34",
  "unitcode" : "人",
  "itemcode" : "①参加过职业技能培训",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "36",
  "unitcode" : "人",
  "itemcode" : "②持有职业技术资格证书",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "8、劳务收入",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "37",
  "unitcode" : "人",
  "itemcode" : "劳务经济总收入（万元）",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "38",
  "unitcode" : "人",
  "itemcode" : "其中：月收入500元以下",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "39",
  "unitcode" : "人",
  "itemcode" : "501-1000元",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "40",
  "unitcode" : "人",
  "itemcode" : "1001-2000元",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "41",
  "unitcode" : "人",
  "itemcode" : "  2001-3000元",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "42",
  "unitcode" : "人",
  "itemcode" : "3000元以上",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "9.外出从业人员从业环境",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "43",
  "unitcode" : "人",
  "itemcode" : "①雇主拖欠工资人数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "44",
  "unitcode" : "人",
  "itemcode" : "②从事高危、有害工作人数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "45",
  "unitcode" : "人",
  "itemcode" : "③致伤致残人数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "46",
  "unitcode" : "人",
  "itemcode" : "④享受劳保补贴人数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "10、外出人员社会保障",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "47",
  "unitcode" : "人",
  "itemcode" : "与雇主签定劳动合同",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "48",
  "unitcode" : "人",
  "itemcode" : "参与养老保险人数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "49",
  "unitcode" : "人",
  "itemcode" : "参与医疗保险人数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "50",
  "unitcode" : "人",
  "itemcode" : "参与失业保险人数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "51",
  "unitcode" : "人",
  "itemcode" : "参与生育保险人数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "52",
  "unitcode" : "人",
  "itemcode" : "参与工伤保险人数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "11、返回情况",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "53",
  "unitcode" : "人",
  "itemcode" : "①全年外出返乡人员",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "54",
  "unitcode" : "人",
  "itemcode" : "②返乡人员再就业情况",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "55",
  "unitcode" : "人",
  "itemcode" : "本地从事二、三产业",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "56",
  "unitcode" : "人",
  "itemcode" : "再次外出从业务",
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
  "text" : "<div style='white-space:pre-line;height:22px'>代 码</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>丙</div>",
    "dataIndex" : "hzcode",
    "align" : "center",
    "width" : 100
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>数 量</div>",
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