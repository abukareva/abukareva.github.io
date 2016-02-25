$(function() {
	console.log(window)
	$(window).scroll(function() {
		var scrollPosition = window.scrollY;
		var $nav = $('nav');
		// var offset = $nav.offset();
		// console.log($nav.offset());
		if(scrollPosition > window.innerHeight - $nav.height()) {
			$nav.addClass('freeze');
		} else {
			$nav.removeClass('freeze');
		}
	});

	// $(window).scroll(function() {
	// 	var scrollProj = window.scrollY;
	// 	var $grid_bg = $('.grid_bg');
	// 	if(scrollProj > window.innerHeight) {
	// 		$grid_bg.addClass('freeze2');
	// 	} else {
	// 		$grid_bg.removeClass('freeze2');
	// 	}
	// })
});


//Events Calendar - Date Picker*********

$(function () {
	var $picker = $('.datepicker');
	    $toggler = $('.picker-toggler');
	$picker.datepicker({
		onSelect: function(date) {
			date = new Date(date);
			$toggler.text(date);
		}
	});
	$picker.hide();
	$toggler.click(function () {
		$picker.toggle();
	});

});

// NIGHT TIME EFFECT

$(function () {
	$(window).scroll(function() {
		var scrollPosition = window.scrollY;
		var $nightScroll = $('.nightscroll');
		var scrollArea = $nightScroll.height() - window.innerHeight;
		var scrollPercentage = scrollPosition/scrollArea;
		var colorNumber = parseInt(scrollPercentage * 255);
		$nightScroll.css({
		backgroundColor: 'rgb(' + colorNumber + ',' + colorNumber + ',' + colorNumber +')'
		})
	});
})
