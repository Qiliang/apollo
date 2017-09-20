Ext.define('Kits.view.tablehz.SNN03-B5', {
    extend: 'Kits.view.tablehz.Base',
    title: '经济作物生产情况(五)',
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
        "text" : "<div style='white-space:pre-line;height:22px'>(五)瓜菜类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0158</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0159</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：黄瓜</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0160</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0161</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>冬瓜</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0162</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0163</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>（六）豆类（菜用）</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0164</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0165</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：豇豆</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0166</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0167</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>四季豆</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0168</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0169</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>（七）茄果菜类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0170</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0171</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：茄子</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0172</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0173</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>辣椒</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0174</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0175</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>西红柿</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0176</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0177</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>（八）葱蒜类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0178</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0179</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：大葱</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0180</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0181</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>蒜头</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0182</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'></div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0183</div>",
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