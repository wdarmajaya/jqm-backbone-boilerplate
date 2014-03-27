// Includes file dependencies
define([
    "jquery",
], function( $ ) {

    
    ///////////////////////////
    //Phonegap Init
    document.addEventListener("deviceready", 
        function () {
           window.console && console.log("onDeviceReady Phonegap");
     
            //Fastclick eliminates 300ms delay on tapping on mobile browsers/webkit
            FastClick.attach(document.body);  

            $(".hidden-phonegap").remove();
            $(".fullwidth-phonegap").width("100%");
            if (window.PhoneGap || window.cordova) {
                //TODO checkAppVersion();
            }

            //Google Analytics for app
            var gaPlugin = window.plugins.gaPlugin;
            gaPlugin.init(gaPluginResultHandler, gaPluginErrorHandler, gaIdApp, 10);

            function gaPluginResultHandler(result) {
                window.console && console.log('gaPluginResultHandler - ' + result);
                //alert('gaPluginResultHandler - ' + result);
            }

            function gaPluginErrorHandler(error) {
                window.console && console.log('gaPluginErrorHandler - ' + error);
                //alert('gaPluginErrorHandler - ' + error);
            }

        }, 
        true
    );

} );