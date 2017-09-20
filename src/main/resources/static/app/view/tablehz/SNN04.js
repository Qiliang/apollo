Ext.define('Kits.view.tablehz.SNN04', {
    extend: 'Kits.view.tablehz.Base',
    title: '年末茶叶水果园情况',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：神农年04表<br /> ' +
            '批准文号：神农架林区统计局'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '丙', '1'],
        data: []

    }),

    columns: [ {
        "text" : "<div style='white-space:pre-line;height:57px'>指标名称</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>计算单位</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>汇总代码</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>合</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>计</div>",
                        "width" : 60
                    } ]
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
        "text" : "<div style='white-space:pre-line;height:57px'>编  号</div>",
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
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>一、年末实有茶园面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>01</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>15953.1</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>其      中</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>本年采                                  摘面积</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>02</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>10996.0</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>本年新                    植面积</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>03</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>500.0</div>",
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
        "text" : "<div style='white-space:pre-line;height:57px'>二、年末果园面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>04</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>2505.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>在年末果园面积中：</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>苹果园</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>05</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>135.0</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>柑橘园</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>06</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0.0</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>梨园</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>07</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>193.0</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>葡萄园</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>08</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>20.0</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>桃园</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>09</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>170.0</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>猕猴桃园</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>10</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>50.0</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>其它                        果园</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>564.0</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>附报：当年零星植果树</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>苹果</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>百株</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>9000.5</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>梨子</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>百株</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0.5</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>桃子</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>百株</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>9022.5</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>柰李</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>百株</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>15</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>20.2</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>核桃</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>百株</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>7724.0</div>",
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
            html: '说明：“年末果园面积”指专业性果园，不包括瓜果类面积。'
        }
    ]

});