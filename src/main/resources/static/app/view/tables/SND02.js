Ext.define('Kits.view.tables.SND02', {
    extend: 'Kits.view.tables.Base',
    title: '畜特、水产、电讯季节报',
    tableid: '神农定2表',
    headerItems:[
        {
            html: '<br />综合机关名称：'
        },
        {
            html: '<br />2016年',
        },
        {
            html: '表    号：神农定2表<br /> ' +
            '制表机关：神农架林区统计局'
        }
    ],

    store:Ext.create('Ext.data.ArrayStore', {

        fields: ['i','甲', '乙', '丙', '1'],
        data: [
            [0,'一、出栏肉猪头数','头','1'],
            [0,'二、猪肉产量','吨','2'],
            [0,'三、出售和自宰的肉用牛','头','3'],
            [0,'四、牛肉产量','吨','4'],
            [0,'五、出售和自宰的肉用羊','只','5'],
            [0,'六、羊肉产量','吨','6'],
            [0,'七、出售和自宰的肉用家禽','只','7'],
            [0,'八、禽肉产量','吨','8'],
            [0,'九、禽蛋产量','吨','9'],
            [0,'十、季末大牲畜存栏','头','12'],
            [1,'其中：牛','头','13'],
            [0,'十一、季末生猪存栏','头','14'],
            [1,'其中：能繁殖的母猪','头','15'],
            [0,'十二、季末山羊存栏','只','16'],
            [0,'十三、季末家禽存栏','只','18'],
            [0,'十四、本季水产品产量','吨','21'],
            [0,'十五、造林面积','亩','23']
        ]
    }),

    columns: [
        {
            text: '指 标 名 称',
            columns: [{
                text: '甲',
                width:200,
                dataIndex: '甲',
            }]
        }, {
            text: '计量单位',
            columns: [{
                text: '乙',
                width:200,
                align: 'center',
                dataIndex: '乙',
            }]
        }, {
            text: '代  码',
            columns: [{
                text: '丙',
                width:200,
                align: 'center',
                dataIndex: '丙',
            }]
        }, {
            text: '数量',
            columns: [{
                text: '1',
                width:200,
                align: 'center',
                dataIndex: '1',
                editor: {

                    field: {
                        xtype: 'numberfield',
                        minValue: 0,
                        allowBlank: true
                    }
                }
            }]
        }

    ],
    footerItems:[
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
            html: '说明：<span style="float: right;">注：生猪、牛2800、174为省局核定数据</span><br /> '+
            '1、本表只填本季数。<br />' +
            '2、造林面积只在二季度末报1—6月份累计数，其他季度免报。<br /> '+
            '3、上报时间为3月28日、6月28日、9月28日'
        }
    ]




});