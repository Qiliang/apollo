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
        "text" : "<div style='white-space:pre-line;height:162px'>指标名称</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>计算单位</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>汇总代码</div>",
                "dataIndex" : "汇总代码",
                "width" : 100
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:162px'>编号</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>—</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>—</div>",
                "dataIndex" : "—",
                "width" : 100
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>一、农村基层组织情况</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>（一）乡镇政府个数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:92px'></div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>01</div>",
                        "dataIndex" : "01",
                        "width" : 80
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:57px'>1、乡政府</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>02</div>",
                            "dataIndex" : "02",
                            "width" : 80
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:57px'>2、镇政府</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>03</div>",
                            "dataIndex" : "03",
                            "width" : 80
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>（二）办事处</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>04</div>",
                    "dataIndex" : "04",
                    "width" : 80
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>（三）村 民委员会</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>05</div>",
                    "dataIndex" : "05",
                    "width" : 80
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>（四）村  民  小 组</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>06</div>",
                    "dataIndex" : "06",
                    "width" : 80
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
                    "dataIndex" : "07",
                    "width" : 80
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>通汽车村数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>08</div>",
                    "dataIndex" : "08",
                    "width" : 80
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>通有线电视村</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>09</div>",
                    "dataIndex" : "09",
                    "width" : 80
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>通宽带村数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>10</div>",
                    "dataIndex" : "10",
                    "width" : 80
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>三、乡村、人口、户数及农村从业人员情况</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:127px'>（一）乡村 户 数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>11</div>",
                    "dataIndex" : "11",
                    "width" : 80
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>（二）乡村人口数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:92px'></div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>12</div>",
                        "dataIndex" : "12",
                        "width" : 80
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:57px'>男</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>13</div>",
                            "dataIndex" : "13",
                            "width" : 80
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:57px'>女</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>14</div>",
                            "dataIndex" : "14",
                            "width" : 80
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>（三）乡村劳动力资  源</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:92px'></div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>15</div>",
                        "dataIndex" : "15",
                        "width" : 80
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:22px'>其中</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:57px'>男</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>16</div>",
                            "dataIndex" : "16",
                            "width" : 80
                        } ]
                    } ]
                }, {
                    "text" : "<div style='white-space:pre-line;height:57px'>女</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>17</div>",
                            "dataIndex" : "17",
                            "width" : 80
                        } ]
                    } ]
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:22px'>（四）乡村从业人员数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:92px'></div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>18</div>",
                        "dataIndex" : "18",
                        "width" : 80
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:22px'>男</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:57px'>其中：从事农业人员数</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>19</div>",
                            "dataIndex" : "19",
                            "width" : 80
                        } ]
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:22px'>女</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:57px'>其中：从事农业人员数</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>个</div>",
                        "columns" : [ {
                            "text" : "<div style='white-space:pre-line;height:22px'>20</div>",
                            "dataIndex" : "20",
                            "width" : 80
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
            html: '说明：1.本表由各市、州、直管市、林区统计局报送。<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.此表中乡镇个数、镇个数、办事处、村委会(居委会)个数必须与当地民政部门的数据一致。<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.平衡关系：06、 07、08≤04，10=11+12，13=14+15，16=17+19，18≤17，20≤19，21﹥22，22=23+24<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.报送时间为2016年12月25日。'
        }
    ]


});