Ext.define('Kits.view.tablehz.SNN02-2', {
    extend: 'Kits.view.tablehz.Base',
    title: '农业生产条件 （二）',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：神农年02表(续)<br /> ' +
            '批准文号：神农架林区统计局'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '丙', '1'],
        data: []

    }),

    columns: [ {
        "text" : "<div style='white-space:pre-line;height:127px'>指标名称</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>计算单位</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>汇总代码</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:57px'>合    计</div>"
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>本    年</div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>编  号</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>二、农村主要能源及物质消耗</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>（一）乡、村办水电站数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>18.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>装机容量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万千瓦</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>19.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>发电量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万千瓦时</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>20.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>（二）农村用电量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万千瓦时</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>21.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>（三）农用化肥施用（实物）量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:57px'>合  计</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>吨  </div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>22.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>1、氮肥</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>吨  </div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>23.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>2、磷肥</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>吨  </div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>24.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>3、钾肥</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>吨  </div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>25.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>4、复合肥</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>吨  </div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>26.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>（四）农用簿膜使用量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:57px'>合  计</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>28.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:22px'>  其中：</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>地膜</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>29.0</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>地膜覆盖面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>30.0</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>（五）农用柴油使用量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨  </div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>31.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>（六）农药使用量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>27.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>三、农田水利建设情况</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>有效灌溉面积</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>32.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>旱涝保收面积</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>33.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>机电排灌面积</div>",
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
            html: '平衡关系：11=01+02-05=12+16。'
        }
    ]

});