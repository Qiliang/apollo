Ext.define('Kits.view.tablehz.SNN03', {
    extend: 'Kits.view.tablehz.Base',
    title: '粮食作物生产情况（一）',
    xtype: 'tablehzSNN03',
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
  "name" : "代码",
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
  "name" : "40",
  "type" : "string"
}, {
  "name" : "41",
  "type" : "string"
}, {
  "name" : "42",
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
  "name" : "58",
  "type" : "string"
}, {
  "name" : "59",
  "type" : "string"
}, {
  "name" : "60",
  "type" : "string"
}, {
  "name" : "61",
  "type" : "string"
}, {
  "name" : "62",
  "type" : "string"
}, {
  "name" : "63",
  "type" : "string"
}, {
  "name" : "64",
  "type" : "string"
}, {
  "name" : "65",
  "type" : "string"
}, {
  "name" : "66",
  "type" : "string"
}, {
  "name" : "67",
  "type" : "string"
}, {
  "name" : "68",
  "type" : "string"
}, {
  "name" : "69",
  "type" : "string"
}, {
  "name" : "70",
  "type" : "string"
}, {
  "name" : "71",
  "type" : "string"
}, {
  "name" : "72",
  "type" : "string"
}, {
  "name" : "73",
  "type" : "string"
}, {
  "name" : "74",
  "type" : "string"
}, {
  "name" : "75",
  "type" : "string"
} ],
        data: []
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:22px'>指标名称</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>统计核算单价</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>总收入</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>项目</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>计算单位</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>代码</div>",
            "dataIndex" : "代码",
            "width" : 300
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>编号</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>A</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>B</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>--</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
            "dataIndex" : "--",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>农作物总播种面积</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>－－</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>1</div>",
            "dataIndex" : "1",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>种值业总收入</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>－－</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>－</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>2</div>",
            "dataIndex" : "2",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>一、全年粮食</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
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
        "text" : "<div style='white-space:pre-line;height:92px'>单产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>4</div>",
            "dataIndex" : "4",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>总产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>5</div>",
            "dataIndex" : "5",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>（一）夏收粮食</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
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
        "text" : "<div style='white-space:pre-line;height:92px'>单产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>7</div>",
            "dataIndex" : "7",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>总产</div>",
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
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>1、小麦</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'> 元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
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
        "text" : "<div style='white-space:pre-line;height:92px'>单产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>10</div>",
            "dataIndex" : "10",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>产量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
            "dataIndex" : "11",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>2、蚕豌豆</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'> 万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
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
        "text" : "<div style='white-space:pre-line;height:92px'>单产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
            "dataIndex" : "13",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>产量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
            "dataIndex" : "14",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>3、杂粮</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>     元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>15</div>",
            "dataIndex" : "15",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>单产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
            "dataIndex" : "16",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>产量</div>",
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
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>其中： 大麦</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:57px'>面积</div>",
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
          "text" : "<div style='white-space:pre-line;height:57px'>单产</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
            "columns" : [ {
              "text" : "<div style='white-space:pre-line;height:22px'>19</div>",
              "dataIndex" : "19",
              "align" : "center",
              "width" : 100
            } ]
          } ]
        }, {
          "text" : "<div style='white-space:pre-line;height:57px'>产量</div>",
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
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>燕麦</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:57px'>面积</div>",
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
          "text" : "<div style='white-space:pre-line;height:57px'>产量</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
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
    "text" : "<div style='white-space:pre-line;height:22px'>乔麦</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:57px'>面积</div>",
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
          "text" : "<div style='white-space:pre-line;height:57px'>产量</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
              "text" : "<div style='white-space:pre-line;height:22px'>24</div>",
              "dataIndex" : "24",
              "align" : "center",
              "width" : 100
            } ]
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>4、马铃薯</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
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
        "text" : "<div style='white-space:pre-line;height:92px'>单产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>26</div>",
            "dataIndex" : "26",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>产量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>27</div>",
            "dataIndex" : "27",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>（二）秋收粮食</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:127px'>面积</div>",
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
      "text" : "<div style='white-space:pre-line;height:127px'>单产</div>",
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
      "text" : "<div style='white-space:pre-line;height:127px'>总产</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
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
  "text" : "<div style='white-space:pre-line;height:22px'>1、稻谷(中稻)</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>31</div>",
            "dataIndex" : "31",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>单产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>32</div>",
            "dataIndex" : "32",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>产量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>33</div>",
            "dataIndex" : "33",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>2、玉米</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>34</div>",
            "dataIndex" : "34",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>单产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>35</div>",
            "dataIndex" : "35",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>产量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>36</div>",
            "dataIndex" : "36",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>其中：杂交玉米</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'> 万元</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:57px'>面积</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
            "columns" : [ {
              "text" : "<div style='white-space:pre-line;height:22px'>37</div>",
              "dataIndex" : "37",
              "align" : "center",
              "width" : 100
            } ]
          } ]
        }, {
          "text" : "<div style='white-space:pre-line;height:57px'>单产</div>",
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
          "text" : "<div style='white-space:pre-line;height:57px'>产量</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
              "text" : "<div style='white-space:pre-line;height:22px'>39</div>",
              "dataIndex" : "39",
              "align" : "center",
              "width" : 100
            } ]
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>3、粟谷</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>40</div>",
            "dataIndex" : "40",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>单产</div>",
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
        "text" : "<div style='white-space:pre-line;height:92px'>产量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>42</div>",
            "dataIndex" : "42",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>4、高梁</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>40</div>",
            "dataIndex" : "40",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>单产</div>",
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
        "text" : "<div style='white-space:pre-line;height:92px'>产量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>42</div>",
            "dataIndex" : "42",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>5、黄豆</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>49</div>",
            "dataIndex" : "49",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>单产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>50</div>",
            "dataIndex" : "50",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>产量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>51</div>",
            "dataIndex" : "51",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>6、杂豆</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>52</div>",
            "dataIndex" : "52",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>单产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>53</div>",
            "dataIndex" : "53",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>产量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>54</div>",
            "dataIndex" : "54",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>其中：绿豆</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'> 元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:57px'>面积</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
            "columns" : [ {
              "text" : "<div style='white-space:pre-line;height:22px'>58</div>",
              "dataIndex" : "58",
              "align" : "center",
              "width" : 100
            } ]
          } ]
        }, {
          "text" : "<div style='white-space:pre-line;height:57px'>单产</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
            "columns" : [ {
              "text" : "<div style='white-space:pre-line;height:22px'>59</div>",
              "dataIndex" : "59",
              "align" : "center",
              "width" : 100
            } ]
          } ]
        }, {
          "text" : "<div style='white-space:pre-line;height:57px'>产量0</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
              "text" : "<div style='white-space:pre-line;height:22px'>60</div>",
              "dataIndex" : "60",
              "align" : "center",
              "width" : 100
            } ]
          } ]
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>红小豆</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:57px'>面积</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
            "columns" : [ {
              "text" : "<div style='white-space:pre-line;height:22px'>61</div>",
              "dataIndex" : "61",
              "align" : "center",
              "width" : 100
            } ]
          } ]
        }, {
          "text" : "<div style='white-space:pre-line;height:57px'>单产</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
            "columns" : [ {
              "text" : "<div style='white-space:pre-line;height:22px'>62</div>",
              "dataIndex" : "62",
              "align" : "center",
              "width" : 100
            } ]
          } ]
        }, {
          "text" : "<div style='white-space:pre-line;height:57px'>产量</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
              "text" : "<div style='white-space:pre-line;height:22px'>63</div>",
              "dataIndex" : "63",
              "align" : "center",
              "width" : 100
            } ]
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>7、薯类</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>64</div>",
            "dataIndex" : "64",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>单  产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公  斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>65</div>",
            "dataIndex" : "65",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>产  量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>66</div>",
            "dataIndex" : "66",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>（1）、红薯</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>67</div>",
            "dataIndex" : "67",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>单  产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公  斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>68</div>",
            "dataIndex" : "68",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>产  量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>69</div>",
            "dataIndex" : "69",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>（2）、马铃薯</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>70</div>",
            "dataIndex" : "70",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>单  产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公  斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>71</div>",
            "dataIndex" : "71",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>产  量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>72</div>",
            "dataIndex" : "72",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>8、其实杂粮</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:92px'>面积</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>73</div>",
            "dataIndex" : "73",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>单  产</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>公  斤</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>74</div>",
            "dataIndex" : "74",
            "align" : "center",
            "width" : 100
          } ]
        } ]
      }, {
        "text" : "<div style='white-space:pre-line;height:92px'>产  量</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
          "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>75</div>",
            "dataIndex" : "75",
            "align" : "center",
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