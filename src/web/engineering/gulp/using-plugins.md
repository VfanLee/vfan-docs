# 使用插件

Gulp 插件实质上是 Node 转换流（Transform Streams），它封装了通过管道（pipeline）转换文件的常见功能，通常是使用 .pipe() 方法并放在 src() 和 dest() 之间。他们可以更改经过流（stream）的每个文件的文件名、元数据或文件内容。

每个插件应当只完成必要的工作，因此你可以把它们像构建块一样连接在一起。获得想要的结果可能需要把一组插件组合在一起使用。

```js
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

exports.default = function() {
  return src('src/*.js')
    // gulp-uglify 插件并不改变文件名
    .pipe(uglify())
    // 因此使用 gulp-rename 插件修改文件的扩展名
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('output/'));
}
```

## 是否需要插件？

并非 gulp 中的一切都需要用插件来完成。虽然它们是一种快速上手的方法，但许多操作都应当通过使用独立的功能模块或库来实现。

```js
const { rollup } = require('rollup');

// Rollup 提供了基于 promise 的 API，在 `async` 任务（task）中工作的很好
exports.default = async function() {
  const bundle = await rollup.rollup({
    input: 'src/index.js'
  });

  return bundle.write({
    file: 'output/bundle.js',
    format: 'iife'
  });
}
```

插件应当总是用来转换文件的。其他操作都应该使用（非插件的） Node 模块或库来实现。

```js
const del = require('delete');

exports.default = function(cb) {
  // 直接使用 `delete` 模块，避免使用 gulp-rimraf 插件
  del(['output/*.js'], cb);
}
```

## 插件盘点

托管在 npm 上的插件，可以使用 ["gulpplugin"](https://www.npmjs.com/search?q=keywords%3Agulpplugin) 和 ["gulpfriendly"](https://www.npmjs.com/search?q=keywords%3Agulpfriendly) 关键词进行搜索。

也可以在 [插件搜索页面](https://gulpjs.com/plugins/) 上浏览和搜索。

### css 相关

- gulp-postcss：postcss
- gulp-sass：处理 sass
- gulp-less：处理 less
- [gulp-purgecss](https://www.npmjs.com/package/gulp-purgecss)：删除未使用的 CSS

### js 相关

- gulp-babel：babel
- gulp-uglify：压缩 js

### 条件插件

[gulp-if](https://github.com/robrich/gulp-if)

```js
const { src, dest } = require('gulp');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');

function isJavaScript(file) {
  // 判断文件的扩展名是否是 '.js'
  return file.extname === '.js';
}

exports.default = function() {
  // 在同一个管道（pipeline）上处理 JavaScript 和 CSS 文件
  return src(['src/*.js', 'src/*.css'])
    // 只对 JavaScript 文件应用 gulp-uglify 插件
    .pipe(gulpif(isJavaScript, uglify()))
    .pipe(dest('output/'));
}
```

### 内联插件（Inline plugins）

内联插件是一次性的转换流（Transform Streams），你可以通过在 gulpfile 文件直接书写需要的功能。

在两种情况下，创建内联插件很有用：

- 避免自己创建并维护插件。
- 避免 fork 一个已经存在的插件并添加自己所需的功能。

```js
const { src, dest } = require('gulp');
const uglify = require('uglify-js');
const through2 = require('through2');

exports.default = function() {
  return src('src/*.js')
    // 创建一个内联插件，从而避免使用 gulp-uglify 插件
    .pipe(through2.obj(function(file, _, cb) {
      if (file.isBuffer()) {
        const code = uglify.minify(file.contents.toString())
        file.contents = Buffer.from(code)
      }
      cb(null, file);
    }))
    .pipe(dest('output/'));
}
```

### 其他

- gulp-file-include：在一个HTML页面导入一个HTML片段（组件）
- gulp-htmlmin：压缩 HTML
- gulp-webserver：启动一个基于 node 的服务器
