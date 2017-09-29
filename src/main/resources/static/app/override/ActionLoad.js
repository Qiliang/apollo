Ext.define('Kits.override.ActionLoad', function () {
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