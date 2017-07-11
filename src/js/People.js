/*jshint loopfunc: true */
function People_clickPerson(obj, zoom) {
	zoom.classList.add('is-active');
	var target = obj.getAttribute('href').replace('#', '');
	if (target) {
		var slide = document.getElementById(target),
			slideIndex = slide.getAttribute('data-slick-index');
console.log('slideIndex', slideIndex);
console.log('jQuery(.slick-slider, zoom)', jQuery('> .slick-slider', zoom));
		jQuery('.slick-slider', zoom).slick('slickGoTo', slideIndex);
		jQuery(window).trigger('resize');
	}
}

function People_setup(obj) {
	var links = obj.querySelectorAll('.Box--person .button'),
		zoom = obj.querySelector('.PeopleZoom');
	if (links) {
console.log('links', links);
		for (var j = 0, jl = links.length; j < jl; j++) {
			links[j].addEventListener('click', function(e) {
				e.preventDefault();
				People_clickPerson(this, zoom);
			});
		}
	}
}

function People_init() {
	var people = document.getElementsByClassName('Boxes--people');
	if (people) {
		for (var i = 0, l = people.length; i < l; i++) {
			People_setup(people[i]);
		}
	}
}

document.addEventListener('DOMContentLoaded', function() {

	People_init();

});
