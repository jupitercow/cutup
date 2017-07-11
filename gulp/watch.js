module.exports = function (gulp, $, handleErrors) {
	return function () {
		$.livereload.listen();

		gulp.watch( $.paths.src.css, [ 'css' ] );
		//gulp.watch( $.paths.src.html, [ 'html' ] );
		gulp.watch( $.paths.src.js, [ 'js' ] );
	}
};
