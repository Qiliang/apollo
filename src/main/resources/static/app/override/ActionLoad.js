Ext.define('Kits.override.ActionLoad', function () {
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
        override: 'Ext.form.action.Load',
        run: function() {
            Ext.Ajax.request(Ext.apply(
                this.createCallback(),
                {
                    method: this.getMethod(),
                    url: this.getUrl(),
                    headers: joinObject(this.headers,createAuthorizationTokenHeader()),
                    params: this.getParams()
                }
            ));
        }
    };
}());