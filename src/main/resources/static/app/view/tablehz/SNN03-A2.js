Ext.define('Kits.view.tablehz.SNN03-A2', {
    extend: 'Kits.view.tablehz.Base',
    title: '粮食作物生产情况（二）',
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
        "text" : "<div style='white-space:pre-line;height:57px'>指标名称</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>统计核算单价</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>总收入</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>项目</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>计算单位</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>汇总代码</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>编号</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>A</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>B</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>－</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>－</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>－</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>（二）秋收粮食</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>－－</div>"
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>1、稻谷(中稻)</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>031</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>032</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>033</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>2、玉米</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>034</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>035</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>036</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>3、粟谷</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>040</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>041</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>042</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>4、高梁</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>040</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>041</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>042</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>5、黄豆</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>049</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>050</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>051</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>6、杂豆</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>052</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>053</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>054</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>其中：杂交玉米</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'> 万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>037</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>038</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>039</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>其中：绿豆</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'> 元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>058</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>059</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>060</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>红小豆</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>061</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>062</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>063</div>",
                            "width" : 60
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