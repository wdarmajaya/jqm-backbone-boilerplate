var gaPlugin;

function gaPluginResultHandler(result) {
    window.console && console.log('gaPluginResultHandler - ' + result);
}

function gaPluginErrorHandler(error) {
    window.console && console.log('gaPluginErrorHandler - ' + error);
}

//Includes file dependencies
define([
    "jquery",
    "config",
    "fastclick"
], function( $, Config, fastclick ) {
    
    ///////////////////////////
    //Phonegap Init
    
    document.addEventListener("deviceready", 
        function () {
           window.console && console.log("onDeviceReady Phonegap");
     
            //Fastclick eliminates 300ms delay on tapping on mobile browsers/webkit
            var FastClick = require('fastclick');
            FastClick.attach(document.body);
            window.console && console.log("Fastclick attached");
            $(".hidden-phonegap").remove();
            $(".fullwidth-phonegap").width("100%");
            
            //TODO checkAppVersion();

            //Google Analytics for app
            gaPlugin = window.plugins.gaPlugin;
            gaPlugin.init(gaPluginResultHandler, gaPluginErrorHandler, config.gaIdApp, 10);
            window.console && console.log("gaPlugin init");

        }, 
        true
    );

 } );