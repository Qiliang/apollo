Ext.define('Kits.override.ActionSubmit', function () {
    return {
        override: 'Ext.form.action.Submit',
        doSubmit: function() {
            var me = this,
                ajaxOptions = Ext.apply(me.createCallback(), {
                    url: me.getUrl(),
                    method: me.getMethod(),
                    headers: joinObject(me.headers,createAuthorizationTokenHeader())
                }),
                form = me.form,
                jsonSubmit = me.jsonSubmit || form.jsonSubmit,
                paramsProp = jsonSubmit ? 'jsonData' : 'params',
                formInfo;

            // For uploads we need to create an actual form that contains the file upload fields,
            // and pass that to the ajax call so it can do its iframe-based submit method.
            if (form.hasUpload()) {
                formInfo = me.buildForm();
                ajaxOptions.form = formInfo.formEl;
                ajaxOptions.isUpload = true;
            } else {
                ajaxOptions[paramsProp] = me.getParams(jsonSubmit);
            }

            Ext.Ajax.request(ajaxOptions);
            if (formInfo) {
                me.cleanup(formInfo);
            }
        }
    };
}());