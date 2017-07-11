module.exports = function( gulp, $, handleErrors ) {
	return function() {
		var settings = [{
			width: 2000,
			suffix: '-2000',
			quality: 60,
		}, {
			width: 1280,
			suffix: '-1280',
			quality: 60,
		}, {
			width: 1024,
			suffix: '-1024',
			quality: 60,
		}, {
			width: 800,
			suffix: '-800',
			quality: 60,
		}, {
			width: 640,
			suffix: '-640',
			quality: 60,
		}, {
			width: 480,
			suffix: '-480',
			quality: 60,
		}, {
			width: 360,
			suffix: '-360',
			quality: 60,
		}, {
			width: 240,
			suffix: '-240',
			quality: 60,
		}];
		gulp.src( $.paths.src.img )
			.pipe( $.imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
			}) )
			.pipe( gulp.dest( $.paths.dest.img ) )
			.pipe( $.responsiveImages({
				'*.jpg': settings,
				upscale: false,
			}) )
			.pipe( $.imagemin({ progressive: true }) )
			.pipe( gulp.dest( $.paths.dest.img ) )
			.pipe( $.notify({
				title: 'Images',
				message: 'Complete: <%= file.relative %>',
			}) );
	}
};
