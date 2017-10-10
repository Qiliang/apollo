Ext.define('Kits.view.liShiShuju.神农架2016年住户调查资料(二季度)', {
    extend: 'Kits.view.liShiShuju.Base',
    title: '神农架2016年住户调查资料(二季度)',
    headerItems: [
        {
            html: ''
        },
        {
            html: '神农架2016年住户调查资料(二季度)',
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
        'col5'],
        data: [
        ['第三部分 可支配收入（不含自产自用）','元','1100.0','4794.868598335485','6788.704850753875','2401.1937075584337'],
        [' 一、工资性收入','元','1101.0','2698.4375398285483','4021.3818169837355','1110.193523158388'],
        [' 二、经营净收入','元','1120.0','1070.6786613707234','1262.846099764258','839.974474128859'],
        ['  （一）第一产业经营净收入','元','1121.0','197.7358580197211','180.14752664687558','218.85130675668796'],
        ['  （二）第二产业经营净收入','元','1127.0','224.06196854147137','384.4359589550158','31.52700308430506'],
        ['  （三）第三产业经营净收入','元','1128.0','648.8808348095308','698.2626141623666','589.5961642878658'],
        [' 三、财产净收入（成本法）','元','1150.0','234.8144629692321','381.3482553754417','58.8951721510221'],
        [' 四、转移净收入','元','1170.0','790.9379341669809','1123.1286786304408','392.13053812016517'],
        [' 一、生活消费支出','元','2001.0','2895.841618413609','3112.154122778539','2636.1503776552963'],
        ['  （一）食品烟酒','元','2002.0','888.6391059360959','1083.438732923822','654.7748779747081'],
        ['  （二）衣着','元','2030.0','157.5750542231197','204.7187944124991','100.97723330790723'],
        ['  （三）居住','元','2035.0','968.9034536093163','974.4198162895867','962.2808541756035'],
        ['  （四）生活用品及服务','元','2040.0','179.67379089283395','205.5298653229292','148.6326078155819'],
        ['  （五）交通通信','元','2047.0','359.95998120639746','412.24212676865784','297.19331272169165'],
        ['  （六）教育文化娱乐','元','2050.0','208.85791678864337','104.20479906499315','334.49789340798213'],
        ['  （七）医疗保健','元','2055.0','126.5050436517214','119.42058519242828','135.01020063650105'],
        ['  （八）其他用品和服务','元','2060.0','5.7272721054793765','8.179402803622267','2.78339761532062'],
        [' 二、生产经营现金费用支出','元','2065.0','224.41510764164647','74.84741721105893','403.9767063541599']],
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:22px'>指 标 名 称</div>",
  "width" : 120,
  "dataIndex" : "col0"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>单位</div>",
  "width" : 60,
  "dataIndex" : "col1"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>代码</div>",
  "width" : 60,
  "dataIndex" : "col2"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>总计</div>",
  "width" : 60,
  "dataIndex" : "col3"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>城镇住户(U+UR)</div>",
  "width" : 60,
  "dataIndex" : "col4"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>农村住户(R)</div>",
  "width" : 60,
  "dataIndex" : "col5"
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