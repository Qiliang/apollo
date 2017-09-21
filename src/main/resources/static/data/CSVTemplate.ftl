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
        fields: [<#list headers as head>
        '${head}'<#if head_has_next>,</#if></#list>],
        data: [<#list lines as line>
        [${line}]<#if line_has_next>,</#if></#list>],
    }),
    columns: [<#list headers as column>
    {
        "text":"<div style='white-space:pre-line;height:45px'>${column}</div>",
        "dataIndex":"${column}"
    }<#if column_has_next>,</#if></#list>],
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