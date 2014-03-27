// Header Model
// ==============

// Includes file dependencies
define([
	"jquery",
	"backbone"
], function( $, Backbone ) {

    // The Model constructor
    var Model = Backbone.Model.extend( {
    	defaults: {
	    	"propertyHomePageUrl": config.propertyHomePageUrl,
	    	"propertyLogoSrc": config.propertyLogoSrc,
	    	"propertyName": config.propertyName    		
    	}
    } );

    // Returns the Model class
    return Model;

} );