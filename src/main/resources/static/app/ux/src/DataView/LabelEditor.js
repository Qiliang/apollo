/**
 *
 */
Ext.define('Ext.ux.DataView.LabelEditor', {

    extend: 'Ext.Editor',

    alignment: 'tl-tl',

    completeOnEnter: true,

    cancelOnEsc: true,

    shim: false,

    autoSize: {
        width: 'boundEl',
        height: 'field'
    },
    colIndex: '',
    labelSelector: 'x-editable',

    innerSelector: 'thumb-inner',

    requires: [
        'Ext.form.field.Text'
    ],

    constructor: function(config) {
        config.field = config.field || Ext.create('Ext.form.field.Text', {
            allowOnlyWhitespace: false,
            selectOnFocus:true
        });
        this.callParent([config]);
    },

    init: function(view) {
        this.view = view;
        this.mon(view, 'afterrender', this.bindEvents, this);
        this.on('complete', this.onSave, this);
    },
    beforeedit: function (model) {
        return true;
    },
    // initialize events
    bindEvents: function() {
        this.mon(this.view.getEl(), {
            click: {
                fn: this.onClick,
                scope: this
            }
        });
    },

    // on mousedown show editor
    onClick: function(e, target) {
        var me = this,record,value;
        if(Ext.fly(target).hasCls(me.innerSelector)){
            target = target.parentElement;
        }
        me.colIndex = target.getAttribute('colIndex');
        if (me.colIndex && !me.editing && !e.ctrlKey && !e.shiftKey) {
            record = e.record;
            value = record.data[me.colIndex];
            if(me.beforeedit(record.data[me.colIndex])){
                e.stopEvent();
                me.startEdit(target, value);
                me.activeRecord = record;
            }
        } else if (me.editing) {
            me.field.blur();
            e.preventDefault();
        }
    },

    // update record
    onSave: function(ed, value) {
        this.activeRecord.set(this.colIndex, value);
    }
});

