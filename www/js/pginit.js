// Includes file dependencies
// define([
//     "jquery",
//     "config",
//     "fastclick"
// ], function( $, Config, Fastclick ) {
//TODO file dependencies causing issue with phonegap. gaPlugin cannot be referenced.
    
    ///////////////////////////
    //Phonegap Init
    var gaPlugin;
    
    function gaPluginResultHandler(result) {
        //window.console && console.log('gaPluginResultHandler - ' + result);
        alert('gaPluginResultHandler - ' + result);
    }

    function gaPluginErrorHandler(error) {
        //window.console && console.log('gaPluginErrorHandler - ' + error);
        alert('gaPluginErrorHandler - ' + error);
    }

    document.addEventListener("deviceready", 
        function () {
           window.console && console.log("onDeviceReady Phonegap");
     
            //Fastclick eliminates 300ms delay on tapping on mobile browsers/webkit
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

// } );