
//Burger Menu

// 'use strict';
// var burger = document.getElementById('burger-button');
// burger.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.body.classList.toggle('open');
//     burger.classList.toggle('open');
// });

var waypoint = new Waypoint({
	element: document.getElementById('grid_events'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
  }
});

$(document).ready(function() {
	$('section').waypoint(function() {
		window.console.log('scroll engaged');
		$('section').toggleClass('scroll');
	});
});