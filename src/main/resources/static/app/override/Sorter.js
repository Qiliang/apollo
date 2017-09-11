Ext.define('Kits.override.Sorter', function () {

    return {
        override: 'Ext.util.Sorter',
        serialize: function () {
            return this.getProperty() + ',' + this.getDirection();
        }
    };
}());