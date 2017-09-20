Ext.define('Kits.view.tablehz.SNN03-B6', {
    extend: 'Kits.view.tablehz.Base',
    title: '经济作物生产情况(六)',
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
                                "text" : "<div style='white-space:pre-line;height:22px'>本 年</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>(九)水生菜类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0184</div>",
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
                            "text" : "<div style='white-space:pre-line;height:22px'>0185</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：莲藕</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0186</div>",
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
                            "text" : "<div style='white-space:pre-line;height:22px'>0187</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>（十）其它蔬菜</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0188</div>",
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
                            "text" : "<div style='white-space:pre-line;height:22px'>0189</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>（十一）食用菌（干鲜混合）</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0190</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0191</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：香茹（干品）</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0192</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0193</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>黑木耳（干品格</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0194</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0195</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>磨茹（鲜品质）</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0196</div>",
                            "columns" : [ {
                                "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
                                "width" : 60
                            } ]
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产  量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0197</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>五、瓜果类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0198</div>",
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
                            "text" : "<div style='white-space:pre-line;height:22px'>0199</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：西瓜</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0200</div>",
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
                            "text" : "<div style='white-space:pre-line;height:22px'>0201</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>甜瓜</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0202</div>",
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
                            "text" : "<div style='white-space:pre-line;height:22px'>0203</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>草莓</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>0204</div>",
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
                            "text" : "<div style='white-space:pre-line;height:22px'>0205</div>",
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