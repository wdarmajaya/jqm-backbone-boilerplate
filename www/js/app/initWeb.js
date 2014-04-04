// livechatinc
var __lc = {};

//Google Analytics for web
var _gaq = _gaq || [];

// Includes file dependencies
define([
    "jquery",
    "app/config"
], function($, config) {

    //Set the favicon
    $("#my-favicon").attr("href", config.propertyFavIcon);

    //Google Analytics for web init
    (function () {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        window.console && console.log("initWeb/Web GA");
    })();

    //Livechatinc for web init
    __lc.license = config.liveChatIncLicense;
    (function() {
        var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
        lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
        window.console && console.log("initWeb/Livechatinc");    
    })();


} );