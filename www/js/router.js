// Mobile Router
// =============

// Includes file dependencies
define([
    "jquery",
    "backbone",
    "global",
    "events",
    "utils",
	"models/CategoryModel",
	"collections/CategoriesCollection",
	"views/CategoryView",
    "views/HomeView",
    "views/MenuPanelView",
    "views/FooterView",
    "views/DownloadView"
], function($, Backbone, Global, Events, Utils, CategoryModel, CategoriesCollection, CategoryView, HomeView, MenuPanelView, FooterView, DownloadView ) {

    // Extends Backbone.Router
    var Router = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {

            // Instantiates a new Animal Category View
            this.animalsView = new CategoryView( { el: "#animals", collection: new CategoriesCollection( [] , { type: "animals" } ) } );

            // Instantiates a new Colors Category View
            this.colorsView = new CategoryView( { el: "#colors", collection: new CategoriesCollection( [] , { type: "colors" } ) } );

            // Instantiates a new Vehicles Category View
            this.vehiclesView = new CategoryView( { el: "#vehicles", collection: new CategoriesCollection( [] , { type: "vehicles" } ) } );

            // Render static menu panel
            var menuPanelView = new MenuPanelView( { el: "#my-panel"} );
            menuPanelView.render();

            // Render static footer
            var footerView = new FooterView({ el: "#my-footer"});
            footerView.render();

            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },

        // Backbone.js Routes
        routes: {

            // When there is no hash bang on the url, the home method is called
            "": "home",

            // When #category? is on the url, the category method is called
            "category?:type": "category",

            "pdfdownload": "pdfdownload"

        },

        // Home method
        home: function() {

            var homeView = new HomeView( { el: "#categories" } );

            homeView.render();
            
            // Programatically changes to the categories page
            $.mobile.changePage( "#categories" , { reverse: false, changeHash: false } );

        },

        // Category method that passes in the type that is appended to the url hash
        category: function(type) {

            // Stores the current Category View  inside of the currentView variable
            var currentView = this[ type + "View" ];

            // If there are no collections in the current Category View
            if(!currentView.collection.length) {

                // Show's the jQuery Mobile loading icon
                $.mobile.loading( "show" );

                // Fetches the Collection of Category Models for the current Category View
                currentView.collection.fetch().done( function() {

                    // Programatically changes to the current categories page
                    $.mobile.changePage( "#" + type, { reverse: false, changeHash: false } );
    
                } );

            }

            // If there already collections in the current Category View
            else {

                // Programatically changes to the current categories page
                $.mobile.changePage( "#" + type, { reverse: false, changeHash: false } );

            }

        },

        pdfdownload: function() {

            var downloadView = new DownloadView({ el: "#pdfdownload" });
            downloadView.render();
            $.mobile.changePage( "#pdfdownload" , { reverse: false, changeHash: false } );            
        }

    } );

    // Returns the Router class
    return Router;

} );