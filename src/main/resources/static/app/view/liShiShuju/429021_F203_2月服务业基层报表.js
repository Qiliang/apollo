Ext.define('Kits.view.liShiShuju.429021_F203_2月服务业基层报表', {
    extend: 'Kits.view.liShiShuju.Base',
    title: '429021_F203_2月服务业基层报表',
    headerItems: [
        {
            html: ''
        },
        {
            html: '429021_F203_2月服务业基层报表',
        },
        {
            html: ''
        }
    ],
    store: Ext.create('Ext.data.ArrayStore', {
        fields: [
        '数据处理地',
        '组织机构代码',
        '单位详细名称',
        '1-本月;营业收入;千元',
        '上年同期;营业收入;千元',
        '1-本月;营业成本;千元',
        '上年同期;营业成本;千元',
        '1-本月;营业税金及附加;千元',
        '上年同期;营业税金及附加;千元',
        '1-本月;销售费用;千元',
        '上年同期;销售费用;千元',
        '1-本月;管理费用;千元',
        '上年同期;管理费用;千元',
        '1-本月;管理费用;税金;千元',
        '上年同期;管理费用;税金;千元',
        '1-本月;财务费用;千元',
        '上年同期;财务费用;千元',
        '1-本月;投资收益;千元',
        '上年同期;投资收益;千元',
        '1-本月;营业利润;千元',
        '上年同期;营业利润;千元',
        '1-本月;利润总额;千元',
        '上年同期;利润总额;千元',
        '1-本月;应付职工薪酬;千元',
        '上年同期;应付职工薪酬;千元',
        '1-本月;应交增值税;千元',
        '上年同期;应交增值税;千元',
        '1-本月;从事服务业活动的从业人员平均人数;人',
        '上年同期;从事服务业活动的从业人员平均人数;人'],
        data: [
        ['429021000000','074078062','湖北合众运输有限责任公司','1694','1230','1316','1104','5','3','0','0','601','280','43','42','9','0','0','0','-237','56','-237','56','45','45','38','38','23','23'],
        ['429021000000','565484903','湖北神农文化旅游有限公司','116','116','78','78','6','6','120','120','0','0','0','0','0','0','0','0','-88','-88','-88','-88','125','125','0','0','30','30'],
        ['429021000000','667675663','湖北神农架中和旅游有限公司','1431','1287','1251','1491','57','47','28','28','806','580','0','0','285','199','0','0','-977','-1058','-606','-1047','908','665','35','13','110','50'],
        ['429021000000','707087226','神农架林区邮政局','1702','1376','2352','1500','13','0','0','0','257','511','0','0','0','0','0','0','-649','-124','-659','-124','1186','901','0','0','47','50'],
        ['429021000000','760689808','中国电信股份有限公司神农架林区分公司','3546','2915','3175','2860','10','2','414','511','323','358','6','3','3','4','0','0','-393','-832','-393','-831','829','933','98','156','69','31'],
        ['429021000000','788185134','神农架大自然旅游发展有限责任公司','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        ['429021100200','063523554','神农架林区大成通和物流有限公司','20','20','12','12','0','0','0','0','9','9','0','0','0','0','0','0','-1','-1','-1','-1','12','18','0','0','3','3'],
        ['429021102001','68849161X','湖北神农架官门山旅游有限责任公司','963','1163','21','21','61','61','808','808','0','0','0','0','0','0','0','0','73','273','73','273','474','474','0','0','43','43'],
        ['429021102001','066128568','神农架神兴旅行社有限公司','1739','715','1612','633','23','4','58','70','49','42','0','0','0','0','0','0','-3','-34','-2','-29','120','93','0','0','14','18'],
        ['429021102207','688491636','湖北神农架神农顶旅游有限公司','2473','2473','66','66','32','32','4387','4387','0','0','0','0','225','225','0','0','-2237','-2237','-2242','-2242','993','993','0','0','104','104'],
        ['429021103200','565484970','湖北天燕旅游有限公司','1863','1863','128','128','102','102','984','984','0','0','0','0','0','0','0','0','649','649','649','649','176','176','0','0','35','35'],
        ['429021103201','559733870','湖北神农架天怡旅游发展有限公司','10661','8648','3231','2593','347','463','204','28','567','79','2','0','393','493','0','0','7430','6055','7444','6125','1078','1268','0','0','103','168'],
        ['429021105200','097274357','湖北神农架大九湖湿地公园旅游有限公司','863','863','0','0','6','6','706','706','0','0','0','0','-1','-1','0','0','158','158','158','158','200','200','0','0','32','32']],
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:80px'>数据处理地</div>",
  "width" : 80,
  "dataIndex" : "数据处理地"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>组织机构代码</div>",
  "width" : 80,
  "dataIndex" : "组织机构代码"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>单位详细名称</div>",
  "width" : 80,
  "dataIndex" : "单位详细名称"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;营业收入;千元</div>",
  "width" : 80,
  "dataIndex" : "1-本月;营业收入;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;营业收入;千元</div>",
  "width" : 80,
  "dataIndex" : "上年同期;营业收入;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;营业成本;千元</div>",
  "width" : 80,
  "dataIndex" : "1-本月;营业成本;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;营业成本;千元</div>",
  "width" : 80,
  "dataIndex" : "上年同期;营业成本;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;营业税金及附加;千元</div>",
  "width" : 80,
  "dataIndex" : "1-本月;营业税金及附加;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;营业税金及附加;千元</div>",
  "width" : 80,
  "dataIndex" : "上年同期;营业税金及附加;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;销售费用;千元</div>",
  "width" : 80,
  "dataIndex" : "1-本月;销售费用;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;销售费用;千元</div>",
  "width" : 80,
  "dataIndex" : "上年同期;销售费用;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;管理费用;千元</div>",
  "width" : 80,
  "dataIndex" : "1-本月;管理费用;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;管理费用;千元</div>",
  "width" : 80,
  "dataIndex" : "上年同期;管理费用;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;管理费用;税金;千元</div>",
  "width" : 80,
  "dataIndex" : "1-本月;管理费用;税金;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;管理费用;税金;千元</div>",
  "width" : 80,
  "dataIndex" : "上年同期;管理费用;税金;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;财务费用;千元</div>",
  "width" : 80,
  "dataIndex" : "1-本月;财务费用;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;财务费用;千元</div>",
  "width" : 80,
  "dataIndex" : "上年同期;财务费用;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;投资收益;千元</div>",
  "width" : 80,
  "dataIndex" : "1-本月;投资收益;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;投资收益;千元</div>",
  "width" : 80,
  "dataIndex" : "上年同期;投资收益;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;营业利润;千元</div>",
  "width" : 80,
  "dataIndex" : "1-本月;营业利润;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;营业利润;千元</div>",
  "width" : 80,
  "dataIndex" : "上年同期;营业利润;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;利润总额;千元</div>",
  "width" : 80,
  "dataIndex" : "1-本月;利润总额;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;利润总额;千元</div>",
  "width" : 80,
  "dataIndex" : "上年同期;利润总额;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;应付职工薪酬;千元</div>",
  "width" : 80,
  "dataIndex" : "1-本月;应付职工薪酬;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;应付职工薪酬;千元</div>",
  "width" : 80,
  "dataIndex" : "上年同期;应付职工薪酬;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;应交增值税;千元</div>",
  "width" : 80,
  "dataIndex" : "1-本月;应交增值税;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;应交增值税;千元</div>",
  "width" : 80,
  "dataIndex" : "上年同期;应交增值税;千元"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>1-本月;从事服务业活动的从业人员平均人数;人</div>",
  "width" : 80,
  "dataIndex" : "1-本月;从事服务业活动的从业人员平均人数;人"
}, {
  "text" : "<div style='white-space:pre-line;height:80px'>上年同期;从事服务业活动的从业人员平均人数;人</div>",
  "width" : 80,
  "dataIndex" : "上年同期;从事服务业活动的从业人员平均人数;人"
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