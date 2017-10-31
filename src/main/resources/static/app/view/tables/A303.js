Ext.define('Kits.view.tables.A303', {
    extend: 'Kits.view.tables.Base',
    title: '经济作物生产情况',
    xtype: 'tablesA303',
    hzcolumn:'hzcode',
    tableid: '923004012028059648',
    rowNum: 441,
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
} ],
        data: [ {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "经济作物",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "76",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "77",
  "unitcode" : "公  斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "78",
  "unitcode" : "吨",
  "itemcode" : "总产",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "一、油    料",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "79",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "80",
  "unitcode" : "公  斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "81",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：花生",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "82",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "83",
  "unitcode" : "公  斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "84",
  "unitcode" : "吨",
  "itemcode" : "  产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "油菜籽",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "85",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "86",
  "unitcode" : "公  斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "87",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "芝麻",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "88",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "89",
  "unitcode" : "公  斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "90",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "胡芝麻",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "91",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "92",
  "unitcode" : "公  斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "93",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "向日葵籽",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "94",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "95",
  "unitcode" : "公  斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "96",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其它油料",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "97",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "98",
  "unitcode" : "公  斤",
  "itemcode" : "单产",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "99",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "二、烟 叶类",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "100",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "101",
  "unitcode" : "公 斤",
  "itemcode" : "单 产",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "102",
  "unitcode" : "吨",
  "itemcode" : "总  产",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：烤烟",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "103",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "104",
  "unitcode" : "公 斤",
  "itemcode" : "单 产",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "105",
  "unitcode" : "吨",
  "itemcode" : "总  产",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "三、药材类",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "106",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "107",
  "unitcode" : "吨",
  "itemcode" : "总  产",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "1、黄莲",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "108",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "109",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "2、柴胡",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "110",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "111",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "3、党参",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "112",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "113",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "4、天麻",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "114",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "115",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "5、黄姜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "116",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "117",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "6、冬花",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "118",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "119",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "7、川芎",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "120",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "121",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "8、独活",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "122",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "123",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "9、桔梗",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "124",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "125",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "10、苍术",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "126",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "127",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "11、杜仲",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "128",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "129",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "12、其它药材",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "130",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "131",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "13、野生药材",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "132",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "133",
  "unitcode" : "公  斤",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "四、蔬菜及食用菌",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "134",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "135",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（一）叶菜类",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "136",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "137",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：芹菜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "138",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "139",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "油菜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "140",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "141",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "菠菜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "142",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "143",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（二）白菜类",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "144",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "145",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：大白菜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "146",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "147",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（三）甘蓝类",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "148",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "149",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：卷心菜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "150",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "151",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（四）根茎类",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "152",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "153",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：白萝卜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "154",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "155",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "胡萝卜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "156",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "157",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "(五)瓜菜类",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "158",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "159",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：黄瓜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "160",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "161",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "冬瓜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "162",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "163",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（六）豆类（菜用）",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "164",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "165",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：豇豆",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "166",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "167",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "四季豆",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "168",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "169",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（七）茄果菜类",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "170",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "171",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：茄子",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "172",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "173",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "辣椒",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "174",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "175",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "西红柿",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "176",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "177",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（八）葱蒜类",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "178",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "179",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：大葱",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "180",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "181",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "蒜头",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "182",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "183",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "(九)水生菜类",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "184",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "185",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：莲藕",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "186",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "187",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（十）其它蔬菜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "188",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "189",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（十一）食用菌（干鲜混合）",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "190",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "191",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：香茹（干品）",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "192",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "193",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "黑木耳（干品格",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "194",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "195",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "磨茹（鲜品质）",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "196",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "197",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "五、瓜果类",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "198",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "199",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：西瓜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "200",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "201",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "甜瓜",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "202",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "203",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "草莓",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "204",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "205",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "六、其实农作物",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "206",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "207",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：青饲料",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "208",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "209",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "绿肥",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "210",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "211",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其它农作物",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "212",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "213",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "七、特种农作物",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "214",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "215",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "花  卉",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "216",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "217",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "鲜切花",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "218",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "219",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "盆栽观赏植物（包括盆景）",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "220",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "221",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "香  料",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "222",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "223",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：花椒",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "224",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "225",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "八角",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "226",
  "unitcode" : "亩",
  "itemcode" : "面积",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "227",
  "unitcode" : "吨",
  "itemcode" : "产  量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "八、茶叶",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "228",
  "unitcode" : "公斤",
  "itemcode" : "总产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "1、        炒青茶",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "229",
  "unitcode" : "公斤",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "2、        芽茶",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "230",
  "unitcode" : "公斤",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "3、        绿茶",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "231",
  "unitcode" : "公斤",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "4、                          其他茶",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "232",
  "unitcode" : "公斤",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "九、          园林水果",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "233",
  "unitcode" : "吨",
  "itemcode" : "总产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "1、苹果",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "234",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "红富士",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "235",
  "unitcode" : "公斤",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "国光",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "236",
  "unitcode" : "公斤",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "2、柑桔",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "237",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "柑",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "238",
  "unitcode" : "公斤",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "桔",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "239",
  "unitcode" : "公斤",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "3、梨子",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "240",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "4、其它水果",
  "num1" : "—",
  "i" : 0,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "241",
  "unitcode" : "吨",
  "itemcode" : "总产量",
  "num1" : "",
  "i" : 3,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "桃子",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "242",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "猕猴桃",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "243",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "葡萄",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : " 元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "244",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "红枣",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "245",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
  "num2" : ""
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "柿子",
  "num1" : "—",
  "i" : 1,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "  元",
  "num1" : "—",
  "i" : 2,
  "num2" : "—"
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "万元",
  "num1" : "—",
  "i" : 3,
  "num2" : "—"
}, {
  "hzcode" : "246",
  "unitcode" : "吨",
  "itemcode" : "产量",
  "num1" : "",
  "i" : 4,
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
  "text" : "<div style='white-space:pre-line;height:22px'>代码</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>乙</div>",
    "dataIndex" : "hzcode",
    "align" : "center",
    "width" : 100
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>播种面积</div>",
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
  "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
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