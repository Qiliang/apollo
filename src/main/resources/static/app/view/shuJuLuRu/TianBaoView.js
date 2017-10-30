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
                Ext.require(['Kits.view.tables.'+me.recordData.data.tableCode], function () {
                    me.insert(0, {
                        title: me.recordData.data.tableName,
                        xtype: 'tables' + me.recordData.data.tableCode, // tabcode
                        height: 1900,
                        commConfig: {
                            hiddenExport: true,
                            hiddenValidate: true,
                            hiddenSubmit: true,
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
                Ext.getCmp('fillTable').commFunc.validate();
            }
        }, {
            itemId: 'tj',
            text: '提交',
            handler: function (e) {
                var btn = this.up('panel');
                Ext.getCmp('fillTable').commFunc.submit(function (state, msg) {
                    //提交成功
                    if (state) {
                        Ext.Ajax.request({
                            url: '/api/directRptTask/updateFillState',
                            method: 'POST',
                            params: {id: btn.recordData.id},
                            success: function (response, opts) {
                                var res = JSON.parse(response.responseText);
                                Ext.Msg.alert('成功！', res.message);
                                btn.callBack();
                            },
                            failure: function (response, opts) {
                                var res = JSON.parse(response.responseText);
                                Ext.MessageBox.alert('失败', '错误信息：' + res.message);
                            }
                        });
                    } else {
                        Ext.Msg.alert('提交失败！', msg);
                    }
                });
            }
        }
    ]
})
;