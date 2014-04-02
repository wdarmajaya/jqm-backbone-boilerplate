// Includes file dependencies
define([
    "jquery",
    "init",
    "config",
    "utils"
], function( $, Init, Config, Utils ) {

    //Capture page show event for analytic
    $(document).on("pageshow", function () {
        
        //Google analytics
        try {
            if (window.PhoneGap || window.cordova) {
                gaPlugin.trackPage(gaPluginResultHandler, gaPluginErrorHandler, $.mobile.activePage.attr("data-url"));
                window.console && console.log("_trackGaPlugin=" + $.mobile.activePage.attr("data-url"));
            }
            else {
                _gaq.push(['_setAccount', config.gaIdWeb]);
                window.console && console.log("_setAccount=" + config.gaIdWeb);

                if ($.mobile.activePage.attr("data-url")) {
                    _gaq.push(['_trackPageview', $.mobile.activePage.attr("data-url")]);
                    window.console && console.log("_trackPageview=" + $.mobile.activePage.attr("data-url"));
                } else {
                    _gaq.push(['_trackPageview']);
                    window.console && console.log("_trackPageView");
                }
            }
        } catch (err) { 
            window.console && console.log("Unable to track page=" + err);
        }
    });


    //Capture click event for my-external-link class
    $(document).on('click', ".my-external-link", function (e) {

        //prevent href from being executed by JQM
        e.preventDefault();
        utils.openLinkExternal($(this).attr("href"));
    });

    //Capture click event for my-external-file class
    $(document).on('click', ".my-external-file", function (e) {

        //prevent href from being executed by JQM
        e.preventDefault();
        utils.openFileExternal($(this).attr("href"));
    });

} );