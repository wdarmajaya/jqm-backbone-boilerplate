// Includes file dependencies
define([
    "jquery",
], function( $ ) {

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

            // Set the page transition 
            $.mobile.defaultPageTransition = "none";

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

} );