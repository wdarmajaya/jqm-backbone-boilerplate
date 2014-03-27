// Footer Model
// ==============

// Includes file dependencies
define([
	"jquery",
	"backbone",
    "config"
], function( $, Backbone, Config ) {

    // The Model constructor
    var Model = Backbone.Model.extend( {
    	defaults: {
	    	"propertyName": config.propertyName,
	    	"propertyContactPhone": config.propertyContactPhone,
	    	"propertyStreetAddress": config.propertyStreetAddress    		
    	}
    } );

    // Returns the Model class
    return Model;

} );