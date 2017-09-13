Ext.define('Kits.store.BranchTree', {
    extend: 'Ext.data.TreeStore',
    rootData: {
        text: '神农架统计局',
        expanded: true,
        children: [
            { leaf:true, text: '机构01' },
            { leaf:true, text: '机构02' },
            { leaf:true, text: '机构03' },
            { leaf:true, text: '机构04' },
            { leaf:true, text: '机构05' },
            { leaf:true, text: '机构06' },
            { leaf:true, text: '机构07' },
            { leaf:true, text: '机构08' }
        ]
    },

    constructor: function (config) {
        config = Ext.apply({
            root: Ext.clone(this.rootData)
        }, config);

        this.callParent([config]);
    }
});