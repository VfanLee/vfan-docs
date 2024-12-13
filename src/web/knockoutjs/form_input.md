# Form input

## 单行文本

::: code-group

```html
<input type="text" data-bind="value: textValue" />
```

```js
this.textValue = ko.observable('textValue')
```

:::

## 多行文本

::: code-group

```html
<textarea cols="30" rows="3" data-bind="value: textareaValue"></textarea>
```

```js
this.textareaValue = ko.observable('textareaValue')
```

:::

## 单选按钮

::: code-group

```html
<label>
  <input type="radio" data-bind="checkedValue: 1, checked: radioValue" />
  选项1
</label>
<label>
  <input type="radio" data-bind="checkedValue: 2, checked: radioValue" />
  选项2
</label>
<label>
  <input type="radio" data-bind="checkedValue: 3, checked: radioValue" />
  选项3
</label>
```

```js
this.radioValue = ko.observable('2')
```

:::

## 复选框

### 单个复选框

::: code-group

```html
<label>
  <input type="checkbox" data-bind="checked: checkboxValue1" />
  选项
</label>
```

```js
this.checkboxValue1 = ko.observable(true)
```

:::

### 多个复选框

::: code-group

```html
<label>
  <input type="checkbox" data-bind="checkedValue: 1, checked: checkboxValue2" />
  选项1
</label>
<label>
  <input type="checkbox" data-bind="checkedValue: 2, checked: checkboxValue2" />
  选项2
</label>
<label>
  <input type="checkbox" data-bind="checkedValue: 3, checked: checkboxValue2" />
  选项3
</label>
```

```js
this.checkboxValue2 = ko.observableArray(['2', '3'])
```

:::

## 选择器

### 单选

::: code-group

```html
<select
  data-bind="options: exampleOptions,
                   optionsText: 'name',
                   optionsValue: 'id',
                   value: selectValue1,
                   optionsCaption: '---选项说明---'"
></select>
```

```js
this.selectValue1 = ko.observable('2')
```

:::

### 多选

::: code-group

```html
<select
  multiple
  data-bind="options: exampleOptions,
                   optionsText: 'name',
                   optionsValue: 'id',
                   selectedOptions: selectValue2"
></select>
```

```js
this.selectValue2 = ko.observableArray(['2', '3'])
```

:::
