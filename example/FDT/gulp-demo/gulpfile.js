const { resolve } = require('path')
const { src, dest, watch, series } = require('gulp')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const less = require('gulp-less')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const webserver = require('gulp-webserver')

// 编译 less
const lessSource = ['./css/less/*.less']
module.exports.less = cb => {
  src(lessSource)
    .pipe(less())
    .pipe(postcss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest(file => resolve(file.cwd, 'dist/css/less')))
  cb()
}

// 编译 sass
const sassSource = ['./css/sass/**/*.scss']
module.exports.sass = cb => {
  src(sassSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest(file => resolve(file.cwd, 'dist/css/sass')))
  cb()
}

// 编译 js
const jsSource = ['./js/*.js']
module.exports.js = cb => {
  src(jsSource)
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest(file => resolve(file.cwd, 'dist/js')))
  cb()
}

// 启动一个开发服务器
module.exports.server = () => {
  webserver({
    host: 'localhost',
    port: '8080',
    livereload: false,
    open: false
  })
  watch(lessSource, series('less'))
  watch(sassSource, series('sass'))
  watch(componentsSource, series('js'))
}
