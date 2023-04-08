# Form 表单

> MDN form：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form

一个完整的表单通常由三个部分组成：

1. 表单标签：form 标签自身。
2. 表单域：用来收集用户数据，如 input 标签（文本框、密码框 ……）。
3. 表单按钮：用来提交表单数据和进行其他操作。

## form

属性：

- action：提交地址。
- method：提交方式，默认为 GET。
- name：名称。
- enctype：当 method 属性值为 post 时，enctype 就是将表单的内容提交给服务器的 MIME 类型 。可能的取值有：
  - `application/x-www-form-urlencoded`：未指定属性时的默认值。
  - `multipart/form-data`：当表单包含 type=file 的 `<input>` 元素时使用此值。
  - `text/plain`：出现于 HTML5，用于调试。这个值可被 `<button>`、`<input type="submit">` 或 `<input type="image">` 元素上的 `formenctype` 属性覆盖。

## input

> MDN input: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input

属性：

- type：`<input>` 类型。
  - text：文本框。
  - password：密码框。
  - radio：单选框。
  - checkbox：多选框。
  - file：文件。
  - hidden：隐藏域，页面隐藏，但是数据会正常提交。
- name：名称，表单提交后会以 name 值作为参数名提交。
- id：通常和 `<label for=""></label>` 一起使用。

## 下拉列表

> mdn select：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/select  
> mdn option：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/option

下拉列表需要 select 和 option 共同使用。

`select` 属性：

- name：名称。
- id：通常和 `<label for=""></label>` 一起使用。

`option` 属性：

- label：表示选项含义的文本。如果 label 属性没有定义，它的值就是元素文本内容。
- selected：默认选中。

## textarea 多行文本

> mdn textarea：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea

属性：

- name：名称。
- cols：可视宽度。
- rows：元素的输入文本的行数（显示的高度）。
- id：通常和 `<label for=""></label>` 一起使用。

## 按钮

按钮分两种写法：`<button>` 或者 `<input>`。

### button

属性：

- type：类型。
- formenctype：如果 button 是 submit 类型，此属性值指定提交表单到服务器的内容类型。可选值：
  - `application/x-www-form-urlencoded`: 未指定时的默认值。
  - `multipart/form-data`: 如果使用type属性的`<input>`元素设置文件，使用此值。
  - `text/plain如果指定此属性`，它将重写 button 的表单拥有者的enctype属性。

```html
<button type="submit">button:submit 提交按钮</button>
<button type="reset">button:reset 重置</button>
<button type="button">button:button 普通按钮</button>
```

### input

属性：

- type：类型。
- value：按钮显示文字。

```html
<input type="submit" value="input:submit 提交按钮" />
<input type="submit" value="input:submit 图片提交" />
<input type="reset" value="input:reset 重置" />
<input type="button" value="input:button 普通按钮" />
```

## label

HTML `<label>` 元素（标签）表示用户界面中某个元素的说明。

```html
<label id="foo">foo</label>
<input type="checkbox" id="foo">
```

另外，你也可以将 `<input>` 直接放在 `<label>` 里，此时则不需要 for 和 id 属性，因为关联已隐含存在：

```html
<label>
  foo
  <input type="checkbox" name="foo">
</label>
```
