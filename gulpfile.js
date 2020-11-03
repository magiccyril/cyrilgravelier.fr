const { src, dest, watch, series } = require('gulp');
const browser = require('browser-sync');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

// Compile Sass into CSS
const css = () => (
  src('./scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compressed',
    includePaths: [
      'node_modules/foundation-sites/scss',
    ]
  }).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(sourcemaps.write())
  .pipe(dest('./css'))
  .pipe(browser.reload({ stream: true }))
);

// Start a server with BrowserSync to preview the site in
const server = (done) => {
  browser.init({
    server: {
      baseDir: "./"
  }}, done);
}

// Reload the browser with BrowserSync
const reload = () => {
  browser.reload();
}

// Watch for changes to static assets, pages, Sass, and JavaScript
const watchFiles = () => {
  watch('./**/*.html').on('all', reload);
  watch('./scss/**/*.scss').on('all', css);
}

exports.build = (done) => {
  css();
  done();
}
exports.default = (done) => {
  watchFiles()
  server(done);
};
