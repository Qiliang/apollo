Ext.define('Kits.view.tablehz.SNN03-B2', {
    extend: 'Kits.view.tablehz.Base',
    title: '经济作物生产情况(二)',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：神农年03表(续)<br /> ' +
            '批准文号：神农架林区统计局'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '丙', '1'],
        data: []

    }),
    columns: [ {
        "text" : "<div style='white-space:pre-line;height:22px'>指标名称</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>统计核算单价</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>总   收  入</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>项          目</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>计算单位</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>汇总代码</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'>合</div>",
                                "width" : 60
                            }, {
                                "text" : "<div style='white-space:pre-line;height:22px'>本  年</div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>编号</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>A</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>B</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
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
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>二、烟 叶类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0100</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单 产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公 斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0101</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>总  产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0102</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：烤烟</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0103</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单 产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公 斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0104</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'>133.0</div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>总  产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0105</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>三、药材类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0106</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>总  产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0107</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>1、黄莲</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0108</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公  斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0109</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>2、柴胡</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0110</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公  斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0111</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>3、党参</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0112</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公  斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0113</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>4、天麻</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0114</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公  斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0115</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>5、黄姜</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0116</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公  斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0117</div>",
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
            html: '注：农、林、牧、渔收入单位一律为万元，保留1位小数。<br/>'+
                '收入平衡关系：种植业收入＝一＋二＋三＋四＋五＋六＋七＋八＋九。'
        }
    ]

});