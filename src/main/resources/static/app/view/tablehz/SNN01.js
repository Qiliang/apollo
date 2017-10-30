Ext.define('Kits.view.tablehz.SNN01', {
    extend: 'Kits.view.tablehz.Base',
    title: '农村基层组织及户数、人口、从业人员情况（一）',
    xtype: 'tablehzSNN01',
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
  "name" : "－",
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
  "name" : "27",
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
  "name" : "32",
  "type" : "string"
}, {
  "name" : "33",
  "type" : "string"
}, {
  "name" : "34",
  "type" : "string"
}, {
  "name" : "35",
  "type" : "string"
}, {
  "name" : "36",
  "type" : "string"
}, {
  "name" : "45",
  "type" : "string"
}, {
  "name" : "46",
  "type" : "string"
}, {
  "name" : "47",
  "type" : "string"
}, {
  "name" : "48",
  "type" : "string"
}, {
  "name" : "49",
  "type" : "string"
}, {
  "name" : "50",
  "type" : "string"
}, {
  "name" : "51",
  "type" : "string"
}, {
  "name" : "52",
  "type" : "string"
}, {
  "name" : "53",
  "type" : "string"
}, {
  "name" : "54",
  "type" : "string"
}, {
  "name" : "55",
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
      "width" : 300
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:162px'>编  号</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>－</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>－</div>",
      "dataIndex" : "－",
      "align" : "center",
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
          "text" : "<div style='white-space:pre-line;height:22px'>1</div>",
          "dataIndex" : "1",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>  1、乡政府</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>2</div>",
        "dataIndex" : "2",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>  2、镇政府</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>3</div>",
        "dataIndex" : "3",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>（二）办事处</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>4</div>",
        "dataIndex" : "4",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>（三）村 民委员会</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>5</div>",
        "dataIndex" : "5",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>（四）村  民  小 组</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>6</div>",
        "dataIndex" : "6",
        "align" : "center",
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
        "text" : "<div style='white-space:pre-line;height:22px'>7</div>",
        "dataIndex" : "7",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>通汽车村数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>8</div>",
        "dataIndex" : "8",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>通有线电视村</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>9</div>",
        "dataIndex" : "9",
        "align" : "center",
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
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>三、乡村、人口、户数及农村从业人员情况</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:127px'>（一）乡村 户 数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>户</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
        "dataIndex" : "11",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>（二）乡村人口数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:92px'></div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
          "dataIndex" : "12",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>男</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
          "dataIndex" : "13",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>女</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
          "dataIndex" : "14",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>（三）乡村劳动力资  源</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:92px'></div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>15</div>",
          "dataIndex" : "15",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>男</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
          "dataIndex" : "16",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>女</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>17</div>",
          "dataIndex" : "17",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>（四）乡村从业人员数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:92px'></div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>18</div>",
          "dataIndex" : "18",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>男</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:57px'></div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>19</div>",
            "dataIndex" : "19",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:57px'>其中：从事农业人员数</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>20</div>",
            "dataIndex" : "20",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>女</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:57px'></div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>21</div>",
            "dataIndex" : "21",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:57px'>其中：从事农业人员数</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>22</div>",
            "dataIndex" : "22",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>四、国有农林牧渔场情况</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:127px'>（一）国有农林牧渔场总人口</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>23</div>",
        "dataIndex" : "23",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>（二）国有农林牧渔场从业人员</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:92px'></div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>24</div>",
          "dataIndex" : "24",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>1、农业从业人员</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>25</div>",
          "dataIndex" : "25",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>2、非农业从业人员</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>26</div>",
          "dataIndex" : "26",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>五、农业用地情况</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:127px'>1、耕地</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>27</div>",
        "dataIndex" : "27",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>2、园地</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>28</div>",
        "dataIndex" : "28",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>3、林地</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>29</div>",
        "dataIndex" : "29",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>4、草地</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>30</div>",
        "dataIndex" : "30",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>5、农业设施用地</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>31</div>",
        "dataIndex" : "31",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>（接前三、）</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>（接前（四））</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:92px'>e、仓储及邮电通讯业</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>32</div>",
          "dataIndex" : "32",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>f、信息传输计算机服务和软件业</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>33</div>",
          "dataIndex" : "33",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>g、批发零售贸易业</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>34</div>",
          "dataIndex" : "34",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>h、住宿和餐饮业</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>35</div>",
          "dataIndex" : "35",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>i、其它非农行业</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>36</div>",
          "dataIndex" : "36",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>③农林牧渔场从业人员合计</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>45</div>",
          "dataIndex" : "45",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>a、农业从业人员</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>46</div>",
          "dataIndex" : "46",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>b、非农业从业人员</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>47</div>",
          "dataIndex" : "47",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>四、人口与计划生育</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:127px'>（一）当年出生人口</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>48</div>",
        "dataIndex" : "48",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>（二）当年死亡人口</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>49</div>",
        "dataIndex" : "49",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>（三）计划生育指标数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>50</div>",
        "dataIndex" : "50",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>附报：农村总户数总人口中：</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:127px'>享受五保的户数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>户</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>51</div>",
        "dataIndex" : "51",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>享受五保的人数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>52</div>",
        "dataIndex" : "52",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>具有五保条件而实际未享受五保的户数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>户</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>53</div>",
        "dataIndex" : "53",
        "align" : "center",
        "width" : 100
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>人口</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>54</div>",
          "dataIndex" : "54",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>当年贫困人口数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>55</div>",
        "dataIndex" : "55",
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