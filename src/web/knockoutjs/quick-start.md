# 快速上手

## 介绍

Knockout 是一个 JavaScript 库，可帮助您使用干净的底层数据模型创建丰富的响应式显示和编辑器用户界面。每当您的 UI 部分动态更新时（例如，根据用户的操作或外部数据源更改而变化），KO 都可以帮助您更简单、更易维护地实施它。

## 初始化

::: code-group

```html
<span data-bind="text: msg"></span>
```

```html [js]
<script src="https://cdn.jsdelivr.net/npm/knockout@3.5.1/build/output/knockout-latest.min.js"></script>
<script>
  function ViewModel() {
    this.msg = ko.observable('Hello World!')
  }
  const vm = new ViewModel()
  ko.applyBindings(vm)
</script>
```

:::

::: tip 快速启动一个 Knockout.js 项目？
👉 [Knockout Template](https://github.com/VfanLee/knockout-template)
:::

## 参考资料

- [Knockout.js 官方文档](https://knockoutjs.com/documentation/introduction.html)
- <http://www.aizhengli.com/knockoutjs/50/knockout.html>
- <https://www.cnblogs.com/smallprogram/p/5976954.html>