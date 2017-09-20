Ext.define('Kits.view.tablehz.A301', {
    extend: 'Kits.view.tablehz.Base',
    title: '畜禽规模养殖情况',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：A 3 0 1<br /> ' +
            '制表机关：神农架林区统计局'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '丙', '1'],
        data: []

    }),

    columns: [ {
        "text" : "<div style='white-space:pre-line;height:22px'>指标名称</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>计量单位</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>汇总代码</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:57px'>合计</div>"
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
        "text" : "<div style='white-space:pre-line;height:22px'>编号</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>00</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>01</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>02</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'>03</div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>一、生猪规模养殖户（单位）个数</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>家</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>1.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>9.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>生猪出栏</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>2.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>3955.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>生猪存栏</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>3.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>2450.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>其中：能繁母猪存栏</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>4.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>315.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>二、牛规模养殖户（单位）个数</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>家</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>5.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>3.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>牛出栏</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>6.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>92.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>牛存栏</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>7.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>138.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>其中：能繁母牛</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>8.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>24.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>三、羊规模养殖户（单位）个数</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>家</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>9.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>18.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>羊出栏</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>10.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>2355.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>羊存栏</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>11.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>1940.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>四、家禽规模养殖户（单位）个数</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>家</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>12.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>5.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>家禽出笼</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>13.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>52000.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>其中：鸡</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>14.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>52000.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>家禽存笼</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>15.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>31000.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>其中：鸡</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>只</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>16.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>31000.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>禽蛋产量</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>17.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>3500.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
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
            html: '说明：1本表填报范围为规模以上农户和生产单位。<br>'+
            '2、规模标准：生猪出栏500头，家禽存笼或出笼15000只,牛出栏或存栏130头，羊出栏1000只。<br>'+
            '3、本表采用全面调查方法取得。'
        }
    ]

});