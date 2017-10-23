Ext.define('Kits.override.RequestBase', function () {
    return {
        override: 'Ext.data.request.Base',
        onComplete: function () {
            var me = this,
                deferred = me.deferred,
                result = me.result;
            me.clearTimer();

            if (deferred) {
                if (me.success) {
                    deferred.resolve(result);
                }
                else {
                    deferred.reject(result);
                }
            }
            me.completed = true;
            if(result.status=='401'){
                //跳转到登录页面
                Ext.util.Cookies.set('token', '');
                window.location.reload();
            }else if(result.status=='500'){
                var res = JSON.parse(result.responseText);
                var msg = res.message||"系统内部错误！";
                Ext.toast({
                    html: msg,
                    align: 't'
                });
            }
        }
    };
}());