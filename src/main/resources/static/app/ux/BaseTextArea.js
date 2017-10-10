/**
 * Created by bozhou on 2017/10/10.
 */
Ext.define("Kits.ux.BaseTextArea", {
    extend: "Ext.form.field.TextArea",
    xtype: "BaseTextArea",

    editor: null,

    initComponent: function() {
        this.callParent();
        this.on("afterrender", this.handlerAfterrender);
    },

    handlerAfterrender: function(txa, eOpts) {
        var editor = CKEDITOR.replace(txa.getInputId());
        txa.editor = editor;
    },

    getSubmitValue: function() {
        this.editor.updateElement();
        return this.callParent();
    }
});