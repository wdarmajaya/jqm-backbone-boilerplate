var utils = {

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
    //Android app: open in native browser so download process will get executed (Android browser does not have built-in viewer like iOS)
    openFileExternal: function (targetURL) {
        if (window.Phonegap || window.cordova) {
            window.console && console.log("in openFileExternal");
            window.console && console.log("device.platform= " + device.platform);
            
            if (device.platform == "Android") {

                window.open(targetURL, "_system", "EnableViewPortScale=yes", "location=yes");
            }
            else { 
                window.open(targetURL, "_blank", "EnableViewPortScale=yes", "location=no");
            }
        }
        else {
            window.open(targetURL, "_blank");
        }
    },    
    handleError: function (errorCode, errorMessage) {
        //TODO 
        alert("Error " + errorCode + ":" + errorMessage);
    }

}