Ext.define('Kits.view.liShiShuju.2016年二季度(I41000)各行业分指标从业人员和工资情况（四上单位）', {
    extend: 'Kits.view.liShiShuju.Base',
    title: '2016年二季度(I41000)各行业分指标从业人员和工资情况（四上单位）',
    headerItems: [
        {
            html: ''
        },
        {
            html: '2016年二季度(I41000)各行业分指标从业人员和工资情况（四上单位）',
        },
        {
            html: ''
        }
    ],
    store: Ext.create('Ext.data.ArrayStore', {
        fields: [
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
        'col23'],
        data: [
        ['总计','001','49.0','5359.0','3168.0','149.0','3317.0','2042.0','5196.0','3119.0','148.0','3267.0','1929.0','81385.0','55814.0','2428.0','58242.0','23143.0','15663.0','17895.0','16405.0','17827.0','11997.0'],
        ['  1.企业','002','49.0','5359.0','3168.0','149.0','3317.0','2042.0','5196.0','3119.0','148.0','3267.0','1929.0','81385.0','55814.0','2428.0','58242.0','23143.0','15663.0','17895.0','16405.0','17827.0','11997.0'],
        ['  （二）采矿业','013','3.0','368.0','298.0','70.0','368.0','','369.0','301.0','68.0','369.0','','4443.0','3523.0','920.0','4443.0','','12041.0','11704.0','13529.0','12041.0',''],
        ['    非金属矿采选业','018','3.0','368.0','298.0','70.0','368.0','','369.0','301.0','68.0','369.0','','4443.0','3523.0','920.0','4443.0','','12041.0','11704.0','13529.0','12041.0',''],
        ['  （三）制造业','021','3.0','190.0','116.0','','116.0','74.0','191.0','116.0','','116.0','75.0','2572.0','2008.0','','2008.0','564.0','13466.0','17310.0','','17310.0','7520.0'],
        ['    化学原料和化学制品制造业','035','1.0','130.0','56.0','','56.0','74.0','131.0','56.0','','56.0','75.0','1548.0','984.0','','984.0','564.0','11817.0','17571.0','','17571.0','7520.0'],
        ['    医药制造业 ','036','1.0','35.0','35.0','','35.0','','35.0','35.0','','35.0','','413.0','413.0','','413.0','','11800.0','11800.0','','11800.0',''],
        ['    非金属矿物制品业','039','1.0','25.0','25.0','','25.0','','25.0','25.0','','25.0','','611.0','611.0','','611.0','','24440.0','24440.0','','24440.0',''],
        ['  （四）电力、热力、燃气及水生产和供应业','053','4.0','671.0','634.0','36.0','670.0','1.0','675.0','638.0','36.0','674.0','1.0','21832.0','21390.0','433.0','21823.0','9.0','32344.0','33527.0','12028.0','32378.0','9000.0'],
        ['    电力、热力生产和供应业','054','4.0','671.0','634.0','36.0','670.0','1.0','675.0','638.0','36.0','674.0','1.0','21832.0','21390.0','433.0','21823.0','9.0','32344.0','33527.0','12028.0','32378.0','9000.0'],
        ['  （五）建筑业','057','13.0','2327.0','393.0','5.0','398.0','1929.0','2188.0','380.0','5.0','385.0','1803.0','25506.0','5562.0','84.0','5646.0','19860.0','11657.0','14637.0','16800.0','14665.0','11015.0'],
        ['    房屋建筑业','058','12.0','2161.0','373.0','5.0','378.0','1783.0','2024.0','360.0','5.0','365.0','1659.0','23636.0','5322.0','84.0','5406.0','18230.0','11678.0','14783.0','16800.0','14811.0','10989.0'],
        ['    土木工程建筑业','059','1.0','166.0','20.0','','20.0','146.0','164.0','20.0','','20.0','144.0','1870.0','240.0','','240.0','1630.0','11402.0','12000.0','','12000.0','11319.0'],
        ['  （六）批发和零售业','062','8.0','361.0','320.0','25.0','345.0','16.0','343.0','305.0','26.0','331.0','12.0','5454.0','4542.0','725.0','5267.0','187.0','15901.0','14892.0','27885.0','15912.0','15583.0'],
        ['    批发业','063','2.0','76.0','35.0','25.0','60.0','16.0','75.0','37.0','26.0','63.0','12.0','2467.0','1555.0','725.0','2280.0','187.0','32893.0','42027.0','27885.0','36190.0','15583.0'],
        ['    零售业','064','6.0','285.0','285.0','','285.0','','268.0','268.0','','268.0','','2987.0','2987.0','','2987.0','','11146.0','11146.0','','11146.0',''],
        ['  （七）交通运输、仓储和邮政业','065','2.0','70.0','61.0','9.0','70.0','','70.0','61.0','9.0','70.0','','1842.0','1659.0','183.0','1842.0','','26314.0','27197.0','20333.0','26314.0',''],
        ['    道路运输业','067','1.0','23.0','23.0','','23.0','','23.0','23.0','','23.0','','326.0','326.0','','326.0','','14174.0','14174.0','','14174.0',''],
        ['    邮政业','073','1.0','47.0','38.0','9.0','47.0','','47.0','38.0','9.0','47.0','','1516.0','1333.0','183.0','1516.0','','32255.0','35079.0','20333.0','32255.0',''],
        ['  （八）住宿和餐饮业','074','9.0','994.0','994.0','','994.0','','942.0','942.0','','942.0','','10903.0','10903.0','','10903.0','','11574.0','11574.0','','11574.0',''],
        ['    住宿业','075','7.0','453.0','453.0','','453.0','','403.0','403.0','','403.0','','4429.0','4429.0','','4429.0','','10990.0','10990.0','','10990.0',''],
        ['    餐饮业','076','2.0','541.0','541.0','','541.0','','539.0','539.0','','539.0','','6474.0','6474.0','','6474.0','','12011.0','12011.0','','12011.0',''],
        ['  （九）信息传输、软件和信息技术服务业','077','1.0','73.0','47.0','4.0','51.0','22.0','73.0','47.0','4.0','51.0','22.0','1503.0','970.0','83.0','1053.0','450.0','20589.0','20638.0','20750.0','20647.0','20455.0'],
        ['    电信、广播电视和卫星传输服务','078','1.0','73.0','47.0','4.0','51.0','22.0','73.0','47.0','4.0','51.0','22.0','1503.0','970.0','83.0','1053.0','450.0','20589.0','20638.0','20750.0','20647.0','20455.0'],
        ['  （十二）租赁和商务服务业','090','1.0','105.0','105.0','','105.0','','110.0','110.0','','110.0','','1887.0','1887.0','','1887.0','','17155.0','17155.0','','17155.0',''],
        ['    商务服务业','092','1.0','105.0','105.0','','105.0','','110.0','110.0','','110.0','','1887.0','1887.0','','1887.0','','17155.0','17155.0','','17155.0',''],
        ['  （十四）水利、环境和公共设施管理业','097','4.0','176.0','176.0','','176.0','','195.0','195.0','','195.0','','2969.0','2969.0','','2969.0','','15226.0','15226.0','','15226.0',''],
        ['    公共设施管理业','100','4.0','176.0','176.0','','176.0','','195.0','195.0','','195.0','','2969.0','2969.0','','2969.0','','15226.0','15226.0','','15226.0',''],
        ['  （十八）文化、体育和娱乐业','112','1.0','24.0','24.0','','24.0','','40.0','24.0','','24.0','16.0','2474.0','401.0','','401.0','2073.0','61850.0','16708.0','','16708.0','129563.0'],
        ['    体育','116','1.0','24.0','24.0','','24.0','','40.0','24.0','','24.0','16.0','2474.0','401.0','','401.0','2073.0','61850.0','16708.0','','16708.0','129563.0']],
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:92px'>指标名称</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>甲</div>",
    "width" : 120,
    "dataIndex" : "col1"
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:92px'>代码</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>乙</div>",
    "width" : 60,
    "dataIndex" : "col2"
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:92px'>单位数\n（个）</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>1</div>",
    "width" : 60,
    "dataIndex" : "col3"
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>期末人数（人）</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:57px'>单位从业人员</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>2</div>",
      "width" : 60,
      "dataIndex" : "col4"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'></div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>`1.在岗职工</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>3</div>",
        "width" : 60,
        "dataIndex" : "col5"
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>2.劳务派遣人员</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>4</div>",
        "width" : 60,
        "dataIndex" : "col6"
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>在岗劳务合计</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>5</div>",
        "width" : 60,
        "dataIndex" : "col7"
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>3.其他从业人员</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>6</div>",
        "width" : 60,
        "dataIndex" : "col8"
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>平均人数(人)</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:57px'>单位从业人员</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>7</div>",
      "width" : 60,
      "dataIndex" : "col9"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'></div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>1.在岗职工</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>8</div>",
        "width" : 60,
        "dataIndex" : "col10"
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>2.劳务派遣人员</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>9</div>",
        "width" : 60,
        "dataIndex" : "col11"
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>在岗劳务合计</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>10</div>",
        "width" : 60,
        "dataIndex" : "col12"
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>3.其他从业人员</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
        "width" : 60,
        "dataIndex" : "col13"
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>工资总额(千元)</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:57px'>从业人员工资总额</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
      "width" : 60,
      "dataIndex" : "col14"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'></div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>1.在岗职工工资总额</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
        "width" : 60,
        "dataIndex" : "col15"
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>2.劳务派遣人员工资总额</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
        "width" : 60,
        "dataIndex" : "col16"
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>在岗劳务合计</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>15</div>",
        "width" : 60,
        "dataIndex" : "col17"
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>3.其他从业人员工资总额</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
        "width" : 60,
        "dataIndex" : "col18"
      } ]
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>平均工资(元)</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:57px'>从业人员平均工资</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>17</div>",
      "width" : 60,
      "dataIndex" : "col19"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'></div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>1.在岗职工平均工资</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>18</div>",
        "width" : 60,
        "dataIndex" : "col20"
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>2.劳务派遣人员平均工资</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>19</div>",
        "width" : 60,
        "dataIndex" : "col21"
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>在岗劳务合计</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>20</div>",
        "width" : 60,
        "dataIndex" : "col22"
      } ]
    }, {
      "text" : "<div style='white-space:pre-line;height:22px'>3.其他从业人员平均工资</div>",
      "columns" : [ {
        "text" : "<div style='white-space:pre-line;height:22px'>21</div>",
        "width" : 60,
        "dataIndex" : "col23"
      } ]
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