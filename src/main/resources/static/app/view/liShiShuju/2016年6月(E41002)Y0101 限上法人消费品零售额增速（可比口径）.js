Ext.define('Kits.view.liShiShuju.2016年6月(E41002)Y0101 限上法人消费品零售额增速（可比口径）', {
    extend: 'Kits.view.liShiShuju.Base',
    title: '2016年6月(E41002)Y0101 限上法人消费品零售额增速（可比口径）',
    headerItems: [
        {
            html: ''
        },
        {
            html: '2016年6月(E41002)Y0101 限上法人消费品零售额增速（可比口径）',
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
        ['社会消费品零售总额','1181.7','6248.9','999.7','6694.3','18.2','-6.7'],
        ['  城镇','1181.7','6248.9','999.7','6694.3','18.2','-6.7'],
        ['    餐饮收入','116.4','595.6','102.6','495.3','13.5','20.3'],
        ['    商品零售','1065.3','5653.3','897.1','6199.0','18.7','-8.8']],
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