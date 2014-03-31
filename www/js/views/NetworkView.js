// Network View
// =============

// Includes file dependencies
define([
	"jquery",
	"backbone",
    "handlebars",
	"../models/CategoryModel",
    "../../libs/text!../../tpl/NetworkTpl.html"
], function( $, Backbone, Handlebars, CategoryModel, Template ) {

    // Extends Backbone.View
    var view = Backbone.View.extend( {

        // The View Constructor
        initialize: function() {

            // The render method is called when Category Models are added to the Collection
            this.collection.on( "added", this.render, this );

        },

        // Renders all of the Category models on the UI
        render: function() {

            // Sets the view's template property
            var template = Handlebars.compile(Template);            
            var html = template(this.collection.toJSON());
            this.$el.html(html);

            // Maintains chainability
            return this;

        }

    } );

    // Returns the View class
    return view;

} );