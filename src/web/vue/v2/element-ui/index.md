# Element UI

## 全局配置

element 在使用时，可以引入一些自定义的 [全局配置](https://element.eleme.io/#/zh-CN/component/quickstart#quan-ju-pei-zhi)。

## 图标乱码

问题分析：dart-sass 在打包过程中会将伪元素 content 中的内容转义。

### 方案 1

Element UI 官方使用的是 node-sass，将项目中的 dart-sass 替换为 node-sass。

> 注意：node-sass 已经不再是主流，并且 node-sass 经常安装失败。

### 方案 2

仍然使用 dart-sass，参照如下修改 webpack 配置。

```js
css: {
    // 避免dart-sass将伪元素中的字符集转义
    loaderOptions: {
       sass: {
        //additionalData: `@import "@/assets/style/scss/index.scss";`,
        // 避免dart-sass在打包过程中会将伪元素content中的字符集转义
        sassOptions: {
          outputStyle: 'expanded'
        }
      }
    }
  }
```

## 树状表格操作

### 树状表格全部展开/折叠

```js
toggleRowExpansionAll(data, isExpansion) {
  data.forEach(item => {
    this.$refs.table.toggleRowExpansion(item, isExpansion)
    if (item.childList !== undefined && item.childList !== null) {
      this.toggleRowExpansionAll(item.childList, isExpansion)
    }
  })
},
```

### 树状表格展开n层

```js
for (let i = 0; i < 2; i++) {
  let levelElm = document.querySelectorAll('.el-table__row--level-' + i)
  levelElm.forEach(ele => {
    ele.querySelectorAll('.el-table__expand-icon').length > 0 && ele.querySelectorAll('.el-table__expand-icon')[0].click()
  })
}
```
