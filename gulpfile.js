var gulp = require('gulp');
var babel = require('gulp-babel');

/**
 * 错误处理
 */
function errorHandle(err) {
    console.log(err);
}

/**
 * 编译ES2015
 */
gulp.task('babel',function() {
    gulp.src(['src/*.js'])
        .pipe(babel())
        .on('error', errorHandle)
        .pipe(gulp.dest('dist'));
});

/**
 * 添加监控任务
 */
gulp.task('watch', function() {
    gulp.watch('src/*.js', ['babel']);
});

/**
 * 入口任务
 */
gulp.task('js', ['babel', 'watch']);
