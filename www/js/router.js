// Mobile Router
// =============

// Includes file dependencies
define([
    "jquery",
    "backbone",
    "jquerymobile",
    "views/HeaderView",
    "models/HeaderModel",
    "views/MenuPanelView",
    "views/FooterView",
    "models/FooterModel",    
    "views/CategoryView",        
	"collections/CategoriesCollection",
    "views/HomeView",
    "views/DownloadView"
], function( 
    $,
    Backbone,
    JQM,
    HeaderView,
    HeaderModel,
    MenuPanelView, 
    FooterView, 
    FooterModel,
    CategoryView,
    CategoriesCollection, 
    HomeView, 
    DownloadView
    ) {

    // Extends Backbone.Router
    var Router = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {

            // Render header
            var headerMobileView = new HeaderView( { el: "#my-header-mobile", model: new HeaderModel() } );
            headerMobileView.render();

            // Render header
            var headerDesktopView = new HeaderView( { el: "#my-header-desktop", model: new HeaderModel() } );
            headerDesktopView.render();

            // Render static menu panel
            var menuPanelView = new MenuPanelView( { el: "#my-panel"} );
            menuPanelView.render();

            // Render static footer
            var footerView = new FooterView( { el: "#my-footer", model: new FooterModel() } );
            footerView.render();

            // Instantiates a new Animal Category View
            this.animalsView = new CategoryView( { el: "#animals", collection: new CategoriesCollection( [] , { type: "animals" } ) } );

            // Instantiates a new Colors Category View
            this.colorsView = new CategoryView( { el: "#colors", collection: new CategoriesCollection( [] , { type: "colors" } ) } );

            // Instantiates a new Vehicles Category View
            this.vehiclesView = new CategoryView( { el: "#vehicles", collection: new CategoriesCollection( [] , { type: "vehicles" } ) } );

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

            var homeView = new HomeView( { el: "#home" } );

            homeView.render();
            
            // Programatically changes to the home page
            $.mobile.changePage( "#home" , { reverse: false, changeHash: false } );

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