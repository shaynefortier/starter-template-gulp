const { series, src, dest, parallel, watch } = require('gulp');
const del = require('delete');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const fiveserver = require('five-server').default;
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const fileinclude = require('gulp-file-include');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

// Clean dist directory
function clean(cb) {
    del(['dist/**'], cb);
}

// Copy HTML files
function copyHTML(){
    return src(['src/**/*.html', '!src/layouts/**/*.html'])
        .pipe(dest('dist/'));
}

// Copy assets
function copyAssets(){
    return src(['src/assets/**', '!src/assets/color-scheme/**'])
        .pipe(dest('dist/assets/'));
}

// Copy JS
function copyJS() {
    return src('src/script/libraries/*.js')
        .pipe(dest('dist/script/libraries/'));
}

// Build SASS
function buildSass() {
    return src('src/style/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('dist/style/'));
}

// Build JS (bundle)
function buildJS() {
    return src('src/script/Main.js')
        .pipe(webpack(webpackConfig))
        .pipe(dest('dist/script/'));
}

// Start live-server server
function serve(cb) {
    new fiveserver().start();
    cb();
}

// Watch files
function watchFiles() {
    watch(['src/**/*.html'], templating);
    watch('src/style/**/*.scss', buildSass);
    watch('src/assets/**', copyAssets);
    watch(['src/script/**/*.js', '!src/script/libraries/*.js'], buildJS);
    watch(['!src/script/libraries/*.js'], copyJS);
}

// post build
function postBuild(cb){
    src('dist/style/main.css')
        .pipe(postcss())
        .pipe(dest('dist/style/'));
    cb();
}

function templating(){
    return src(['src/**/*.html', '!src/layouts/**/*.html'])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(dest('dist/'))
}

exports.default = series(clean, templating, copyAssets, buildSass, buildJS, copyJS, parallel(watchFiles, serve));
exports.build = series(clean, copyHTML, copyAssets, buildSass, buildJS, copyJS, postBuild);
