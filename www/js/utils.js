//Open external link on a new browser window and for phonegap app, open in Phonegap inappbrowser
function openLinkExternal (targetURL) {
    if (window.Phonegap || window.cordova) {
        if (device.platform == "Android") {
            window.open(targetURL, "_system");   
        }
        else {
            window.open(targetURL, "_blank", "EnableViewPortScale=yes", "location=yes");           
        }            
    }
    else {
        window.open(targetURL, "_blank");
    }
}

//Open external link on a new browser window and for phonegap app, open in Phonegap inappbrowser
// function openFile (targetURL) {

//     if (window.PhoneGap || window.cordova) {
//         alert ("device= " + device.platform);
//         if (device.platform == "Android") {
//             window.open(targetURL, "_blank");
//         }
//         else {
//             //window.plugins.childBrowser.showWebPage(targetURL, { showLocationBar: true, showAddress: false, showNavigationBar: true });
//             window.open(targetURL, '_system');
//         }
//     }
//     else {
//         var popup = window.open(targetURL, "_blank");
//         //Handle popup blocker
//         if (!popup || popup.closed || (typeof popup.closed == 'undefined')) {
//             handleError(0, "Please allow popup for this site on your browser and try again.");
//         }
//     }

// }

function handleError (errorCode, errorMessage) {
	//TODO 
	alert("Error " + errorCode + ":" + errorMessage);
}