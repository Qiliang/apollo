Ext.define('Kits.view.tablehz.A308', {
    extend: 'Kits.view.tablehz.Base',
    title: '主要畜牲业生产情况',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：A 3 0 8<br /> ' +
            '制表机关：神农架林区统计局'
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
                    "text" : "<div style='white-space:pre-line;height:57px'>合 计</div>"
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>本年</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>上年</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>一、畜禽存栏</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:57px'>猪</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>01</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>39494.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>牛</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>03</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>6057.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>羊</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>07</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>30255.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>活家禽</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>10.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>264250.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>二、畜禽出栏</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:57px'>猪</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>15.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>41605.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>牛</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>16.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>1367.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>羊</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>17.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>18123.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>活家禽</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>20.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>312824.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>三、畜禽产品产量</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:57px'>猪肉</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>23.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>4957.45</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>牛肉</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>24.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>208.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>208.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>羊肉</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>25.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>436.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>禽肉</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>28.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>432.82</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>禽蛋</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>30.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>297.8</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>生牛奶</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>32.0</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：能繁殖母猪</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>02</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>1771.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>1.肉牛</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>04</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>359.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>2.奶牛</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>05</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>3.役用牛</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>06</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>3771.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>1.山羊</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>08</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>30255.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>2.绵羊</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>09</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：活鸡</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>11.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>223438.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>其中：肉鸡</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>12.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>77560.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>蛋鸡</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>13.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>19203.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>活鸭</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>14.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>3450.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>1.山羊</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>18.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>17974.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>2.绵羊</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>19.0</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：活鸡</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>21.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>231345.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>活鸭</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>22.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>10560.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>1.山羊肉</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>26.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>353.55</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>2.绵羊肉</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>27.0</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：鸡肉</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>29.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>201.42000000000002</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>其中：鸡收</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>31.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>135.8</div>",
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
            html: '说明：1.统计范围是辖区内全部农业生经营单位及养殖户。<br>'+
            '2.本表存栏指标为年末时点数，出栏及产量指标为全年累计数。<br>'+
            '3.报送时间为2014年12月25日前。'
        }
    ]

});