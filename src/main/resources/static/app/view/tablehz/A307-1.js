Ext.define('Kits.view.tablehz.A307-1', {
    extend: 'Kits.view.tablehz.Base',
    title: '林业生产情况表(一)',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：A307表<br /> ' +
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
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>乙</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>丙</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>本年</div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>编号</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>00</div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>一、荒山荒（沙）地造林面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>按造林方式分</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:57px'>1.人工造林</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>01</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>竹林面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>02</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>乔木林面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>03</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>2.飞播造林</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>04</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>3.无林地和疏林地新封</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>05</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>按经济成份分</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:57px'>1.公有经济造林</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>06</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>2.非公有经济造林</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>09</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>按林种用途分</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:57px'>1.用材林</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>10</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>速生丰产林</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>2.经济林</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>3.防护林</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>4.薪炭林</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>5.特种用途林</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>15</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>二、有林地和灌木林地新封</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>1.林冠下造林</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>17.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>2.飞播营林</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>18.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>3.有林地和灌木林地新封</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>19.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>三、更新造林</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>20.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>四、低产低效林改造面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>21.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>五、四旁（零星）植树</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>株</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>22.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>六、年末实有封山（沙）育林面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>23.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
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