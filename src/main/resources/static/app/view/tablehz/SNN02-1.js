Ext.define('Kits.view.tablehz.SNN02-1', {
    extend: 'Kits.view.tablehz.Base',
    title: '农业生产条件 （一）',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：神农年02表<br /> ' +
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
        "text" : "<div style='white-space:pre-line;height:127px'>编 号</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>一、耕地情况</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>（一）年初耕地总资源</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>01</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>75000.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>（二）年内增加</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>02</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>4500.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>  其中：</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>新开荒地</div>",
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
            }, {
                "text" : "<div style='white-space:pre-line;height:22px'>园地改为耕地</div>",
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
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>（三）年内减少</div>",
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
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>1、国家基建占地</div>",
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
            "text" : "<div style='white-space:pre-line;height:92px'>2、其他基建占地</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>07</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>3、退耕还林还草</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>08</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>4、退耕还渔</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'> 亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>09</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>5、退耕改园地</div>",
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
            "text" : "<div style='white-space:pre-line;height:92px'>（四）年末实有耕地总资源</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>77069.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>①常用耕地面积</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:57px'>合计</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>64500.0</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>1、水田</div>",
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
                "text" : "<div style='white-space:pre-line;height:57px'>2、旱地</div>",
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
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>②临时性耕地</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:57px'>合计</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>其中：25º以上坡耕地</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>17</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'></div>",
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
            html: '平衡关系：11=01+02-05=12+16。'
        }
    ]


});