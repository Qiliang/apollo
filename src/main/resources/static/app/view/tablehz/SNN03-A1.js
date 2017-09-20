Ext.define('Kits.view.tablehz.SNN03-A1', {
    extend: 'Kits.view.tablehz.Base',
    title: '粮食作物生产情况（一）',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：神农年03表<br /> ' +
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
                            "text" : "<div style='white-space:pre-line;height:22px'>代码</div>"
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
                    "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>农作物总播种面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>001</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>种值业总收入</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>－</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>002</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>一、全年粮食</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>003</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>004</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>总产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>005</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>（一）夏收粮食</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>－－</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>006</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>007</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>总产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>008</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>1、小麦</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'> 元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>009</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>010</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>011</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>2、蚕豌豆</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>  元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'> 万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>012</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>013</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨 </div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>014</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>3、杂粮</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>     元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>015</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>016</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>017</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>4、马铃薯</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>025</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>026</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>027</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>其中： 大麦</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>018</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>单产</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>公斤</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>019</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>020</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>燕麦</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>021</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>022</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>乔麦</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>元</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>万元</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>面积</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>023</div>",
                            "width" : 60
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>产量</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>024</div>",
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