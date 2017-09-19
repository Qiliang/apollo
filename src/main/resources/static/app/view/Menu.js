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
                            text: '农 村 劳 动 力 转 移 季 报',
                            cmp: 'Kits.view.tables.END01'
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
                            text: '农村基层组织及户数、人口、从业人员情况',
                            cmp: 'Kits.view.tablehz.SNN01'
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
                            cmp: 'Kits.view.data.Shop'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '审核公式查看',
                            cmp: 'Kits.view.data.Rider'
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
