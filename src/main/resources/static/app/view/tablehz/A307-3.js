Ext.define('Kits.view.tablehz.A307-3', {
    extend: 'Kits.view.tablehz.Base',
    title: '林业生产情况表(三)',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：A307表(续)<br /> ' +
            '批准文号：神农架林区统计局'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '丙', '1'],
        data: []

    }),

    columns: [ {
        "text" : "<div style='white-space:pre-line;height:92px'>指标名称</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>计量单位</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>代码总汇</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:57px'>合计</div>"
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>本    年</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>上    年</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:92px'>编号</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>乙</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>丙</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>00</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>01</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>十七、竹林采伐</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:57px'>1.木材</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>立方米</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>46.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>59827.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>其中：村及村以下采伐</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>立方米</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>47.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>29035.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>2.竹材</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>根</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>48.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>其中：村及村以下采伐</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>根</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>49.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>十八、其他补充产品产量</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:57px'>1.核桃</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>52.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>209.66</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>2.板栗</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>52.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>659.4</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>3.松子</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>53.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>25.42</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>4.花椒</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>54.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>0.4</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>5.八角</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>56.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>（1）（楠）</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>根</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>50.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>0.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>（2）杂竹</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>根</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>51.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>0.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    } ],
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
            html: '说明：1.统计范围是辖区内全部农业生产经营户和经营单位。'
        }
    ]

});