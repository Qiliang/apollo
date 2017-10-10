Ext.define('Kits.view.liShiShuju.E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160004_20170523', {
    extend: 'Kits.view.liShiShuju.Base',
    title: 'E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160004_20170523',
    headerItems: [
        {
            html: ''
        },
        {
            html: 'E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160004_20170523',
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
        ['社会消费品零售总额','1196.4','3766.7','1010.1','4533.6','18.4','-16.9'],
        ['  城镇','1196.4','3766.7','1010.1','4533.6','18.4','-16.9'],
        ['    餐饮收入','164.6','363.9','79.0','284.4','108.4','28.0'],
        ['    商品零售','1031.8','3402.8','931.1','4249.2','10.8','-19.9']],
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