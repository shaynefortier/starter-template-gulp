const { series, src, dest, parallel, watch } = require('gulp');
const del = require('delete');
const webp = require('gulp-webp');
const avif  = require('gulp-avif');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const fiveserver = require('five-server').default;
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const replace = require('gulp-string-replace');

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
    return src('src/*.html')
        .pipe(dest('dist/'));
}

// Copy assets
function copyAssets(){
    return src(['src/assets/**', '!src/assets/color-scheme/**'])
        .pipe(dest('dist/assets/'));
}

// Copy JS
function copyJS() {
    return src('src/script/**/*.js')
        .pipe(dest('dist/script/'));
}

function replaceJSinHTML(){
    return src('dist/*.html')
        .pipe(replace('main.js', 'Main.js'))
        .pipe(dest('dist/'));
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

const imgPath = 'src/assets/images/*.';
// Convert images to WEBP
function toWebP(){
    return src(imgPath+'jpg', imgPath+'jpeg', imgPath+'png')
        .pipe(webp())
        .pipe(dest('src/assets/images/'));
}

function HTMLwebP(){
    return src('src/*.html')
        .pipe(replace('.jpeg', '.webp'))
        .pipe(replace('.jpg', '.webp'))
        .pipe(replace('.png', '.webp'))
        .pipe(dest('src/'));
}

// Convert images to Avif
function toAvif(){
    return src(imgPath+'jpg', imgPath+'jpeg', imgPath+'png')
        .pipe(avif())
        .pipe(dest('src/assets/images/'));
}

function HTMLavif(){
    return src('src/*.html')
        .pipe(replace('.jpeg', '.avif'))
        .pipe(replace('.jpg', '.avif'))
        .pipe(replace('.png', '.avif'))
        .pipe(dest('src/'));
}

// Start live-server server
function serve(cb) {
    new fiveserver().start();
    cb();
}

// Watch files
function watchFiles() {
    watch('src/*.html', copyHTML);
    watch('src/style/**/*.scss', buildSass);
    watch('src/assets/**', copyAssets);
    watch('src/script/**/*.js', buildJS);
}

// post build
function postBuild(cb){
    src('dist/style/main.css')
        .pipe(postcss())
        .pipe(dest('dist/style/'));
    cb();
}

exports.default = series(clean, copyHTML, copyAssets, buildSass, buildJS, parallel(watchFiles, serve));
exports.build = series(clean, copyHTML, copyAssets, buildSass, buildJS, postBuild);
exports.buildPurist = series(clean, copyHTML, copyJS, copyAssets, buildSass, replaceJSinHTML);
exports.webpConvert = series(toWebP, HTMLwebP);
exports.avifConvert = series(toAvif, HTMLavif);
