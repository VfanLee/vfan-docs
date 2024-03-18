# Gulp

> 当前记录版本 v4

- [gulp](https://www.gulpjs.com.cn/) 是一种基于流格式的一种打包构建工具。
- 依赖于 node 环境开发（底层封装的内容就是 node 里面的读写文件）。

## gulp 常用 API

```js
// task(taskName, fn)：创建一个基于流的任务
gulp.task("htmlHandler", function(){})

// src(PathInfo)：匹配源文件
gulp.src("./src/a.html");			// 指定目录下某个文件
gulp.src("./src/*.html");			// 指定目录下指定后缀文件
gulp.src("./src/**/*");				// 指定目录下所有文件
gulp.src("./src/**/*.html");	// 指定目录下所有指定后缀的文件

// dest(pathInfo)：放到指定目录
gulp.dest("./dist");	// 把接受的内容放到dist目录下

// watch(pathInfo, taskName)：监控指定目录下的文件，一旦发生变化，重新执行后面的任务
gulp.watch("./src/pages/*.html", "htmlHandler这个任务");	// 一旦指定目录下的.html文件发生变化，就会执行htmlHandler这个任务

// series(task1, task2, ...)：逐个执行多个任务，返回一个函数
// parallel(task1, task2, ...)：并行执行多个任务，返回一个函数

// pipe()：管道函数，接受当前流，进入下一个流过程
gulp.src().pipe(压缩任务).pipe(转码任务).pipe(gulp.dest("abc"));
```

## gulp 常见插件

### css 相关

- gulp-postcss：postcss
- gulp-sass：处理 sass
- gulp-less：处理 less

### js 相关

- gulp-babel：babel
- gulp-uglify：压缩 js

### 其他

- gulp-file-include：在一个HTML页面导入一个HTML片段（组件）
- gulp-htmlmin：压缩 HTML
- gulp-webserver：启动一个基于 node 的服务器
- [gulp-if](https://github.com/robrich/gulp-if)
