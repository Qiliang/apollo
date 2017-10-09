Ext.define('Kits.view.tables.02', {
    extend: 'Kits.view.tables.Base',
    title: '农 业 生 产 条 件（二）',
    headerItems: [
        {
            html: '<br /><br /><br />综合机关名称：'
        },
        {
            html: '<br /><br /><br />2016年',
        },
        {
            html: '表    号：鄂农年02表<br /> ' +
            '制表机关：湖北省统计局 <br />' +
            '批准文号：国统制［2016］122号<br />' +
            '有效期至：2017年6月'
        }
    ],

    store:Ext.create('Ext.data.ArrayStore', {

        fields: ['i','甲', '乙', '丙', '1'],
        data: [
            [0,'一、耕地情况','—','—','—'],
            [1,'(一)年初耕地总资源','千公顷','01'],
            [1,'(二)年内增加','千公顷','02'],
            [3,'其中：新开荒地','千公顷','03'],
            [6,'园地改为耕地','千公顷','04'],
            [1,'(三)年内减少','千公顷','05'],
            [3,'其中：国家基建占地','千公顷','06'],
            [6,'其他基建占地','千公顷','07'],
            [6,'退耕还林还草','千公顷','08'],
            [6,'退耕还渔','千公顷','09'],
            [6,'退耕改园地','千公顷','10'],
            [1,'(四)年末耕地总资源','千公顷','11'],
            [1,'1.常用耕地面积','千公顷','12'],
            [3,'①水田','千公顷','13'],
            [3,'②旱地','千公顷','14'],
            [6,'其中：水浇地','千公顷','15'],
            [1,'2.临时性耕地','千公顷','16'],
            [3,'其中：25度以上坡耕地','千公顷','17'],
            [0,'二、农村主要能源及物质消耗','—','—','—'],
            [1,'(一)乡、村办水电站数','个','18'],
            [3,'装机容量','万千瓦','19'],
            [3,'发电量','万千瓦小时','20'],
            [1,'(二)农村用电量','万千瓦小时','21'],
            [1,'(三)农用化肥施用量(按折纯量计算)','吨','22'],
            [3,'1.氮肥','吨','23'],
            [3,'2.磷肥','吨','24'],
            [3,'3.钾肥','吨','25'],
            [3,'4.复合肥','吨','26'],
            [1,'(四)农用塑料薄膜使用量','吨','27'],
            [3,'其中：地膜使用量','吨','28'],
            [6,'地膜覆盖面积','千公顷','29'],
            [1,'(五)农用柴油使用量','吨','30'],
            [1,'(六)农药使用量','吨','31'],
            [0,'三、农田水利建设情况','—','—','—'],
            [1,'有效灌溉面积','千公倾','32'],
            [1,'旱涝保收面积','千公倾','33'],
            [1,'机电排灌面积','千公倾','34']
        ]

    }),


    columns: [
        {
            text: '指 标 名 称',
            columns: [{
                text: '甲',
                width:240,
                dataIndex: '甲'
            }]
        }, {
            text: '计量单位',
            columns: [{
                width:200,
                text: '乙',
                align: 'center',
                dataIndex: '乙',
            }]
        }, {
            text: '代  码',
            columns: [{
                width:200,
                text: '丙',
                align: 'center',
                dataIndex: '丙',
            }]
        }, {
            text: '数量',
            columns: [{
                width:200,
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
            html: '说明：1.本表由各市、州、直管市、林区统计局报送。<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.平衡关系：01=上年年未耕地总资源，11=01+02-05，02≥03+04，05≥06+07+08+09+10，11=12+16，12=13+14，14≥15，16≥17，22=23+24+25+26，27≥28，32≤12，33≤12，34≤12。<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.报送时间为2016年12月25日。'
        }
    ]

});