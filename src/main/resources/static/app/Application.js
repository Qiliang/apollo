Ext.define('Kits.Application', {
    extend: 'Ext.app.Application',
    namespace: 'Kits',

    requires: [
        'Kits.override.ProxyServer',
        'Kits.override.AdvancedVType',
        'Kits.override.Sorter',
        'Kits.override.ProxyAjax',
        'Kits.override.ActionLoad',
        'Kits.override.ActionSubmit',
        'Kits.override.Connection',
        'Kits.view.Main',
        'Kits.view.Login',
        'Kits.ux.ComboBoxTree'
    ],

    // controllers: [
    //     'Global',
    //     'Samples',
    //     'Direct'
    // ],

    init: function () {
        //Ext.setGlyphFontFamily('Pictos');
        Ext.tip.QuickTipManager.init();
        Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

    },

    launch: function () {

        var token = Ext.util.Cookies.get('token');
        if(token){
            this.setMainView({
                xclass: 'Kits.view.Main'
            });
        }else{
            this.setMainView({
                xclass: 'Kits.view.Login'
            });
        }


    }
}, function () {
    Kits.toast = function (title) {
        var html = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 1));

        if (!html) {
            html = title;
            title = null;
        }

        new Ext.window.Toast({
            title: title,
            html: html,
            width: 400,
            align: 't'
        }).show();
    };
});
