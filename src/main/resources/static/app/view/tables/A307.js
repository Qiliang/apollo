Ext.define('Kits.view.tables.A307', {
    extend: 'Kits.view.tables.Base',
    title: '林 业 生 产 情 况',

    headerItems: [
        {
            html: '综合机关名称：'
        },
        {
            html: '2016年',
        },
        {
            html: '表    号：A307表<br /> ' +
            '制表机关：国家统计局 <br />' +
            '文    号：国统字(2016)122号<br />' +
            '有效期至：2017年6月'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '丙', '1'],
        data: [
            ['一、荒山荒（沙）地造林面积','公顷','1'],
            ['按造林方式分'],
            ['1.人工造林','公顷','2'],
            ['       其中：竹林面积','公顷','3'],
            ['             乔木林面积','公顷','4'],
            ['2.飞播造林','公顷','5'],
            ['3.无林地和疏林地新封','公顷','6'],
            ['按经济成份分'],
            ['1.公有经济造林','公顷','7'],
            ['（1）国有经济造林','公顷','8'],
            ['（2）集体经济造林','公顷','9'],
            ['2.非公有经济造林','公顷','10'],
            ['按林种用途分'],
            ['1.用材林','公顷','11'],
            ['       其中：速生丰产林','公顷','12'],
            ['2.经济林','公顷','13'],
            ['3.防护林','公顷','14'],
            ['4.薪炭林','公顷','15'],
            ['5.特种用途林','公顷','16'],
            ['二、有林地造林面积','公顷','17'],
            ['1.林冠下造林','公顷','18'],
            ['2.飞播营林','公顷','19'],
            ['3.有林地和灌木林地新封','公顷','20'],
            ['三、更新造林','公顷','21'],
            ['四、低产低效林改造面积','公顷','22'],
            ['五、四旁（零星）植树','株','23'],
            ['六、年末实有封山（沙）育林面积','公顷','24'],
            ['七、未成林抚育作业面积','公顷','25'],
            ['八、未成林抚育实际面积','公顷','26'],
            ['九、成林抚育面积','公顷','27'],
            ['其中：中、幼龄林抚育面积','公顷','28'],
            ['十、抚育改造出材量','立方米','29'],
            ['其中：中、幼龄林抚育出材量','立方米','30'],
            ['十一、林木种子采集量','吨','31'],
            ['十二、当年苗木产量','株','32'],
            ['十三、育苗面积','公顷','33'],
            ['其中：本年新增育苗面积','公顷','34'],
            ['十四、年末实有母树林面积','公顷','35'],
            ['十五、年末实有种子园面积','公顷','36'],
            ['十六、主要林产品产量','—'],
            ['     1.天然生漆','吨','37'],
            ['     2.油桐籽','吨','38'],
            ['     3.油茶籽','吨','39'],
            ['     4.乌桕子','吨','40'],
            ['     5.五倍子','吨','41'],
            ['     6.棕  片','吨','42'],
            ['     7.天然松脂','吨','43'],
            ['     8.竹笋干','吨','44'],
            ['     9.紫  胶（原胶）','吨','45'],
            ['十七、竹木采伐','—'],
            ['     1.木材','万立方米','46'],
            ['      　 其中：村及村以下采伐','万立方米','47'],
            ['     2.竹材','万根','48'],
            ['  　 其中：村及村以下采伐','万根','49'],
            ['     (1)楠竹','万根','50'],
            ['     (2)杂竹','万根','51'],
            ['十八、其它补充产品产量','—'],
            ['     1.核  桃','吨','52'],
            ['     2.板  栗','吨','53'],
            ['     3.松  子','吨','54'],
            ['     4.花  椒','吨','55'],
            ['     5.八  角','吨','56']

        ]

    }),

    columns: [
        {
            text: '指标名称',
            columns: [{
                text: '甲',
                width:200,
                dataIndex: '甲',
            }]
        }, {
            text: '计量单位',
            columns: [{
                width:200,
                text: '乙',
                align: 'center',
                dataIndex: '乙',
            }]
        }, {
            text: '代码',
            columns: [{
                width:200,
                text: '丙',
                align: 'center',
                dataIndex: '丙',
            }]
        }, {
            text: '数量',
            columns: [{
                width:200,
                text: '1',
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
    footerItems: [
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
            '1.本表由各市、州、直管市、林区统计局报送。<br />' +
            '2.统计范围是辖区内全部农业生产经营户和经营单位。<br />' +
            '3.报送时间为2016年12月25日。'

        }
    ]


});