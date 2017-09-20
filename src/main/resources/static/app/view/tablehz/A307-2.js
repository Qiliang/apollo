Ext.define('Kits.view.tablehz.A307-2', {
    extend: 'Kits.view.tablehz.Base',
    title: '林业生产情况表(二)',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：A307表(续)<br /> ' +
            '制表机关：神农架林区统计局'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '丙', '1'],
        data: []

    }),

    columns: [ {
        "text" : "<div style='white-space:pre-line;height:127px'>指标名称</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>计量单位</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>代码总汇</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:57px'>合计</div>"
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>本年</div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>编号</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>乙</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>丙</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>00</div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>七、未成林抚育作业面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>25.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>八、未成林抚育实际面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>26.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>九、成林抚育面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:57px'>其中：中、幼龄林抚育面积</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>28.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>十、抚育改造出材量</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:57px'>其中：中、幼龄林抚育出材量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>立方米</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>30.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>十一、林木种子采集量</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>31.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>十二、当年苗木产量</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>株</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>32.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>十三、育苗面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:57px'>其中：本年新增育苗面积</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>34.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>十四、年末实有母树林面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>35.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>十五、年末实有种子园面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>36.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>十六、主要林产品产量</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>1.天然生漆</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>37.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>2.油桐籽</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>38.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>3.油茶籽</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>39.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>4.乌桕子</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>40.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>5.五倍子</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>41.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>6.棕片</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>42.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>7.天然松脂</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>43.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>8.竹笋干</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>44.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>9.紫胶（原胶）</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>45.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
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