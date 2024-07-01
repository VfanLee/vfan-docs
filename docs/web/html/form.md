---
layout: home
---

# Web 表单

## form

> [MDN form](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form)

属性：

- action：提交地址。
- method：提交方式，默认为 GET。
- name：名称。
- enctype：当 method 属性值为 post 时，enctype 就是将表单的内容提交给服务器的 MIME 类型 。可能的取值有：
  - `application/x-www-form-urlencoded`：未指定属性时的默认值。
  - `multipart/form-data`：当表单包含 type=file 的 `<input>` 元素时使用此值。
  - `text/plain`：出现于 HTML5，用于调试。这个值可被 `<button>`、`<input type="submit">` 或 `<input type="image">` 元素上的 `formenctype` 属性覆盖。

## input

> [MDN input](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input)

属性：

- type：参考 [`<input> types`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)。
- name：名称，表单提交时，会以 `name` 的值作为参数名来提交。
- id：元素的 id，在表单中，一般会配合 `<label>` 元素的 `for` 属性来使用。

## select / option

> - [MDN select](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/select)
> - [MDN option](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/option)

下拉列表，`<option>` 需要配合 `<select>` 来进行使用。

`select` 属性：

- name：名称。
- id：元素的 id，在表单中，一般会配合 `<label>` 元素的 `for` 属性来使用。

`option` 属性：

- label：表示选项含义的文本。如果 label 属性没有定义，它的值就是元素文本内容。
- selected：默认选中。

## textarea

> [MDN textarea](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea)

属性：

- name：名称。
- cols：可视宽度。
- rows：元素的输入文本的行数（显示的高度）。
- id：元素的 id，在表单中，一般会配合 `<label>` 元素的 `for` 属性来使用。

## button

> [MDN button](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button)

按钮分两种写法：`<button>` 或者 `<input>`。

<!-- tabs:start -->
<!-- tab:`<button>` 写法 -->
```html
<button type="submit">button:submit 提交按钮</button>
<button type="reset">button:reset 重置</button>
<button type="button">button:button 普通按钮</button>
```

<!-- tab:`<input>` 写法 -->
```html
<input type="submit" value="input:submit 提交按钮" />
<input type="reset" value="input:reset 重置" />
<input type="button" value="input:button 普通按钮" />
```
<!-- tabs:end -->

## label

> [MDN label](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/label)

`<label>` 元素表示用户界面中某个元素的说明。

一般 `<label>` 和表单元素进行绑定时有两种写法，如下：

<!-- tabs:start -->
<!-- tab:id + for 绑定 -->
```html
<label id="foo">foo</label>
<input type="checkbox" id="foo">
```

<!-- tab:无需 id 绑定 -->
```html
<label>
  foo
  <input type="checkbox" name="foo">
</label>
```
<!-- tabs:end -->

## fieldset / legend

> [MDN fieldset](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/fieldset)
> [MDN legend](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/legend)

`<legend>` 需要搭配 `<fieldset>` 来进行使用，一般用于表单分组。

当 fieldset 标签设置 disabled 时，其内部的所有子代表单控件也会继承这个属性。
