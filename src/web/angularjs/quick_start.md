# AngularJS

::: tip 当前记录版本 v1.8.2
:::

::: tip 正在寻找 angular.js 项目模板？
👉 试试 [angularjs-template](https://github.com/VfanLee/angularjs-template) 吧！
:::

## 强制刷新

```js
$scope.$apply()
```

## 工具函数

- angular.forEach()

## 表单校验

```html
<form name="myForm">
  <input name="input" ng-model="userType" required />
  <span class="error" ng-show="myForm.input.$error.required">Required!</span><br />
</form>

<div>
  <code>userType = {{userType}}</code><br />
  <code>myForm.input.$valid = {{myForm.input.$valid}}</code><br />
  <code>myForm.input.$error = {{myForm.input.$error}}</code><br />
  <code>myForm.$valid = {{myForm.$valid}}</code><br />
  <code>myForm.$error.required = {{!!myForm.$error.required}}</code><br />
</div>
```

## 参考资料

- [angularjs Developer Guide](https://docs.angularjs.org/guide)
- [angularjs API Reference](https://docs.angularjs.org/api)
