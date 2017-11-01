Ext.define('Kits.view.tables.M304', {
    extend: 'Kits.view.tables.Base',
    title: '其它畜牧业生产情况表',
    xtype: 'tablesM304',
    hzcolumn:'hzcode',
    tableid: '923004088574107648',
    rowNum: 36,
    headerItems:[
        {
            html: '<br /><br /><br />综合机关名称：',
        },
        {
            html: '<br /><br /><br />2016年',
        },
        {
            html: '表    号：M304<br /> ' +
            '制表机关：国家统计局 <br />' +
            '批准文号：国统字(2016)125号<br />' +
            '有效期至：2018年1月'
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
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "其中：能繁母牛",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "2",
  "unitcode" : "头",
  "itemcode" : "",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "3",
  "unitcode" : "头",
  "itemcode" : "1.马",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "4",
  "unitcode" : "只",
  "itemcode" : "2.驴",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "5",
  "unitcode" : "头",
  "itemcode" : "3.骡",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "6",
  "unitcode" : "吨",
  "itemcode" : "4.骆驼",
  "num1" : "",
  "i" : 2,
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
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "山羊毛产量",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "10",
  "unitcode" : "吨",
  "itemcode" : "",
  "num1" : "",
  "i" : 2,
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
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "绵羊毛产量",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "13",
  "unitcode" : "吨",
  "itemcode" : "",
  "num1" : "",
  "i" : 2,
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
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "蚕茧产量",
  "num1" : "—",
  "i" : 1,
  "num3" : "—",
  "num2" : "—"
}, {
  "hzcode" : "18",
  "unitcode" : "吨",
  "itemcode" : "",
  "num1" : "",
  "i" : 2,
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
  "unitcode" : "吨",
  "itemcode" : "桑蚕茧",
  "num1" : "",
  "i" : 2,
  "num3" : "",
  "num2" : ""
}, {
  "hzcode" : "20",
  "unitcode" : "吨",
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
            html: '说明：</br>1.本表由各市、州、神农架林区统计局报送，</br>2.报送时间与A402表和A403表一致。</br>3.成功者'
        }
    ]
});