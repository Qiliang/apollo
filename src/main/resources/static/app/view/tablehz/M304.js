Ext.define('Kits.view.tablehz.M304', {
    extend: 'Kits.view.tablehz.Base',
    title: '其它畜牧业生产情况表',
    xtype: 'tablehzM304',
    tableid: '923004088574107648',
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
}, {
  "name" : "17",
  "type" : "string"
}, {
  "name" : "18",
  "type" : "string"
}, {
  "name" : "19",
  "type" : "string"
}, {
  "name" : "20",
  "type" : "string"
} ],
        data: []
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:127px'>指标名称</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>计算单位</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>汇总代码</div>",
      "dataIndex" : "汇总代码",
      "width" : 300
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>编 号</div>",
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
  "text" : "<div style='white-space:pre-line;height:22px'>一、</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>活牲畜（除猪、牛、羊外）</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>1</div>",
        "dataIndex" : "1",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>其中：能繁母牛</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'></div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>2</div>",
          "dataIndex" : "2",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>1.马</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>3</div>",
          "dataIndex" : "3",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>2.驴</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>4</div>",
          "dataIndex" : "4",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>3.骡</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>5</div>",
          "dataIndex" : "5",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>4.骆驼</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>6</div>",
          "dataIndex" : "6",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>二</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>家兔</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>7</div>",
        "dataIndex" : "7",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>三</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>其它肉产量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>8</div>",
        "dataIndex" : "8",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>四</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>其它奶产量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>9</div>",
        "dataIndex" : "9",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>五</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>山羊毛产量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'></div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>10</div>",
          "dataIndex" : "10",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'>1.山羊粗毛</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
          "dataIndex" : "11",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>2.山羊绒</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
          "dataIndex" : "12",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>六</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>绵羊毛产量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'></div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
          "dataIndex" : "13",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'>细羊毛</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
          "dataIndex" : "14",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>半细羊毛</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>15</div>",
          "dataIndex" : "15",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>七</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>天然蜂蜜产量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
        "dataIndex" : "16",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>八</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>其他禽蛋产量（除鸡蛋）</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>17</div>",
        "dataIndex" : "17",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>九</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>蚕茧产量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'></div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>18</div>",
          "dataIndex" : "18",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'>桑蚕茧</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>19</div>",
          "dataIndex" : "19",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>柞蚕茧</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>20</div>",
          "dataIndex" : "20",
          "align" : "center",
          "width" : 100
        } ]
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