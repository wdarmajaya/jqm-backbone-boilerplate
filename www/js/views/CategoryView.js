// Category View
// =============

// Includes file dependencies
define([
	"jquery",
	"backbone",
    "handlebars",
	"../models/CategoryModel",
    "../../libs/text!../../tpl/CategoryTpl.html"
], function( $, Backbone, Handlebars, CategoryModel, CategoryTpl ) {

    // Extends Backbone.View
    var CategoryView = Backbone.View.extend( {

        // The View Constructor
        initialize: function() {

            // The render method is called when Category Models are added to the Collection
            this.collection.on( "added", this.render, this );

        },

        // Renders all of the Category models on the UI
        render: function() {

            // Sets the view's template property
            var template = Handlebars.compile(CategoryTpl);            
            var html = template(this.collection.toJSON());
            this.$el.find(".my-content").html(html);

            // Maintains chainability
            return this;

        }

    } );

    // Returns the View class
    return CategoryView;

} );