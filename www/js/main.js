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
            "underscoretext": "../libs/text",
            "fastclick": "../libs/fastclick",
            "bootstrap": "../libs/bootstrap.min",
            "utils": "utils"
      },

      // Sets dependencies and also the configuration for your third party scripts that are not AMD compatible
      shim: {

            //jquerymobile depends on jquery
            'jquerymobile': ['jquery'],

            //backbone depends on underscore and jquery
            'backbone': ['underscore', 'jquery'],

            //bootstrap depends on jquery
            'bootstrap': ['jquery'],

            //utils depends on jquery
            'utils': ['jquery'],
            
            "handlebars": {
                  "exports": "Handlebars"  //attaches "Handlebars" to the window object
            }

      } // end Shim Configuration

} );


// Includes File Dependencies

require([ 
      "jquery",
      "backbone",
      "bootstrap",       
      "router", 
      "fastclick",
      "init", 
      "config", 
      "events", 
      "utils" 
      ], 
      function ($, Backbone, Bootstrap, Router, Fastclick, Init, Config, Events, Utils) {

      //if Phonegap/Cordova app
      if (document.location.protocol == 'file:') { 
            require( [ "pginit" ], function (PgInit) {
                  console.log ("pginit required");
            } );
      }

      require( [ "jquerymobile" ], function (JQM) {
            // Instantiates a new Backbone.js Mobile Router
            this.router = new Router();
      });

});