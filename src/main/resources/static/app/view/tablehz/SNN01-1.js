Ext.define('Kits.view.tablehz.SNN01-1', {
    extend: 'Kits.view.tablehz.Base',
    title: '农村基层组织及户数、人口、从业人员情况（一）',
    headerItems: [
        {
            html: '<br />综合机关名称：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：神农年01表<br /> ' +
            '批准文号：神农架林区统计局'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '丙', '1'],
        data: []

    }),

    columns: [ {
        "text" : "<div style='white-space:pre-line;height:162px;'>指标名称</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>计算单位</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>汇总代码</div>"
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:162px'>编  号</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>－</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>－</div>",
                "width" : 60
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>一、农村基层组织情况</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:127px'>（一）乡镇政府个数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>01</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>  1、乡政府</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>02</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>  2、镇政府</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>03</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>（二）办事处</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>04</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>（三）村 民委员会</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>05</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>（四）村  民  小 组</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>06</div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>二、农村社会基础设施</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:127px'>自来水受益村数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>07</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>通汽车村数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>08</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>通有线电视村</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>09</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>通宽带村数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>10</div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>三、乡村、人口、户数及农村从业人员情况</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:127px'>（一）乡村 户 数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>户</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>（二）乡村人口数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>男</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
                        "width" : 60
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:22px'>女</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:92px'>（三）乡村劳动力资  源</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>男</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
                        "width" : 60
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:22px'>女</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>17</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>（四）乡村从业人员数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>男</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:57px'>其中：从事农业人员数</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>20</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:22px'>女</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:57px'>其中：从事农业人员数</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>22</div>",
                            "width" : 60
                        } ]
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>四、国有农林牧渔场情况</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:127px'>（一）国有农林牧渔场总人口</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>23</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:57px'>（二）国有农林牧渔场从业人员</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:57px'>1、农业从业人员</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>25</div>",
                        "width" : 60
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:57px'>2、非农业从业人员</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>26</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>五、农业用地情况</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:127px'>1、耕地</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>27</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>2、园地</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>28</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>3、林地</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>29.0</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>4、草地</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>30.0</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>5、农业设施用地</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>亩</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>31.0</div>",
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
            html: '说明：1.本表由各市、州、直管市、林区统计局报送。<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.此表中乡镇个数、镇个数、办事处、村委会(居委会)个数必须与当地民政部门的数据一致。<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.平衡关系：06、 07、08≤04，10=11+12，13=14+15，16=17+19，18≤17，20≤19，21﹥22，22=23+24<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.报送时间为2016年12月25日。'
        }
    ]


});