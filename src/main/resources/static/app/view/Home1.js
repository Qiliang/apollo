Ext.define('Kits.view.Home', {
    extend: 'Ext.panel.Panel',
    title: '首页',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    tools: [
        {
            type: 'refresh',
            tooltip: '刷新',
            callback: function (panel, tool, event) {
                // console.log(dal2Rpn('1 + 2 + 3'));
                // console.log(dal2Rpn('1 + 2 * 3'));
                // console.log(dal2Rpn('1 + 2 * 3 - 4 / 5'));
                // console.log(dal2Rpn('( 1 + 2 )'));
                //
                // console.log(dal2Rpn('( 1 + 2 ) * ( 3 - 4 ) / 5'));
                // console.log(dal2Rpn('( 1 + 2 ) * (( 3 - 4 ) / 5)'));
                // var token = Ext.util.Cookies.get('token');
                // Ext.Ajax.request({
                //     url: '/api/rpt/setting/build/SNN01',
                //     method: 'GET',
                //     headers: {'Authorization':'Bearer '+token},
                //     success: function(response, opts) {
                //         var data = Ext.decode(response.responseText);
                //         console.log(data);
                //     },
                //     failure: function(response, opts) {
                //         console.log('server-side failure with status code ' + response.status);
                //     }
                // });
            }
        }
    ]
});