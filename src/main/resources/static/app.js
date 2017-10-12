/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */

// KitchenSink is not fully WAI-ARIA compliant at this point
// Ext.enableAriaButtons = false;
Ext.Loader.setConfig( {
    enabled : true,
    paths : {
        "Ext.ux": "app/ux/src"
    }
});
Ext.application({
    extend: 'Kits.Application',
    name: 'Kits'
    //autoCreateViewport: 'KitchenSink.view.main.Main'

    //-------------------------------------------------------------------------
    // Most customizations should be made to KitchenSink.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------

});
