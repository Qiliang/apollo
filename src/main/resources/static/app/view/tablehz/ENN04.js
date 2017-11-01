Ext.define('Kits.view.tablehz.ENN04', {
    extend: 'Kits.view.tablehz.Base',
    title: '劳动力转移情况表（一）',
    xtype: 'tablehzENN04',
    tableid: '923004098938232832',
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
  "name" : "53",
  "type" : "string"
}, {
  "name" : "54",
  "type" : "string"
}, {
  "name" : "55",
  "type" : "string"
}, {
  "name" : "56",
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
  "text" : "<div style='white-space:pre-line;height:22px'>一、 农村人口</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'></div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>1</div>",
        "dataIndex" : "1",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>其中：男</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>2</div>",
        "dataIndex" : "2",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>农村劳动力资源</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>3</div>",
      "dataIndex" : "3",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>农村从业人数</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>4</div>",
      "dataIndex" : "4",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>在本乡镇从业人员</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>5</div>",
      "dataIndex" : "5",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>1.从事农林牧渔业人员</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>6</div>",
      "dataIndex" : "6",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>2.从事二、三产业人员</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>7</div>",
      "dataIndex" : "7",
      "align" : "center",
      "width" : 100
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>1、外出从业</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>总量</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>8</div>",
        "dataIndex" : "8",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>男</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>9</div>",
        "dataIndex" : "9",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>①.外出从业人员文化程度</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>小学及以下</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>10</div>",
        "dataIndex" : "10",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>初中</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
        "dataIndex" : "11",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>高中及以上</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
        "dataIndex" : "12",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>②按年龄状况分</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>20岁以下</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>21岁—49岁</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
        "dataIndex" : "14",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>50岁以上</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>15</div>",
        "dataIndex" : "15",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>2.外出渠道</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>①自发</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'> ②政府有关部门组织</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>17</div>",
        "dataIndex" : "17",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>③中介组织介绍</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>④企业招收</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>19</div>",
        "dataIndex" : "19",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>3、外出从业时间</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>1个月-3个月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>20</div>",
        "dataIndex" : "20",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>3个月个月</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>6个月以上</div>",
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
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>4、外出从业地点</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>①内乡外</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>②省内外</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>③省外</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>④港澳台</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>26</div>",
        "dataIndex" : "26",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>⑤境外</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>27</div>",
        "dataIndex" : "27",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>5.外出从业人员从事行业</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>①第一产业</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>28</div>",
        "dataIndex" : "28",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>②第二产业</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>29</div>",
        "dataIndex" : "29",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>③第三产业</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>30</div>",
        "dataIndex" : "30",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>6.外出从业形式</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>①务工</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>31</div>",
        "dataIndex" : "31",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>②经商</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>③其他</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>33</div>",
        "dataIndex" : "33",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>7.外出从业人员职业技能培训情况</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>①参加过职业技能培训</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:57px'></div>",
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
      "text" : "<div style='white-space:pre-line;height:57px'>其中：参加过政府举办的技能培训</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
        "columns" : [ {
          "text" : "<div style='white-space:pre-line;height:22px'>35</div>",
          "dataIndex" : "35",
          "align" : "center",
          "width" : 100
        } ]
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>②持有职业技术资格证书</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>36</div>",
        "dataIndex" : "36",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>8、劳务收入</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>劳务经济总收入（万元）</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>37</div>",
        "dataIndex" : "37",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>其中：月收入500元以下</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>38</div>",
        "dataIndex" : "38",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>501-1000元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>39</div>",
        "dataIndex" : "39",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>1001-2000元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>40</div>",
        "dataIndex" : "40",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>  2001-3000元</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>41</div>",
        "dataIndex" : "41",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>3000元以上</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>42</div>",
        "dataIndex" : "42",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>9.外出从业人员从业环境</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>①雇主拖欠工资人数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>43</div>",
        "dataIndex" : "43",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>②从事高危、有害工作人数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>44</div>",
        "dataIndex" : "44",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>③致伤致残人数</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>④享受劳保补贴人数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>46</div>",
        "dataIndex" : "46",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>10、外出人员社会保障</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>与雇主签定劳动合同</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>47</div>",
        "dataIndex" : "47",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>参与养老保险人数</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>参与医疗保险人数</div>",
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
    "text" : "<div style='white-space:pre-line;height:92px'>参与失业保险人数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>50</div>",
        "dataIndex" : "50",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>参与生育保险人数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>51</div>",
        "dataIndex" : "51",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>参与工伤保险人数</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>52</div>",
        "dataIndex" : "52",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>11、返回情况</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:92px'>①全年外出返乡人员</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>53</div>",
        "dataIndex" : "53",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>②返乡人员再就业情况</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>54</div>",
        "dataIndex" : "54",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>本地从事二、三产业</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>55</div>",
        "dataIndex" : "55",
        "align" : "center",
        "width" : 100
      } ]
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:92px'>再次外出从业务</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
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