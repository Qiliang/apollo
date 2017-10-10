Ext.define('Kits.view.liShiShuju.2016年分市州居民可支配收入（半年报）', {
    extend: 'Kits.view.liShiShuju.Base',
    title: '2016年分市州居民可支配收入（半年报）',
    headerItems: [
        {
            html: ''
        },
        {
            html: '2016年分市州居民可支配收入（半年报）',
        },
        {
            html: ''
        }
    ],
    store: Ext.create('Ext.data.ArrayStore', {
        fields: [
        'col1',
        'col2',
        'col3',
        'col4'],
        data: [
        ['','','',''],
        ['武汉市','18120.0','16519.0',''],
        ['黄石市','10003.0','9206.0',''],
        ['十堰市','7773.0','7117.0',''],
        ['宜昌市','9971.0','9048.0',''],
        ['襄阳市','9044.0','8196.0',''],
        ['鄂州市','9770.0','8965.0',''],
        ['荆门市','9619.0','8810.0',''],
        ['孝感市','8470.0','7783.0',''],
        ['荆州市','8977.0','8223.0',''],
        ['黄冈市','6548.0','5949.0',''],
        ['咸宁市','7972.0','7269.0',''],
        ['随州市','8005.0','7259.0',''],
        ['恩施州','6317.0','5678.0',''],
        ['仙桃市','8918.0','8126.0',''],
        ['潜江市','8408.0','7640.0',''],
        ['天门市','7250.0','6665.0',''],
        ['神农架','5567.0','5052.0',''],
        ['','','',''],
        ['2016年上半年分市州城镇常住居民人均可支配收入','','',''],
        ['地 区','2016年上半年（元）','2015年上半年（元）','增速（%）'],
        ['','','',''],
        ['武汉市','20295.0','18514.0',''],
        ['黄石市','13038.0','12029.0',''],
        ['十堰市','11715.0','10830.0',''],
        ['宜昌市','13129.0','12001.0',''],
        ['襄阳市','11913.0','10828.0',''],
        ['鄂州市','12233.0','11235.0',''],
        ['荆门市','12862.0','11820.0',''],
        ['孝感市','11268.0','10367.0',''],
        ['荆州市','12291.0','11307.0',''],
        ['黄冈市','9947.0','9058.0',''],
        ['咸宁市','11267.0','10240.0',''],
        ['随州市','11132.0','10154.0',''],
        ['恩施州','11419.0','10335.0',''],
        ['仙桃市','11421.0','10420.0',''],
        ['潜江市','11224.0','10224.0',''],
        ['天门市','9486.0','8780.0',''],
        ['神农架','7877.0','7182.0',''],
        ['','','',''],
        ['2016年上半年分市州农村常住居民人均可支配收入','','',''],
        ['地 区','2016年上半年（元）','2015年上半年（元）','增速（%）'],
        ['','','',''],
        ['武汉市','10012.0','9145.0',''],
        ['黄石市','5593.0','5152.0',''],
        ['十堰市','4016.0','3638.0',''],
        ['宜昌市','6504.0','5862.0',''],
        ['襄阳市','5884.0','5346.0',''],
        ['鄂州市','5949.0','5505.0',''],
        ['荆门市','6548.0','6012.0',''],
        ['孝感市','5846.0','5399.0',''],
        ['荆州市','6271.0','5755.0',''],
        ['黄冈市','4506.0','4130.0',''],
        ['咸宁市','5255.0','4860.0',''],
        ['随州市','5826.0','5302.0',''],
        ['恩施州','3803.0','3432.0',''],
        ['仙桃市','6444.0','5895.0',''],
        ['潜江市','5722.0','5214.0',''],
        ['天门市','5356.0','4902.0',''],
        ['神农架','3757.0','3411.0','']],
    }),
    columns: [ {
  "text" : "<div style='white-space:pre-line;height:57px'>地 区</div>",
  "dataIndex" : "col1"
}, {
  "text" : "<div style='white-space:pre-line;height:57px'>2016年上半年（元）</div>",
  "dataIndex" : "col2"
}, {
  "text" : "<div style='white-space:pre-line;height:57px'>2015年上半年（元）</div>",
  "dataIndex" : "col3"
}, {
  "text" : "<div style='white-space:pre-line;height:57px'>增速（%）</div>",
  "dataIndex" : "col4"
} ],
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