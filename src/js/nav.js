var mobileNav,
	container,
	navOverlay = document.createElement('div'),
	i,l;

function nav_toggleDrawer(e) {
	e.preventDefault();
	mobileNav.classList.toggle('is-active');
	document.body.classList.toggle('is-navOpen');
	this.blur();
}

document.addEventListener('DOMContentLoaded', function() {
	mobileNav = document.getElementById('MobileNav');
	container = document.getElementById('Page');

	// Click to open
	if (mobileNav) {
		mobileNav.addEventListener('click', nav_toggleDrawer);
	}

	// Add overlay
	if (container && navOverlay) {
		navOverlay.classList.add('NavOverlay');
		navOverlay.addEventListener('click', nav_toggleDrawer);
		container.appendChild(navOverlay);
	}
});
