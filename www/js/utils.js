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
    //display alert using Bootstrap's alert
    ////alertType = bootstrap's type (alert-success, alert-info, alert-warning, alert-danger)
    displayAlert: function (alertType, alertMessage) {
        var alertClass;

        switch (alertType) {
            case "SUCCESS": 
                alertClass = "alert-success";
                break;
            case "INFO":
                alertClass = "alert-info";
                break;
            case "WARNING":
                alertClass = "alert-warning";
                break;
            case "ERROR":
                alertClass = "alert-danger";
                break;
            default:
                alertClass = "alert-danger";
        }


        $('.my-alert-messages').empty().append(
            '<div class="alert ' + alertClass + ' alert-dismissable">' +
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">' +
                '&times;</button>' + alertMessage + '</div>');
    }
}