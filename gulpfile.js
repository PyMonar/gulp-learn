var gulp = require('gulp');
var babel = require('gulp-babel');

function errorHandle(err) {
    console.log(err);
}

gulp.task('js',function(){
    gulp.src(['src/*.js'])
        .pipe(babel())
        .on('error', errorHandle)
        .pipe(gulp.dest('dist'));
        
    gulp.watch('src/*.js', ['js']);
});
