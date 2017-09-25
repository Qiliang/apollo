Ext.define('Kits.view.liShiShuju.2016年3月(E41002)Y0101 限上法人消费品零售额增速（可比口径）', {
    extend: 'Kits.view.liShiShuju.Base',
    title: '2016年3月(E41002)Y0101 限上法人消费品零售额增速（可比口径）',
    headerItems: [
        {
            html: ''
        },
        {
            html: '2016年3月(E41002)Y0101 限上法人消费品零售额增速（可比口径）',
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
        'col6'],
        data: [
        ['社会消费品零售总额','764.4','2570.3','892.1','3523.5','-14.3','-27.1'],
        ['  城镇','764.4','2570.3','892.1','3523.5','-14.3','-27.1'],
        ['    餐饮收入','43.1','199.3','42.4','205.4','1.7','-3.0'],
        ['    商品零售','721.3','2371.0','849.7','3318.1','-15.1','-28.5']],
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:57px'>指标名称</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>甲</div>",
    "width" : 120,
    "dataIndex" : "col0"
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>本年</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>1</div>",
      "width" : 60,
      "dataIndex" : "col1"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>2</div>",
      "width" : 60,
      "dataIndex" : "col2"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>去年同期</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>3</div>",
      "width" : 60,
      "dataIndex" : "col3"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>4</div>",
      "width" : 60,
      "dataIndex" : "col4"
    } ]
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>增长速度（%）</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>5</div>",
      "width" : 60,
      "dataIndex" : "col5"
    } ]
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>1-本月</div>",
    "columns" : [ {
      "text" : "<div style='white-space:pre-line;height:22px'>6</div>",
      "width" : 60,
      "dataIndex" : "col6"
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