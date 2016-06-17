var gulp = require('gulp');
var babel = require('gulp-babel');

function errorHandle(err) {
    console.log(err);
}

gulp.task('babel',function(){
    gulp.src(['src/*.js'])
        .pipe(babel())
        .on('error', errorHandle)
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
    gulp.watch('src/*.js', ['babel']);
});

gulp.task('js', ['babel', 'watch']);
