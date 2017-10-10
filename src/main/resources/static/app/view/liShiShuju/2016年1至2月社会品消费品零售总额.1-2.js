Ext.define('Kits.view.liShiShuju.2016年1至2月社会品消费品零售总额.1-2', {
    extend: 'Kits.view.liShiShuju.Base',
    title: '2016年1至2月社会品消费品零售总额.1-2',
    headerItems: [
        {
            html: ''
        },
        {
            html: '2016年1至2月社会品消费品零售总额.1-2',
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
        'col8'],
        data: [
        ['武汉','908.8100989327584','908.8100989327584','8.996839402556063','8.996839402556063','582.94699','582.94699','0.0','7.939459523378758'],
        ['黄石','106.60871636580342','106.60871636580342','12.022737571236334','12.022737571236334','39.992490000000004','39.992490000000004','0.0','18.040436221201503'],
        ['十堰','115.98313974128786','115.98313974128786','10.998454679399458','10.998454679399458','57.67329000000001','57.67329000000001','0.0','12.277716186252746'],
        ['宜昌','201.51863320230922','201.51863320230922','13.187738751339538','13.187738751339538','97.47625','97.47625','0.0','20.187813132648614'],
        ['襄阳','213.27264766419287','213.27264766419287','12.01471818741642','12.01471818741642','103.84063','103.84063','0.0','14.4607900353124'],
        ['鄂州','48.69981853139547','48.69981853139547','13.7666982308086','13.7666982308086','20.66291','20.66291','0.0','44.822712248665795'],
        ['荆门','98.49860720448149','98.49860720448149','11.324716704683397','11.324716704683397','45.41275','45.41275','0.0','6.596669069744564'],
        ['孝感','142.24178147967768','142.24178147967768','9.19333356604453','9.19333356604453','60.818819999999995','60.818819999999995','0.0','15.067308179717045'],
        ['荆州','169.15006145376472','169.15006145376472','9.400041308064601','9.400041308064601','56.52396','56.52396','0.0','9.621216845247702'],
        ['黄冈','158.37941027339232','158.37941027339232','10.019480513072267','10.019480513072267','56.5636','56.5636','0.0','11.61383530108968'],
        ['咸宁','70.8733415682712','70.8733415682712','8.14215989980724','8.14215989980724','38.44663','38.44663','0.0','8.609014647487314'],
        ['随州','70.63384241194817','70.63384241194817','8.17436901218764','8.17436901218764','28.08855','28.08855','0.0','1.770075585991293'],
        ['恩施','81.18199890344702','81.18199890344702','11.393060122488265','11.393060122488265','26.60398','26.60398','0.0','16.586386156314916'],
        ['仙桃','49.09725195517294','49.09725195517294','12.874905327478075','12.874905327478075','20.86128','20.86128','0.0','23.572705888000783'],
        ['潜江','33.525265951432','33.525265951432','10.215635585117312','10.215635585117312','7.8920200000000005','7.8920200000000005','0.0','9.919999090898784'],
        ['天门','46.86077240270693','46.86077240270693','10.759429387851455','10.759429387851455','29.33673','29.33673','0.0','9.99993934261039'],
        ['林区','2.339043197740124','2.339043197740124','5.742296842567924','5.742296842567924','0.18378','0.18378','0.0','-39.747097290804746']],
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:57px'>BLANK</div>",
  "dataIndex" : "col0"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>社零总额</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>2月</div>",
    "width" : 60,
    "dataIndex" : "col1"
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>1-2月</div>",
    "width" : 60,
    "dataIndex" : "col2"
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>本月增速</div>",
    "width" : 60,
    "dataIndex" : "col3"
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>累计增速</div>",
    "width" : 60,
    "dataIndex" : "col4"
  } ]
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>限上</div>",
  "columns" : [ {
    "text" : "<div style='white-space:pre-line;height:22px'>2月</div>",
    "width" : 60,
    "dataIndex" : "col5"
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>1-2月</div>",
    "width" : 60,
    "dataIndex" : "col6"
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>本月增速</div>",
    "width" : 60,
    "dataIndex" : "col7"
  }, {
    "text" : "<div style='white-space:pre-line;height:22px'>累计增速</div>",
    "width" : 60,
    "dataIndex" : "col8"
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