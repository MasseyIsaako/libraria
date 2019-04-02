$(document).ready(function(){

	// Giving divisions variables for functions to work

	// Trigger opens the full screen mobile nav
	var trigger = $("#trigger")

	// The full screen overlay for mobile nav
	var open = $('#open')

	// The element that closes the overlay
	var close = $("#exit")

	// When trigger clicked, fade in the full screen mobile/tablet navigation.
	trigger.click(function(){
		open.fadeIn(600);
	});

	// When exit element pressed, fade out the full screen mobile/tablet nav.
	close.click(function(){
		open.fadeOut(600);
	});
});