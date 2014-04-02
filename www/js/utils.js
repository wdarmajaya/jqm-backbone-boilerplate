var utils;

// Includes file dependencies
define([
    "alertify"
], function( alertify ) {

    utils = {

        //Open external link on a new browser window and for phonegap app, open in Phonegap inappbrowser
        openLinkExternal: function (targetURL) {
            if (window.Phonegap || window.cordova) {
                window.open(targetURL, "_blank", "EnableViewPortScale=yes", "location=no");
            }
            else {
                window.open(targetURL, "_blank");
            }
        },
        //Open file (PDF, CSV, etc) 
        //Browser: open on a new browser window
        //iOS app: open in Phonegap inappbrowser
        //Android app: open in Phonegap inappbrowser via Google Docs Viewer since Android browser does not have built-in viewer
        openFileExternal: function (targetURL) {
            if (window.Phonegap || window.cordova) {
                window.console && console.log("in openFileExternal");
                window.console && console.log("device.platform= " + device.platform);
                
                if (device.platform == "Android") {
                    var docUrl = "https://docs.google.com/viewer?embedded=true&url=" + targetURL;
                    console.log("openFileExternal android " + docUrl);
                    window.open(docUrl, "_system", "EnableViewPortScale=yes", "location=yes");
                }
                else { 
                    window.open(targetURL, "_blank", "EnableViewPortScale=yes", "location=no");
                }
            }
            else {
                window.open(targetURL, "_blank");
            }
        },    
        //Display alert using Bootstrap's alert
        //Alert will be dismissed during pageshow event
        //alertType = bootstrap's type (alert-success, alert-info, alert-warning, alert-danger)
        displayAlert: function (alertType, alertMessage) {
            var alertClass;

            if (alertType === "ERROR") {
                alertify.error(alertMessage);
            } else {
                alertify.success(alertMessage);
            }

        }
    }

} );