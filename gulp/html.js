module.exports = function( gulp, $, handleErrors ) {
	return function() {
		gulp.src( $.paths.src.html )
			.pipe( $.injectFile({
				pattern: '<!--\\s*inject:<filename>-->',
			}))
			.pipe( $.htmlmin({collapseWhitespace: true, minifyJS: true}) )
			.pipe( gulp.dest( $.paths.dest.html ) )
			.pipe( $.notify({
				title: 'HTML',
				message: 'Minified: <%= file.relative %>'
			}) );
	}
};
