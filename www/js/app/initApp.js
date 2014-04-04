var gaPlugin;

function gaPluginResultHandler(result) {
    window.console && console.log('gaPluginResultHandler - ' + result);
}

function gaPluginErrorHandler(error) {
    window.console && console.log('gaPluginErrorHandler - ' + error);
    //TODO what to do if gaPlugin failed? send an email to dev team?
}

//Includes file dependencies
define([
    "jquery",
    "app/config",
    "fastclick"
], function( $, Config, fastclick ) {

    //Fastclick eliminates 300ms delay on tapping on mobile browsers/webkit
    var FastClick = require('fastclick');
    FastClick.attach(document.body);
    window.console && console.log("initApp/Fastclick attached");

    //Initialize Google Analytics for app
    gaPlugin = window.plugins.gaPlugin;
    gaPlugin.init(gaPluginResultHandler, gaPluginErrorHandler, Config.gaIdApp, 10);
    window.console && console.log("initApp/gaPlugin init");

    //TODO checkAppVersion();
        
});
