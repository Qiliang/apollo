Ext.define('Kits.view.tables.A406', {
    extend: 'Kits.view.tables.Base',
    title: '畜 禽 水 产 季 节 报',
    hzcolumn:'乙',
    headerItems: [
        {
            html: '<br /><br /><br /><br />综合机关名称：'
        },
        {
            html: '<br /><br /><br /><br />2016年',
        },
        {
            html: '表    号：A406表<br /> ' +
            '制表机关：国家统计局 <br />' +
            '文    号：国统字(2016)125号<br />' +
            '有效期至：2018年1月<br />' +
            '计量单位：千公顷'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields:  ['i','甲','乙','1','2','3'],
        data: [
            [0,'一、出栏肉猪头数','万头','1'],
            [0,'二、猪肉产量','吨','2'],
            [0,'三、出售和自宰的肉用牛','头','3'],
            [0,'四、牛肉产量','吨','4'],
            [0,'五、出售的自宰的肉用牛','只','5'],
            [0,'六、羊肉产量','吨','6'],
            [0,'七、出售的自宰的肉用家禽','万只','7'],
            [0,'八、禽肉产量','吨','8'],
            [0,'九、禽蛋产量','吨','9'],
            [0,'十、牛奶产量','吨','10'],
            [0,'十一、绵羊毛产量','公斤','11'],
            [0,'十二、季末大牧畜存栏','万头','12'],
            [1,'其中：牛','万头','13'],
            [0,'十三、季末生猪存栏','万头','14'],
            [1,'其中：能繁殖的母猪','万头','15'],
            [0,'十四、季末山羊存栏','只','16'],
            [0,'十五、季末绵羊存栏','只','17'],
            [0,'十六、季末家禽存笼','万只','18'],
            [0,'十七、蚕茧合计','吨','19'],
            [1,'其中：桑蚕茧','吨','20'],
            [4,'柞蚕茧','吨','21'],
            [0,'十八、本季水产品产量','吨','22'],
            [0,'十九、造林面积','千公顷','23']
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
            text: '单位',
            columns: [{
                width: 200,
                text: '乙',
                align: 'center',
                dataIndex: '乙',
            }]
        }, {
            text: '代码',
            columns: [{
                width: 200,
                text: '1',
                align: 'center',
                dataIndex: '1',
            }]
        }, {
            text: '1-本季累计',
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
        }, {
            text: '本季',
            columns: [{
                width: 200,
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
            '1.本表由各市、州、直管市、林区统计局报送。 <br />' +
            '2.万头保留两位小数。 <br />' +
            '3. 1-3季度的报送时间分别为3月28日、6月28日、9月28日，第四季度免报。'

        }
    ]


});