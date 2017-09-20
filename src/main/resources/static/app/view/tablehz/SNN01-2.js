Ext.define('Kits.view.tablehz.SNN01-2', {
    extend: 'Kits.view.tablehz.Base',
    title: '农村基层组织及户数、人口、从业人员情况（二）',
    headerItems: [
        {
            html: '<br />综合机关名称：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：神农年01表(续)<br /> ' +
            '批准文号：神农架林区统计局'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '丙', '1'],
        data: []

    }),

    columns: [ {
        "text" : "<div style='white-space:pre-line;height:162px'>农村基层组织及户数、人口、从业人员情况(二）</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>粮食作物生产情况（三）</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>经济作物生产情况（一）</div>"
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:162px'>编  号</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>--</div>",
                "width" : 60
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>（接前三、）</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:22px'>（接前（四））</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:92px'>e、仓储及邮电通讯业</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>32.0</div>",
                        "width" : 60
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:92px'>f、信息传输计算机服务和软件业</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>33.0</div>",
                        "width" : 60
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:92px'>g、批发零售贸易业</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>34.0</div>",
                        "width" : 60
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:92px'>h、住宿和餐饮业</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>35.0</div>",
                        "width" : 60
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:92px'>i、其它非农行业</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>36.0</div>",
                        "width" : 60
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:92px'>③农林牧渔场从业人员合计</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>45.0</div>",
                        "width" : 60
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:92px'>a、农业从业人员</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>46.0</div>",
                        "width" : 60
                    } ]
                } ]
            }, {
                "text" : "<div style='white-space:pre-line;height:92px'>b、非农业从业人员</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                    "columns" : [ {
                        "text" : "<div style='white-space:pre-line;height:22px'>47.0</div>",
                        "width" : 60
                    } ]
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>四、人口与计划生育</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:127px'>（一）当年出生人口</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>48.0</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>（二）当年死亡人口</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>49.0</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>（三）计划生育指标数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>50.0</div>",
                    "width" : 60
                } ]
            } ]
        } ]
    }, {
        "text" : "<div style='white-space:pre-line;height:22px'>附报：农村总户数总人口中：</div>",
        "columns" : [ {
            "text" : "<div style='white-space:pre-line;height:127px'>享受五保的户数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>户</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>51.0</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>享受五保的人数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>52.0</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>具有五保条件而实际未享受五保的户数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>户</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>53.0</div>",
                    "width" : 60
                } ]
            } ]
        }, {
            "text" : "<div style='white-space:pre-line;height:127px'>当年贫困人口数</div>",
            "columns" : [ {
                "text" : "<div style='white-space:pre-line;height:22px'>人</div>",
                "columns" : [ {
                    "text" : "<div style='white-space:pre-line;height:22px'>55.0</div>",
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