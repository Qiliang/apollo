Ext.define('Kits.view.shuJuLuRu.TianBaoView', {
    extend: 'Ext.form.Panel',
    scrollable: true,
    id: 'TianBaoView',
    layout: {
        type: 'table',
        columns: 1,
        tableAttrs: {
            style: {
                width: '100%'
            }
        }
    },
    bodyBorder: false,
    defaults: {
        bodyPadding: '15 20',
        border: true

    },

    listeners: {
        afterrender: function (me) {
            //加载验收意见
            me.loadRecord(me.recordData);
            //动态删除验收意见
            if (me.recordData.data.tableCode) {
                Ext.require(['Kits.view.tables.' + me.recordData.data.tableCode], function () {
                    me.insert(0, {
                        title: me.recordData.data.tableName,
                        xtype: 'tables' + me.recordData.data.tableCode, // tabcode
                        commConfig: {
                            hiddenExport: true,
                            hiddenValidate: true,
                            hiddenSubmit: true,
                            autoHeight:true,
                            fillDate:me.recordData.data.fillDateStr?me.recordData.data.fillDateStr:Ext.Date.format(new Date(), 'Y年m月d日'),
                            fillName:me.recordData.data.fillName,
                            fddbr:me.recordData.data.fddbr,
                            xxmc:me.recordData.data.xxmc
                        },
                        usercode: me.recordData.data.id,
                        id: 'fillTable'
                    })
                }, me);
            }
            //获得当前填报状态和是否是查看
            //如果是查看则删除按钮
            if (me.isView) {
                // me.queryById('dc').hide();
                me.queryById('jc').hide();
                me.queryById('tj').hide();
                me.queryById('zysRadio').setDisabled(true);
                me.queryById('zysText').setDisabled(true);
                me.queryById('qysRadio').setDisabled(true);
                me.queryById('qysText').setDisabled(true);
            }
            switch (me.recordData.data.reportState) {
                case 'wtb' :
                case 'ytb' :
                    me.remove(me.getComponent('qysyj'));
                    me.remove(me.getComponent('zysyj'));
                    break;
                case 'zyswtg' :
                case 'zystg' :
                    me.remove(me.getComponent('qysyj'));
                    break;
                default :
                    break;
            }
            //动态删除验收意见
            // me.remove(Ext.getCmp('qysyj'));
        }
    },
    items: [{
        itemId: 'zysyj',
        title: '镇验收意见',
        items: [{
            itemId: 'zysRadio',
            xtype: 'radiogroup',
            fieldLabel: '镇是否验收通过',
            cls: 'x-check-group-alt',
            name: 'townSuggestionsState',
            width: 300,
            simpleValue: true,
            items: [
                {boxLabel: '不通过', inputValue: '0'},
                {boxLabel: '通过', inputValue: '1'}
            ]
        },
            {
                itemId: 'zysText',
                xtype: 'textareafield',
                fieldLabel: '镇验收意见',
                name: 'townSuggestions',
                width: 400
            }],
    }, {
        itemId: 'qysyj',
        title: '区验收意见',
        items: [{
            itemId: 'qysRadio',
            xtype: 'radiogroup',
            fieldLabel: '区是否验收通过',
            cls: 'x-check-group-alt',
            name: 'areaSuggestionsState',
            width: 300,
            simpleValue: true,
            items: [
                {boxLabel: '不通过', inputValue: '0'},
                {boxLabel: '通过', inputValue: '1'}
            ]
        },
            {
                itemId: 'qysText',
                xtype: 'textareafield',
                fieldLabel: '区验收意见',
                name: 'areaSuggestions',
                width: 400
            }],
    }
    ],

    buttons: [
        {
            itemId: 'dc',
            text: '导出',
            handler: function (e) {
                Ext.getCmp('fillTable').commFunc.export();
            }
        }, {
            itemId: 'jc',
            text: '检查',
            handler: function (e) {
                Ext.getCmp('fillTable').commFunc.validate(function (data) {
                    if (data) {
                        if (data.success) {
                            Ext.Msg.alert('成功！', data.data);
                        } else {
                            var store = {
                                xtype: 'store.store',
                                data: data.data
                            }
                            var win = Ext.create('Ext.window.Window', {
                                title: '错误信息',
                                height: 400,
                                width: 600,
                                layout: 'fit',
                                closeToolText: '关闭',
                                // closeAction:'hide',
                                modal: true,
                                items: Ext.create('Kits.view.shuJuLuRu.ValidateDataView', {
                                    store: store
                                })
                            });
                            win.show();
                        }
                    }
                });
            }
        }, {
            itemId: 'tj',
            text: '提交',
            handler: function (e) {
                var btn = this.up('panel');
                btn.mask();
                Ext.getCmp('fillTable').commFunc.submit(function (state, msg) {
                    //提交成功
                    if (state) {
                        Ext.Ajax.request({
                            url: '/api/directRptTask/updateFillState',
                            method: 'POST',
                            params: {id: btn.recordData.id},
                            success: function (response, opts) {
                                var res = JSON.parse(response.responseText);
                                Ext.Msg.alert('成功！', res.data);
                                btn.callBack();
                                btn.unmask();
                            },
                            failure: function (response, opts) {
                                var res = JSON.parse(response.responseText);
                                Ext.MessageBox.alert('失败', '错误信息：' + res.data);
                                btn.unmask();
                            }
                        });
                    } else {
                        Ext.Msg.alert('提交失败！', msg);
                        btn.unmask();
                    }
                });
            }
        }
    ]
})
;