// Load plugins
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),  // Load all plugins who starts with gulp-*
    sourceFile = 'backbone-singleton.js';

// Scripts
gulp.task('jshint', function() {
    gulp.src(sourceFile)
        .pipe($.plumber())
        .pipe($.jshint('.jshintrc'))
        .pipe($.jshint.reporter());
});

// Server
gulp.task('watch', ['jshint'], function () {
    gulp.watch(sourceFile, ['jshint']);
});