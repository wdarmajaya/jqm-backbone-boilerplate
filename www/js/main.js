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
	"router"
], function ( $, Backbone, Router ) {

	require( [ "jquerymobile" ], function () {

		// Instantiates a new Backbone.js Mobile Router
		this.router = new Router();
	});
});
