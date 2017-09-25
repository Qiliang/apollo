Ext.define('Kits.view.liShiShuju.102-1从业人员和工资情况基层表', {
    extend: 'Kits.view.liShiShuju.Base',
    title: '102-1从业人员和工资情况基层表',
    headerItems: [
        {
            html: ''
        },
        {
            html: '102-1从业人员和工资情况基层表',
        },
        {
            html: ''
        }
    ],
    store: Ext.create('Ext.data.ArrayStore', {
        fields: [
        '单位代码',
        '从业人员期末人数',
        '其中：女性',
        '其中：非全日制',
        '在岗职工',
        '劳务派遣人员',
        '其他从业人员',
        '从业人员平均人数',
        '在岗职工',
        '劳务派遣人员',
        '其他从业人员',
        '从业人员工资总额',
        '在岗职工',
        '基本工资',
        '绩效工资',
        '工资性津贴和补贴',
        '其他工资',
        '劳务派遣人员',
        '其他从业人员',
        '补充资料: 本表数据包合的单位数',
        '统一社会信用代码'],
        data: [
        ['000000000','5736','2249','0','229029','3269','18717','5736','229029','3269','18717','251015','229029','112737','34385','77939','3968','3269','18717','220',''],
        ['011057010','38','13','0','1588','0','0','38','1588','0','0','1588','1588','989','0','599','0','0','0','1',''],
        ['011500510','32','11','0','1211','0','0','32','1211','0','0','1211','1211','612','0','599','0','0','0','1',''],
        ['011500529','24','12','0','1203','0','0','24','1203','0','0','1203','1203','611','0','592','0','0','0','1',''],
        ['011500537','49','17','0','2550','0','0','49','2550','0','0','2550','2550','1224','0','1326','0','0','0','1',''],
        ['011500545','35','11','0','1869','0','0','35','1869','0','0','1869','1869','897','0','972','0','0','0','1',''],
        ['011500553','41','8','0','2173','0','0','41','2173','0','0','2173','2173','865','130','1178','0','0','0','1','11429021011057010e'],
        ['01150057X','14','8','0','602','0','0','14','602','0','0','602','602','302','0','300','0','0','0','1',''],
        ['011500588','14','7','0','600','0','0','14','600','0','0','600','600','350','0','250','0','0','0','1',''],
        ['011500596','30','12','0','1657','0','0','30','1657','0','0','1657','1657','895','0','762','0','0','0','1',''],
        ['011500609','11','5','0','560','0','0','12','560','0','0','560','560','300','0','260','0','0','0','1',''],
        ['011500617','18','9','0','959','0','0','18','959','0','0','959','959','499','0','460','0','0','0','1',''],
        ['011500625','10','3','0','532','0','0','10','532','0','0','532','532','255','0','277','0','0','0','1',''],
        ['011500633','10','3','0','420','0','0','10','420','0','0','420','420','220','0','200','0','0','0','1',''],
        ['011500641','8','3','0','380','0','0','8','380','0','0','380','380','240','0','140','0','0','0','1',''],
        ['011500668','18','7','0','955','0','0','18','955','0','0','955','955','456','0','499','0','0','0','1',''],
        ['011500692','14','4','0','512','0','0','14','512','0','0','512','512','248','0','264','0','0','0','1',''],
        ['011500705','82','19','0','4345','91','48','82','4345','91','48','4484','4345','2086','0','2259','0','91','48','1',''],
        ['011500721','38','13','0','1707','0','0','38','1707','0','0','1707','1707','819','0','888','0','0','0','1',''],
        ['011500772','13','6','0','715','0','0','13','715','0','0','715','715','395','0','320','0','0','0','1',''],
        ['01150081X','71','25','0','3465','0','384','71','3465','0','384','3849','3465','1663','0','1802','0','0','384','1',''],
        ['011500828','25','13','0','864','0','81','25','864','0','81','945','864','276','0','588','0','0','81','1',''],
        ['011500836','15','7','0','840','0','0','15','840','0','0','840','840','403','0','437','0','0','0','1',''],
        ['011500844','29','13','0','1740','0','0','29','1740','0','0','1740','1740','835','0','905','0','0','0','1',''],
        ['011500852','9','5','0','465','0','0','9','465','0','0','465','465','247','0','218','0','0','0','1',''],
        ['011500887','42','21','0','2139','0','0','45','2139','0','0','2139','2139','1027','0','1112','0','0','0','1',''],
        ['011500895','202','58','0','8250','1554','0','202','8250','1554','0','9804','8250','3960','0','4290','0','1554','0','10',''],
        ['011500908','36','14','0','1856','0','0','37','1856','0','0','1856','1856','947','0','909','0','0','0','9',''],
        ['011500916','78','26','0','3512','0','0','78','3512','0','0','3512','3512','1791','0','1721','0','0','0','1',''],
        ['011500924','84','42','0','3408','144','0','84','3408','144','0','3552','3408','1485','22','1791','110','144','0','1',''],
        ['011500932','69','36','0','4129','0','0','70','4129','0','0','4129','4129','1982','0','2147','0','0','0','1',''],
        ['011500940','45','14','0','2535','0','0','46','2535','0','0','2535','2535','1217','0','1318','0','0','0','1',''],
        ['011500967','59','21','0','2950','0','0','59','2950','0','0','2950','2950','1416','0','1534','0','0','0','9',''],
        ['011500983','116','36','0','3840','0','0','113','3840','0','0','3840','3840','2040','0','1800','0','0','0','1',''],
        ['01150102X','16','6','0','700','0','0','16','700','0','0','700','700','400','0','300','0','0','0','1',''],
        ['011501038','32','16','0','1792','0','0','32','1792','0','0','1792','1792','806','0','986','0','0','0','1',''],
        ['011501070','10','5','0','437','0','0','10','437','0','0','437','437','182','0','255','0','0','0','1',''],
        ['011501089','12','6','0','500','0','0','12','500','0','0','500','500','290','0','210','0','0','0','1',''],
        ['011501097','12','4','0','500','0','0','12','500','0','0','500','500','260','0','240','0','0','0','1',''],
        ['011501134','30','7','0','2880','0','0','30','2880','0','0','2880','2880','1440','120','1320','0','0','0','1',''],
        ['011501193','16','7','0','1152','0','0','16','1152','0','0','1152','1152','518','0','634','0','0','0','2',''],
        ['011501206','74','31','0','4813','0','0','76','4813','0','0','4813','4813','2166','0','2647','0','0','0','4',''],
        ['011501222','16','5','0','770','0','64','16','770','0','64','834','770','379','0','391','0','0','64','1',''],
        ['011501417','15','7','0','660','0','0','15','660','0','0','660','660','360','0','300','0','0','0','1',''],
        ['011501425','6','3','0','253','0','0','6','253','0','0','253','253','150','0','103','0','0','0','1',''],
        ['011501433','6','3','0','263','0','0','6','263','0','0','263','263','150','0','113','0','0','0','1',''],
        ['011501740','56','1','0','1940','360','0','55','1940','360','0','2300','1940','1040','0','800','100','360','0','8',''],
        ['183710004','329','105','0','12836','0','1400','329','12836','0','1400','14236','12836','6000','0','5000','1836','0','1400','25',''],
        ['183710063','16','5','0','962','0','0','16','962','0','0','962','962','472','0','490','0','0','0','1',''],
        ['183713774','7','3','0','287','0','0','7','287','0','0','287','287','129','126','32','0','0','0','1',''],
        ['42218003X','373','173','0','18257','0','280','373','18257','0','280','18537','18257','9128','7302','1827','0','0','280','2',''],
        ['422180427','13','9','0','545','0','0','13','545','0','0','545','545','300','0','245','0','0','0','1',''],
        ['422180435','11','6','0','510','0','0','12','510','0','0','510','510','280','0','230','0','0','0','1',''],
        ['422180451','175','45','0','7210','0','140','182','7210','0','140','7350','7210','3411','1525','2274','0','0','140','10',''],
        ['42218046x','23','11','0','1100','0','0','26','1100','0','0','1100','1100','650','0','450','0','0','0','1',''],
        ['422180478','9','6','0','390','0','0','9','390','0','0','390','390','210','0','180','0','0','0','1',''],
        ['422180486','5','3','0','240','0','0','6','240','0','0','240','240','140','0','100','0','0','0','1',''],
        ['422180494','8','3','0','320','0','0','8','320','0','0','320','320','170','0','150','0','0','0','1',''],
        ['422180515','15','6','0','440','0','0','11','440','0','0','440','440','240','0','200','0','0','0','1',''],
        ['42218054X','85','29','0','3160','0','0','79','3160','0','0','3160','3160','1660','0','1500','0','0','0','1',''],
        ['422180558','52','6','0','480','0','0','12','480','0','0','480','480','250','0','200','30','0','0','1',''],
        ['422180566','10','6','0','380','0','0','10','380','0','0','380','380','220','160','0','0','0','0','1',''],
        ['422180689','5','2','0','220','0','0','5','220','0','0','220','220','122','0','98','0','0','0','1',''],
        ['422180734','8','3','0','320','0','0','8','320','0','0','320','320','170','0','150','0','0','0','1',''],
        ['422180873','7','5','0','360','0','0','9','360','0','0','360','360','190','0','170','0','0','0','1',''],
        ['422208442','7','3','0','284','0','0','7','284','0','0','284','284','165','0','119','0','0','0','1',''],
        ['422208477','7','2','0','406','0','0','8','406','0','0','406','406','225','0','181','0','0','0','1',''],
        ['422219053','33','22','0','1320','0','0','36','1320','0','0','1320','1320','720','0','600','0','0','0','1',''],
        ['503736095','11','6','0','497','122','33','11','497','122','33','652','497','112','0','203','182','122','33','3',''],
        ['550656450','5','2','0','230','0','0','6','230','0','0','230','230','130','0','100','0','0','0','1',''],
        ['616393025','28','12','0','962','0','0','28','962','0','0','962','962','452','0','510','0','0','0','1',''],
        ['673667977','52','23','0','1881','376','109','52','1881','376','109','2366','1881','665','485','731','0','376','109','1',''],
        ['673699629','8','2','0','360','0','0','9','360','0','0','360','360','160','0','100','100','0','0','1',''],
        ['676461915','16','12','0','756','0','0','19','756','0','0','756','756','340','119','230','67','0','0','1',''],
        ['676487744','47','21','0','986','0','0','47','986','0','0','986','986','473','307','206','0','0','0','1',''],
        ['707087031','128','65','0','5040','0','0','130','5040','0','0','5040','5040','1512','2469','635','424','0','0','8',''],
        ['707087226','55','22','0','704','483','0','54','704','483','0','1187','704','338','256','110','0','483','0','1',''],
        ['707087330','7','2','0','297','0','39','7','297','0','39','336','297','149','44','104','0','0','39','1',''],
        ['707087453','52','31','0','2746','0','280','52','2746','0','280','3026','2746','1373','961','412','0','0','280','1',''],
        ['707087672','26','11','0','1308','0','0','26','1308','0','0','1308','1308','641','0','667','0','0','0','1',''],
        ['726109371','9','3','0','380','0','0','9','380','0','0','380','380','210','0','170','0','0','0','1',''],
        ['730847959','46','33','0','2247','0','743','50','2247','0','743','2990','2247','1025','0','458','764','0','743','1',''],
        ['732711895','8','2','0','340','0','0','8','340','0','0','340','340','200','0','140','0','0','0','1',''],
        ['73271472X','28','9','0','1218','0','0','29','1218','0','0','1218','1218','718','0','500','0','0','0','1',''],
        ['732722869','5','1','0','200','0','0','5','200','0','0','200','200','120','0','80','0','0','0','1',''],
        ['732728099','18','8','0','760','0','0','18','760','0','0','760','760','400','0','360','0','0','0','1',''],
        ['73272934X','52','18','0','2377','0','0','56','2377','0','0','2377','2377','1277','0','1100','0','0','0','1',''],
        ['73272934x','41','18','0','1341','0','0','43','1341','0','0','1341','1341','741','0','600','0','0','0','1',''],
        ['73520862x','28','16','0','970','0','0','29','970','0','0','970','970','670','200','100','0','0','0','1',''],
        ['735214659','17','6','0','702','0','0','18','702','0','0','702','702','402','0','300','0','0','0','1',''],
        ['735214691','12','5','0','428','0','0','13','428','0','0','428','428','228','0','200','0','0','0','1',''],
        ['737125107','8','3','0','288','0','0','8','288','0','0','288','288','160','128','0','0','0','0','1',''],
        ['737125270','14','4','0','660','0','0','14','660','0','0','660','660','360','0','300','0','0','0','1',''],
        ['760678703','5','2','0','200','0','0','5','200','0','0','200','200','100','0','100','0','0','0','1',''],
        ['760689808','46','14','0','973','98','0','48','973','98','0','1071','973','467','304','202','0','98','0','1',''],
        ['767436686','12','6','0','430','0','0','11','430','0','0','430','430','230','0','200','0','0','0','1',''],
        ['777554061','4','2','0','144','0','0','4','144','0','0','144','144','80','0','64','0','0','0','1',''],
        ['777561480','8','5','0','280','0','0','8','280','0','0','280','280','160','0','120','0','0','0','1',''],
        ['784477092','5','2','0','190','0','0','5','190','0','0','190','190','100','0','90','0','0','0','1',''],
        ['788180245','7','3','0','240','0','0','7','240','0','0','240','240','160','0','80','0','0','0','1',''],
        ['78819185x','16','6','0','500','0','0','16','500','0','0','500','500','300','0','200','0','0','0','1',''],
        ['793279338','6','3','0','262','41','0','6','262','41','0','303','262','145','0','117','0','41','0','1',''],
        ['883712721','25','12','0','680','0','0','27','680','0','0','680','680','380','0','300','0','0','0','1',''],
        ['883714022','15','7','0','560','0','0','15','560','0','0','560','560','300','160','100','0','0','0','1',''],
        ['883714196','6','3','0','190','0','0','6','190','0','0','190','190','100','0','90','0','0','0','1',''],
        ['883715033','25','16','0','855','0','0','26','855','0','0','855','855','500','0','300','55','0','0','1',''],
        ['883715041','34','13','0','1200','0','0','34','1200','0','0','1200','1200','600','200','400','0','0','0','1',''],
        ['88371513X','32','12','0','1200','0','0','34','1200','0','0','1200','1200','600','300','200','100','0','0','1',''],
        ['88371847X','87','23','0','2700','0','0','88','2700','0','0','2700','2700','1500','0','1000','200','0','0','1',''],
        ['qb9815491','832','356','0','15141','0','15116','832','15141','0','15116','30257','15141','7419','4633','3089','0','0','15116','10',''],
        ['qb9815492','82','63','0','4128','0','0','82','4128','0','0','4128','4128','2064','1238','826','0','0','0','4',''],
        ['qb9815493','358','117','0','17884','0','0','358','17884','0','0','17884','17884','8942','5365','3577','0','0','0','12',''],
        ['qb9815494','396','106','0','14896','0','0','396','14896','0','0','14896','14896','7448','5214','2234','0','0','0','5',''],
        ['qb9815495','136','87','0','7480','0','0','136','7480','0','0','7480','7480','3741','2617','1122','0','0','0','2','']],
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:80px'>单位代码</div>",
  "width" : 80,
  "dataIndex" : "单位代码"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>从业人员期末人数</div>",
  "width" : 80,
  "dataIndex" : "从业人员期末人数"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>其中：女性</div>",
  "width" : 80,
  "dataIndex" : "其中：女性"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>其中：非全日制</div>",
  "width" : 80,
  "dataIndex" : "其中：非全日制"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>在岗职工</div>",
  "width" : 80,
  "dataIndex" : "在岗职工"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>劳务派遣人员</div>",
  "width" : 80,
  "dataIndex" : "劳务派遣人员"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>其他从业人员</div>",
  "width" : 80,
  "dataIndex" : "其他从业人员"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>从业人员平均人数</div>",
  "width" : 80,
  "dataIndex" : "从业人员平均人数"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>在岗职工</div>",
  "width" : 80,
  "dataIndex" : "在岗职工"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>劳务派遣人员</div>",
  "width" : 80,
  "dataIndex" : "劳务派遣人员"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>其他从业人员</div>",
  "width" : 80,
  "dataIndex" : "其他从业人员"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>从业人员工资总额</div>",
  "width" : 80,
  "dataIndex" : "从业人员工资总额"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>在岗职工</div>",
  "width" : 80,
  "dataIndex" : "在岗职工"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>基本工资</div>",
  "width" : 80,
  "dataIndex" : "基本工资"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>绩效工资</div>",
  "width" : 80,
  "dataIndex" : "绩效工资"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>工资性津贴和补贴</div>",
  "width" : 80,
  "dataIndex" : "工资性津贴和补贴"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>其他工资</div>",
  "width" : 80,
  "dataIndex" : "其他工资"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>劳务派遣人员</div>",
  "width" : 80,
  "dataIndex" : "劳务派遣人员"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>其他从业人员</div>",
  "width" : 80,
  "dataIndex" : "其他从业人员"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>补充资料: 本表数据包合的单位数</div>",
  "width" : 80,
  "dataIndex" : "补充资料: 本表数据包合的单位数"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>统一社会信用代码</div>",
  "width" : 80,
  "dataIndex" : "统一社会信用代码"
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