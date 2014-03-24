// Sets the require.js configuration for your application.
require.config( {

      // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
      paths: {

            // Core Libraries
            "jquery": "../libs/jquery.min",
            "jquerymobile": "../libs/jquery.mobile.min",
            "underscore": "../libs/underscore",
            "backbone": "../libs/backbone",
            "handlebars": "../libs/handlebars",
            "underscoretext": "../libs/text"
      },

      // Sets the configuration for your third party scripts that are not AMD compatible
      shim: {

            "handlebars": {
                  "exports": "Handlebars"  //attaches "Handlebars" to the window object
            }

      } // end Shim Configuration

} );



// Includes File Dependencies
require([
	"jquery",
	"backbone",
	"routers/mobileRouter",
	"global"
], function ( $, Backbone, Mobile, Global ) {

	///////////////////////////
	//Phonegap Init
    document.addEventListener("deviceready", 
    	function () {
		    window.console && console.log("onDeviceReady");
		    alert("onDeviceReady");
		    $(".hidden-phonegap").remove();
		    $(".fullwidth-phonegap").width("100%");
		    if (window.PhoneGap || window.cordova) {
		        //TODO checkAppVersion();
		    }
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

			// Refresh the static header, footer, and menu panel
			$( "[data-role='header'], [data-role='footer']" ).toolbar();
			$( "[data-role='panel']" ).panel();
			$( ".my-navmenu-panel ul" ).listview();

		}
	);

	require( [ "jquerymobile" ], function () {

		// Instantiates a new Backbone.js Mobile Router
		this.router = new Mobile();
	});
});
