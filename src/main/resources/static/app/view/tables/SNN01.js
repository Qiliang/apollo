Ext.define('Kits.view.tables.SNN01', {
    extend: 'Kits.view.tables.Base',
    title: '农村基层组织及户数、人口、从业人员情况（一）',
    xtype: 'tablesSNN01',
    hzcolumn:'hzcode',
    tableid: '923003973515960320',
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
  "hzcode" : "汇总代码",
  "unitcode" : "计算单位",
  "itemcode" : "指标名称",
  "num1" : "",
  "i" : 0
}, {
  "hzcode" : "－",
  "unitcode" : "－",
  "itemcode" : "编  号",
  "num1" : "",
  "i" : 0
}, {
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
  "hzcode" : "1",
  "unitcode" : "个",
  "itemcode" : "",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "2",
  "unitcode" : "个",
  "itemcode" : "  1、乡政府",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "3",
  "unitcode" : "个",
  "itemcode" : "  2、镇政府",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "4",
  "unitcode" : "个",
  "itemcode" : "（二）办事处",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "5",
  "unitcode" : "个",
  "itemcode" : "（三）村 民委员会",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "6",
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
  "hzcode" : "7",
  "unitcode" : "个",
  "itemcode" : "自来水受益村数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "8",
  "unitcode" : "个",
  "itemcode" : "通汽车村数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "9",
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
  "unitcode" : "户",
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
  "unitcode" : "人",
  "itemcode" : "",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "13",
  "unitcode" : "人",
  "itemcode" : "男",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "14",
  "unitcode" : "人",
  "itemcode" : "女",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（三）乡村劳动力资  源",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "15",
  "unitcode" : "人",
  "itemcode" : "",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "16",
  "unitcode" : "人",
  "itemcode" : "男",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "17",
  "unitcode" : "人",
  "itemcode" : "女",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（四）乡村从业人员数",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "18",
  "unitcode" : "人",
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
  "unitcode" : "人",
  "itemcode" : "",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "20",
  "unitcode" : "人",
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
  "hzcode" : "21",
  "unitcode" : "人",
  "itemcode" : "",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "22",
  "unitcode" : "人",
  "itemcode" : "其中：从事农业人员数",
  "num1" : "",
  "i" : 3
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "四、国有农林牧渔场情况",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "23",
  "unitcode" : "人",
  "itemcode" : "（一）国有农林牧渔场总人口",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（二）国有农林牧渔场从业人员",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "24",
  "unitcode" : "人",
  "itemcode" : "",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "25",
  "unitcode" : "人",
  "itemcode" : "1、农业从业人员",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "26",
  "unitcode" : "人",
  "itemcode" : "2、非农业从业人员",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "五、农业用地情况",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "27",
  "unitcode" : "亩",
  "itemcode" : "1、耕地",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "28",
  "unitcode" : "亩",
  "itemcode" : "2、园地",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "29",
  "unitcode" : "亩",
  "itemcode" : "3、林地",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "30",
  "unitcode" : "亩",
  "itemcode" : "4、草地",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "31",
  "unitcode" : "亩",
  "itemcode" : "5、农业设施用地",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（接前三、）",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "（接前（四））",
  "num1" : "—",
  "i" : 1
}, {
  "hzcode" : "32",
  "unitcode" : "人",
  "itemcode" : "e、仓储及邮电通讯业",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "33",
  "unitcode" : "人",
  "itemcode" : "f、信息传输计算机服务和软件业",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "34",
  "unitcode" : "人",
  "itemcode" : "g、批发零售贸易业",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "35",
  "unitcode" : "人",
  "itemcode" : "h、住宿和餐饮业",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "36",
  "unitcode" : "人",
  "itemcode" : "i、其它非农行业",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "45",
  "unitcode" : "人",
  "itemcode" : "③农林牧渔场从业人员合计",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "46",
  "unitcode" : "人",
  "itemcode" : "a、农业从业人员",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "47",
  "unitcode" : "人",
  "itemcode" : "b、非农业从业人员",
  "num1" : "",
  "i" : 2
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "四、人口与计划生育",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "48",
  "unitcode" : "人",
  "itemcode" : "（一）当年出生人口",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "49",
  "unitcode" : "人",
  "itemcode" : "（二）当年死亡人口",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "50",
  "unitcode" : "人",
  "itemcode" : "（三）计划生育指标数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "—",
  "unitcode" : "—",
  "itemcode" : "附报：农村总户数总人口中：",
  "num1" : "—",
  "i" : 0
}, {
  "hzcode" : "51",
  "unitcode" : "户",
  "itemcode" : "享受五保的户数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "52",
  "unitcode" : "人",
  "itemcode" : "享受五保的人数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "53",
  "unitcode" : "户",
  "itemcode" : "具有五保条件而实际未享受五保的户数",
  "num1" : "",
  "i" : 1
}, {
  "hzcode" : "55",
  "unitcode" : "人",
  "itemcode" : "当年贫困人口数",
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