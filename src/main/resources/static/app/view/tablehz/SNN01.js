Ext.define('Kits.view.tablehz.SNN01', {
    extend: 'Kits.view.tablehz.Base',
    title: '测试表单',
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
  "name" : "—",
  "type" : "string"
}, {
  "name" : "01",
  "type" : "string"
}, {
  "name" : "02",
  "type" : "string"
}, {
  "name" : "03",
  "type" : "string"
}, {
  "name" : "04",
  "type" : "string"
}, {
  "name" : "05",
  "type" : "string"
}, {
  "name" : "06",
  "type" : "string"
}, {
  "name" : "07",
  "type" : "string"
}, {
  "name" : "08",
  "type" : "string"
}, {
  "name" : "09",
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
  "text" : "<div style='white-space:pre-line;height:162px'>指标名称</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>计算单位</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>汇总代码</div>",
      "dataIndex" : "汇总代码",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:162px'>编号</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>—</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>—</div>",
      "dataIndex" : "—",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>一、农村基层组织情况</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>（一）乡镇政府个数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:92px'></div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>01</div>",
          "dataIndex" : "01",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:57px'>1、乡政府</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>02</div>",
            "dataIndex" : "02",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:57px'>2、镇政府</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>03</div>",
            "dataIndex" : "03",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>（二）办事处</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>04</div>",
        "dataIndex" : "04",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>（三）村 民委员会</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>05</div>",
        "dataIndex" : "05",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>（四）村  民  小 组</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>06</div>",
        "dataIndex" : "06",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>二、农村社会基础设施</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:127px'>自来水受益村数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>07</div>",
        "dataIndex" : "07",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>通汽车村数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>08</div>",
        "dataIndex" : "08",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>通有线电视村</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>09</div>",
        "dataIndex" : "09",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>通宽带村数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>10</div>",
        "dataIndex" : "10",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>三、乡村、人口、户数及农村从业人员情况</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:127px'>（一）乡村 户 数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
        "dataIndex" : "11",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>（二）乡村人口数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:92px'></div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
          "dataIndex" : "12",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:57px'>男</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
            "dataIndex" : "13",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:57px'>女</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
            "dataIndex" : "14",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>（三）乡村劳动力资  源</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:92px'></div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>15</div>",
          "dataIndex" : "15",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:57px'>男</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
            "dataIndex" : "16",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:57px'>女</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>17</div>",
            "dataIndex" : "17",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>（四）乡村从业人员数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:92px'></div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>18</div>",
          "dataIndex" : "18",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>男</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:57px'>其中：从事农业人员数</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>19</div>",
            "dataIndex" : "19",
            "width" : 100
          } ]
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>女</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:57px'>其中：从事农业人员数</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>20</div>",
            "dataIndex" : "20",
            "width" : 100
          } ]
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