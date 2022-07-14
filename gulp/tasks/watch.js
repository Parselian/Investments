module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('dev/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('dev/assets/scss/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('dev/assets/js/main.js', $.gulp.series('scripts'));
  });
}