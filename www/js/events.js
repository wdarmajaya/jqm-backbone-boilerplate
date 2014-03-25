///////////////////////////
//Phonegap Init
document.addEventListener("deviceready", 
    function () {
        window.console && console.log("onDeviceReady");
        $(".hidden-phonegap").remove();
        $(".fullwidth-phonegap").width("100%");
        if (window.PhoneGap || window.cordova) {
            //TODO checkAppVersion();
        }

        //Google Analytics for app
        var gaPlugin = window.plugins.gaPlugin;
        gaPlugin.init(gaPluginResultHandler, gaPluginErrorHandler, GA_ID_APP, 10);

        function gaPluginResultHandler(result) {
            //window.console && console.log('gaPluginResultHandler - ' + result);
            alert('gaPluginResultHandler - ' + result);
        }

        function gaPluginErrorHandler(error) {
            //window.console && console.log('gaPluginErrorHandler - ' + error);
            alert('gaPluginErrorHandler - ' + error);
        }

    }, 
    true
);


///////////////////////////
//JQM Init
$( document ).on( "mobileinit",

    // Set up the "mobileinit" handler before requiring jQuery Mobile's module
    function () {

        // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
        $.mobile.linkBindingEnabled = false;

        // Disabling this will prevent jQuery Mobile from handling hash changes
        $.mobile.hashListeningEnabled = false;

        //Populate the header logo and link
        $(".my-header-logo").empty().append(
            '<a href="'+ PROPERTY_HOMEPAGE_URL +
            '" class="my-external-link"><img src="' + PROPERTY_LOGO_SRC + 
            '" alt="' + PROPERTY_NAME + '"></a>');

        // Refresh the static header, footer, and menu panel
        $( "[data-role='header'], [data-role='footer']" ).toolbar();
        $( "[data-role='panel']" ).panel();
        $( ".my-navmenu-panel ul" ).listview();
    }
);

//Google Analytics for website init
var _gaq = _gaq || [];

(function () {
    window.console && console.log("GA init");
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

//Capture page show event for analytic
$(document).on("pageshow", function () {
    //Google analytics
    try {
        _gaq.push(['_setAccount', GA_ID_WEB]);
        window.console && console.log("_setAccount=" + GA_ID_WEB);

        if ($.mobile.activePage.attr("data-url")) {
            window.console && console.log("_trackPageview=" + $.mobile.activePage.attr("data-url"));
            _gaq.push(['_trackPageview', $.mobile.activePage.attr("data-url")]);
            if (window.PhoneGap || window.cordova) {
                alert("_trackPageview=" + $.mobile.activePage.attr("data-url"));
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

    openLinkExternal($(this).attr("href"));
});


//Capture click event for my-download-link class
$(document).on('click', ".my-download-link", function (e) {

    //prevent href from being executed by JQM
    e.preventDefault();

    openFile($(this).attr("href"));
});


