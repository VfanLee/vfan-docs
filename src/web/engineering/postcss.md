# PostCSS

[PostCSS](https://postcss.org/) 是一个用 JavaScript 编写的工具，用于转换 CSS 样式。它可以通过使用插件来解析、转换和优化 CSS，并且可以根据需要创建自定义插件。PostCSS 可以帮助开发人员在编写 CSS 时自动化许多重复性任务，提高开发效率。

PostCSS 的主要功能包括:

- **解析 CSS**：PostCSS 可以解析 CSS 并将其转换为抽象语法树（AST），使开发人员可以对 CSS 进行更灵活的操作。
- **转换 CSS**：开发人员可以编写自定义插件来转换 CSS。这些插件可以用于执行各种任务，如添加前缀、压缩 CSS、转换未来的 CSS 特性等。
- **优化 CSS**：PostCSS 可以通过插件优化 CSS，例如删除未使用的样式、合并重复的样式等，从而减小 CSS 文件的大小并提高性能。
- **支持未来的 CSS 特性**：PostCSS 可以通过插件支持尚未被所有浏览器广泛支持的 CSS 特性，例如 CSS 变量、自定义属性、嵌套规则等。
- **与构建工具集成**：PostCSS 可以与许多流行的构建工具（如 webpack、Gulp、Parcel 等）集成，使开发人员可以在项目构建过程中自动应用 PostCSS 插件。

## 常见插件

- [postcss-preset-env](https://preset-env.cssdb.org/)：将现代 CSS 转换为浏览器可以理解的内容。
  - 包含 [Autoprefixer](https://github.com/postcss/autoprefixer)。
- [postcss-load-config](https://github.com/postcss/postcss-load-config)：PostCSS 自动加载配置。
- [cssnano](https://cssnano.github.io/cssnano/)：压缩 css。

## css 语法增强

可替代 sass 等 CSS 预处理器。

- [postcss-nested](https://github.com/postcss/postcss-nested)：允许嵌套 CSS 规则，类似于 Sass 的嵌套语法。
- [postcss-each](https://github.com/madyankin/postcss-each)：提供循环功能，在 CSS 中实现遍历操作。
- [postcss-for](https://github.com/antyakushev/postcss-for)：支持在 CSS 中使用 for 循环。
- [postcss-mix-color](https://github.com/iamstarkov/postcss-color-mix)：提供混合颜色的功能，生成新的颜色值。

### Viewport 布局适配

[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 是一款 PostCSS 插件，用于将 px 单位转化为 vw/vh 单位。

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
  },
};
```

```css
html {
  font-size: 16px;
}
```

### Rem 布局适配

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位。
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值。

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```

### RTL

- [postcss-rtl](https://github.com/vkalinichev/postcss-rtl/tree/v1.8.0?tab=readme-ov-file#options)
- [rtlcss](https://rtlcss.com/learn/usage-guide/options/)
