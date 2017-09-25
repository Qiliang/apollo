Ext.define('Kits.view.liShiShuju.2016年10月(E41002)Y0101 限上法人消费品零售额增速（可比口径）', {
    extend: 'Kits.view.liShiShuju.Base',
    title: '2016年10月(E41002)Y0101 限上法人消费品零售额增速（可比口径）',
    headerItems: [
        {
            html: ''
        },
        {
            html: '2016年10月(E41002)Y0101 限上法人消费品零售额增速（可比口径）',
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
        ['社会消费品零售总额','1437.3','12723.3','1442.9','12567.4','-0.4','1.2'],
        ['  城镇','1437.3','12723.3','1442.9','12567.4','-0.4','1.2'],
        ['    餐饮收入','261.9','1806.0','299.1','1586.2','-12.4','13.9'],
        ['    商品零售','1175.4','10917.3','1143.8','10981.2','2.8','-0.6']],
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