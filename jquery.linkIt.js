/*
 * name:    LinkIt
 * author:  Iverson
 * version: 0.1.0
 * license: MIT
 */
 
 //Below syntax obviates (Document).ready
 
 (function($) {
      $.fn.linkIt = function(options){
      	  //Default settings
      	  var settings = $.extend({
      	  	href	:null,
      	  	text	:null,
      	  	target	:'_self'
      	  }, options);
      	  
      	  //Validate
      	  if(settings.href == null){
      	  	//a developer message:
      	  	console.log('href option needed for LinkIt to work!');
      	  	return this;
      	  }
      	  
      	  return this.each(function() {
      	  	//any element with this plugin attached
      	  	var object = $(this);
      	  	
      	  	if(settings.text == null){
      	  	
      	  		//then use the actual text of the target element
      	  		settings.text = object.text();
      	  	}
      	  	
      	  	object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
		debugger;
      	  });
      }
 }
 (jQuery)
 );