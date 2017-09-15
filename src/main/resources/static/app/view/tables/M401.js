Ext.define('Kits.view.tables.M401', {
    extend: 'Kits.view.tables.Base',
    title: '农林牧渔业总产值年度计算表',

    headerItems: [
        {
            html: '综合机关名称：'
        },
        {
            html: '2016年',
        },
        {
            html: '表    号：M401<br /> ' +
            '制表机关：国家统计局 <br />' +
            '文    号：国统字(2016)125号<br />' +
            '有效期至：2018年1月'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields:  ['甲','乙','1','2','3','4','5','6'],
        data: [
            ['一、农林牧渔业总产值合计','1'],
            ['(一)农业产值','2'],
            ['其中：谷物','3'],
            ['      蔬菜','4'],
            ['(二)林业产值','5'],
            ['(三)牧业产值','6'],
            ['其中：猪','7'],
            ['家禽','8'],
            ['(四)渔业产值','9'],
            ['(五)农林牧渔服务业','10'],
            ['二、农林牧渔业增加值','11'],
            ['(一)农业增加值','12'],
            ['(二)林业增加值','13'],
            ['(三)牧业增加值','14'],
            ['(四)渔业增加值','15'],
            ['(五)农林牧渔服务业增加值','16']


        ]

    }),

    columns: [
        {
            text: '指标名称',
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
            text: '按现行价格计算',
            columns: [{
                align: 'center',
                text: '1—本季',
                columns: [{
                    align: 'center',
                    text: '本期',
                    columns: [{
                        align: 'center',
                        text: '1',
                        width: 100,
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
                    align: 'center',
                    text: '上年同期',
                    columns: [{
                        align: 'center',
                        text: '2',
                        width: 100,
                        dataIndex: '2',
                        editor: {
                            field: {
                                xtype: 'numberfield',
                                minValue: 0,
                                allowBlank: true
                            }
                        }
                    }]
                }]
            }, {
                align: 'center',
                text: '本季',
                columns: [{
                    align: 'center',
                    text: '本期',
                    columns: [{
                        align: 'center',
                        text: '3',
                        width: 100,
                        dataIndex: '3',
                        editor: {
                            field: {
                                xtype: 'numberfield',
                                minValue: 0,
                                allowBlank: true
                            }
                        }
                    }]
                }, {
                    align: 'center',
                    text: '上年同期',
                    columns: [{
                        align: 'center',
                        text: '4',
                        width: 100,
                        dataIndex: '4',
                        editor: {
                            field: {
                                xtype: 'numberfield',
                                minValue: 0,
                                allowBlank: true
                            }
                        }
                    }]
                }]
            }]
        }, {
            text: '按现行价格计算',
            columns: [{
                text: '1—本季',
                align: 'center',
                columns: [{
                    align: 'center',
                    text: '5',
                    width: 100,
                    dataIndex: '5',
                    editor: {
                        field: {
                            xtype: 'numberfield',
                            minValue: 0,
                            allowBlank: true
                        }
                    }
                }]

            },{
                text: '1—本季',
                align: 'center',
                columns: [{
                    align: 'center',
                    text: '6',
                    width: 100,
                    dataIndex: '6',
                    editor: {
                        field: {
                            xtype: 'numberfield',
                            minValue: 0,
                            allowBlank: true
                        }
                    }
                }]

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
            '2.农林牧渔业总产值要求按照新的行业分类标准计算。<br />' +
            '3.报送时间为3月28日、6月28日、9月28日。'


        }
    ]


});