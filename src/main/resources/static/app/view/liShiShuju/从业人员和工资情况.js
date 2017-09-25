Ext.define('Kits.view.liShiShuju.从业人员和工资情况', {
    extend: 'Kits.view.liShiShuju.Base',
    title: '从业人员和工资情况',
    headerItems: [
        {
            html: ''
        },
        {
            html: '从业人员和工资情况',
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
        'col20'],
        data: [
        ['','','','从业人员期末人数','$$','$$','$$','$$','$$','从业人员平均人数','$$','$$','$$','从业人员工资总额','$$','$$','$$','$$','$$','$$','$$'],
        ['','','','','其中：女性','其中：非全日制','在岗职工','劳务派遣人员','其他从业人员','','在岗职工','劳务派遣人员','其他从业人员','','在岗职工','$$','$$','$$','$$','劳务派遣人员','其他从业人员'],
        ['','','','','','','','','','','','','','','','基本工资','绩效工资','工资性津贴和补贴','其他工资','',''],
        ['                     甲','   乙','1.0','2.0','3.0','4.0','5.0','6.0','7.0','8.0','9.0','10.0','11.0','12.0','13.0','14.0','15.0','16.0','17.0','18.0','19.0'],
        ['Ⅳ.企业单位合计','','24.0','586.0','288.0','536.0','26.0','24.0','602.0','548.0','26.0','28.0','22280.0','20676.0','9449.0','5402.0','4415.0','1410.0','581.0','1023.0'],
        ['  其中：国有控股','','5.0','122.0','60.0','122.0','128.0','128.0','4571.0','4571.0','2340.0','779.0','1230.0','222.0'],
        ['  其中：集体控股',''],
        ['按国民经济行业分组(同总计分组)','','','','','','','','','','','','','','','','','','','',''],
        ['(一)农、林、牧、渔业',''],
        ['     1.农    业',''],
        ['     2.林    业',''],
        ['     3.畜 牧 业',''],
        ['     4.渔    业',''],
        ['     5.农、林、牧、渔服务业',''],
        ['(二)采 矿 业',''],
        ['     1.煤炭开采和洗选业',''],
        ['     2.石油和天然气开采业',''],
        ['     3.黑色金属矿采选业',''],
        ['     4.有色金属矿采选业',''],
        ['     5.非金属矿采选业',''],
        ['     6.开采辅助活动',''],
        ['     7.其他采矿业',''],
        ['(三)制 造 业',''],
        ['     1.农副食品加工业',''],
        ['     2.食品制造业',''],
        ['     3.酒、饮料和',''],
        ['     4.烟草制品业',''],
        ['     5.纺织业',''],
        ['     6.纺织服装、服饰业',''],
        ['     7.皮革、毛皮、羽毛及其制品和制鞋业',''],
        ['     8.木材加工和木、竹、藤、棕、草制品','','','','','','','','','','','','','','','','','','','',''],
        ['  业',''],
        ['     9.家具制造业',''],
        ['     10.造纸和纸制品业',''],
        ['     11.印刷和记录媒介复制业',''],
        ['     12.文教、工美、体育和娱乐用品制造业',''],
        ['     13.石油加工、炼焦和核燃料加工业',''],
        ['     14.化学原料和化学制品制造业',''],
        ['     15.医药制造业',''],
        ['     16.化学纤维制造业',''],
        ['     17.橡胶和塑料制品业',''],
        ['     18.非金属矿物制品业',''],
        ['     19.黑色金属冶炼和压延加工业',''],
        ['     20.有色金属冶炼和压延加工业',''],
        ['     21.金属制品业',''],
        ['     22.通用设备制造业',''],
        ['     23.专用设备制造业',''],
        ['     24.汽车制造业',''],
        ['     25.铁路、船舶、航空航天和其他运输设','','','','','','','','','','','','','','','','','','','',''],
        ['  备制造业',''],
        ['     26.电气机械和器材制造业',''],
        ['     27.计算机、通信和其他电子设备制造业',''],
        ['     28.仪器仪表制造业',''],
        ['     29.其他制造业',''],
        ['     30.废弃资源综合利用业',''],
        ['     31.金属制品、机械和设备修理业',''],
        ['(四)电力、热力、燃气及水生产和供应业','','2.0','23.0','15.0','23.0','26.0','26.0','1043.0','1043.0','469.0','245.0','262.0','67.0'],
        ['     1.电力、热力生产和供应业','','1.0','7.0','3.0','7.0','7.0','7.0','287.0','287.0','129.0','126.0','32.0'],
        ['     2.燃气生产和供应业',''],
        ['     3.水的生产和供应业','','1.0','16.0','12.0','16.0','19.0','19.0','756.0','756.0','340.0','119.0','230.0','67.0'],
        ['(五) 建筑业',''],
        ['     1.房屋建筑业',''],
        ['     2.土木工程建筑业',''],
        ['     3.建筑安装业',''],
        ['     4.建筑装饰和其他建筑业',''],
        ['(六)批发和零售业','','1.0','16.0','5.0','16.0','16.0','16.0','962.0','962.0','472.0','490.0'],
        ['     1.批发业','','1.0','16.0','5.0','16.0','16.0','16.0','962.0','962.0','472.0','490.0'],
        ['     2.零售业',''],
        ['(七) 交通运输、仓储和邮政业','','1.0','55.0','22.0','32.0','23.0','54.0','32.0','22.0','1187.0','704.0','338.0','256.0','110.0','483.0'],
        ['     1.铁路运输业',''],
        ['     2.道路运输业',''],
        ['     3.水上运输业',''],
        ['     4.航空运输业',''],
        ['     5.管道运输业',''],
        ['     6.装卸搬运和运输代理业',''],
        ['     7.仓 储 业',''],
        ['     8.邮政业','','1.0','55.0','22.0','32.0','23.0','54.0','32.0','22.0','1187.0','704.0','338.0','256.0','110.0','483.0'],
        ['(八)住宿和餐饮业',''],
        ['     1.住宿业',''],
        ['     2.餐饮业',''],
        ['(九)信息传输、软件和信息技术服务业','','5.0','219.0','115.0','192.0','3.0','24.0','226.0','194.0','4.0','28.0','9043.0','7922.0','4008.0','1772.0','1378.0','764.0','98.0','1023.0'],
        ['     1.电信、广播电视和卫星传输服务','','1.0','47.0','21.0','47.0','47.0','47.0','986.0','986.0','473.0','307.0','206.0'],
        ['     2.互联网和相关服务','','4.0','172.0','94.0','145.0','3.0','24.0','179.0','147.0','4.0','28.0','8057.0','6936.0','3535.0','1465.0','1172.0','764.0','98.0','1023.0'],
        ['     3.软件和信息技术服务业',''],
        ['(十)金融业','','13.0','259.0','125.0','259.0','266.0','266.0','9535.0','9535.0','3892.0','3129.0','1935.0','579.0'],
        ['     1.货币金融服务业','','12.0','234.0','113.0','234.0','239.0','239.0','8855.0','8855.0','3512.0','3129.0','1635.0','579.0'],
        ['     2.资本市场服务业',''],
        ['     3.保险业','','1.0','25.0','12.0','25.0','27.0','27.0','680.0','680.0','380.0','300.0'],
        ['     4.其他金融业',''],
        ['(十一)房地产业',''],
        ['     其中：1.房地产开发经营',''],
        ['           2.物业管理',''],
        ['           3.房地产中介服务',''],
        ['(十二)租赁和商务服务业',''],
        ['      1.租赁业',''],
        ['      2.商务服务业',''],
        ['(十三) 科学研究、技术服务业','','1.0','6.0','3.0','6.0','6.0','6.0','190.0','190.0','100.0','90.0'],
        ['      1.研究和试验发展',''],
        ['      2.专业技术服务业','','1.0','6.0','3.0','6.0','6.0','6.0','190.0','190.0','100.0','90.0'],
        ['      3.科技推广和应用服务业',''],
        ['(十四)水利、环境和公共设施管理业',''],
        ['      1.水利管理业',''],
        ['      2.生态保护和环境治理业',''],
        ['      3.公共设施管理业',''],
        ['(十五)居民服务、修理和其他服务业',''],
        ['      1.居民服务业',''],
        ['      2.机动车、电子产品和日用产品修理业',''],
        ['      3.其他服务业',''],
        ['(十六)教育',''],
        ['        其中:1.初等教育',''],
        ['             2.中等教育',''],
        ['             3.高等教育',''],
        ['(十七)卫生和社会工作',''],
        ['      1.卫生',''],
        ['      2.社会工作',''],
        ['(十八)文化、体育和娱乐业','','1.0','8.0','3.0','8.0','8.0','8.0','320.0','320.0','170.0','150.0'],
        ['      1.新闻和出版业',''],
        ['      2.广播、电视、电影和影视录音制作业','','1.0','8.0','3.0','8.0','8.0','8.0','320.0','320.0','170.0','150.0'],
        ['      3.文化艺术业',''],
        ['      4.体育',''],
        ['      5.娱乐业',''],
        ['(十九)公共管理、社会保障和社会组织',''],
        ['     其中：(1)中国共产党机关',''],
        ['           (2)国家机构',''],
        ['           (3)人民政协、民主党派',''],
        ['           (4)社会保障',''],
        ['           (5)群众社团、社会团体和其他成','','','','','','','','','','','','','','','','','','','',''],
        ['  员组织','','','','','','','','','','','','','','','','','','','','']],
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:127px'>项目</div>",
  "dataIndex" : "col0"
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>计量单位</div>",
  "dataIndex" : "col1"
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>单位数（个）</div>",
  "dataIndex" : "col2"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>年末人数（人）</div>",
  "dataIndex" : "col3"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col4"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col5"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col6"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col7"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col8"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>平均人数(人）</div>",
  "dataIndex" : "col9"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col10"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col11"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col12"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>工资总额(千元)</div>",
  "dataIndex" : "col13"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col14"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col15"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col16"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col17"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col18"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col19"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col20"
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