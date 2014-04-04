// Footer Model
// ==============

// Includes file dependencies
define([
	"jquery",
	"backbone",
    "app/config"
], function( $, Backbone, Config ) {

    // The Model constructor
    var Model = Backbone.Model.extend( {
    	defaults: {
	    	"propertyName": Config.propertyName,
	    	"propertyContactPhoneLink": Config.propertyContactPhoneLink,
            "propertyContactPhoneDisplay": Config.propertyContactPhoneDisplay,
	    	"propertyStreetAddress": Config.propertyStreetAddress    		
    	}
    } );

    // Returns the Model class
    return Model;

} );