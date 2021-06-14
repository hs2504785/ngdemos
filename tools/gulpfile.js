const gulp = require('gulp');
const purify = require('gulp-purifycss');
const purgecss = require('gulp-purgecss')

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

gulp.task('purgecss', () => {
  return gulp.src(distFolder + 'styles.*.css')
      .pipe(purgecss({
          content: [srcFolder + 'app/**/*.ts', srcFolder + 'app/**/*.html'],
          safelist: {
            standard: [
            'mat-primary',
            'mat-toolbar-single-row',
            'mat-form-field-label-wrapper',
            'cdk-global-overlay-wrapper',
            'cdk-overlay-pane',
            'cdk-overlay-container',
            'mat-dialog-container',
            'mx-5'
          ],
            deep: [
              /mat-button-ripple.*/,
              /mat-nav-list a/,
              /cdk-overlay-backdrop.*/,
              /cdk-overlay-dark-backdrop.*/,
              /mat-drawer.*/, /mat-drawer-side.$/, /ti-book/, /mat-form-field-underline$/, /mat-form-field-appearance-legacy.*/,
              /mat-warn$/],
            greedy: [/cdk-overlay-container.*/, /mat-button-focus-overlay$/]
          }
      }))
      .pipe(gulp.dest('../dist/ngdemos/'));
})
