// Category View
// =============

// Includes file dependencies
define([
	"jquery",
	"backbone",
    "handlebars",
    "../../libs/text!../../tpl/MenuPanelTpl.html"
], function( $, Backbone, Handlebars, Template ) {

    // Extends Backbone.View
    var view = Backbone.View.extend( {

        // The View Constructor
        initialize: function() {
        },

        // Renders all of the Category models on the UI
        render: function() {
            // Sets the view's template property
            var template = Handlebars.compile(Template);            
            var html = template();
            this.$el.html(html);

            // Refresh the JQM elements
            $( "[data-role='panel']" ).panel();
            $( ".my-navmenu-panel ul" ).listview();

            // Maintains chainability
            return this;
        }

    } );

    // Returns the View class
    return view;

} );