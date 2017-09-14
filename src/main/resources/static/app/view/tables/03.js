Ext.define('Kits.view.tables.03', {
    extend: 'Kits.view.tables.Base',
    title: '农  业  机  械  化  情  况',

    headerItems: [
        {
            html: '综合机关名称：'
        },
        {
            html: '2016年',
        },
        {
            html: '表    号：鄂农年03表<br /> ' +
            '制表机关：湖北省统计局 <br />' +
            '批准文号：国统制［2016］122号<br />' +
            '有效期至：2017年6月'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '丙', '1'],
        data: [
            ['农用机械总动力合计', '千瓦', '1'],
            ['柴油发动机动力', '千瓦', '2'],
            ['汽油发动机动力', '千瓦', '3'],
            ['电动机动力', '千瓦', '4'],
            ['其他机械动力', '千瓦', '5'],
            ['一、耕作机械'],
            ['大中型拖拉机', '台', '6'],
            ['', '千瓦', '7'],
            ['小型拖拉机', '台', '8'],
            ['', '千瓦', '9'],
            ['大中型拖拉机配套农具', '台', '10'],
            ['小型拖拉机配套农具', '台', '11'],
            ['二、农用排灌机械'],
            ['农用排灌柴油机', '台', '12'],
            ['', '千瓦', '13'],
            ['农用排灌电动机', '台', '14'],
            ['', '千瓦', '15'],
            ['机电井', '眼', '16'],
            ['农用水泵', '台', '17'],
            ['节水喷灌机械', '套', '18'],
            ['三、收获机械'],
            ['联合收割机', '台', '19'],
            ['', '千瓦', '20'],
            ['自走式机动割晒机', '台', '21'],
            ['', '千瓦', '22'],
            ['机动脱粒机', '台', '23'],
            ['四、渔业机械及设备'],
            ['养殖渔船', '艘', '24'],
            ['   捕捞渔船', '艘', '25'],
            ['五、运输机械'],
            ['农用运输车', '辆', '26'],
            ['', '千瓦', '27'],
            ['六、其他农用机械'],
            ['推土机', '台', '28'],
            ['', '千瓦', '29'],
            ['七、农业机械化项目水平', '', '30'],
            ['当年实际机耕地面积', '千公顷'],
            ['当年实际机械播种面积', '千公顷', '31'],
            ['当年实际机械收获面积', '千公顷', '32']
        ]

    }),


    columns: [
        {
            text: '指 标 名 称',
            width: 200,
            columns: [{
                text: '甲',
                flex: 1,
                dataIndex: '甲',
            }]
        }, {
            text: '计量单位',
            width: 200,
            columns: [{
                flex: 1,
                text: '乙',
                align: 'center',
                dataIndex: '乙',
            }]
        }, {
            text: '代  码',
            width: 200,
            columns: [{
                flex: 1,
                text: '丙',
                align: 'center',
                dataIndex: '丙',
            }]
        }, {
            text: '数量',
            width: 200,
            columns: [{
                flex: 1,
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
            '1.统计部门免报。<br />' +
            '2.机耕面积按耕地面积计算，机播面积按播种面积计算，机收面积按实际收获面积计算。<br />' +
            '3.报送时间为2017年2月28日。<br />'

        }
    ]

})
;