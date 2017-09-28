Ext.define('Kits.override.ProxyAjax', function () {
    function getJwtToken() {
        return Ext.util.Cookies.get("token");
    }
    function createAuthorizationTokenHeader() {
        var token = getJwtToken();
        if (token) {
            return {"Authorization": "Bearer " + token};
        } else {
            return {};
        }
    }
    function joinObject (jsonbject1, jsonbject2) {
        var resultJsonObject={};
        for(var attr in jsonbject1){
            resultJsonObject[attr]=jsonbject1[attr];
        }
        for(var attr in jsonbject2){
            resultJsonObject[attr]=jsonbject2[attr];
        }
        return resultJsonObject;
    };
    return {
        override: 'Ext.data.proxy.Ajax',
        doRequest: function(operation) {
            var me = this,
                writer  = me.getWriter(),
                request = me.buildRequest(operation),
                method  = me.getMethod(request),
                jsonData, params;

            if (writer && operation.allowWrite()) {
                request = writer.write(request);
            }

            request.setConfig({
                binary              : me.getBinary(),
                headers             : joinObject(me.getHeaders(), createAuthorizationTokenHeader()),
                timeout             : me.getTimeout(),
                scope               : me,
                callback            : me.createRequestCallback(request, operation),
                method              : method,
                useDefaultXhrHeader : me.getUseDefaultXhrHeader(),
                disableCaching      : false // explicitly set it to false, ServerProxy handles caching
            });

            if (method.toUpperCase() !== 'GET' && me.getParamsAsJson()) {
                params = request.getParams();

                if (params) {
                    jsonData = request.getJsonData();
                    if (jsonData) {
                        jsonData = Ext.Object.merge({}, jsonData, params);
                    } else {
                        jsonData = params;
                    }
                    request.setJsonData(jsonData);
                    request.setParams(undefined);
                }
            }

            if (me.getWithCredentials()) {
                request.setWithCredentials(true);
                request.setUsername(me.getUsername());
                request.setPassword(me.getPassword());
            }
            return me.sendRequest(request);
        }
    };
}());