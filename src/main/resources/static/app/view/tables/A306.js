Ext.define('Kits.view.tables.A306', {
    extend: 'Kits.view.tables.Base',
    title: '茶叶、水果及食用坚果生产情况',

    headerItems: [
        {
            html: '综合机关名称：'
        },
        {
            html: '2016年',
        },
        {
            html: '表    号：A306表<br /> ' +
            '制表机关：国家统计局 <br />' +
            '文    号：国统字(2016)122号<br />' +
            '有效期至：2017年6月<br />' +
            '计量单位：吨、公顷'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '1'],
        data: [
            ['一、茶叶产量合计','1'],
            ['绿茶','2'],
            ['青茶','3'],
            ['红茶','4'],
            ['黑茶','5'],
            ['黄茶','6'],
            ['白茶','7'],
            ['其它茶叶','8'],
            ['二、园林水果','9'],
            ['　　1.苹果','10'],
            ['    其中：国光苹果','11'],
            ['2.梨','12'],
            ['    3.柑橘类','13'],
            ['    　　其中：柑','14'],
            ['        　　  橘','15'],
            ['          　  橙','16'],
            ['          　  柚','17'],
            ['4.其他园林水果','18'],
            ['其中：桃','19'],
            ['猕猴桃','20'],
            ['葡萄','21'],
            ['红枣','22'],
            ['柿子','23'],
            ['三、食用坚果','24'],
            ['        其中：核桃','25'],
            [' 板栗','26'],
            ['            　松子','27'],
            ['四、年末实有茶园面积','28'],
            ['    其中：本年采摘面积','29'],
            ['五、年末果园面积','30'],
            ['其中：苹果园','31'],
            ['梨  园','32'],
            ['柑橘园','33'],
            ['桃  园','34'],
            ['猕猴桃园','35'],
            ['葡萄园','36'],
            ['其它果园面积','37']
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
                text: '甲',
                width:200,
                dataIndex: '甲',
            }]
        }, {
            text: '代码',
            columns: [{
                width:200,
                text: '乙',
                align: 'center',
                dataIndex: '乙',
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
            '2.“年末果园面积”指专业性果园，不包括瓜果类面积。<br />' +
            '3.平衡关系：1=2+3+4+5+6+7+8，9=10+12+13+18，10≥11，13=14+15+16+17，18≥19+20+21+22+23，24≥25+26+27， 28≥29,30=31+32+33+34+35+36+37。<br />' +
            '4.报送时间为2016年12月25日。'

        }
    ]


});