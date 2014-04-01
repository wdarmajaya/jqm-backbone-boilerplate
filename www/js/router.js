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
	"collections/CategoriesCollection",
    "views/HomeView",
    "views/InvestorView",
    "views/AboutView",
    "views/AdvantageView",
    "views/NetworkView",
    "utils"
], function( 
    $,
    Backbone,
    JQM,
    HeaderView,
    HeaderModel,
    MenuPanelView, 
    FooterView, 
    FooterModel,
    CategoriesCollection, 
    HomeView, 
    InvestorView,
    AboutView,
    AdvantageView,
    NetworkView,
    Utils
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

            // Render static home page
            var homeView = new HomeView( { el: "#home" } );
            homeView.render();

            // Render static about us page
            var aboutView = new AboutView( { el: "#about" } );
            aboutView.render();

            // Render investor page
            var investorView = new InvestorView({ el: "#investor" });
            investorView.render();

            // Render static footer
            var footerView = new FooterView( { el: "#my-footer", model: new FooterModel() } );
            footerView.render();

            // Instantiates a new Advantage Category View
            this.advantageView = new AdvantageView( { el: "#advantage", collection: new CategoriesCollection( [] , { type: "advantage" } ) } );

            // Instantiates a new Network Category View
            this.networkView = new NetworkView( { el: "#network", collection: new CategoriesCollection( [] , { type: "network" } ) } );

            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },

        // Backbone.js Routes
        routes: {

            // When there is no hash bang on the url, the home method is called
            "": "home",

            "about": "about",

            // When #category? is on the url, the category method is called
            "category?:type": "category",

            "investor": "investor"

        },

        // Home method
        home: function() {

            // Programatically changes to the home page
            $.mobile.changePage( "#home" , { reverse: false, changeHash: false } );

        },

        about: function() {

            $.mobile.changePage( "#about" , { reverse: false, changeHash: false } );

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

        investor: function() {
            $.mobile.changePage( "#investor" , { reverse: false, changeHash: false } );            
        }

    } );

    // Returns the Router class
    return Router;

} );