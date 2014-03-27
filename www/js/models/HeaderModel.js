// Header Model
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
	    	"propertyHomePageUrl": config.propertyHomePageUrl,
	    	"propertyLogoSrc": config.propertyLogoSrc,
	    	"propertyName": config.propertyName    		
    	}
    } );

    // Returns the Model class
    return Model;

} );