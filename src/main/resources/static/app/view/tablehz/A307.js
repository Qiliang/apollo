Ext.define('Kits.view.tablehz.A307', {
    extend: 'Kits.view.tablehz.Base',
    title: '林业生产情况表（一）',
    xtype: 'tablehzA307',
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
  "name" : "代码总汇",
  "type" : "string"
}, {
  "name" : "丙",
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
  "name" : "37",
  "type" : "string"
}, {
  "name" : "38",
  "type" : "string"
}, {
  "name" : "39",
  "type" : "string"
}, {
  "name" : "40",
  "type" : "string"
}, {
  "name" : "41",
  "type" : "string"
}, {
  "name" : "42",
  "type" : "string"
}, {
  "name" : "43",
  "type" : "string"
}, {
  "name" : "44",
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
  "name" : "52",
  "type" : "string"
}, {
  "name" : "53",
  "type" : "string"
}, {
  "name" : "54",
  "type" : "string"
}, {
  "name" : "56",
  "type" : "string"
} ],
        data: []
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:162px'>指标名称</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>乙</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>丙</div>",
      "dataIndex" : "丙",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:162px'>编号</div>",
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
  "text" : "<div style='white-space:pre-line;height:22px'>一、荒山荒（沙）地造林面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>按造林方式分</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:92px'>1.人工造林</div>",
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
      "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:57px'>竹林面积</div>",
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
        "text" : "<div style='white-space:pre-line;height:57px'>乔木林面积</div>",
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
      "text" : "<div style='white-space:pre-line;height:92px'>2.飞播造林</div>",
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
      "text" : "<div style='white-space:pre-line;height:92px'>3.无林地和疏林地新封</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>5</div>",
          "dataIndex" : "5",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>按经济成份分</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>1.公有经济造林</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>6</div>",
          "dataIndex" : "6",
          "align" : "center",
          "width" : 100
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:57px'>（1）国有经济造林</div>",
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
        "text" : "<div style='white-space:pre-line;height:57px'>（2）集体经济造林</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>8</div>",
            "dataIndex" : "8",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>2.非公有经济造林</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>9</div>",
          "dataIndex" : "9",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>按林种用途分</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:92px'>1.用材林</div>",
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
      "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:57px'>速生丰产林</div>",
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
        "text" : "<div style='white-space:pre-line;height:57px'>2.经济林</div>",
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
        "text" : "<div style='white-space:pre-line;height:57px'>3.防护林</div>",
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
        "text" : "<div style='white-space:pre-line;height:57px'>4.薪炭林</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
            "dataIndex" : "14",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:57px'>5.特种用途林</div>",
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
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>二、有林地和灌木林地新封</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'></div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
      "dataIndex" : "16",
      "align" : "center",
      "width" : 100
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>1.林冠下造林</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>17</div>",
        "dataIndex" : "17",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>2.飞播营林</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>18</div>",
        "dataIndex" : "18",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>3.有林地和灌木林地新封</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>19</div>",
        "dataIndex" : "19",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:162px'>三、更新造林</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>20</div>",
      "dataIndex" : "20",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:162px'>四、低产低效林改造面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>21</div>",
      "dataIndex" : "21",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:162px'>五、四旁（零星）植树</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>株</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>22</div>",
      "dataIndex" : "22",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:162px'>六、年末实有封山（沙）育林面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>23</div>",
      "dataIndex" : "23",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:162px'>七、未成林抚育作业面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>25</div>",
      "dataIndex" : "25",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:162px'>八、未成林抚育实际面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>26</div>",
      "dataIndex" : "26",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>九、成林抚育面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'></div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>27</div>",
      "dataIndex" : "27",
      "align" : "center",
      "width" : 100
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>其中：中、幼龄林抚育面积</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>28</div>",
        "dataIndex" : "28",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>十、抚育改造出材量</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>立方米</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>29</div>",
      "dataIndex" : "29",
      "align" : "center",
      "width" : 100
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>其中：中、幼龄林抚育出材量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>立方米</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>30</div>",
        "dataIndex" : "30",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:162px'>十一、林木种子采集量</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>31</div>",
      "dataIndex" : "31",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:162px'>十二、当年苗木产量</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>株</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>32</div>",
      "dataIndex" : "32",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>十三、育苗面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'></div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>33</div>",
      "dataIndex" : "33",
      "align" : "center",
      "width" : 100
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>其中：本年新增育苗面积</div>",
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
}, {
  "text" : "<div style='white-space:pre-line;height:162px'>十四、年末实有母树林面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>35</div>",
      "dataIndex" : "35",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>十五、年末实有种子园面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>36</div>",
      "dataIndex" : "36",
      "align" : "center",
      "width" : 100
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>1.天然生漆</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>37</div>",
        "dataIndex" : "37",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>2.油桐籽</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>38</div>",
        "dataIndex" : "38",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>3.油茶籽</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>39</div>",
        "dataIndex" : "39",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>4.乌桕子</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>40</div>",
        "dataIndex" : "40",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>5.五倍子</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>41</div>",
        "dataIndex" : "41",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>6.棕片</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>42</div>",
        "dataIndex" : "42",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>7.天然松脂</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>43</div>",
        "dataIndex" : "43",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>8.竹笋干</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>44</div>",
        "dataIndex" : "44",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>9.紫胶（原胶）</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>45</div>",
        "dataIndex" : "45",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>十七、竹林采伐</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:127px'>1.木材</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>立方米</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>46</div>",
        "dataIndex" : "46",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>其中：村及村以下采伐</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>根</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>49</div>",
        "dataIndex" : "49",
        "align" : "center",
        "width" : 100
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>（1）（楠）</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>根</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>50</div>",
          "dataIndex" : "50",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:92px'>（2）杂竹</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>根</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>51</div>",
          "dataIndex" : "51",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>2.竹材</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>根</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>48</div>",
        "dataIndex" : "48",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>十八、其他补充产品产量</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:127px'>1.核桃</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>52</div>",
        "dataIndex" : "52",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>2.板栗</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>52</div>",
        "dataIndex" : "52",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>3.松子</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>53</div>",
        "dataIndex" : "53",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>4.花椒</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>54</div>",
        "dataIndex" : "54",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:127px'>5.八角</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>56</div>",
        "dataIndex" : "56",
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