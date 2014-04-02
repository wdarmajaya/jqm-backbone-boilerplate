// livechatinc
var __lc = {};

//Google Analytics    
var _gaq = _gaq || [];


// Includes file dependencies
define([
    "jquery",
    "config"
], function( $, Config ) {

    //Set the favicon
    $("#my-favicon").attr("href", config.propertyFavIcon);

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

    //Google Analytics for website init
    (function () {
        window.console && console.log("GA init");
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();


    //Livechatinc
    __lc.license = config.liveChatIncLicense;
    (function() {
    var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
    lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
    })();

    //offline.js init
    Offline.options = {
        checks: {
            image: {
                url: function() {
                   return config.offlineCheckImgUrl + '?_=' + (Math.floor(Math.random() * 1000000000));
                }
            },
            active: 'image'
        }
    }

} );