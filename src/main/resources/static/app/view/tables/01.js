Ext.define('Kits.view.tables.01', {
    extend: 'Kits.view.tables.Base',
    xtype:'tables01',
    title: '农 业 生 产 条 件（一）',
    headerItems:[
        {
            html: '<br /><br /><br />综合机关名称：',
        },
        {
            html: '<br /><br /><br />2016年',
        },
        {
            html: '表    号：鄂农年01表<br /> ' +
            '制表机关：湖北省统计局 <br />' +
            '批准文号：国统制［2016］122号<br />' +
            '有效期至：2017年6月'
        }
    ],

    store:Ext.create('Ext.data.ArrayStore', {

        fields: ['i','甲', '乙', '丙', '1'],
        data: [
            [0,'一、农村基层组织情况', '—', '—', '—'],
            [1,'(一)乡镇个数', '个', '01'],
            [3,'其中：镇个数', '个', '02'],
            [1,'(二)办事处', '个', '03'],
            [1,'(三)村民委员会', '个', '04'],
            [1,'(四)村民小组', '个', '05'],
            [0,'二、农村基础设施', '—', '—', '—'],
            [1,'自来水受益村数', '个', '06'],
            [1,'通有线电视村数', '个', '07'],
            [1,'通宽带村数', '个', '08'],
            [0,'三、乡村人口与从业人员', '—', '—', '—'],
            [1,'（一）乡村户数', '万户', '09'],
            [1,'（二）乡村人口数', '万人', '10'],
            [3,'1．男', '万人', '11'],
            [3,'2．女', '万人', '12'],
            [1,'（三）乡村劳动力资源数', '万人', '13'],
            [3,'1．男', '万人', '14'],
            [3,'2．女', '万人', '15'],
            [1,'（四）乡村从业人员数', '万人', '16'],
            [3,'1．男', '万人', '17'],
            [4,'其中：从事农业人员', '万人', '18'],
            [3,'2．女', '万人', '19'],
            [4,'其中：从事农业人员', '万人', '20'],
            [0,'四、国有农林牧渔场情况', '—', '—', '—'],
            [1,'（一）国有农林牧渔场总人口', '万人', '21'],
            [1,'（二）国有农林牧渔场从业人员', '万人', '22'],
            [3,'1、农业从业人员', '万人', '23'],
            [3,'2、非农业从业人员', '万人', '24'],
            [0,'五、农业用地情况', '—', '—', '—'],
            [3,'1．耕地', '千公顷', '25'],
            [3,'2．园地', '千公顷', '26'],
            [3,'3．林地', '千公顷', '27'],
            [3,'4．草地', '千公顷', '28'],
            [3,'5..农业设施用地', '千公顷', '29'],
            [0,'附报', '—', '—', '—'],
            [3,'国有农林牧渔场', '个', '30'],
            [3,'其中：农场', '个', '31'],
            [3,'林场', '个', '32'],
            [3,'畜牧场', '个', '33'],
            [3,'渔场', '个', '34'],
            [3,'果园场', '个', '35'],
            [3,'茶场', '个', '36'],
            [3,'其他', '个', '37']
        ]

    }),

    columns: [
        {
            text: '指 标 名 称',
            columns: [{
                text: '甲',
                width:240,
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
            html: '说明：1.本表由各市、州、直管市、林区统计局报送。<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.此表中乡镇个数、镇个数、办事处、村委会(居委会)个数必须与当地民政部门的数据一致。<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.平衡关系：06、 07、08≤04，10=11+12，13=14+15，16=17+19，18≤17，20≤19，21﹥22，22=23+24<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.报送时间为2016年12月25日。'
        }
    ]

});