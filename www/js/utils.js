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
    handleError: function (errorCode, errorMessage) {
        //TODO 
        alert("Error " + errorCode + ":" + errorMessage);
    }

}