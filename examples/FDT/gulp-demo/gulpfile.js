const { src, dest, watch, series } = require('gulp')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const babel = require('gulp-babel')
const connect = require('gulp-connect')

// 编译 sass
const sassSource = ['./src/**/*.scss']
function buildSass() {
  return src(sassSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest(file => file.base))
}

// 编译 js
const componentsSource = ['./src/components/*/*.js', '!./src/components/*/*.min.js']
function buildJs() {
  return src(componentsSource)
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest(file => file.base))
}

// 启动一个开发服务器
function server() {
  connect.server()
  watch(sassSource, series('buildSass'))
  watch(componentsSource, series('buildJs'))
}

module.exports.buildSass = buildSass
module.exports.buildJs = buildJs
module.exports.server = server
