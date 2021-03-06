Ext.define('Kits.view.liShiShuju.i301从业人员和劳动报酬情况汇总表', {
    extend: 'Kits.view.liShiShuju.Base',
    title: 'i301从业人员和劳动报酬情况汇总表',
    headerItems: [
        {
            html: ''
        },
        {
            html: 'i301从业人员和劳动报酬情况汇总表',
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
        'col24'],
        data: [
        ['','','','从业人员期末人数','$$','$$','$$','$$','$$','从业人员平均人数','$$','$$','$$','从业人员工资总额','$$','$$','$$','$$','$$','$$','$$','从业人员平均工资','$$','$$','$$'],
        ['','','','','其中：女性','其中：非全日制','在岗职工','劳务派遣人员','其他从业人员','','在岗职工','劳务派遣人员','其他从业人员','','在岗职工工资总额','$$','$$','$$','$$','劳务派遣人员工资总额','其他从业人员工资总额','','在岗职工平均工资','劳务派遣人员平均工资','其他从业人员平均工资'],
        ['','','','','','','','','','','','','','','','基本工资','绩效工资','工资性津贴和补贴','其他工资','','','','','',''],
        ['                     甲',' 乙','1.0','2.0','3.0','4.0','5.0','6.0','7.0','8.0','9.0','10.0','11.0','12.0','13.0','14.0','15.0','16.0','17.0','18.0','19.0','20.0','21.0','22.0','23.0'],
        ['总    计','001','216.0','5654.0','2186.0','4968.0','94.0','592.0','5654.0','4964.0','94.0','596.0','246887.0','224901.0','110673.0','33147.0','77113.0','3968.0','3269.0','18717.0','43666.0','45306.0','34777.0','31404.0'],
        ['一、按执行会计标准类别分组','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['    1.企    业','002','24.0','586.0','288.0','536.0','26.0','24.0','602.0','548.0','26.0','28.0','22280.0','20676.0','9449.0','5402.0','4415.0','1410.0','581.0','1023.0','37010.0','37730.0','22346.0','36536.0'],
        ['    2.事    业','003','79.0','3080.0','1187.0','2547.0','9.0','524.0','3049.0','2516.0','9.0','524.0','126329.0','110228.0','55612.0','27473.0','26813.0','330.0','417.0','15684.0','41433.0','43811.0','46333.0','29931.0'],
        ['    3.机    关','004','113.0','1988.0','711.0','1885.0','59.0','44.0','2003.0','1900.0','59.0','44.0','98278.0','93997.0','45612.0','272.0','45885.0','2228.0','2271.0','2010.0','49065.0','49472.0','38492.0','45682.0'],
        ['　  4.民间非营利组织','005'],
        ['    5.其　　他','006'],
        ['二、按国民经济行业分组(GB/T 4754-2011)','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['(一)农、林、牧、渔业','007','10.0','832.0','356.0','325.0','507.0','832.0','325.0','507.0','30257.0','15141.0','7419.0','4633.0','3089.0','15116.0','36367.0','46588.0','29815.0'],
        ['     1.农    业','008'],
        ['     2.林    业','009','10.0','832.0','356.0','325.0','507.0','832.0','325.0','507.0','30257.0','15141.0','7419.0','4633.0','3089.0','15116.0','36367.0','46588.0','29815.0'],
        ['     3.畜 牧 业','010'],
        ['     4.渔    业','011'],
        ['     5.农、林、牧、渔服务业','012'],
        ['(二)采 矿 业','013'],
        ['     1.煤炭开采和洗选业','014'],
        ['     2.石油和天然气开采业','015'],
        ['     3.黑色金属矿采选业','016'],
        ['     4.有色金属矿采选业','017'],
        ['     5.非金属矿采选业','018'],
        ['     6.开采辅助活动','019'],
        ['     7.其他采矿业','020'],
        ['(三)制 造 业','021'],
        ['     1.农副食品加工业','022'],
        ['     2.食品制造业','023'],
        ['     3.酒、饮料和','024'],
        ['     4.烟草制品业','025'],
        ['     5.纺织业','026'],
        ['     6.纺织服装、服饰业','027'],
        ['     7.皮革、毛皮、羽毛及其制品和制鞋业','028'],
        ['     8.木材加工和木、竹、藤、棕、草制品','029','','','','','','','','','','','','','','','','','','','','','','',''],
        ['  业',''],
        ['     9.家具制造业','030'],
        ['     10.造纸和纸制品业','031'],
        ['     11.印刷和记录媒介复制业','032'],
        ['     12.文教、工美、体育和娱乐用品制造业','033'],
        ['     13.石油加工、炼焦和核燃料加工业','034'],
        ['     14.化学原料和化学制品制造业','035'],
        ['     15.医药制造业','036'],
        ['     16.化学纤维制造业','037'],
        ['     17.橡胶和塑料制品业','038'],
        ['     18.非金属矿物制品业','039'],
        ['     19.黑色金属冶炼和压延加工业','040'],
        ['     20.有色金属冶炼和压延加工业','041'],
        ['     21.金属制品业','042'],
        ['     22.通用设备制造业','043'],
        ['     23.专用设备制造业','044'],
        ['     24.汽车制造业','045'],
        ['     25.铁路、船舶、航空航天和其他运输设','046','','','','','','','','','','','','','','','','','','','','','','',''],
        ['  备制造业',''],
        ['     26.电气机械和器材制造业','047'],
        ['     27.计算机、通信和其他电子设备制造业','048'],
        ['     28.仪器仪表制造业','049'],
        ['     29.其他制造业','050'],
        ['     30.废弃资源综合利用业','051'],
        ['     31.金属制品、机械和设备修理业','052'],
        ['(四)电力、热力、燃气及水生产和供应业','053','2.0','23.0','15.0','23.0','26.0','26.0','1043.0','1043.0','469.0','245.0','262.0','67.0','40115.0','40115.0'],
        ['     1.电力、热力生产和供应业','054','1.0','7.0','3.0','7.0','7.0','7.0','287.0','287.0','129.0','126.0','32.0','41000.0','41000.0'],
        ['     2.燃气生产和供应业','055'],
        ['     3.水的生产和供应业','056','1.0','16.0','12.0','16.0','19.0','19.0','756.0','756.0','340.0','119.0','230.0','67.0','39789.0','39789.0'],
        ['(五) 建筑业','057'],
        ['     1.房屋建筑业','058'],
        ['     2.土木工程建筑业','059'],
        ['     3.建筑安装业','060'],
        ['     4.建筑装饰和其他建筑业','061'],
        ['(六)批发和零售业','062','4.0','66.0','24.0','66.0','67.0','67.0','3130.0','3130.0','1573.0','1457.0','100.0','46716.0','46716.0'],
        ['     1.批发业','063','1.0','16.0','5.0','16.0','16.0','16.0','962.0','962.0','472.0','490.0','60125.0','60125.0'],
        ['     2.零售业','064','3.0','50.0','19.0','50.0','51.0','51.0','2168.0','2168.0','1101.0','967.0','100.0','42510.0','42510.0'],
        ['(七) 交通运输、仓储和邮政业','065','2.0','140.0','51.0','117.0','23.0','133.0','111.0','22.0','4347.0','3864.0','1998.0','256.0','1610.0','483.0','32684.0','34811.0','21955.0'],
        ['     1.铁路运输业','066'],
        ['     2.道路运输业','067','1.0','85.0','29.0','85.0','79.0','79.0','3160.0','3160.0','1660.0','1500.0','40000.0','40000.0'],
        ['     3.水上运输业','068'],
        ['     4.航空运输业','069'],
        ['     5.管道运输业','070'],
        ['     6.装卸搬运和运输代理业','071'],
        ['     7.仓 储 业','072'],
        ['     8.邮政业','073','1.0','55.0','22.0','32.0','23.0','54.0','32.0','22.0','1187.0','704.0','338.0','256.0','110.0','483.0','21981.0','22000.0','21955.0'],
        ['(八)住宿和餐饮业','074'],
        ['     1.住宿业','075'],
        ['     2.餐饮业','076'],
        ['(九)信息传输、软件和信息技术服务业','077','5.0','219.0','115.0','192.0','3.0','24.0','226.0','194.0','4.0','28.0','9043.0','7922.0','4008.0','1772.0','1378.0','764.0','98.0','1023.0','40013.0','40835.0','24500.0','36536.0'],
        ['     1.电信、广播电视和卫星传输服务','078','1.0','47.0','21.0','47.0','47.0','47.0','986.0','986.0','473.0','307.0','206.0','20979.0','20979.0'],
        ['     2.互联网和相关服务','079','4.0','172.0','94.0','145.0','3.0','24.0','179.0','147.0','4.0','28.0','8057.0','6936.0','3535.0','1465.0','1172.0','764.0','98.0','1023.0','45011.0','47184.0','24500.0','36536.0'],
        ['     3.软件和信息技术服务业','080'],
        ['(十)金融业','081','14.0','264.0','127.0','264.0','271.0','271.0','9735.0','9735.0','3992.0','3129.0','2035.0','579.0','35923.0','35923.0'],
        ['     1.货币金融服务业','082','12.0','234.0','113.0','234.0','239.0','239.0','8855.0','8855.0','3512.0','3129.0','1635.0','579.0','37050.0','37050.0'],
        ['     2.资本市场服务业','083'],
        ['     3.保险业','084','1.0','25.0','12.0','25.0','27.0','27.0','680.0','680.0','380.0','300.0','25185.0','25185.0'],
        ['     4.其他金融业','085','1.0','5.0','2.0','5.0','5.0','5.0','200.0','200.0','100.0','100.0','40000.0','40000.0'],
        ['(十一)房地产业','086','2.0','9.0','4.0','9.0','9.0','9.0','334.0','334.0','180.0','154.0','37111.0','37111.0'],
        ['     其中：1.房地产开发经营','087'],
        ['           2.物业管理','088','1.0','4.0','2.0','4.0','4.0','4.0','144.0','144.0','80.0','64.0','36000.0','36000.0'],
        ['           3.房地产中介服务','089','1.0','5.0','2.0','5.0','5.0','5.0','190.0','190.0','100.0','90.0','38000.0','38000.0'],
        ['(十二)租赁和商务服务业','090','3.0','26.0','9.0','25.0','1.0','28.0','27.0','1.0','1170.0','1131.0','602.0','44.0','485.0','39.0','41786.0','41889.0','39000.0'],
        ['      1.租赁业','091','1.0','7.0','2.0','6.0','1.0','7.0','6.0','1.0','336.0','297.0','149.0','44.0','104.0','39.0','48000.0','49500.0','39000.0'],
        ['      2.商务服务业','092','2.0','19.0','7.0','19.0','21.0','21.0','834.0','834.0','453.0','381.0','39714.0','39714.0'],
        ['(十三) 科学研究、技术服务业','093','7.0','265.0','84.0','265.0','264.0','264.0','9600.0','9600.0','5166.0','4234.0','200.0','36364.0','36364.0'],
        ['      1.研究和试验发展','094'],
        ['      2.专业技术服务业','095','4.0','50.0','19.0','50.0','51.0','51.0','2560.0','2560.0','1336.0','1224.0','50196.0','50196.0'],
        ['      3.科技推广和应用服务业','096','3.0','215.0','65.0','215.0','213.0','213.0','7040.0','7040.0','3830.0','3010.0','200.0','33052.0','33052.0'],
        ['(十四)水利、环境和公共设施管理业','097','13.0','306.0','99.0','290.0','8.0','8.0','315.0','299.0','8.0','8.0','12645.0','12020.0','5806.0','2010.0','4204.0','376.0','249.0','40143.0','40201.0','47000.0','31125.0'],
        ['      1.水利管理业','098','1.0','38.0','13.0','38.0','38.0','38.0','1588.0','1588.0','989.0','599.0','41789.0','41789.0'],
        ['      2.生态保护和环境治理业','099','11.0','227.0','68.0','211.0','8.0','8.0','234.0','218.0','8.0','8.0','9716.0','9091.0','4076.0','2010.0','3005.0','376.0','249.0','41521.0','41702.0','47000.0','31125.0'],
        ['      3.公共设施管理业','100','1.0','41.0','18.0','41.0','43.0','43.0','1341.0','1341.0','741.0','600.0','31186.0','31186.0'],
        ['(十五)居民服务、修理和其他服务业','101'],
        ['      1.居民服务业','102'],
        ['      2.机动车、电子产品和日用产品修理业','103'],
        ['      3.其他服务业','104'],
        ['(十六)教育','105','20.0','901.0','316.0','901.0','902.0','902.0','40770.0','40770.0','20411.0','13196.0','7163.0','45200.0','45200.0'],
        ['        其中:1.初等教育','106','12.0','358.0','117.0','358.0','358.0','358.0','17884.0','17884.0','8942.0','5365.0','3577.0','49955.0','49955.0'],
        ['             2.中等教育','107','7.0','532.0','193.0','532.0','532.0','532.0','22376.0','22376.0','11189.0','7831.0','3356.0','42060.0','42060.0'],
        ['             3.高等教育','108'],
        ['(十七)卫生和社会工作','109','5.0','418.0','201.0','410.0','8.0','423.0','415.0','8.0','20417.0','20137.0','10158.0','7302.0','2677.0','280.0','48267.0','48523.0','35000.0'],
        ['      1.卫生','110','3.0','406.0','195.0','398.0','8.0','409.0','401.0','8.0','19857.0','19577.0','9848.0','7302.0','2427.0','280.0','48550.0','48820.0','35000.0'],
        ['      2.社会工作','111','2.0','12.0','6.0','12.0','14.0','14.0','560.0','560.0','310.0','250.0','40000.0','40000.0'],
        ['(十八)文化、体育和娱乐业','112','7.0','66.0','35.0','66.0','68.0','68.0','2972.0','2972.0','1609.0','128.0','1235.0','43706.0','43706.0'],
        ['      1.新闻和出版业','113','1.0','13.0','9.0','13.0','13.0','13.0','545.0','545.0','300.0','245.0','41923.0','41923.0'],
        ['      2.广播、电视、电影和影视录音制作业','114','1.0','8.0','3.0','8.0','8.0','8.0','320.0','320.0','170.0','150.0','40000.0','40000.0'],
        ['      3.文化艺术业','115','5.0','45.0','23.0','45.0','47.0','47.0','2107.0','2107.0','1139.0','128.0','840.0','44830.0','44830.0'],
        ['      4.体育','116'],
        ['      5.娱乐业','117'],
        ['(十九)公共管理、社会保障和社会组织','118','122.0','2119.0','750.0','2015.0','60.0','44.0','2090.0','1986.0','60.0','44.0','101424.0','97102.0','47282.0','432.0','47130.0','2258.0','2312.0','2010.0','48528.0','48893.0','38533.0','45682.0'],
        ['     其中：(1)中国共产党机关','119','7.0','128.0','46.0','128.0','129.0','129.0','6504.0','6504.0','3207.0','130.0','3167.0','50419.0','50419.0'],
        ['           (2)国家机构','120','106.0','1915.0','665.0','1816.0','56.0','43.0','1885.0','1786.0','56.0','43.0','91306.0','87180.0','42387.0','302.0','42415.0','2076.0','2149.0','1977.0','48438.0','48813.0','38375.0','45977.0'],
        ['           (3)人民政协、民主党派','121','1.0','24.0','12.0','24.0','24.0','24.0','1203.0','1203.0','611.0','592.0','50125.0','50125.0'],
        ['           (4)社会保障','122'],
        ['           (5)群众社团、社会团体和其他成','123','','','','','','','','','','','','','','','','','','','','','','',''],
        ['  员组织','','8.0','52.0','27.0','','47.0','4.0','1.0','52.0','47.0','4.0','1.0','2411.0','2215.0','1077.0','','956.0','182.0','163.0','33.0','46365.0','47128.0','40750.0','33000.0'],
        ['单位负责人:                                                                                                                                     制表人:                                                                                                                    制表时间:2017:03:20  16:25:31','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','','','','','','']],
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:127px'>项目</div>",
  "dataIndex" : "col0"
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>代码</div>",
  "dataIndex" : "col1"
}, {
  "text" : "<div style='white-space:pre-line;height:127px'>单位数（个）</div>",
  "dataIndex" : "col2"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>从业人员（人）</div>",
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
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
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
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>平均工资(元)</div>",
  "dataIndex" : "col21"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col22"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col23"
}, {
  "text" : "<div style='white-space:pre-line;height:22px'>$$</div>",
  "dataIndex" : "col24"
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