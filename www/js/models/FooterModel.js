// Footer Model
// ==============

// Includes file dependencies
define([
	"jquery",
	"backbone"
], function( $, Backbone ) {

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