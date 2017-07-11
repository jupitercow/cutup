function TabbedNav_click(e) {
	e.preventDefault();

	// Deactivate siblings
	var links = this.parentNode.parentNode.getElementsByClassName('TabbedLink-link');
	for (var j = 0, jl = links.length; j < jl; j++) {
		links[j].classList.remove('is-active');
	}

	Tabbed_activateLink(this);
}

function Tabbed_activateLink(obj, cancelScroll) {
	obj.classList.add('is-active');
	if (!cancelScroll) {
		jQuery('html, body').animate({scrollTop: jQuery(obj).offset().top}, 500);
	}
	var targetId = obj.getAttribute('href').replace('#', ''),
		target = document.getElementById(targetId);
	if (target) {
		Tabbed_activateTab(target);
	}
}

function Tabbed_activateTab(obj) {
	var tabs = obj.parentNode.getElementsByClassName('TabbedTab');
	for (var j = 0, jl = tabs.length; j < jl; j++) {
		tabs[j].classList.remove('is-active');
	}
	obj.classList.add('is-active');
	jQuery(window).trigger('resize');
}

function Tabbed_init() {
	var tabbed = document.getElementsByClassName('Tabbed');
	if (tabbed) {
		for (var i = 0, l = tabbed.length; i < l; i++) {
			var links = tabbed[i].getElementsByClassName('TabbedLink-link');
			if (links) {
				for (var j = 0, jl = links.length; j < jl; j++) {
					links[j].addEventListener('click', TabbedNav_click);
				}
				Tabbed_activateLink(links[0], true);
			}
			var tabs = tabbed[i].getElementsByClassName('TabbedTab');
			if (tabs) {
				Tabbed_activateTab(tabs[0]);
			}
		}
	}
}

document.addEventListener('DOMContentLoaded', function() {

	Tabbed_init();

});
