Ext.define('Kits.view.UserLogin', {
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
            fieldLabel: '组织机构代码或行政区划代码',
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
                    var viewport = this.up('viewport');

                    Ext.Ajax.request({
                        method: 'POST',
                        url: '/api/auth',
                        params:{
                            username:"users@"+viewport.down('textfield[name=user]').getValue(),
                            password:viewport.down('textfield[name=pass]').getValue(),
                        },
                        callback: function (options, success, response) {
                            if (!success) {

                                Ext.toast({
                                    html: '用户名或密码错误',
                                    align: 't'
                                });
                            } else {
                                viewport.mask();
                                var res = JSON.parse(response.responseText);
                                Ext.util.Cookies.set('token', "Users "+res.token);
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
