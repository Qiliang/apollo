Ext.define('Kits.view.liShiShuju.2016年11月(F20003)规模以上服务业企业分行业中类汇总表', {
    extend: 'Kits.view.liShiShuju.Base',
    title: '2016年11月(F20003)规模以上服务业企业分行业中类汇总表',
    headerItems: [
        {
            html: ''
        },
        {
            html: '2016年11月(F20003)规模以上服务业企业分行业中类汇总表',
        },
        {
            html: ''
        }
    ],
    store: Ext.create('Ext.data.ArrayStore', {
        fields: [
        'col0',
        'col1',
        'col2',
        'col3',
        'col4',
        'col5',
        'col6',
        'col7',
        'col8',
        'col9',
        'col10',
        'col11',
        'col12',
        'col13',
        'col14',
        'col15',
        'col16',
        'col17',
        'col18',
        'col19',
        'col20',
        'col21',
        'col22',
        'col23',
        'col24',
        'col25',
        'col26',
        'col27',
        'col28',
        'col29',
        'col30',
        'col31',
        'col32',
        'col33',
        'col34',
        'col35',
        'col36',
        'col37',
        'col38',
        'col39',
        'col40',
        'col41'],
        data: [
        ['总计','','11.0','2.03','1.65','23.03','0.9','0.72','25.0','0.02','0.04','-50.0','0.44','0.75','-41.33','0.25','0.13','92.31','','','','0.07','0.09','-22.22','','','','0.44','0.04','1000.0','0.46','0.09','411.11','0.31','0.26','19.23','0.04','0.0','','538.0','508.0','5.91'],
        ['公路旅客运输','542','2.0','0.25','0.08','212.5','0.15','0.06','150.0','0.0','0.0','','','','','0.13','0.02','550.0','0.0','0.0','','0.0','','','','','','-0.03','0.0','','-0.03','0.0','','0.04','0.01','300.0','0.0','0.0','','107.0','22.0','386.36'],
        ['邮政基本服务','601','1.0','0.08','0.07','14.29','0.09','0.09','','0.0','0.0','','','','','0.02','0.03','-33.33','','','','0.0','','','','','','-0.03','-0.02','','-0.02','-0.02','','0.03','0.04','-25.0','0.0','0.0','','49.0','50.0','-2.0'],
        ['电信','631','1.0','0.2','0.17','17.65','0.19','0.16','18.75','0.0','0.0','','0.02','0.02','','0.02','0.02','','0.0','0.0','','0.0','0.0','','','','','-0.04','-0.03','','-0.04','-0.03','','0.05','0.04','25.0','0.0','0.0','','69.0','69.0',''],
        ['旅行社及相关服务','727','2.0','0.39','0.25','56.0','0.3','0.24','25.0','0.0','0.0','','0.01','0.01','','0.04','0.04','','','','','0.03','0.02','50.0','','','','0.02','-0.06','','0.03','0.0','','0.05','0.04','25.0','0.01','','','126.0','126.0',''],
        ['公园和游览景区管理','785','4.0','0.92','0.93','-1.08','0.0','0.01','','0.01','0.03','-66.67','0.41','0.71','-42.25','','','','','','','0.0','0.03','','','','','0.5','0.15','233.33','0.5','0.14','257.14','0.11','0.1','10.0','0.03','0.0','','165.0','217.0','-23.96'],
        ['其他体育','889','1.0','0.19','0.15','26.67','0.17','0.16','6.25','0.01','0.01','','0.0','0.01','','0.04','0.02','100.0','0.0','0.0','','0.04','0.04','','','','','0.02','0.0','','0.02','0.0','','0.03','0.03','','','','','22.0','24.0','-8.33']],
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:57px'>指标</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>甲</div>",
    "width" : 120,
    "dataIndex" : "col0"
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:57px'>代码</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>乙</div>",
    "width" : 60,
    "dataIndex" : "col1"
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:57px'>单位数</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1</div>",
    "width" : 60,
    "dataIndex" : "col2"
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>营业收入</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>2</div>",
      "width" : 60,
      "dataIndex" : "col3"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>上年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>3</div>",
      "width" : 60,
      "dataIndex" : "col4"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>4</div>",
      "width" : 60,
      "dataIndex" : "col5"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>营业成本</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>5</div>",
      "width" : 60,
      "dataIndex" : "col6"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>上年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>6</div>",
      "width" : 60,
      "dataIndex" : "col7"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>7</div>",
      "width" : 60,
      "dataIndex" : "col8"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>营业税金及附加</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>8</div>",
      "width" : 60,
      "dataIndex" : "col9"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>上年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>9</div>",
      "width" : 60,
      "dataIndex" : "col10"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>10</div>",
      "width" : 60,
      "dataIndex" : "col11"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>销售费用</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
      "width" : 60,
      "dataIndex" : "col12"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>上年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
      "width" : 60,
      "dataIndex" : "col13"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
      "width" : 60,
      "dataIndex" : "col14"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>管理费用</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
      "width" : 60,
      "dataIndex" : "col15"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>上年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>15</div>",
      "width" : 60,
      "dataIndex" : "col16"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
      "width" : 60,
      "dataIndex" : "col17"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>其中：税金</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>17</div>",
      "width" : 60,
      "dataIndex" : "col18"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>上年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>18</div>",
      "width" : 60,
      "dataIndex" : "col19"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>19</div>",
      "width" : 60,
      "dataIndex" : "col20"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>财务费用</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>20</div>",
      "width" : 60,
      "dataIndex" : "col21"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>上年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>21</div>",
      "width" : 60,
      "dataIndex" : "col22"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>22</div>",
      "width" : 60,
      "dataIndex" : "col23"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>投资收益</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>23</div>",
      "width" : 60,
      "dataIndex" : "col24"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>上年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>24</div>",
      "width" : 60,
      "dataIndex" : "col25"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>25</div>",
      "width" : 60,
      "dataIndex" : "col26"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>营业利润</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>26</div>",
      "width" : 60,
      "dataIndex" : "col27"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>上年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>27</div>",
      "width" : 60,
      "dataIndex" : "col28"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>28</div>",
      "width" : 60,
      "dataIndex" : "col29"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>利润总额</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>29</div>",
      "width" : 60,
      "dataIndex" : "col30"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>上年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>30</div>",
      "width" : 60,
      "dataIndex" : "col31"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>31</div>",
      "width" : 60,
      "dataIndex" : "col32"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>应付职工薪酬（本年贷方累计发生额）</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>32</div>",
      "width" : 60,
      "dataIndex" : "col33"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>上年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>33</div>",
      "width" : 60,
      "dataIndex" : "col34"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>34</div>",
      "width" : 60,
      "dataIndex" : "col35"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>应交增值税</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>35</div>",
      "width" : 60,
      "dataIndex" : "col36"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>上年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>36</div>",
      "width" : 60,
      "dataIndex" : "col37"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>37</div>",
      "width" : 60,
      "dataIndex" : "col38"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>从事服务业活动的从业人员平均人数</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>38</div>",
      "width" : 60,
      "dataIndex" : "col39"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>去年同期</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>39</div>",
      "width" : 60,
      "dataIndex" : "col40"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>增长速度(%)</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>40</div>",
      "width" : 60,
      "dataIndex" : "col41"
    } ]
  } ]
} ],
    footerItems: [
        {
            html: ''
        },
        {
            html: '',
        },
        {
            html: ''
        },
        {
            colspan: 3,
            html: ''
        }
    ]
});