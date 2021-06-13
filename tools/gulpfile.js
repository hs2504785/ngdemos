const gulp = require('gulp');
const purify = require('gulp-purifycss');
const srcFolder = '../src/';
const distFolder = '../dist/ngdemos/';
gulp.task('purifyCSS', () => {
  return gulp.src(distFolder + 'styles.*.css')
    .pipe(
      purify(
        [srcFolder + 'app/**/*.ts', srcFolder + 'app/**/*.html'],
        {
          info: true, // Outputs reduction information (like in the screenshot above)
          minify: true, // Minifies the files after reduction
          rejected: false, // Logs the CSS rules that were removed
          whitelist: ['*transition*', '*dimmer*'] // Ignored css classes
        }
      ),
    )
    .pipe(gulp.dest('../dist/ngdemos/'));
});
