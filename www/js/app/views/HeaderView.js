// Category View
// =============

// Includes file dependencies
define([
	"jquery",
	"backbone",
    "handlebars",
    "app/models/HeaderModel",
    "text!app/templates/Header.html"
], function( $, Backbone, Handlebars, Model, Template ) {

    // Extends Backbone.View
    var view = Backbone.View.extend( {

        // The View Constructor
        initialize: function() {
        },

        // Renders all of the Category models on the UI
        render: function() {            
            // Sets the view's template property
            var template = Handlebars.compile(Template);            
            var html = template(this.model.toJSON());
            this.$el.html(html);

            // Refresh
            $( "[data-role='header']" ).toolbar();

            // Maintains chainability
            return this;
        }

    } );

    // Returns the View class
    return view;

} );