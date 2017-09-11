Ext.define('Kits.view.Login', {
    extend: 'Ext.container.Viewport',
    layout: 'center',
    items: {
        title: '统计信息化基础建设及数据库管理应用系统',
        frame: true,
        width: 420,
        bodyPadding: 10,

        defaultType: 'textfield',

        items: [{
            allowBlank: false,
            fieldLabel: '登录名',
            name: 'user',
            emptyText: 'user id',
            msgTarget: 'under'
        }, {
            allowBlank: false,
            fieldLabel: '密 码',
            name: 'pass',
            emptyText: 'password',
            inputType: 'password'
        }],

        buttons: [
            {
                text: '进入',
                handler: function () {
                    var panel = this.up('panel');
                    panel.mask();
                    Ext.Ajax.request({
                        method: 'POST',
                        url: '/api/login/',
                        params:{
                            username:panel.down('textfield[name=user]').getValue(),
                            password:panel.down('textfield[name=pass]').getValue(),
                        },
                        callback: function (options, success, response) {
                            panel.unmask();
                            if (!success) {
                                Ext.toast({
                                    html: response.responseText,
                                    align: 't'
                                });
                            } else {
                                Ext.util.Cookies.set('token', response.responseText);
                                window.location.reload();
                            }
                        }
                    });
                }
            }
        ],

        defaults: {
            anchor: '100%',
            labelWidth: 120
        }
    }


});
