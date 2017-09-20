Ext.define('Kits.view.Menu', {
    extend: 'Ext.list.Tree',
    rootVisible: false,
    useArrows: true,
    id: 'mainMenu',
    //ui:'nav',
    listeners: {
        selectionchange: function (me, selected, eOpts) {
            //selected.set('expanded',true)
            var center = Ext.getCmp('center');
            center.removeAll(true);
            var cmp = selected.get('cmp')
            if (!cmp)return;
            center.add(Ext.create(cmp));
        }
    },
    store: {
        root: {
            text: 'Ext JS',
            expanded: true,
            children: [
                {
                    iconCls: 'x-fa fa-home',
                    text: '首页',
                    cmp: 'Kits.view.Home',
                    leaf: true
                },
                {
                    iconCls: 'x-fa fa-folder-o',
                    text: '--表--',

                    children: [
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农 业 生 产 条 件（一）',
                            cmp: 'Kits.view.tables.01',
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农 业 生 产 条 件（二）',
                            cmp: 'Kits.view.tables.02',
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农业机械化情况',
                            cmp: 'Kits.view.tables.03'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农 村 劳 动 力 转 移 情 况',
                            cmp: 'Kits.view.tables.04'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '粮 食 作 物 生 产 情 况',
                            cmp: 'Kits.view.tables.A302'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '经 济 作 物 生 产 情 况',
                            cmp: 'Kits.view.tables.A303'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '设施农业生产情况',
                            cmp: 'Kits.view.tables.A304'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '茶叶、水果及食用坚果生产情况',
                            cmp: 'Kits.view.tables.A306'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '林 业 生 产 情 况',
                            cmp: 'Kits.view.tables.A307'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '主 要 畜 禽 生 产 情 况',
                            cmp: 'Kits.view.tables.A308'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '非 主 要 畜 禽 生 产 情 况',
                            cmp: 'Kits.view.tables.A309'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '畜 禽 规 模 养 殖 情 况',
                            cmp: 'Kits.view.tables.05'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '渔 业 生 产 情 况',
                            cmp: 'Kits.view.tables.06'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农 林 牧 渔 业 总 产 值',
                            cmp: 'Kits.view.tables.M301'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农林牧渔业总产值年度计算表',
                            cmp: 'Kits.view.tables.M304'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农 林 牧 渔 业 增 加 值 计 算 表',
                            cmp: 'Kits.view.tables.M302'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '县(市)社会经济基本情况',
                            cmp: 'Kits.view.tables.G301-2'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '乡(镇)社会经济基本情况',
                            cmp: 'Kits.view.tables.G101'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '粮食作物生产情况季节报表',
                            cmp: 'Kits.view.tables.A402'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '经济作物生产情况季节报表',
                            cmp: 'Kits.view.tables.A403'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农业生产经营单位农作物播种面积情况',
                            cmp: 'Kits.view.tables.A404'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '全年主要农林牧渔产品产量及产值预计',
                            cmp: 'Kits.view.tables.END02'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '畜 禽 水 产 季 节 报',
                            cmp: 'Kits.view.tables.A406'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '蔬菜、瓜果生产情况',
                            cmp: 'Kits.view.tables.A412'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农林牧渔业总产值年度计算表',
                            cmp: 'Kits.view.tables.M401'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农林牧渔业总产值季度计算表',
                            cmp: 'Kits.view.tables.M404'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农村劳动力转移季报',
                            cmp: 'Kits.view.tables.END01'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '畜特、水产、电讯季节报',
                            cmp: 'Kits.view.tables.SND02'
                        }
                    ]
                },
                {
                    iconCls: 'x-fa fa-folder-o',
                    text: '--汇总表--',
                    children: [
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农村基层组织及户数、人口、从业人员情况(一)',
                            cmp: 'Kits.view.tablehz.SNN01-1'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农村基层组织及户数、人口、从业人员情况(二)',
                            cmp: 'Kits.view.tablehz.SNN01-2'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农业生产条件(一)',
                            cmp: 'Kits.view.tablehz.SNN02-1'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农业生产条件(二)',
                            cmp: 'Kits.view.tablehz.SNN02-2'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '粮食作物生产情况(一)',
                            cmp: 'Kits.view.tablehz.SNN03-A1'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '粮食作物生产情况(二)',
                            cmp: 'Kits.view.tablehz.SNN03-A2'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '粮食作物生产情况(三)',
                            cmp: 'Kits.view.tablehz.SNN03-A3'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '经济作物生产情况(一)',
                            cmp: 'Kits.view.tablehz.SNN03-B1'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '经济作物生产情况(二)',
                            cmp: 'Kits.view.tablehz.SNN03-B2'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '经济作物生产情况(三)',
                            cmp: 'Kits.view.tablehz.SNN03-B3'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '经济作物生产情况(四)',
                            cmp: 'Kits.view.tablehz.SNN03-B4'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '经济作物生产情况(五)',
                            cmp: 'Kits.view.tablehz.SNN03-B5'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '经济作物生产情况(六)',
                            cmp: 'Kits.view.tablehz.SNN03-B6'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '经济作物生产情况(七)',
                            cmp: 'Kits.view.tablehz.SNN03-B7'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '经济作物生产情况(八)',
                            cmp: 'Kits.view.tablehz.SNN03-B8'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '年末茶叶水果园情况',
                            cmp: 'Kits.view.tablehz.SNN04'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '林业生产情况表(一)',
                            cmp: 'Kits.view.tablehz.A307-1'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '林业生产情况表(二)',
                            cmp: 'Kits.view.tablehz.A307-2'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '林业生产情况表(三)',
                            cmp: 'Kits.view.tablehz.A307-3'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '设施农业生产情况',
                            cmp: 'Kits.view.tablehz.A304'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '其他畜牲业生产情况',
                            cmp: 'Kits.view.tablehz.A309'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '畜禽规模养殖情况',
                            cmp: 'Kits.view.tablehz.A301'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农村劳动力转移情况(一)',
                            cmp: 'Kits.view.tablehz.ENN04-1'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '农村劳动力转移情况(二)',
                            cmp: 'Kits.view.tablehz.ENN04-2'
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '渔业生产情况',
                            cmp: 'Kits.view.tablehz.ENN06'
                        }
                    ]
                },
                {
                    iconCls: 'x-fa fa-folder-o',
                    text: '制度管理',
                    children: [
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '制度列表',
                            cmp: 'Kits.view.zhiDu.ZhiDuList'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '直报列表',
                            cmp: 'Kits.view.zhiDu.ZhiBaoList'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '直报定时发布列表',
                            cmp: 'Kits.view.zhiDu.ZhiBaoScheduleList'
                        }
                    ]
                },
                {
                    iconCls: 'x-fa fa-folder-o',
                    text: '调查对象管理',
                    children: [
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '行政区划',
                            cmp: 'Kits.view.diaoChaDuiXiang.xzqh'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '企业101表信息列表',
                            cmp: 'Kits.view.diaoChaDuiXiang.QiYeList'
                        }
                        ]
                },
                {
                    iconCls: 'x-fa fa-folder-o',
                    text: '数据录入',
                    leaf: false,
                    children: [
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '登录',
                            cmp: 'Kits.view.shuJuLuRu.denglu'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '数据填报列表',
                            cmp: 'Kits.view.shuJuLuRu.TianBaoList'
                        }, {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '历史数据列表',
                            cmp: 'Kits.view.shuJuLuRu.TianBaoLiShiList'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '个人中心',
                            cmp: 'Kits.view.shuJuLuRu.AddGeRenZhongXin'
                        }
                    ]
                },
                {
                    iconCls: 'x-fa fa-folder-o',
                    text: '公式审核',
                    children: [
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '基础报送信息公式审核',
                            cmp: 'Kits.view.gongShiShenhe.GongShiShenHeList'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '审核公式查看',
                            cmp: 'Kits.view.gongShiShenhe.GongShiList'
                        }
                    ]
                },
                {
                    iconCls: 'x-fa fa-folder-o',
                    text: '数据汇总',
                    children: [
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '常规汇总',
                            cmp: 'Kits.view.shuJuHuiZong.BaseTabeView'
                        }
                    ]
                },
                {
                    iconCls: 'x-fa fa-folder-o',
                    text: '数据查询',
                    children: [
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '基础数据查询',
                            cmp: 'Kits.view.shuJuChaXun.BaseQuery'
                        }
                    ]
                },
                {
                    iconCls: 'x-fa fa-folder-o',
                    text: '历史数据导入',
                    children: [
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '历史基础数据导入',
                            cmp: 'Kits.view.liShiShuju.SimpleImport'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '历史综合数据导入',
                            cmp: 'Kits.view.liShiShuju.ComplexImport'
                        }
                    ]
                },
                {
                    iconCls: 'x-fa fa-folder-o',
                    text: '历史数据查询',
                    children: [
                        {
                            iconCls: 'x-fa fa-folder-o',
                            text: '2012',
                        },
                        {
                            iconCls: 'x-fa fa-folder-o',
                            text: '2013',
                        },
                        {
                            iconCls: 'x-fa fa-folder-o',
                            text: '2014',
                        },
                        {
                            iconCls: 'x-fa fa-folder-o',
                            text: '2015',
                        },
                        {
                            "iconCls" : "x-fa fa-folder-o",
                            "text" : "2016",
                            "leaf" : false,
                            "children" : [ {
                                "iconCls" : "x-fa fa-folder-o",
                                "text" : "2016年人口专业",
                                "leaf" : false,
                                "children" : [ {
                                    "iconCls" : "x-fa fa-folder-o",
                                    "text" : "2016年人口专业",
                                    "leaf" : false,
                                    "children" : [ {
                                        "iconCls" : "x-fa fa-folder-o",
                                        "text" : "劳动工资报表",
                                        "leaf" : false,
                                        "children" : [ {
                                            "iconCls" : "x-fa fa-folder-o",
                                            "text" : "劳动工资季报",
                                            "leaf" : false,
                                            "children" : [ {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "一季度",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "202-1从业人员及工资总额基层表",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "202-1从业人员和工资总额汇总表",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "三季度",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "202-1从业人员及工资总额基层表",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "202-1从业人员和工资情况汇总表",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "二季度",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "202-1从业人员及工资总额基层表",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "202-1从业人员和工资情况汇总表",
                                                    "leaf" : true
                                                } ]
                                            } ]
                                        }, {
                                            "iconCls" : "x-fa fa-folder-o",
                                            "text" : "劳动工资年报",
                                            "leaf" : false,
                                            "children" : [ {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "102-1从业人员和工资情况基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "i301-1从业人员和工资情况汇总表.",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "i301-2从业人员和工资情况汇总表.",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "i301-3从业人员和工资情况汇总表.",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "i3014从业人员和工资情况汇总表汇总表..",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "i301从业人员和劳动报酬情况汇总表",
                                                "leaf" : true
                                            } ]
                                        } ]
                                    } ]
                                } ]
                            }, {
                                "iconCls" : "x-fa fa-folder-o",
                                "text" : "2016年住户专业数据",
                                "leaf" : false,
                                "children" : [ {
                                    "iconCls" : "x-fa fa-folder-o",
                                    "text" : "住户专业季度",
                                    "leaf" : false,
                                    "children" : [ {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "神农架2016年住户调查资料(一季度)",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "神农架2016年住户调查资料(三季度)",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "神农架2016年住户调查资料(二季度)",
                                        "leaf" : true
                                    } ]
                                }, {
                                    "iconCls" : "x-fa fa-folder-o",
                                    "text" : "住户专业年报",
                                    "leaf" : false,
                                    "children" : [ {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "2016年住户收支与生活状况调查年报表",
                                        "leaf" : true
                                    } ]
                                }, {
                                    "iconCls" : "x-fa fa-folder-o",
                                    "text" : "省队反馈数据",
                                    "leaf" : false,
                                    "children" : [ {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "2016年分市州居民可支配收入（1季度）",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "2016年分市州居民可支配收入（前3季度）",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "2016年分市州居民可支配收入（半年报）",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "2016年分市州居民可支配收入（年报）",
                                        "leaf" : true
                                    } ]
                                } ]
                            }, {
                                "iconCls" : "x-fa fa-folder-o",
                                "text" : "2016年基本单位名录库专业",
                                "leaf" : false,
                                "children" : [ {
                                    "iconCls" : "x-fa fa-folder-o",
                                    "text" : "2016年基本单位名录库专业",
                                    "leaf" : false,
                                    "children" : [ {
                                        "iconCls" : "x-fa fa-folder-o",
                                        "text" : "基本单位名录库季报",
                                        "leaf" : false,
                                        "children" : [ {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "MLK101-1法人单位基本情况",
                                            "leaf" : true
                                        }, {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "MLK101-2产业活动单位基本情况",
                                            "leaf" : true
                                        } ]
                                    } ]
                                } ]
                            }, {
                                "iconCls" : "x-fa fa-folder-o",
                                "text" : "2016年居民消费价格专业",
                                "leaf" : false,
                                "children" : [ {
                                    "iconCls" : "x-fa fa-folder-o",
                                    "text" : "居民消费价格报表",
                                    "leaf" : false,
                                    "children" : [ {
                                        "iconCls" : "x-fa fa-folder-o",
                                        "text" : "居民消费价格年报",
                                        "leaf" : false,
                                        "children" : [ {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年12月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        } ]
                                    }, {
                                        "iconCls" : "x-fa fa-folder-o",
                                        "text" : "居民消费价格月报",
                                        "leaf" : false,
                                        "children" : [ {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年10月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        }, {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年11月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        }, {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年12月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        }, {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年1月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        }, {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年2月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        }, {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年3月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        }, {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年4月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        }, {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年5月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        }, {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年6月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        }, {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年7月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        }, {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年8月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        }, {
                                            "iconCls" : "x-fa fa-table",
                                            "text" : "2016年9月神农架林区规格品价格一览表",
                                            "leaf" : true
                                        } ]
                                    } ]
                                }, {
                                    "iconCls" : "x-fa fa-table",
                                    "text" : "注明",
                                    "leaf" : true
                                } ]
                            }, {
                                "iconCls" : "x-fa fa-folder-o",
                                "text" : "2016年建筑业专业",
                                "leaf" : false,
                                "children" : [ {
                                    "iconCls" : "x-fa fa-folder-o",
                                    "text" : "建筑业报表",
                                    "leaf" : false,
                                    "children" : [ {
                                        "iconCls" : "x-fa fa-folder-o",
                                        "text" : "建筑业季报",
                                        "leaf" : false,
                                        "children" : [ {
                                            "iconCls" : "x-fa fa-folder-o",
                                            "text" : "建筑业基层表",
                                            "leaf" : false,
                                            "children" : [ {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "C203建筑业财务报表第4季报报基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "C203建筑业财务表第1季报基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "C203建筑业财务表第2季报基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "C203建筑业财务表第3季报基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "C204-1建筑业生产情况表第1季报基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "C204-1建筑业生产情况表第2季报基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "C204-1建筑业生产情况表第3季报基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "C204-1建筑业生产情况表第4季报报基层表",
                                                "leaf" : true
                                            } ]
                                        } ]
                                    }, {
                                        "iconCls" : "x-fa fa-folder-o",
                                        "text" : "建筑业年报",
                                        "leaf" : false,
                                        "children" : [ {
                                            "iconCls" : "x-fa fa-folder-o",
                                            "text" : "建筑业基层表",
                                            "leaf" : false,
                                            "children" : [ {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "C103建筑业财务报表年报基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "C204-1建筑业生产情况表年报基层表",
                                                "leaf" : true
                                            } ]
                                        } ]
                                    } ]
                                } ]
                            }, {
                                "iconCls" : "x-fa fa-folder-o",
                                "text" : "2016年服务业专业",
                                "leaf" : false,
                                "children" : [ {
                                    "iconCls" : "x-fa fa-folder-o",
                                    "text" : "服务业上报数据",
                                    "leaf" : false,
                                    "children" : [ {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "10月F20003_规模以上服务业企业分行业中类汇总表_429021000000_20160010_20170320",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "11月F20003_规模以上服务业企业分行业中类汇总表_429021000000_20160011_20170320",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "12月F20003_规模以上服务业企业分行业中类汇总表_429021000000_20160012_20170320",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "2月F20003_规模以上服务业企业分行业中类汇总表_429021000000_20160002_20170320",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "3月F20003_规模以上服务业企业分行业中类汇总表_429021000000_20160003_20170320",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "4月F20003_规模以上服务业企业分行业中类汇总表_429021000000_20160004_20170320",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "5月F20003_规模以上服务业企业分行业中类汇总表_429021000000_20160005_20170320",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "6月F20003_规模以上服务业企业分行业中类汇总表_429021000000_20160006_20170320",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "7月F20003_规模以上服务业企业分行业中类汇总表_429021000000_20160007_20170320",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "8月F20003_规模以上服务业企业分行业中类汇总表_429021000000_20160008_20170320",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "9月F20003_规模以上服务业企业分行业中类汇总表_429021000000_20160009_20170320",
                                        "leaf" : true
                                    } ]
                                }, {
                                    "iconCls" : "x-fa fa-folder-o",
                                    "text" : "服务业基层报表",
                                    "leaf" : false,
                                    "children" : [ {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "429021_F203_1-10月服务业基层报表",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "429021_F203_1-11月服务业基层报表",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "429021_F203_1-12月服务业基层报表",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "429021_F203_1-3月服务业基层报表",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "429021_F203_1-4月服务业基层报表",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "429021_F203_1-5月服务业基层报表",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "429021_F203_1-6月服务业基层报表",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "429021_F203_1-7月服务业基层报表",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "429021_F203_1-8月服务业基层报表",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "429021_F203_1-9月服务业基层报表",
                                        "leaf" : true
                                    }, {
                                        "iconCls" : "x-fa fa-table",
                                        "text" : "429021_F203_2月服务业基层报表",
                                        "leaf" : true
                                    } ]
                                } ]
                            }, {
                                "iconCls" : "x-fa fa-folder-o",
                                "text" : "2016年贸经专业",
                                "leaf" : false,
                                "children" : [ {
                                    "iconCls" : "x-fa fa-folder-o",
                                    "text" : "2016年贸经报表",
                                    "leaf" : false,
                                    "children" : [ {
                                        "iconCls" : "x-fa fa-folder-o",
                                        "text" : "贸经年报",
                                        "leaf" : false,
                                        "children" : [ {
                                            "iconCls" : "x-fa fa-folder-o",
                                            "text" : "基层表",
                                            "leaf" : false,
                                            "children" : [ {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_E204-1_1-12月批发零售商品销售和库存基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_S204-1_1-12月住宿餐饮基层报表",
                                                "leaf" : true
                                            } ]
                                        }, {
                                            "iconCls" : "x-fa fa-folder-o",
                                            "text" : "汇总表",
                                            "leaf" : false,
                                            "children" : [ {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "上报数据",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "E41002_Y01012月限上法人消费品零售额增速（可比口径）_429021000000_20160002_20170523",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "反馈数据",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至12月社会品消费品零售总额",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至12月社会品消费品零售总额（全省）",
                                                    "leaf" : true
                                                } ]
                                            } ]
                                        } ]
                                    }, {
                                        "iconCls" : "x-fa fa-folder-o",
                                        "text" : "贸经月报",
                                        "leaf" : false,
                                        "children" : [ {
                                            "iconCls" : "x-fa fa-folder-o",
                                            "text" : "2016年社会品消费品零售总额 反馈表",
                                            "leaf" : false,
                                            "children" : [ {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "1-2季度",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "省返2016年1-2季度销售额营业额增速",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "10月",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至10月社会品消费品零售总额",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至10月社会品消费品零售总额（全省）",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "11月",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至10月社会品消费品零售总额（全省）",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至11月社会品消费品零售总额",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "12月",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至12月社会品消费品零售总额",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至12月社会品消费品零售总额（全省）",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "2月",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至2月社会品消费品零售总额.xls",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "3月",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1季度社会品消费品零售总额",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至3月社会品消费品零售总额",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至3月社会品消费品零售总额（全省）",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "4月",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至4月社会品消费品零售总额",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至4月社会品消费品零售总额（全省）",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "5月",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至5月社会品消费品零售总额",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至5月社会品消费品零售总额（全省）",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "6月",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至5月社会品消费品零售总额（全省）",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至6月社会品消费品零售总额.xls",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "7月",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至7月社会品消费品零售总额.xls",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "8月",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至8月社会品消费品零售总额.xls",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至9月社会品消费品零售总额（全省）",
                                                    "leaf" : true
                                                } ]
                                            }, {
                                                "iconCls" : "x-fa fa-folder-o",
                                                "text" : "9月",
                                                "leaf" : false,
                                                "children" : [ {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2015年1-3季度四大行业累计销售额（营业额）",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至3季度社会品消费品零售总额增速",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至9月社会品消费品零售总额.xls",
                                                    "leaf" : true
                                                }, {
                                                    "iconCls" : "x-fa fa-table",
                                                    "text" : "2016年1至9月社会品消费品零售总额（全省）",
                                                    "leaf" : true
                                                } ]
                                            } ]
                                        }, {
                                            "iconCls" : "x-fa fa-folder-o",
                                            "text" : "2016年社会品消费品零售总额 基层表",
                                            "leaf" : false,
                                            "children" : [ {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_E204-11-3月批发零售商品销售库存基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_E204-11-4月批发零售商品销售和库存基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_E204-1_1-10月批发零售商品销售和库存基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_E204-1_1-11月批发零售商品销售和库存基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_E204-1_1-12月批发零售商品销售和库存基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_E204-1_1-5月批发零售商品销售和库存基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_E204-1_1-6月批发零售商品销售和库存基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_E204-1_1-7月批发零售商品销售和库存基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_E204-1_1-8月批发零售商品销售和库存基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_E204-1_1-9月批发零售商品销售和库存基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_E204-1_2月批发零售商品销售和库存基层表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_S204-1_1-10月住宿餐饮基层报表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_S204-1_1-11月住宿餐饮基层报表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_S204-1_1-12月住宿餐饮基层报表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_S204-1_1-3月住宿餐饮基层报表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_S204-1_1-4月住宿餐饮基层报表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_S204-1_1-5月住宿餐饮基层报表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_S204-1_1-6月住宿餐饮基层报表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_S204-1_1-7月住宿餐饮基层报表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_S204-1_1-8月住宿餐饮基层报表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_S204-1_1-9月住宿餐饮基层报表",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "429021_S204-1_2月住宿餐饮基层报表",
                                                "leaf" : true
                                            } ]
                                        }, {
                                            "iconCls" : "x-fa fa-folder-o",
                                            "text" : "2016年社会品消费品零售总额 汇总表",
                                            "leaf" : false,
                                            "children" : [ {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160003_20170523",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160004_20170523",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160005_20170523",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160006_20170523",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160007_20170523",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160008_20170523",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160009_20170523",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160010_20170523",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160011_20170523",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "E41002_Y0101+限上法人消费品零售额增速（可比口径）_429021000000_20160012_20170523",
                                                "leaf" : true
                                            }, {
                                                "iconCls" : "x-fa fa-table",
                                                "text" : "E41002_Y01012月限上法人消费品零售额增速（可比口径）_429021000000_20160002_20170523",
                                                "leaf" : true
                                            } ]
                                        } ]
                                    } ]
                                } ]
                            } ]
                        },
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '历史基础数据查询',
                            cmp: 'Kits.view.liShiShuju.SimpleQuery'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '历史综合数据查询',
                            cmp: 'Kits.view.liShiShuju.ComplexQuery'
                        }
                    ]
                },
                {
                    iconCls: 'x-fa fa-folder-o',
                    text: '权限管理',
                    children: [
                        {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '用户管理',
                            cmp: 'Kits.view.quanXian.User'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '角色管理',
                            cmp: 'Kits.view.quanXian.Role'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '机构管理',
                            cmp: 'Kits.view.quanXian.Branch'
                        }
                    ]
                },
                {
                    iconCls: 'x-fa fa-send-o',
                    text: '消息通知',
                    cmp: 'Kits.view.xiTong.Message',
                    leaf: true
                },
                {
                    iconCls: 'x-fa fa-database',
                    text: '数据备份',
                    cmp: 'Kits.view.xiTong.Backup',
                    leaf: true
                }
            ]
        }
    }

});
