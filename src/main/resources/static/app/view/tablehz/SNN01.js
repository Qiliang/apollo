Ext.define('Kits.view.tablehz.SNN01', {
    extend: 'Kits.view.tablehz.Base',
    title: '农 业 生 产 条 件（一）',
    headerItems: [
        {
            html: '综合机关名称：'
        },
        {
            html: '2016年',
        },
        {
            html: '表    号：鄂农年01表<br /> ' +
            '制表机关：湖北省统计局 <br />' +
            '批准文号：国统制［2016］122号<br />' +
            '有效期至：2017年6月'
        }
    ],

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '丙', '1'],
        data: []

    }),

    columns: [
        {
            text: '指标名称',
            columns: {
                text: '计算单位',
                columns: {
                    text: '汇总代码'
                }
            }
        },
        {
            text: '编号',
            columns: {
                text: '－',
                columns: {
                    text: '－'
                }
            }
        },
        {
            text: '一、农村基层组织情况',
            columns: {
                text: '（一）乡镇政府个数',
                columns: {
                    text: '个',
                    columns: {
                        text: '个'
                    }
                }
            }
        }



        // {
        //     text: '指 标 名 称',
        //     columns: [{
        //         text: '甲',
        //         width:200,
        //         dataIndex: '甲',
        //     }]
        // }, {
        //     text: '计量单位',
        //     columns: [{
        //         text: '乙',
        //         width:200,
        //         align: 'center',
        //         dataIndex: '乙',
        //     }]
        // }, {
        //     text: '代  码',
        //     columns: [{
        //         text: '丙',
        //         width:200,
        //         align: 'center',
        //         dataIndex: '丙',
        //     }]
        // }, {
        //     text: '数量',
        //     columns: [{
        //         text: '1',
        //         width:200,
        //         align: 'center',
        //         dataIndex: '1',
        //         editor: {
        //
        //             field: {
        //                 xtype: 'numberfield',
        //                 minValue: 0,
        //                 allowBlank: true
        //             }
        //         }
        //     }]
        // }

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
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.此表中乡镇个数、镇个数、办事处、村委会(居委会)个数必须与当地民政部门的数据一致。<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.平衡关系：06、 07、08≤04，10=11+12，13=14+15，16=17+19，18≤17，20≤19，21﹥22，22=23+24<br />' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.报送时间为2016年12月25日。'
        }
    ]


});