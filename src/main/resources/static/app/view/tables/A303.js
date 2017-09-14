Ext.define('Kits.view.tables.A303', {
    extend: 'Kits.view.tables.Base',
    title: '粮 食 作 物 生 产 情 况',

    headerItems: [
        {
            html: '综合机关名称：'
        },
        {
            html: '2016年',
        },
        {
            html: '表    号：A303表<br /> ' +
            '制表机关：国家统计局 <br />' +
            '文    号：国统字(2016)125号<br />' +
            '有效期至：2017年6月<br />' +
            '计量单位：千公顷、吨、万支、万盆'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '1', '2'],
        data: [
            ['经济作物','1','       —'],
            ['一、油料','2'],
            ['      其中：花  生','3'],
            ['            油菜籽','4'],
            ['?           芝  麻','5'],
            ['??          胡麻籽','6'],
            ['            葵花籽','7'],
            ['二、棉花','8'],
            ['三、生麻','9'],
            ['其中：生黄红麻','10'],
            ['            生苎麻','11'],
            ['             生大麻','12'],
            ['            生亚麻','13'],
            ['四、糖料','14'],
            ['其中：甘  蔗','15'],
            ['甜  菜','16'],
            ['五、烟叶（未加工烟草）','17'],
            ['  其中：烤烟（未去梗烤烟叶）','18'],
            ['六、中草药材','19','       —'],
            ['其中：人  参','20'],
            ['     　　　 甘  草','21'],
            ['     　　　 枸  杞','22'],
            ['七、蔬菜及食用菌','23'],
            ['（一）叶菜类','24'],
            ['其中：芹  菜','25'],
            ['       油  菜','26'],
            ['       菠  菜','27'],
            ['（二）白菜类','28'],
            ['        其中：大白菜','29'],
            ['（三）甘蓝类','30'],
            ['        其中：卷心菜（结球甘蓝）','31'],
            ['（四）根茎类','32'],
            ['        其中：白萝卜','33'],
            ['       胡萝卜','34'],
            ['              生  姜','35'],
            ['              榨菜头','36'],
            ['（五）瓜菜类','37'],
            ['        其中：黄  瓜','38'],
            ['           南  瓜   ','39'],
            ['              冬  瓜','40'],
            ['（六）豆类','41'],
            ['其中：豇  豆','42'],
            ['       四季豆','43'],
            ['（七）茄果类','44'],
            ['其中：茄  子','45'],
            ['          辣  椒','46'],
            ['          西红柿','47'],
            ['（八）葱蒜类','48'],
            ['其中：大  葱','49'],
            ['       蒜  头','50'],
            ['（九）水生菜类','51'],
            ['其中：莲  藕','52'],
            ['（十）其他蔬菜','53'],
            ['（十一）食用菌','54','—'],
            [' 　  1.干品   ','55','—'],
            ['其中:香  菇','56','—'],
            ['   　　       黑木耳','57','—'],
            ['     2.鲜品　　    ','58','—'],
            ['其中:蘑  菇','59','—'],
            ['八、瓜果类','60'],
            ['      其中：西  瓜','61'],
            ['            香  瓜（甜瓜）','62'],
            ['            草  莓','63'],
            ['九、其他农作物','64','—'],
            ['其中：青饲料','65','—'],
            ['十、特种农作物','','—     —','—'],
            ['花  卉','66','     —'],
            ['鲜切花','67','—       '],
            ['     盆栽观赏植物（包括盆景）','68','—'],
            ['    香料原料','69','—'],
            ['      其中：花  椒','70','—'],
            ['            八  角','71','—'],

        ]

    }),

    columns: [
        {
            text: '指 标 名 称',
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
            text: '播种面积',
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
        }, {
            text: '产量',
            columns: [{
                width:200,
                text: '2',
                align: 'center',
                dataIndex: '2',
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
            '3.指标关系：指标关系：01（面积）=02+08+09+14+17+19+23+60+64;23（面积、产量）=24+28+30+32+37+41+44+48+51+53+54<br />' +
            '4.报送时间为2016年12月25日。<br />'

        }
    ]


});