Ext.define('Kits.view.liShiShuju.${title}', {
    extend: 'Kits.view.liShiShuju.Base',
    title: '${title}',
    headerItems: [
        {
            html: ''
        },
        {
            html: '${title}',
        },
        {
            html: ''
        }
    ],
    store: Ext.create('Ext.data.ArrayStore', {
        fields: [<#list fields as field>
        '${field}'<#if field_has_next>,</#if></#list>],
        data: [<#list lines as line>
        [${line}]<#if line_has_next>,</#if></#list>],
    }),
    columns: ${headers},
    footerItems: [
        {
            html: ''
        },
        {
            html: '',
        },
        {
            html: ''
        },
        {
            colspan: 3,
            html: ''
        }
    ]
});