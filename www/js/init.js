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


///////////////////////////
//JQM Init
$( document ).on( "mobileinit",

    // Set up the "mobileinit" handler before requiring jQuery Mobile's module
    function () {

        window.console && console.log("JQM mobile init");

        // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
        $.mobile.linkBindingEnabled = false;

        // Disabling this will prevent jQuery Mobile from handling hash changes
        $.mobile.hashListeningEnabled = false;
    }
);

///////////////////////////
//Google Analytics for website init
var _gaq = _gaq || [];

(function () {
    window.console && console.log("GA init");
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();