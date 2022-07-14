module.exports = () => {
  $.gulp.task('img:dev', () => {
    return $.gulp.src('dev/assets/images/**/*.{png,webp,jpg}')
      .pipe($.gulp.dest('build/assets/images/'));
  });

  $.gulp.task('img:build', () => {
    return $.gulp.src('dev/assets/images/**/*.{png,webp,jpg}')
      .pipe($.gp.imagemin([
        $.gp.imagemin.mozjpeg({
          quality: 60,
          progressive: true
        }),
        $.gp.imagemin.optipng({
          optimizationLevel: 5
        })
      ]))
      .pipe($.gulp.dest('build/assets/images/'));
  });
};