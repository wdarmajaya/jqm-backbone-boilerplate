//Open external link on a new browser window and for phonegap app, open in the phone's browser
function openLinkExternal (targetURL) {

    if (window.PhoneGap || window.cordova) {
        //open in phone's browser window
        window.open(targetURL, "_system"); 
    }
    else {
        //open in a new browser window
        window.open(targetURL, "_blank");
    }
}

//Download a file from specified url.
//Android: opens up phone's browser and start download notification
//Non-android: displays on childbrowser using browser's viewer
//Desktop/browser: opens up hidden iframe to start download dialog
function openFile (targetURL) {

    if (window.PhoneGap || window.cordova) {
        if (device.platform == "Android") {
            window.open(targetURL, "_system");
        }
        else {
            window.plugins.childBrowser.showWebPage(targetURL, { showLocationBar: true, showAddress: false, showNavigationBar: true });
        }
    }
    else {
        var popup = window.open(targetURL, "_blank");
        //Handle popup blocker
        if (!popup || popup.closed || (typeof popup.closed == 'undefined')) {
            handleError(0, "Please allow popup for this site on your browser and try again.");
        }
    }

}

function handleError (errorCode, errorMessage) {
	//TODO 
	alert("Error " + errorCode + ":" + errorMessage);
}