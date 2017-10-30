Ext.define('Kits.view.tables.SNN03', {
    extend: 'Kits.view.tables.Base',
    title: '粮食作物生产情况（一）',
    xtype: 'tablesSNN03',
    hzcolumn:'hzcode',
    tableid: '923003994621698048',
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
  "itemcode" : "农作物总播种面积",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "－－",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "－－",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "1",
  "unitcode" : "亩",
  "itemcode" : "－－0",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "种值业总收入",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "－－",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "－－",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "2",
  "unitcode" : "－",
  "itemcode" : "－－",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "一、全年粮食",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "－－",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "3",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "4",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "5",
  "unitcode" : "吨",
  "itemcode" : "总产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（一）夏收粮食",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "－－",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "6",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "7",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "8",
  "unitcode" : "吨",
  "itemcode" : "总产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "1、小麦",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : " 元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "9",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "10",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "11",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "2、蚕豌豆",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : " 万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "12",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "13",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "14",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "3、杂粮",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "     元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "15",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "16",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "17",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中： 大麦",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "18",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "19",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "20",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "燕麦",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "21",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "22",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "乔麦",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "23",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "24",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "4、马铃薯",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "25",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "26",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "27",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（二）秋收粮食",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "－－",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "28",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "29",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "30",
  "unitcode" : "吨",
  "itemcode" : "总产",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "1、稻谷(中稻)",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "31",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "32",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "33",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "2、玉米",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "34",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "35",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "36",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：杂交玉米",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : " 万元",
  "num1" : "—",
  "i" : 3,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "37",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "38",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "39",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "3、粟谷",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "40",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "41",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "42",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "4、高梁",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "40",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "41",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "42",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "5、黄豆",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "49",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "50",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "51",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "6、杂豆",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "52",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "53",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "54",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：绿豆",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : " 元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "58",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "59",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "60",
  "unitcode" : "吨",
  "itemcode" : "产量0",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "红小豆",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "61",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "62",
  "unitcode" : "公斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "63",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "7、薯类",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "64",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "65",
  "unitcode" : "公  斤",
  "itemcode" : "单  产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "66",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（1）、红薯",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "67",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "68",
  "unitcode" : "公  斤",
  "itemcode" : "单  产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "69",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（2）、马铃薯",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "70",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "71",
  "unitcode" : "公  斤",
  "itemcode" : "单  产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "72",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "8、其实杂粮",
  "num1" : "—",
  "i" : 0,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "73",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "74",
  "unitcode" : "公  斤",
  "itemcode" : "单  产",
  "num1" : "",
  "i" : 3,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "75",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
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
  "text" : "<div style='white-space:pre-line;height:22px'>代 码</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>丙</div>",
    "dataIndex" : "hzcode",
    "align" : "center",
    "width" : 100
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:-13px'>(千公顷)</div>",
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
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>总产量</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:-13px'>(吨)</div>",
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
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:-13px'>(公斤)</div>",
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