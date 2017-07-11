module.exports = function( gulp, $, handleErrors ) {
	return function() {
		gulp.src( $.paths.src.icons )
			//.pipe( $.svgmin() )
			.pipe( $.svgstore({
				inlineSvg: true,
				fileName: 'icons.svg',
				//prefix: 'icon-',
			}) )
/** /
			.pipe( $.cheerio({
				run: function($) {
					//$('symbol:not(#logo) [fill]').not('[fill^="url"]').removeAttr('fill');
				},
				parserOptions: { xmlMode: true },
			}) )
/**/
			.pipe( gulp.dest( $.paths.dest.icons ) )
			.pipe( $.notify({
				title: 'Icons',
				message: 'Complete: <%= file.relative %>'
			}) );
	}
};
