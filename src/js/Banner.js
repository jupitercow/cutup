document.addEventListener('DOMContentLoaded', function() {

	jQuery('.Banner-slides').slick({
		arrows: true,
		autoplay: true,
		autoplaySpeed: 7000,
		dots: true,
		draggable: true,
		fade: true,
		infinite: true,
		nextArrow: arrows.next,
		prevArrow: arrows.prev,
		slidesToScroll: 1,
		slidesToShow: 1,
		speed: 600,
		swipe: true,
		touchMove: true,
	});

});
