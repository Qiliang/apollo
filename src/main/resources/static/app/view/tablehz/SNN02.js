Ext.define('Kits.view.tablehz.SNN02', {
    extend: 'Kits.view.tablehz.Base',
    title: '农业生产条件（一）',
    xtype: 'tablehzSNN02',
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
}, {
  "name" : "21",
  "type" : "string"
}, {
  "name" : "22",
  "type" : "string"
}, {
  "name" : "23",
  "type" : "string"
}, {
  "name" : "24",
  "type" : "string"
}, {
  "name" : "25",
  "type" : "string"
}, {
  "name" : "26",
  "type" : "string"
}, {
  "name" : "28",
  "type" : "string"
}, {
  "name" : "29",
  "type" : "string"
}, {
  "name" : "30",
  "type" : "string"
}, {
  "name" : "31",
  "type" : "string"
}, {
  "name" : "27",
  "type" : "string"
}, {
  "name" : "32",
  "type" : "string"
}, {
  "name" : "33",
  "type" : "string"
}, {
  "name" : "34",
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
  "text" : "<div style='white-space:pre-line;height:22px'>一、耕地情况</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>（一）年初耕地总资源</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>（二）年内增加</div>",
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
    "text" : "<div style='white-space:pre-line;height:22px'>  其中：</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'>新开荒地</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>3</div>",
          "dataIndex" : "3",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>园地改为耕地</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>4</div>",
          "dataIndex" : "4",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>（三）年内减少</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>1、国家基建占地</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>2、其他基建占地</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>3、退耕还林还草</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>4、退耕还渔</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>5、退耕改园地</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>（四）年末实有耕地总资源</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
        "dataIndex" : "11",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>①常用耕地面积</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'>合计</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
          "dataIndex" : "12",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>1、水田</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
          "dataIndex" : "13",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>2、旱地</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
          "dataIndex" : "14",
          "align" : "center",
          "width" : 100
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:22px'>其中：水浇地</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
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
    "text" : "<div style='white-space:pre-line;height:22px'>②临时性耕地</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'>合计</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
          "dataIndex" : "16",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>其中：25º以上坡耕地</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>17</div>",
          "dataIndex" : "17",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>二、农村主要能源及物质消耗</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>（一）乡、村办水电站数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>18</div>",
        "dataIndex" : "18",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>装机容量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万千瓦</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>19</div>",
        "dataIndex" : "19",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>发电量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万千瓦时</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>20</div>",
        "dataIndex" : "20",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>（二）农村用电量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万千瓦时</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>21</div>",
        "dataIndex" : "21",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>（三）农用化肥施用（实物）量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'>合  计</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>22</div>",
          "dataIndex" : "22",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>1、氮肥</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>23</div>",
          "dataIndex" : "23",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>2、磷肥</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>24</div>",
          "dataIndex" : "24",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>3、钾肥</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>25</div>",
          "dataIndex" : "25",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:57px'>4、复合肥</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>26</div>",
          "dataIndex" : "26",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>（四）农用簿膜使用量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'>合  计</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>28</div>",
          "dataIndex" : "28",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>  其中：</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>地膜</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>29</div>",
            "dataIndex" : "29",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:22px'>地膜覆盖面积</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>30</div>",
            "dataIndex" : "30",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>（五）农用柴油使用量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>31</div>",
        "dataIndex" : "31",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>（六）农药使用量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>27</div>",
        "dataIndex" : "27",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>三、农田水利建设情况</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>有效灌溉面积</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>32</div>",
        "dataIndex" : "32",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>旱涝保收面积</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>33</div>",
        "dataIndex" : "33",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>机电排灌面积</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>34</div>",
        "dataIndex" : "34",
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