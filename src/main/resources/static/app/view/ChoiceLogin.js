Ext.define('Kits.view.ChoiceLogin', {
    extend: 'Ext.container.Viewport',
    layout: 'center',
    items: [
        {
            xtype: "panel",
            items: [{
                xtype: 'button',
                text: '进入管理端',
                handler: function () {
                    var viewport = this.up('viewport');
                    viewport.removeAll();
                    viewport.add(Ext.create('Kits.view.Login'));
                }
            }, {
                xtype: 'button',
                text: '进入填报端',
                margin:'0 0 0 10',
                handler: function () {
                    var viewport = this.up('viewport');
                    viewport.removeAll();
                    viewport.add(Ext.create('Kits.view.UserLogin'));
                }
            }]
        }]
});
