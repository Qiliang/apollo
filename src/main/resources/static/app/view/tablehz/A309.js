Ext.define('Kits.view.tablehz.A309', {
    extend: 'Kits.view.tablehz.Base',
    title: '其他畜牲业生产情况',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：A 3 0 9<br /> ' +
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
            "text" : "<div style='white-space:pre-line;height:22px'>计算单位</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>汇总代码</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:57px'>合计</div>"
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>本    年</div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>编 号</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>乙</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>丙</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>00</div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>  一、</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>活牲畜（除猪、牛、羊外）</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>01</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>其中：能繁母牛</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>头</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>02</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>0.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>二</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>家兔</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>07</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>三</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>其它肉产量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>08</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>四</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>其它奶产量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>五</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>山羊毛产量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
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
                "text" : "<div style='white-space:pre-line;height:57px'>1.山羊粗毛</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>11.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>2.山羊绒</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>12.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>六</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>绵羊毛产量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>13.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:57px'>细羊毛</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>14.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>半细羊毛</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>15.0</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>七</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>天然蜂蜜产量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>16.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>八</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>其他禽蛋产量（除鸡蛋）</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>17.0</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>九</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>蚕茧产量</div>"
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:57px'>桑蚕茧</div>"
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>柞蚕茧</div>"
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
            html: '说明：1.统计范围是辖区内全部农业生经营单位及养殖户。<br>'+
            '2.本表存栏指标为年末时点数，出栏及产量指标为全年累计数。<br>'+
            '3.报送时间为2014年12月25日前。'
        }
    ]

});