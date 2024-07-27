## ESLint

代码风格

安装

```sh
npm install -D eslint
```

自动生成 eslint 配置文件

```sh
npm init @eslint/config
```

Rules

rule 有三个等级：

- 0 代表关闭，off
- 1 代表警告，warn
- 2 代表错误，error

```js
rules: {
  "semi": 2
}
```

Extends

```
# eslint 推荐规则合集
"extends": "eslint:recommend"
```
