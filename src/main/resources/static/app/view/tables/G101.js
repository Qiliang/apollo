Ext.define('Kits.view.tables.G101', {
    extend: 'Kits.view.tables.Base',
    title: '乡(镇)社会经济基本情况',
    tableid: 'G101表',
    headerItems:[
        {
            html: '<br /><br /><br />综合机关名称：'
        },
        {
            html: '<br /><br /><br />2016年',
        },
        {
            html: '表    号：G101表<br /> ' +
            '制表机关：湖北省统计局 <br />' +
            '批准文号：国统制［2016］125号<br />' +
            '有效期至：2017年6月'
        }
    ],

    store:Ext.create('Ext.data.ArrayStore', {

        fields: ['i','甲', '乙', '丙', '1'],
        data: [
            [0,'一、基本情况','—','—'],
            [1,'行政区域面积','公顷','7'],
            [1,'居民委员会个数','个','8'],
            [1,'村民委员会个数','个','9'],
            [2,'其中：通公共交通的村个数','个','10'],
            [5,'通宽带的村个数','个','11'],
            [5,'通有线电视的村个数','个','12'],
            [5,'通自来水的村个数','个','13'],
            [5,'垃圾集中处理的村个数','个','14'],
            [5,'污水集中处理的村个数','个','15'],
            [0,'二、人口与就业','—','—'],
            [1,'常住户数','户','16'],
            [1,'常住人口','人','17'],
            [1,'户籍人口','人','18'],
            [2,'其中:农业户籍人口','人','19'],
            [5,'第一产业从业人员','人','20'],
            [5,'第二产业从业人员','人','21'],
            [5,'第三产业从业人员','人','22'],
            [5,'外来从业人员数','人','23'],
            [0,'三、财政收支','—','—'],
            [1,'公共财政收入','万元','24'],
            [1,'企业实交税金','万元','25'],
            [1,'公共财政支出','万元','26'],
            [1,'年末债务总额','万元','27'],
            [0,'四、农业','-','-'],
            [1,'耕地面积','公顷','28'],
            [1,'设施农业占地面积','公顷','29'],
            [1,'有效灌溉面积','公顷','30'],
            [1,'农作物播种面积','公顷','31'],
            [2,'其中：粮食作物播种面积','公顷','32'],
            [1,'农业技术服务机构个数','个','33'],
            [1,'农业技术服务机构从业人员数','人','34'],
            [1,'农民合作社个数','个','35'],
            [1,'农民合作社成员数','户','36'],
            [1,'耕地流转面积','公顷','37'],
            [1,'种植大户数','户','38'],
            [1,'畜禽养殖大户数','户','39'],
            [0,'五、工业及建筑业','—','—'],
            [1,'工业企业单位数','个','40'],
            [2,'其中: 规模以上工业','个','41'],
            [1,'工业总产值','万元','42'],
            [2,'其中: 规模以上工业','万元','43'],
            [1,'工业企业从业人员数','人','44'],
            [1,'建筑业企业单位数','个','45'],
            [1,'建筑业总产值','万元','46'],
            [1,'建筑业企业从业人员数','人','47'],
            [0,'六、贸易及餐饮','-','—'],
            [1,'社会消费品零售总额','万元','48'],
            [2,'其中:限额以上社会消费品零售总额','万元','49'],
            [1,'市场个数','个','50'],
            [1,'50平米以上的超市个数','个','51'],
            [1,'住宿餐饮业企业个数','个','52'],
            [0,'七、教育、文化、卫生','-','—'],
            [1,'小学数','所','53'],
            [1,'小学专任教师数','人','54'],
            [1,'小学在校学生数','人','55'],
            [1,'幼儿园、托儿所个数','个','56'],
            [1,'图书馆、文化站个数','个','57'],
            [1,'剧场、影剧院个数','个','58'],
            [1,'体育场馆个数','个','59'],
            [1,'医疗卫生机构个数','所','60'],
            [1,'医疗卫生机构床位数','床','61'],
            [1,'执业(助理)医师数','人','62'],
            [0,'八、社会保障','-','—'],
            [1,'各种社会福利收养性单位数','个','63'],
            [1,'各种社会福利收养性单位床位数','床','64'],
            [1,'各种社会福利收养性单位收养人数','人','65'],
            [1,'新型农村合作医疗参保人数','人','66'],
            [1,'新型农村社会养老保险参保人数','人','67'],
            [1,'农村居民最低生活保障人数','人','68'],
            [0,'九、公用事业','—','—'],
            [1,'自来水用水户数','户','69'],
            [1,'燃气用气户数','户','70'],
            [1,'金融机构网点数','个','71'],
            [1,'公园及休闲健身广场个数','个','72'],
            [0,'十、城镇基本情况','—','—'],
            [1,'城镇规划区面积','公顷','73'],
            [1,'城镇建成区面积','公顷','74'],
            [1,'城镇建成区总户数','户','75'],
            [1,'城镇建成区总人口','人','76'],
            [1,'城镇建成区绿化面积','公顷','77'],
        ]

    }),

    columns: [
        {
            text: '指 标 名 称',
            columns: [{
                text: '甲',
                width:240,
                dataIndex: '甲',
            }]
        }, {
            text: '计量单位',
            columns: [{
                text: '乙',
                width:200,
                align: 'center',
                dataIndex: '乙',
            }]
        }, {
            text: '代  码',
            columns: [{
                text: '丙',
                width:200,
                align: 'center',
                dataIndex: '丙',
            }]
        }, {
            text: '数量',
            columns: [{
                text: '1',
                width:200,
                align: 'center',
                dataIndex: '1',
                editor: {

                    field: {
                        xtype: 'numberfield',
                        minValue: 0,
                        allowBlank: true
                    }
                }
            }]
        }

    ],
    footerItems:[
        {
            html: '单位负责人：'
        },
        {
            html: '填报人',
        },
        {
            html: '填报日期：      年    月    日'
        },
        {
            colspan: 3,
            html: '说明： <br />' +
            '1.本表由村民委员会填报。<br />' +
            '2.统计范围是全省所有的村民委员会。<br />' +
            '3.报送频率为五年。<br />' +
            '4.2016年年报免报。'
        }
    ]




});