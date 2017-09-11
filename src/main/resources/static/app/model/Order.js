Ext.define('Kits.model.Order', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'shopId', type: 'string'},
        {name: 'shopName', type: 'string'},
        {name: 'shopAddress', type: 'string'},
        {name: 'time', type: 'date',dateFormat:'time'},
        {name: 'description', type: 'string'},
        {name: 'stime', type: 'string',},
        {name: 'state', type: 'string'},
        {name: 'userName', type: 'string'},
        {name: 'userPhone', type: 'string'},
        {name: 'userAddress', type: 'string'},
        {name: 'userPhoneImg', type: 'string'},
        {name: 'userAddressImg', type: 'string'},
        {name: 'remark', type: 'string'},
        {name: 'shopLng', type: 'string'},
        {name: 'shopLat', type: 'string'},
        {name: 'orderLng', type: 'string'},
        {name: 'orderLat', type: 'string'},
        {name: 'riderId', type: 'string'},
        {name: 'createdDate', type: 'date', dateFormat: 'time'},
        {name: 'lastModifiedDate', type: 'date', dateFormat: 'time'},
        {name: 'riderAssignTime', type: 'date', dateFormat: 'time'},
        {name: 'riderGetGoodsTime', type: 'date', dateFormat: 'time'},
        {name: 'riderToUserTime', type: 'date', dateFormat: 'time'},
        {name: 'description', type: 'string'},
        {
            name: 'riderName', type: 'string', persist: false,
            mapping: function (data) {
                return data.rider ? +data.rider.phone + ':' + data.rider.name : null;
            }
        }
    ]
})
