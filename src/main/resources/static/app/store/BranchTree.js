Ext.define('Kits.store.BranchTree', {
    extend: 'Ext.data.TreeStore',
    proxy: {
        type: 'ajax',
        url: '/api/org',
        method:'get'
    },
    root: {
        text: '神农架统计局',
        id: '-1',
        expanded: true
    },
    folderSort: true,
    sorters: [{
        property: 'sort',
        direction: 'ASC'
    }]
});