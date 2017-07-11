document.addEventListener('DOMContentLoaded', function() {

	var arrows = {
			prev: '<button class="arrow-left"><svg><title>Previous</title><use xlink:href="assets/img/icons.svg#arrow-large-left"></use></svg></button>',
			next: '<button class="arrow-right"><svg><title>Next</title><use xlink:href="assets/img/icons.svg#arrow-large-right"></use></svg></button>',
			prevSmall: '<button class="arrow-left arrow-small"><svg><title>Previous</title><use xlink:href="assets/img/icons.svg#arrow-small-left"></use></svg></button>',
			nextSmall: '<button class="arrow-right arrow-small"><svg><title>Next</title><use xlink:href="assets/img/icons.svg#arrow-small-right"></use></svg></button>',
			prevSimple: '<button class="arrow-left arrow-simple">Previous</button>',
			nextSimple: '<button class="arrow-right arrow-simple">Next</button>',
		};

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

	jQuery('.BoxesSlides').slick({
		adaptiveHeight: false,
		arrows: true,
		autoplay: false,
		dots: false,
		//focusOnSelect: true,
		infinite: true,
		nextArrow: arrows.next,
		prevArrow: arrows.prev,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 935,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			}, {
				breakpoint: 631,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			}],
	});

	jQuery('.SingleSlides-content')
		.on('init', function() {
			this.parentNode.classList.add('is-loaded');
		})
		.slick({
			arrows: true,
			autoplay: false,
			dots: false,
			draggable: true,
			fade: true,
			infinite: true,
			nextArrow: arrows.nextSmall,
			prevArrow: arrows.prevSmall,
			slidesToScroll: 1,
			slidesToShow: 1,
			speed: 600,
			swipe: true,
			touchMove: true,
		});

	jQuery('.Testimonials-slides').slick({
		arrows: true,
		autoplay: false,
		dots: false,
		draggable: true,
		fade: true,
		infinite: true,
		nextArrow: arrows.nextSimple,
		prevArrow: arrows.prevSimple,
		slidesToScroll: 1,
		slidesToShow: 1,
		speed: 600,
		swipe: true,
		touchMove: true,
	});

});
