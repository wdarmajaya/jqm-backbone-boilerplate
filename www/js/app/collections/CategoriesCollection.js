// Category Collection
// ===================

// Includes file dependencies
define([
	"jquery",
	"backbone",
	"app/models/CategoryModel" ], function( $, Backbone, CategoryModel ) {

    // Extends Backbone.Router
    var Collection = Backbone.Collection.extend( {

        // The Collection constructor
        initialize: function( models, options ) {

            // Sets the type instance property (ie. animals)
            this.type = options.type;

        },

        // Sets the Collection model property to be a Category Model
        model: CategoryModel,

        // Sample JSON data that in a real app will most likely come from a REST web service
        jsonArray: [

            { "category": "advantage", "type": "Customers Come First" },

            { "category": "advantage", "type": "Disciplined and Prudent Financial Management" },

            { "category": "advantage", "type": "Long Term Focus" },

            { "category": "advantage", "type": "Emphasis on Local Management" },

            { "category": "network", "type": "GT&T" },

            { "category": "network", "type": "MIO" },

            { "category": "network", "type": "Choice Wireless" },

            { "category": "network", "type": "Islandcom" },

            { "category": "network", "type": "CellOne Bermuda" },

            { "category": "network", "type": "Sovernet" },

            { "category": "network", "type": "ION" },

            { "category": "network", "type": "Commnet" }

        ],

        // Overriding the Backbone.sync method (the Backbone.fetch method calls the sync method when trying to fetch data)
        sync: function( method, model, options ) {

            // Local Variables
            // ===============

            // Instantiates an empty array
            var categories = [],

                // Stores the this context in the self variable
                self = this,

                // Creates a jQuery Deferred Object
                deferred = $.Deferred();

            // Uses a setTimeout to mimic a real world application that retrieves data asynchronously
            setTimeout( function() {

                // Filters the above sample JSON data to return an array of only the correct category type
                categories = _.filter( self.jsonArray, function( row ) {

                    return row.category === self.type;

                } );

                // Calls the options.success method and passes an array of objects (Internally saves these objects as models to the current collection)
                options.success( categories );

                // Triggers the custom `added` method (which the Category View listens for)
                self.trigger( "added" );

                // Resolves the deferred object (this triggers the changePage method inside of the Category Router)
                deferred.resolve();

            }, 1000);

            // Returns the deferred object
            return deferred;

        }

    } );

    // Returns the Model class
    return Collection;

} );