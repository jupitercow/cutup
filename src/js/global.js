function sectionCloseClick(e) {
	e.preventDefault();
	var section = this.parentNode.parentNode;
	if (section) {
		section.classList.remove('is-active');
	}
}

document.addEventListener('DOMContentLoaded', function() {

	svg4everybody();

	// Basic section closer
	var sectionClose = document.getElementsByClassName('SectionClose');
	if (sectionClose) {
		for (var i = 0, l = sectionClose.length; i < l; i++) {
			sectionClose[i].addEventListener('click', sectionCloseClick);
		}
	}

});
