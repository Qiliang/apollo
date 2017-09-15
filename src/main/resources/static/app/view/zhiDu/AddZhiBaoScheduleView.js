Ext.define('Kits.view.zhiDu.AddZhiBaoScheduleView', {
    extend: 'Ext.form.Panel',
    layout: {
        type: 'table',
        columns: 2,
        tableAttrs: {
            style: {
                width: '100%',
                'margin-top': '20px',
                'margin-left': '10px',
                'margin-right': '10px'
            }
        }
    },
    bodyBorder: false,
    defaults: {
        bodyPadding: 10
    },
    items: [
        {xtype: 'textfield', fieldLabel: '任务名称', colspan: 2, width: '96%', allowBlank: false, blankText: '任务名称为必填项'},
        {
            colspan: 2,
            xtype: 'fieldcontainer',
            fieldLabel: '调查表样',
            layout: 'hbox',
            combineErrors: true,
            defaultType: 'textfield',
            defaults: {
                hideLabel: 'true'
            },
            items: [{
                fieldLabel: '调查表样',
                id: 'dcby',
                allowBlank: false,
                blankText: '调查表样为必填项',
                readOnly: true,
                width: 416
            }, {
                xtype: 'button',
                text: '选择',
                flex: 1,
                handler: function (e) {
                    Ext.create('Ext.window.Window', {
                        title: '选择调查表样',
                        height: 600,
                        width: 700,
                        layout: 'fit',
                        modal: true,
                        closeToolText: '关闭',
                        items: Ext.create('Kits.view.zhiDu.DiaoChaBiaoXiangView', {
                            callback: function (selection) {
                                Ext.getCmp('dcby').setValue(selection.name);
                                Ext.getCmp('dcbyId').setValue(selection.dcbyId);
                            }
                        })
                    }).show();
                }
            }]
        },
        {xtype: 'hiddenfield', id: 'dcbyId'},
        {
            xtype: 'datefield',
            format: 'Y-m-d',
            fieldLabel: '提醒开始时间',
            allowBlank: false,
            blankText: '报送开始时间为必填项',
            itemId: 'startdt',
            vtype: 'daterange',
            endDateField: 'enddt' // id of the end date field
        },
        {
            xtype: 'datefield',
            format: 'Y-m-d',
            fieldLabel: '提醒结束时间',
            emptyText: '可不填，不填为无结束时间',
            itemId: 'enddt',
            vtype: 'daterange',
            startDateField: 'startdt' // id of the start date field
        },
        {
            colspan: 2,
            xtype: 'combobox',
            fieldLabel: '提醒频率',
            queryMode: 'local',
            name: 'txpl',
            displayField: 'value',
            valueField: 'key',
            editable: false,
            allowBlank: false,
            blankText: '提醒频率为必填项',
            value: 'year',
            listeners: {
                change: function (me, newValue, oldValue, eOpts) {
                    var store = Ext.getCmp('day').getStore();
                    Ext.getCmp('day').setValue('');
                    if (newValue == 'month') {
                        Ext.getCmp('day').setMargin('0 0 0 0');
                        Ext.getCmp('month').setVisible(false);
                        Ext.getCmp('month').allowBlank = true;
                        var data = [];
                        for (var i = 1; i <= 30; i++) {
                            data.push({key: i, value: i + '日'})
                        }
                        store.loadData(data);
                    } else {
                        Ext.getCmp('day').setMargin('0 0 0 6');
                        Ext.getCmp('month').setVisible(true);
                        Ext.getCmp('month').allowBlank = false;
                        var data = [];
                        if (Ext.getCmp('month').getValue()) {
                            var d = new Date(2017, Ext.getCmp('month').getValue(), 0).getDate();
                            for (var i = 1; i <= d; i++) {
                                data.push({key: i, value: i + '日'})
                            }
                        }
                        store.loadData(data);
                    }
                }
            },
            store: [
                {key: 'year', value: '年'},
                {key: 'month', value: '月'}
            ]
        }, {
            colspan: 2,
            xtype: 'fieldcontainer',
            fieldLabel: '提醒时间',
            layout: 'hbox',
            combineErrors: true,
            defaultType: 'combobox',
            defaults: {
                hideLabel: 'true'
            },

            items: [{
                fieldLabel: '月',
                name: 'month',
                id: 'month',
                allowBlank: false,
                blankText: '提醒月份为必填项',
                flex: 1,
                queryMode: 'local',
                displayField: 'value',
                valueField: 'key',
                editable: false,
                emptyText: "--请选择提醒月份--",
                listeners: {
                    change: function (me, newValue, oldValue, eOpts) {
                        var store = Ext.getCmp('day').getStore();
                        var d = new Date(2017, newValue, 0).getDate();
                        var data = [];
                        for (var i = 1; i <= d; i++) {
                            data.push({key: i, value: i + '日'})
                        }
                        store.loadData(data);
                    }
                },
                store: [
                    {key: '1', value: '1月'},
                    {key: '2', value: '2月'},
                    {key: '3', value: '3月'},
                    {key: '4', value: '4月'},
                    {key: '5', value: '5月'},
                    {key: '6', value: '6月'},
                    {key: '7', value: '7月'},
                    {key: '8', value: '8月'},
                    {key: '9', value: '9月'},
                    {key: '10', value: '10月'},
                    {key: '11', value: '11月'},
                    {key: '12', value: '12月'}
                ]
            }, {
                fieldLabel: '日',
                name: 'day',
                id: 'day',
                allowBlank: false,
                blankText: '提醒日期为必填项',
                flex: 3,
                margin: '0 0 0 6',
                queryMode: 'local',
                displayField: 'value',
                valueField: 'key',
                editable: false,
                emptyText: "--请选择提醒日期--",
                store: Ext.create('Ext.data.Store', {
                    data: []
                })
            }]
        }
    ],

    buttons: [
        {
            text: '提交', handler: function (e) {
            alert('提交1');
            var form = this.up('form').getForm();
            if (form.isValid()) {
                alert('提交');
                form.submit({
                    success: function (form, action) {
                        Ext.Msg.alert('Success', action.result.msg);
                    },
                    failure: function (form, action) {
                        Ext.Msg.alert('Failed', action.result.msg);
                    }
                });
            }
        }
        }
    ]
})
;