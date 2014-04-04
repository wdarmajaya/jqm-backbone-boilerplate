// Header Model
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
	    	"propertyHomePageUrl": Config.propertyHomePageUrl,
	    	"propertyLogoSrc": Config.propertyLogoSrc,
	    	"propertyName": Config.propertyName    		
    	}
    } );

    // Returns the Model class
    return Model;

} );