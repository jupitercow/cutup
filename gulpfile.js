var gulp = require( 'gulp' ),
	$ = require( './gulp/plugins' )( gulp ),
	handleErrors = require( './gulp/handleErrors' )( gulp, $ );

$.production = false; // production | development

$.paths = {
	src: {
		css: [
			'./src/css/libs/*.css',
			'./src/css/global.css',
			'./src/css/*.css',
			'./src/css/*/*.css',
			'./components/*/*.css',
		],
		html: [
			'./src/*.html',
		],
		icons: [
			'./src/icons/*.svg',
		],
		img: [
			'./src/img/*',
		],
		js: [
			'./src/js/libs/*.js',
			'./src/js/*.js',
			'./src/js/*/*.js',
			'./components/*/*.js',
		],
	},
	dest: {
		css: './assets/css/',
		html: './',
		icons: './assets/img/',
		img: './assets/img/',
		js: './assets/js/',
	},
};


// helper to get partials
function getGulpPartial( task ) {
	return require( './gulp/' + task )( gulp, $, handleErrors );
}

// get tasks from partials
gulp.task( 'css',     getGulpPartial( 'styles' ) );
//gulp.task( 'html',    getGulpPartial( 'html' ) );
gulp.task( 'icons',   getGulpPartial( 'icons' ) );
//gulp.task( 'img',     getGulpPartial( 'images' ) );
gulp.task( 'js',      getGulpPartial( 'scripts' ) );
gulp.task( 'watch',   getGulpPartial( 'watch' ) );

// Builder
gulp.task( 'build', ['css', 'js', 'icons']);

// Alias watch to default
gulp.task( 'default', ['watch'] );
