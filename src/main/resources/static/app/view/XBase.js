Ext.define('Kits.view.XBase', {
    extend: 'Ext.panel.Panel',
    title: '首页',
    layout: 'border',
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                var token = Ext.util.Cookies.get('token');
                Ext.Ajax.request({
                    url: '/api/rpt/setting/table/0/A304',
                    method: 'GET',
                    headers: {'Authorization':'Bearer '+token},
                    success: function(response, opts) {
                        var data = Ext.decode(response.responseText);
                    },
                    failure: function(response, opts) {
                        console.log('server-side failure with status code ' + response.status);
                    }
                });
            }
        }
    ],
    items:[
        {
            region: 'north',
            layout: {
                type: 'table',
                columns: 3,
                tableAttrs: {
                    style: {
                        width: '100%'
                    }
                }
            },
            defaults: {
                bodyPadding: '10',
                border: false
            },
            items: [
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
            ]
        },{
            region: 'center',
            layout: 'border',
            items:[
                {
                    xtype: 'grid',
                    region: 'north',
                    border: false,
                    columns:[
                        {
                            text: '指 标 名 称',
                            columns: [{
                                text: '甲',
                                width:240,
                                dataIndex: 'itemcode',
                            }]
                        }, {
                            text: '计量单位',
                            columns: [{
                                text: '乙',
                                width:200,
                                align: 'center',
                                dataIndex: 'unitcode',
                            }]
                        }, {
                            text: '代  码',
                            columns: [{
                                text: '丙',
                                width:200,
                                align: 'center',
                                dataIndex: 'hzcode',
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
                        }, {
                            text: '面积',
                            columns: [{
                                text: '2',
                                width:200,
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
                    ]
                },
                {
                    xtype: 'dataview',
                    region: 'center',
                    store: Ext.create('Ext.data.Store', {
                        fields: [
                            { name: 'itemcode', type: 'string' },
                            { name: 'unitcode', type: 'string' },
                            { name: 'hzcode', type: 'string' },
                            { name: 'num1', type: 'string' },
                            { name: 'num2', type: 'string' }
                        ],
                        data: [
                            {"itemcode":"一、农村基层组织情况","unitcode":"—", "hzcode":"—", "num1":"—","num2":"—", "pnum1":"—","pnum2":"—"},
                            {"itemcode":"(一)乡镇个数","unitcode":"个", "hzcode":"01", "num1":"22","num2":"—", "pnum1":"22","pnum2":"—"},
                            {"itemcode":"其中：镇个数","unitcode":"个", "hzcode":"02", "num1":"","num2":"", "pnum1":"","pnum2":""}
                        ]
                    }),
                    tpl:new Ext.XTemplate(
                        '<table cellpadding=0 cellspacing=0 border=0 width=1040 style="background-color: #fff">',
                        '<tpl for=".">',
                        "<tr class='thumb-wrap {[xindex % 2 == 0 ? 'odd' : '']}'>",
                        '<td class="thumb-wrap-td" width="240">{[values.itemcode]}</td>',
                        '<td class="thumb-wrap-td center" width="200">{[values.unitcode]}</td>',
                        '<td class="thumb-wrap-td center" width="200">{[values.hzcode]}</td>',
                        "<td colIndex='num1' class='thumb-wrap-td center {[values.num1!=values.pnum1 ? 'thumb-dirty-cell':'']}' width='200'><div class='thumb-inner'>{[values.num1]}</div></td>",
                        "<td colIndex='num2' class='thumb-wrap-td center {[values.num2!=values.pnum2 ? 'thumb-dirty-cell':'']}' width='200'><div class='thumb-inner'>{[values.num2]}</div></td>",
                        '</tr>',
                        '</tpl>',
                        '</table>'
                    ),
                    plugins: [
                        Ext.create('Ext.ux.DataView.LabelEditor', {
                            beforeedit:function (value) {
                                return value !== '—';
                            },
                            field:Ext.create('Ext.form.field.Number',{minValue: 0,allowBlank: true})})
                    ],
                    scrollable:true,
                    overItemCls: 'x-grid-item-over',
                    itemSelector: 'tr.thumb-wrap'
                }
            ]
        },{
            region: 'south',
            layout: {
                type: 'table',
                columns: 3,
                tableAttrs: {
                    style: {
                        width: '100%'
                    }
                }
            },
            defaults: {
                bodyPadding: '10',
                border: false
            },
            items: [
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
            ],
            bbar: [
                {
                    xtype: 'button',
                    text: '导出',
                    handler: function () {
                        var text = "一、农村基层组织情况▪（一）乡镇政府个数▪".split("▪");
                        console.log(text);
                    }
                },
                {
                    xtype: 'button',
                    text: '检查',
                    handler: function () {

                    }
                },
                {
                    xtype: 'button',
                    text: '提交',
                    handler: function () {}
                }
            ]
        }
    ]
});