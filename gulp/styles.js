module.exports = function( gulp, $, handleErrors ) {
	var devProcessors = [];
	for ( plugin in $.postCssPlugins ) {
		if ( devProcessors.indexOf( $.postCssPlugins[ plugin ] ) === -1 ) {
			devProcessors.push( $.postCssPlugins[ plugin ] );
		}
	}

	return function() {
		gulp.src( $.paths.src.css )
			.pipe( $.sourcemaps.init() )
			.pipe( $.concat( 'style.css' ) )
			.pipe( $.postcss( devProcessors ) )
			.on( 'error', handleErrors )
			//.pipe( gulp.dest( $.paths.dest.css ) )
			.pipe( $.if($.production, $.postcss([ require('css-mqpacker')(), require('cssnano')() ])) )
			.pipe( $.rename({ suffix: '.min' }) )
			.pipe( $.sourcemaps.write('.') )
			.pipe( gulp.dest( $.paths.dest.css ) )
			.pipe( $.filter('**/*.css') ) //filter out sourcemap for livereload
			.pipe( $.livereload() )
			.pipe( $.notify({
				title: 'Styles',
				message: 'Complete: <%= file.relative %>'
			}) );
	}
};
