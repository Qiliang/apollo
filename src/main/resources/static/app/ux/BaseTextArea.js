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

    getErrors: function(value) {
        value = value&&this.editor.getData();
        value = arguments.length ? (value == null ? '' : value) : this.processRawValue(this.getRawValue());
        var me = this,
            errors = me.callParent([value]),
            validator = me.validator,
            vtype = me.vtype,
            vtypes = Ext.form.field.VTypes,
            regex = me.regex,
            format = Ext.String.format,
            msg, trimmed, isBlank;

        if (Ext.isFunction(validator)) {
            msg = validator.call(me, value);
            if (msg !== true) {
                errors.push(msg);
            }
        }

        trimmed = me.allowOnlyWhitespace ? value : Ext.String.trim(value);

        if (trimmed.length < 1) {
            if (!me.allowBlank) {
                errors.push(me.blankText);
            }
            // If we are not configured to validate blank values, there cannot be any additional errors
            if (!me.validateBlank) {
                return errors;
            }
            isBlank = true;
        }

        // If a blank value has been allowed through, then exempt it from the minLength check.
        // It must be allowed to hit the vtype validation.
        if (!isBlank && value.length < me.minLength) {
            errors.push(format(me.minLengthText, me.minLength));
        }

        if (value.length > me.maxLength) {
            errors.push(format(me.maxLengthText, me.maxLength));
        }

        if (vtype) {
            if (!vtypes[vtype](value, me)) {
                errors.push(me.vtypeText || vtypes[vtype +'Text']);
            }
        }

        if (regex && !regex.test(value)) {
            errors.push(me.regexText || me.invalidText);
        }

        return errors;
    },

    getSubmitValue: function() {
        this.editor.updateElement();
        return this.callParent();
    }
});