Ext.define('Kits.override.Connection', function () {
    return {
        override: 'Ext.data.Connection',
        request: function(options) {
            options = options || {};
            options.headers = joinObject(options.headers, createAuthorizationTokenHeader())
            var me = this,
                requestOptions, request;

            if (me.fireEvent('beforerequest', me, options) !== false) {
                requestOptions = me.setOptions(options, options.scope || Ext.global);

                request = me.createRequest(options, requestOptions);

                return request.start(requestOptions.data);
            }

            // Reusing for response
            request = {
                status: -1,
                statusText: 'Request cancelled in beforerequest event handler'
            };

            Ext.callback(options.callback, options.scope, [options, false, request]);

            return Ext.Deferred.rejected([options, false, request]);
        }
    };
}());