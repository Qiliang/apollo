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

    columns: [{"text":"指标名称","columns":[{"text":"计算单位","columns":[{"text":"汇总代码"}]}]},{"text":"编  号","columns":[{"text":"－","columns":[{"text":"－"}]}]},{"text":"一、农村基层组织情况","columns":[{"text":"（一）乡镇政府个数","columns":[{"text":"个","columns":[{"text":"01"}]}]},{"text":"  1、乡政府","columns":[{"text":"个","columns":[{"text":"02"}]}]},{"text":"  2、镇政府","columns":[{"text":"个","columns":[{"text":"03"}]}]},{"text":"（二）办事处","columns":[{"text":"个","columns":[{"text":"04"}]}]},{"text":"（三）村 民委员会","columns":[{"text":"个","columns":[{"text":"05"}]}]},{"text":"（四）村  民  小 组","columns":[{"text":"个","columns":[{"text":"06"}]}]}]},{"text":"二、农村社会基础设施","columns":[{"text":"自来水受益村数","columns":[{"text":"个","columns":[{"text":"07"}]}]},{"text":"通汽车村数","columns":[{"text":"个","columns":[{"text":"08"}]}]},{"text":"通有线电视村","columns":[{"text":"个","columns":[{"text":"09"}]}]},{"text":"通宽带村数","columns":[{"text":"个","columns":[{"text":"10"}]}]}]},{"text":"三、乡村、人口、户数及农村从业人员情况","columns":[{"text":"（一）乡村 户 数","columns":[{"text":"户","columns":[{"text":"11"}]}]},{"text":"（二）乡村人口数","columns":[{"text":"合计","columns":[{"text":"人","columns":[{"text":"12"}]}]},{"text":"男","columns":[{"text":"人","columns":[{"text":"13"}]}]},{"text":"女","columns":[{"text":"人","columns":[{"text":"14"}]}]}]},{"text":"（三）乡村劳动力资  源","columns":[{"text":"合计","columns":[{"text":"人","columns":[{"text":"15"}]}]},{"text":"男","columns":[{"text":"人","columns":[{"text":"16"}]}]},{"text":"女","columns":[{"text":"人","columns":[{"text":"17"}]}]}]},{"text":"（四）乡村从业人员数","columns":[{"text":"合计","columns":[{"text":"人","columns":[{"text":"18"}]}]},{"text":"男","columns":[{"text":"合计","columns":[{"text":"人","columns":[{"text":"19"}]}]},{"text":"其中：从事农业人员数","columns":[{"text":"人","columns":[{"text":"20"}]}]}]},{"text":"女","columns":[{"text":"合计","columns":[{"text":"人","columns":[{"text":"21"}]}]},{"text":"其中：从事农业人员数","columns":[{"text":"人","columns":[{"text":"22"}]}]}]}]}]},{"text":"四、国有农林牧渔场情况","columns":[{"text":"（一）国有农林牧渔场总人口","columns":[{"text":"人","columns":[{"text":"23"}]}]},{"text":"（二）国有农林牧渔场从业人员","columns":[{"text":"合计","columns":[{"text":"人","columns":[{"text":"24"}]}]},{"text":"1、农业从业人员","columns":[{"text":"人","columns":[{"text":"25"}]}]},{"text":"2、非农业从业人员","columns":[{"text":"人","columns":[{"text":"26"}]}]}]}]},{"text":"五、农业用地情况","columns":[{"text":"1、耕地","columns":[{"text":"亩","columns":[{"text":"27"}]}]},{"text":"2、园地","columns":[{"text":"亩","columns":[{"text":"28"}]}]},{"text":"3、林地","columns":[{"text":"亩","columns":[{"text":"29.0"}]}]},{"text":"4、草地","columns":[{"text":"亩","columns":[{"text":"30.0"}]}]},{"text":"5、农业设施用地","columns":[{"text":"亩","columns":[{"text":"31.0"}]}]}]}],
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