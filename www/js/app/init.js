// Includes file dependencies
define([
    "jquery",
    "app/config"
    ], function( $, Config ) {

    //JQM Init
    $( document ).on( "mobileinit",

        // Set up the "mobileinit" handler before requiring jQuery Mobile's module
        function () {

            // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
            $.mobile.linkBindingEnabled = false;

            // Disabling this will prevent jQuery Mobile from handling hash changes
            $.mobile.hashListeningEnabled = false;

            // Set the page transition 
            $.mobile.defaultPageTransition = "none";

            window.console && console.log("init/JQM mobileinit");

        }
    );

    //offline.js init
    // Offline.options = {
    //     checks: {
    //         image: {
    //             url: function() {
    //                return Config.offlineCheckImgUrl + '?_=' + (Math.floor(Math.random() * 1000000000));
    //             }
    //         },
    //         active: 'image'
    //     },

    //     // Should we check the connection status immediatly on page load.
    //     checkOnLoad: false,

    //     // Should we monitor AJAX requests to help decide if we have a connection.
    //     interceptRequests: true,

    //     // Should we store and attempt to remake requests which fail while the connection is down.
    //     requests: false,

    //     // Should we show a snake game while the connection is down to keep the user entertained?
    //     // It's not included in the normal build, you should bring in js/snake.js in addition to
    //     // offline.min.js.
    //     game: false        

    // }
    // window.console && console.log("init/offlinejs");

} );