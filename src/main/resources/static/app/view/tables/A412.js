Ext.define('Kits.view.tables.A412', {
    extend: 'Kits.view.tables.Base',
    title: '蔬菜、瓜果生产情况',
    hzcolumn:'乙',
    headerItems: [
        {
            html: '<br /><br /><br /><br />综合机关名称：'
        },
        {
            html: '<br /><br /><br /><br />2016年',
        },
        {
            html: '表    号：A412表<br /> ' +
            '制表机关：国家统计局 <br />' +
            '文    号：国统字(2016)125号<br />' +
            '有效期至：2018年1月<br />' +
            '计量单位：千公顷、吨'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['i','甲', '乙', '1', '2'],
        data: [
            [0,'一、蔬菜及食用菌','1','       '],
            [0,'（一）叶菜类','2'],
            [1,'其中：芹  菜','3'],
            [4,'油  菜','4'],
            [4,'菠  菜','5'],
            [0,'（二）白菜类','6'],
            [1,'其中：大白菜','7'],
            [0,'（三）甘蓝类','8'],
            [1,'其中：卷心菜（结球甘蓝）','9'],
            [0,'（四）根茎类','10'],
            [1,'其中：白萝卜','11'],
            [4,'胡萝卜','12'],
            [4,'生  姜','13'],
            [4,'榨菜头','14'],
            [0,'（五）瓜菜类','15'],
            [1,'其中：黄  瓜','16'],
            [4,'南  瓜   ','17'],
            [4,'冬  瓜','18'],
            [0,'（六）豆类','19'],
            [1,'其中：豇  豆','20'],
            [4,'四季豆','21'],
            [0,'（七）茄果类','22'],
            [1,'其中：茄  子','23'],
            [4,'辣  椒','24'],
            [4,'西红柿','25'],
            [0,'（八）葱蒜类','26'],
            [1,'其中：大  葱','27'],
            [4,'蒜  头','28'],
            [0,'（九）水生菜类','29'],
            [1,'其中：莲  藕','30'],
            [0,'（十）其他蔬菜','31'],
            [0,'（十一）食用菌','32','—'],
            [1,'1.干品   ','33','—'],
            [2,'其中：香  菇','34','—'],
            [5,'黑木耳','35','—'],
            [1,'2.鲜品','36','—'],
            [2,'其中：蘑  菇','37','—'],
            [0,'二、瓜果类','38'],
            [1,'其中：西  瓜','39'],
            [4,'香  瓜（甜瓜）','40'],
            [4,'草  莓','41']
        ]

    }),

    columns: [
        {
            text: '指 标 名 称',
            columns: [{
                text: '甲',
                width: 200,
                dataIndex: '甲',
            }]
        }, {
            text: '代码',
            columns: [{
                width: 200,
                text: '乙',
                align: 'center',
                dataIndex: '乙',
            }]
        }, {
            text: '播种面积',
            columns: [{
                width: 200,
                text: '1',
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
        }, {
            text: '产量',
            columns: [{
                width: 200,
                text: '2',
                align: 'center',
                dataIndex: '2',
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
            html: '说明： <br />' +
            '1.本表由各市、州、直管市、林区统计局报送。<br />' +
            '2.统计范围是辖区内全部农业生产经营户和经营单位。<br />' +
            '3.指标关系：01（面积、产量）=02+06+08+10+15+19+22+26+29+31+32;<br />' +
            '4.报送时间为季末28日前,报送方式为电子邮件。'


        }
    ]


});