Ext.define('Kits.view.tables.A302', {
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
            html: '表    号：A302表<br /> ' +
            '制表机关：国家统计局 <br />' +
            '文    号：国统字(2016)125号<br />' +
            '有效期至：2017年6月<br />' +
            '计量单位：千公顷、吨'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '1', '2', '3'],
        data: [
            ['粮食作物', '1'],
            [' (一)夏收粮食', '2'],
            ['  1.小麦', '3'],
            ['  2.蚕蜿豆', '4'],
            ['  3.杂粮', '5'],
            ['其中:大麦', '6'],
            ['     燕麦', '7'],
            ['     乔麦', '8'],
            ['  4.马铃薯', '9'],
            ['(二)秋收粮食', '10'],
            ['  1.稻谷', '11'],
            ['(1)早稻', '12'],
            ['(2)中稻(含一季晚)', '13'],
            ['(3)双季晚稻', '14'],
            ['2.玉米', '15'],
            ['3.粟谷', '16'],
            ['4.高梁', '17'],
            ['5.大豆', '18'],
            ['6.杂豆', '19'],
            ['  其中:绿豆', '20'],
            ['       红小豆', '21'],
            ['7.薯类', '22'],
            ['(1)红薯', '23'],
            ['(2)马铃薯', '24'],
            ['8.其它杂粮', '25']
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
            text: '面积(千公顷)',
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
            text: '总产量(吨)',
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
        }, {
            text: '单产(公斤)',
            columns: [{
                width:200,
                text: '3',
                align: 'center',
                dataIndex: '3',
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
            '3.指标关系：1=2+10；2=3+4+5+9;10=11+15+16+17+18+19+22+25 11=12+13+14 19≥20+21 22=23+24<br />' +
            '4.报送时间为2016年12月25日。<br />'

        }
    ]


});