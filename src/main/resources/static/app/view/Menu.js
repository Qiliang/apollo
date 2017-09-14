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
                            cmp: 'Kits.view.data.Shop'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '企业101表信息列表',
                            cmp: 'Kits.view.data.Rider'
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
                            cmp: 'Kits.view.data.Shop'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '数据填报列表',
                            cmp: 'Kits.view.data.Rider'
                        }, {
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '历史数据列表',
                            cmp: 'Kits.view.data.Shop'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '个人中心',
                            cmp: 'Kits.view.data.Rider'
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
                            cmp: 'Kits.view.data.Shop'
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
                            cmp: 'Kits.view.data.Shop'
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
                            cmp: 'Kits.view.data.Shop'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '历史综合数据导入',
                            cmp: 'Kits.view.data.Rider'
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
                            cmp: 'Kits.view.data.Shop'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '历史综合数据查询',
                            cmp: 'Kits.view.data.Rider'
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
                            text: '权限管理',
                            cmp: 'Kits.view.data.Rider'
                        },{
                            iconCls: 'x-fa fa-table',
                            leaf: true,
                            text: '组织结构管理',
                            cmp: 'Kits.view.data.Rider'
                        }
                    ]
                },
                {
                    iconCls: 'x-fa fa-send-o',
                    text: '消息通知',
                    cmp: 'Kits.view.Messages',
                    leaf: true
                },
                {
                    iconCls: 'x-fa fa-database',
                    text: '数据备份',
                    cmp: 'Kits.view.Backup',
                    leaf: true
                }
            ]
        }
    }

});
