// Includes file dependencies
define([
    "jquery",
    "init"
], function( $, Init ) {

    //Capture page show event for analytic
    $(document).on("pageshow", function () {
        //Google analytics
        try {
            _gaq.push(['_setAccount', config.gaIdWeb]);
            window.console && console.log("_setAccount=" + config.gaIdWeb);

            if ($.mobile.activePage.attr("data-url")) {
                window.console && console.log("_trackPageview=" + $.mobile.activePage.attr("data-url"));
                _gaq.push(['_trackPageview', $.mobile.activePage.attr("data-url")]);
                if (window.PhoneGap || window.cordova) {
                    gaPlugin.trackPage(gaPluginResultHandler, gaPluginErrorHandler, $.mobile.activePage.attr("data-url"));
                }
            } else {
                window.console && console.log("_trackPageView");
                _gaq.push(['_trackPageview']);
            }
        } catch (err) { }
    });


    //Capture click event for my-external-link class
    $(document).on('click', ".my-external-link", function (e) {

        //prevent href from being executed by JQM
        e.preventDefault();
        utils.openLinkExternal($(this).attr("href"));
    });

} );