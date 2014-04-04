// Router
// ======

// Includes file dependencies
define([
    "jquery", "backbone", "jquerymobile"], function($, Backbone, Mobile) {

    // Extends Backbone.Router
    var Router = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {

            require([
                "app/views/HeaderView",
                "app/models/HeaderModel",
                "app/views/MenuPanelView",
                "app/views/FooterView",
                "app/models/FooterModel"
                ], 
                function (
                    HeaderView,
                    HeaderModel,
                    MenuPanelView, 
                    FooterView, 
                    FooterModel                    
                ) {
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
            });


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
            require(["app/views/HomeView"], function (HomeView) {
                // if homeView not yet rendered
                if (!this.homeView) {
                    this.homeView = new HomeView( { el: "#home" } );
                    this.homeView.render();
                }
            });

            // Programatically changes to the home page
            $.mobile.changePage( "#home" , { reverse: false, changeHash: false } );

        },

        about: function() {
            require(["app/views/AboutView"], function (AboutView) {
                // if aboutView not yet rendered
                if (!this.aboutView) {
                    this.aboutView = new AboutView( { el: "#about" } );
                    this.aboutView.render();                
                } 
            });

            $.mobile.changePage( "#about" , { reverse: false, changeHash: false } );
        },

        // Category method that passes in the type that is appended to the url hash
        category: function(type) {
            require(["app/views/AdvantageView", "app/views/NetworkView", "app/collections/CategoriesCollection"], 
                function (AdvantageView, NetworkView, CategoriesCollection) {

                    //if views not yet instantiated
                    if (!this.advantageView) {
                        this.advantageView = new AdvantageView( { el: "#advantage", collection: new CategoriesCollection( [] , { type: "advantage" } ) } );
                    }
                    if (!this.networkView) {
                        this.networkView = new NetworkView( { el: "#network", collection: new CategoriesCollection( [] , { type: "network" } ) } );
                    }

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

                }
            );            

        },

        investor: function() {
            require(["app/views/InvestorView"], function (InvestorView) {
                if (!this.investorView) {
                    // Render investor page
                    this.investorView = new InvestorView({ el: "#investor" });
                    this.investorView.render();
                }
            });
            $.mobile.changePage( "#investor" , { reverse: false, changeHash: false } );            
        }


    } );

    // Returns the Router class
    return Router;

} );