const browsersync = require('browser-sync').create()
const spa = require('browser-sync-spa')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const reload = browsersync.reload
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const util = require('gulp-util')
const include = require('gulp-include')

let isProduction = util.env.prod ? true : false

//copy assets
gulp.task('copy:images', function() {
  return gulp.src('./src/assets/*.*')
    .pipe(isProduction ? sourcemaps.write('./') : util.noop())
    .pipe(gulp.dest('./build/assets/'))
});

// Build CSS
gulp.task('css', () => {
  return gulp.src('./src/css/index.css')
  .pipe(isProduction ? sourcemaps.init({ loadMaps: true }) : util.noop())
  .pipe(postcss([
    require('postcss-import'),
    require('postcss-inline-media'),
    require('lost'),
    require('autoprefixer')({ browsers: ['last 2 version', 'IE 9'] }),
    require('cssnano')({ discardComments: { removeAll: true } }),
    require('css-mqpacker')({ sort: true })
  ]))
  .pipe(isProduction ? sourcemaps.write('./') : util.noop())
  .pipe(gulp.dest('./build/css/'))
})

gulp.task('js', () => {
  return gulp.src([
    './src/js/common.js'
  ])
  .pipe(include())
  .pipe(isProduction ? sourcemaps.init({ loadMaps: true }) : util.noop())
  .pipe(isProduction ? uglify() : util.noop())
  .pipe(isProduction ? sourcemaps.write('./') : util.noop())
  .pipe(gulp.dest('./build/js/'))
})

// Serve from Build Derictory
gulp.task('serve', () => {
  browsersync.use(spa({
    history: {
      index: '/index.html'
    }
  }))
  browsersync.init({
    server: {
      baseDir: './build'
    },
    notify: false,
    open: false,
    ui: false
  })

  // Reload browser after modify
  browsersync.watch([ './build/' ]).on('change', reload)
})

// Watcher
gulp.task('watch', () => {
  gulp.watch([ './src/css/**/*.css' ], [ 'css' ])
  gulp.watch([ './src/js/**/*.js' ], [ 'js' ])
})

// Default Task
gulp.task('default', [
  'css',
  'js'
])

// Build task
gulp.task('dev', [
  'copy:images',
  'css',
  'js',
  'serve',
  'watch'
])
