Ext.define('Kits.view.tables.A403', {
    extend: 'Kits.view.tables.Base',
    title: '经济作物生产情况季节报表',
    hzcolumn:'乙',
    tableid: 'A403表',
    headerItems: [
        {
            html: '<br /><br /><br />综合机关名称：'
        },
        {
            html: '<br /><br /><br />2016年',
        },
        {
            html: '表    号：A403表<br /> ' +
            '制表机关：国家统计局 <br />' +
            '文    号：国统字(2016)125号<br />' +
            '有效期至：2018年1月<br />' +
            '计量单位：千公顷、万吨'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['i','甲', '乙', '1', '2'],
        data: [
            [0,'经济作物', '1', '—'],
            [1,'一、油料', '2', ''],
            [2,'花  生', '3'],
            [2,'油菜籽', '4'],
            [3,'其中：冬油菜籽', '5'],
            [1,'二、棉花', '6'],
            [1,'三、生麻', '7'],
            [1,'四、糖料', '8'],
            [2,'其中：甘蔗', '9'],
            [1,'五、烟叶（未加工烟草）', '10', ''],
            [1,'六、中草药材类', '11', '    '],
            [1,'七、蔬菜及食用菌', '12'],
            [1,'八、瓜果类', '13'],
            [1,'九、其他农作物', '14'],
            [2,'其中：青饲料', '15']
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
            '1.本表由各市、州、直管市、林区统计局报送。<br />' +
            '2.统计范围是辖区内全部农业生产经营户和经营单位。<br />' +
            '3.全部经济作物播种面积全年预计8月20日前上报，产量全年预计11月15日前。<br />' +
            '4.冬油菜籽：12月20日前上报播种面积；产量预计5月10日前，实际6月10日前。'

        }
    ]


});