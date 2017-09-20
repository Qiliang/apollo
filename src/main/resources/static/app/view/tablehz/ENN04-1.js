Ext.define('Kits.view.tablehz.ENN04-1', {
    extend: 'Kits.view.tablehz.Base',
    title: '农村劳动力转移情况(一)',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '批准文号：国统制[2009]    号<br /> ' +
            '计量单位:人、元'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '丙', '1'],
        data: []

    }),

    columns: [ {
        "text" : "<div style='white-space:pre-line;height:57px'>一、 农村人口</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>1.0</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>44809.0</div>",
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
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>农村劳动力资源</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>3.0</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>26909.0</div>",
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
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>农村从业人数</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>4.0</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>25148.0</div>",
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
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>在本乡镇从业人员</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>5.0</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>15632.0</div>",
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
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>1.从事农林牧渔业人员</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>6.0</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>11768.0</div>",
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
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>2.从事二、三产业人员</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>7.0</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>7265.0</div>",
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
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>  1、外出从业</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>总量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>8.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>9840.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>男</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>9.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>6737.0</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>   ①.外出从业人员文化程度</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>小学及以下</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>10.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>1553.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>初中</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>11.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>5894.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>高中及以上</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>12.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>2393.0</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>   ②按年龄状况分</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>20岁以下</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>13.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>1056.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>21岁—49岁</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>14.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>7963.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>50岁以上</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>15.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>821.0</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>  2.外出渠道</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>①自发</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>16.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>8955.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'> ②政府有关部门组织</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>17.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>0.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>③中介组织介绍</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>18.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>249.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>④企业招收</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>19.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>636.0</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>3、外出从业时间</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>1个月-3个月</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>20.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>680.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>3个月个月</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>21.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>2298.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>6个月以上</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>22.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>6862.0</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>4、外出从业地点</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>①内乡外</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>23.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>2420.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>②省内外</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>24.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>2058.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>③省外</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>25.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>5337.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>④港澳台</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>26.0</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>⑤境外</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>27.0</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>20.0</div>",
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
            html: '平衡关系：'
        }
    ]

});