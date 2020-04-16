'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')     // 让gulp拿到src目录下里面的sass文件
    //把 scss原始文件交给gulp-sass编译转换成css文件
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    // 编译后的文件存储到css文件中
    .pipe(gulp.dest('./src/css'));
});

// 创建gulp监听的任务
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

// gulp 的默认任务 ,执行默认任务时，自动启动sass:watch任务
// gulp.task('default', gulp.series('sass: watch', function() {
//
// }));

// gulp.task('default',['sass:watch'],function() {
//
// })
