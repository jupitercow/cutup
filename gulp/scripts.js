module.exports = function( gulp, $, handleErrors ) {
	return function() {
		gulp.src( $.paths.src.js )
			.pipe( $.jshint() )
			.pipe( $.jshint.reporter('jshint-stylish') )
			.pipe( $.jshint.reporter('fail') )
			.pipe( $.notify(function(file) {
				return {
					title: 'JSHint',
					message: 'Passed: ' + file.relative,
				};
	        }) )
			.on( 'error', handleErrors )
			.pipe( $.sourcemaps.init() )
			.pipe( $.concat('scripts.js') )
			//.pipe( $.babel({ presets: ['es2015'] }) )
			//.pipe( gulp.dest( $.paths.dest.js ) )
			.pipe( $.if($.production, $.stripDebug()) )
			.pipe( $.if($.production, $.uglify()) )
			.pipe( $.rename({ suffix: '.min' }) )
			.pipe( $.sourcemaps.write('.') )
			.pipe( gulp.dest(  $.paths.dest.js  ) )
			.pipe( $.filter('**/*.js') ) //filter out sourcemap for livereload
			.pipe( $.livereload() )
			.pipe( $.notify({
				title: 'Scripts',
				message: 'Complete: <%= file.relative %>'
			}) );
	}
};
