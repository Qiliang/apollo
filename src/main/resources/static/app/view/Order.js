Ext.define('Kits.view.Order', {
    extend: 'Ext.grid.Panel',
    title: '粮 食 作 物 生 产 情 况',

    source: {
        "id": "xxxx",
        "name": "粮食作物产情况",
        "fields": [
            {
                "id": "xxxx",
                "name": "字段1",
                "type": "string"
            },
            {
                "id": "xxxx",
                "name": "字段2",
                "type": "int"
            }
        ],
        "tpl": "xxxxxggggggxxxxxxxxx",
        "checks": [
            {
                "id": "checks1",
                "refs": [
                    "xx1",
                    "xx2",
                    "字段id"
                ],
                "description": "约束的提示111",
                "expression": "约束的表达式1111"
            },
            {
                "id": "checks2",
                "refs": [
                    "xx1"
                ],
                "description": "约束的提示2222",
                "expression": "约束的表达式2222"
            }
        ]
    },

    listeners: {
        afterrender: function (me) {

        }

    },

    store: Ext.create('Ext.data.ArrayStore', {

        fields: ['甲', '乙', '1', '2', '3'],
        data: [
            ['粮食作物', '1', '', '', ''],
            ['    (一)夏收粮食', '2', '', '', ''],
            ['  1.小麦', '3', '', '', '']
        ]


    }),


    defaults: {
        flex: 1
    },
    columns: [
        {
            text: '字段',
            columns: [{
                text: '甲',
                dataIndex: '甲',
            }]
        }, {
            text: '代码',
            columns: [{
                text: '乙',
                align: 'center',
                dataIndex: '乙',
            }]
        }, {
            text: '面积(千公顷)',
            columns: [{
                text: '1',
                dataIndex: '1',
            }]
        }, {
            text: '总产量(吨)',
            columns: [{
                text: '2',
                dataIndex: '2',
            }]
        }, {
            text: '单产(公斤)',
            columns: [{
                text: '3',
                dataIndex: '3',
            }]
        },

    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display"
    }
});