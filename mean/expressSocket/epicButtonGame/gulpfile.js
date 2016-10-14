var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var nodemon      = require('gulp-nodemon');

gulp.task('nodemon', function(cb) {
    var called = false;

    return nodemon({
        script: 'app.js'

    }).on('start', function() {
        if( !called ) {
            called = true;
            cb();
        }
    });
});

gulp.task('browserSync', ['nodemon'], function() {
    browserSync.init({
        proxy: {
            target: "localhost:5000",
            ws: true
        },
        port: 3000,
        open: false,
        notify: false
    });
});

gulp.task('watch', function() {
    gulp.watch('static/scss/**/*.scss', ['sass']);
    gulp.watch('views/*.html', browserSync.reload);
    gulp.watch('views/*.ejs', browserSync.reload);
    gulp.watch('static/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['browserSync', 'watch']);