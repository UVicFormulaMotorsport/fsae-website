var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var sass          = require('gulp-sass');
var prefix        = require('gulp-autoprefixer');
var cp            = require('child_process');
var jade          = require('gulp-jade');
var deploy        = require('gulp-gh-pages');

gulp.task('sass', function() {
    return gulp.src('public/css/main.scss')
        .pipe(sass({
            includePaths: ['css'],
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('jade', function() {
    return gulp.src('views/**/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('_site/'));
});


gulp.task('build', ['sass', 'jade'], function() {
    return gulp.src('public/**')
        .pipe(gulp.dest('_site'));
});


gulp.task('deploy', ['build'], function() {
  return gulp.src('_site/**/*')
    .pipe(
      deploy({
        branch: 'deployed-site'
      })
    );
});

gulp.task('default', ['sass', 'jade']);
