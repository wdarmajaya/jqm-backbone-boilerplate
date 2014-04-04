// Sets the require.js configuration
require.config( {

      //By default load any module IDs from js/lib
      baseUrl: 'js/lib',

      //except, if the module ID starts with "app",
      //load it from the js/app directory. paths
      //config is relative to the baseUrl, and
      //never includes a ".js" extension since
      //the paths config could be for a directory.
      paths: {
        app: '../app'
      },

      //Sets library dependencies and 
      //the configuration for your third party scripts that are not AMD compatible
      shim: {

            //jquerymobile depends on jquery
            'jquerymobile': ['jquery'],

            //backbone depends on underscore and jquery
            'backbone': ['underscore', 'jquery'],

            //bootstrap depends on jquery
            'bootstrap': ['jquery'],
           
            "handlebars": {
                  "exports": "Handlebars"  //attaches "Handlebars" to the window object
            },

            "alertify": {
                  "exports": "Alertify"
            }

      } // end Shim Configuration

} );

//If this is phonegap app
if (document.location.protocol === 'file:') {
      
      //Wait for phonegap's ondeviceready
      document.addEventListener("deviceready", onDeviceReady, true);

      function onDeviceReady() {    
            console.log("onDeviceReady");       
            require(["app/initApp"], function () {
                  initialize();
            });
      }
}
//Web
else {
      require(["app/initWeb"], function() {
            initialize();
      });
}

function initialize() {
      require(["app/init", "app/events"], function() {
            //Wait for init.js loaded before loading jqm
            //to capture mobileinit event
            require(["jquerymobile", "app/router"], function(Mobile, Router) {
                  // Instantiates a new Backbone.js Mobile Router
                  this.router = new Router();                  
            });
      });      
}