Ext.define('Kits.view.tablehz.ENN06', {
    extend: 'Kits.view.tablehz.Base',
    title: '渔业生产情况',
    headerItems: [
        {
            html: '<br />填报单位：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：神农年06表<br /> ' +
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
                    "text" : "<div style='white-space:pre-line;height:57px'>合    计</div>"
                }, {
                    "text" : "<div style='white-space:pre-line;height:22px'>本年</div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>编码</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>一、水产品产量</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:92px'>（一）淡水捕捞产量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>01</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>（二）淡水养殖产量</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>06</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'></div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:127px'>二、淡水养殖面积</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>顷</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>15</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>1.鱼类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>02</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>2.虾类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>03</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>3.贝类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>04</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>4.其它类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>05</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>1.鱼类</div>",
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
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>2.虾蟹类</div>",
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
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>3.贝类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:57px'>4.其它类</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>其中：螃蟹</div>",
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
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>克氏原螯虾</div>",
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
        "text" : "<div style='white-space:pre-line;height:22px'>其中：龟鳖</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'></div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>珍珠</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>吨</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
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
            html: ''
        }
    ]

});