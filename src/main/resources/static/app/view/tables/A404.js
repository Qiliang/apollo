Ext.define('Kits.view.tables.A404', {
    extend: 'Kits.view.tables.Base',
    title: '农业生产经营单位农作物播种面积情况',

    headerItems: [
        {
            html: '综合机关名称：'
        },
        {
            html: '2016年',
        },
        {
            html: '表    号：A404表<br /> ' +
            '制表机关：国家统计局 <br />' +
            '文    号：国统字(2016)125号<br />' +
            '有效期至：2018年1月<br />' +
            '计量单位：千公顷'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '1', '2'],
        data: [
            ['合    计', '1'],
            ['一、谷物', '2'],
            ['（一）稻谷', '3'],
            ['1.早稻', '4'],
            ['2.中稻和一季晚稻', '5'],
            ['3.双季晚稻', '6'],
            ['（二）小麦', '7'],
            ['1.冬小麦', '8'],
            ['    2.春小麦', '9'],
            ['（三）玉米', '10'],
            ['（四）谷子', '11'],
            ['（五）高粱', '12'],
            ['（六）其他谷物', '13'],
            ['?       其中：大麦', '14'],
            ['燕麦', '15'],
            ['荞麦', '16'],
            ['二、豆类', '17'],
            ['      其中：大  豆', '18'],
            ['            绿  豆', '19'],
            ['            红小豆', '20'],
            ['三、薯类', '21'],
            ['（一）马铃薯', '22'],
            ['（二）甘  薯', '23'],
            ['四、油料', '24'],
            ['      其中：花  生', '25'],
            ['            油菜籽', '26'],
            ['?           芝  麻', '27'],
            ['??          胡麻籽', '28'],
            ['            葵花籽', '29'],
            ['五、棉花', '30'],
            ['六、生麻', '31'],
            ['其中：生黄红麻', '32'],
            ['            生苎麻', '33'],
            ['            生大麻', '34'],
            ['            生亚麻', '35'],
            ['七、糖料', '36'],
            ['（一）甘蔗', '37'],
            ['（二）甜菜', '38'],
            ['八、烟叶（未加工烟草）', '39'],
            ['其中：烤烟（未去梗烤烟叶）', '40'],
            ['九、中草药材', '41'],
            ['十、蔬菜（含菜用瓜）', '42'],
            ['十一、瓜果类', '43'],
            ['        其中：西瓜', '44'],
            ['              香瓜（甜瓜）', '45'],
            ['              草莓', '46'],
            ['十二、其他农作物', '47'],
            ['其中：青饲料', '48']

        ]

    }),

    columns: [
        {
            text: '指 标 名 称',
            columns: [{
                text: '甲',
                width: 200,
                dataIndex: '甲',
            }]
        }, {
            text: '代码',
            columns: [{
                width: 200,
                text: '乙',
                align: 'center',
                dataIndex: '乙',
            }]
        }, {
            text: '播种面积',
            columns: [{
                width: 200,
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
                width: 200,
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
            '1.本表由各市、州、神农架林区统计局报送，报送时间与A402表和A403表一致。 <br />' +
            '2.统计范围内为辖区内全部非农户生产经营单位经营的农作物播种面积。 <br />' +
            '3.报送方式为电子邮件。 <br />' +
            '4.农作物播种面积指本年收获的农作物播种面积，包括上年秋冬播种本年收获和本年播种本年收获的面积。 <br />' +
            '5.农业生产经营单位是指农户以外的国营农林牧渔场(包括农垦、司法、侨办系统办农场)、集体农场、联营农场、私营或个体农场。'

        }
    ]


});