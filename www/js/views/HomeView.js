// Category View
// =============

// Includes file dependencies
define([
	"jquery",
	"backbone",
    "handlebars",
    "../../libs/text!../../tpl/HomeTpl.html",
    "../utils",
    "../config"
], function( $, Backbone, Handlebars, Template, Utils, Config ) {

    // Extends Backbone.View
    var view = Backbone.View.extend( {
        events: {
            'click #btn-success': 'buttonSuccess',
            'click #btn-info': 'buttonInfo',
            'click #btn-warning': 'buttonWarning',
            'click #btn-error': 'buttonError',
            'click #btn-default': 'buttonDefault',
            'click #a-test-chat': 'aTestChat'
        },
        buttonSuccess: function() {
            utils.displayAlert("SUCCESS", "Testing SUCCESS alert message");
        },
        buttonInfo: function() {
            utils.displayAlert("INFO", "Testing INFO alert message");
        },
        buttonWarning: function() {
            utils.displayAlert("WARNING", "Testing WARNING alert message");
        },
        buttonError: function() {
            utils.displayAlert("ERROR", "Testing ERROR alert message");
        },
        buttonDefault: function() {
            utils.displayAlert("DEFAULT", "Testing DEFAULT alert message");
        },
        aTestChat: function() {
            utils.openLinkExternal(config.liveChatIncMobileUrl);
        },                             
        // The View Constructor
        initialize: function() {
        },

        // Renders all of the Category models on the UI
        render: function() {
            // Sets the view's template property
            var template = Handlebars.compile(Template);            
            var html = template();
            this.$el.html(html);

            // Maintains chainability
            return this;

        }

    } );

    // Returns the View class
    return view;

} );