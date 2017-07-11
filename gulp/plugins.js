module.exports = function( gulp, $, handleErrors ) {
	var requireAll = require('gulp-load-plugins');
	var $          = requireAll();

	// Postcss plugins
	$.postCssPlugins = requireAll({
		//DEBUG: false,
		pattern: 'postcss-*',
		replaceString: /^postcss-/,
		camelize: true,
	});

	return $;
}
