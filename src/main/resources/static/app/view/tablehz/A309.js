Ext.define('Kits.view.tablehz.A309', {
    extend: 'Kits.view.tablehz.Base',
    title: '年末茶叶水果园情况',
    xtype: 'tablehzA309',
    tableid: '923004053769773056',
    itemcode:'汇总代码',
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
        fields: [ {
  "name" : "汇总代码",
  "type" : "string"
}, {
  "name" : "--",
  "type" : "string"
}, {
  "name" : "1",
  "type" : "string"
}, {
  "name" : "2",
  "type" : "string"
}, {
  "name" : "3",
  "type" : "string"
}, {
  "name" : "4",
  "type" : "string"
}, {
  "name" : "5",
  "type" : "string"
}, {
  "name" : "6",
  "type" : "string"
}, {
  "name" : "7",
  "type" : "string"
}, {
  "name" : "8",
  "type" : "string"
}, {
  "name" : "9",
  "type" : "string"
}, {
  "name" : "10",
  "type" : "string"
}, {
  "name" : "11",
  "type" : "string"
}, {
  "name" : "12",
  "type" : "string"
}, {
  "name" : "13",
  "type" : "string"
}, {
  "name" : "14",
  "type" : "string"
}, {
  "name" : "15",
  "type" : "string"
}, {
  "name" : "16",
  "type" : "string"
} ],
        data: []
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:57px'>指标名称</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>计算单位</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>汇总代码</div>",
      "dataIndex" : "汇总代码",
      "width" : 300
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:57px'>编  号</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
      "dataIndex" : "--",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:57px'>一、年末实有茶园面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>1</div>",
      "dataIndex" : "1",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>其      中</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>本年采  摘面积</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>2</div>",
        "dataIndex" : "2",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>本年新                    植面积</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>3</div>",
        "dataIndex" : "3",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:57px'>二、年末果园面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>4</div>",
      "dataIndex" : "4",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>在年末果园面积中：</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>苹果园</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>5</div>",
        "dataIndex" : "5",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>柑橘园</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>6</div>",
        "dataIndex" : "6",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>梨园</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>7</div>",
        "dataIndex" : "7",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>葡萄园</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>8</div>",
        "dataIndex" : "8",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>桃园</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>9</div>",
        "dataIndex" : "9",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>猕猴桃园</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>10</div>",
        "dataIndex" : "10",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>其它                        果园</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
        "dataIndex" : "11",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>附报：当年零星植果树</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>苹果</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>百株</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
        "dataIndex" : "12",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>梨子</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>百株</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
        "dataIndex" : "13",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>桃子</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>百株</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
        "dataIndex" : "14",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>柰李</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>百株</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>15</div>",
        "dataIndex" : "15",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>核桃</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>百株</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
        "dataIndex" : "16",
        "align" : "center",
        "width" : 100
      } ]
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