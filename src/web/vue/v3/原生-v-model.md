<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')
const multilineText = ref('')
const picked = ref('')

// 单个复选框
const checked = ref(false)
// 多个复选框
const checkedNamesData = [] // 复选框初始值
const checkedNames = ref(checkedNamesData)
const checkedNamesSet = new Set(checkedNamesData)

const handleCheckboxChange = e => {
  const { checked, value } = e.target
  if(checked) {
    checkedNamesSet.add(value)
  } else {
    checkedNamesSet.delete(value)
  }
  checkedNames.value = Array.from(checkedNamesSet)
}

// 单选
const selected = ref('')
// 多选
const multiSelectedData = [] // 多选初始值
const multiSelected = ref(multiSelectedData)

const handleSelectChange = e => {
  const options = e.target.options
  // multiSelected.value = Array.from(options).filter(option => option.selected).map(option => option.value)
  multiSelected.value = Array.from(options).reduce((selected, option) => {
    if (option.selected) {
      selected.push(option.value)
    }
    return selected
  }, [])
}
</script>

# “原生” v-model（表单输入绑定）

`v-model` 可以用于各种不同类型的输入元素。它会根据所使用的元素自动使用对应的 DOM 属性和事件组合：

- 文本类型的 `<input>` 和 `<textarea>` 元素会绑定 `value` 属性并监听 `input` 事件；
- `<input type="checkbox">` 和 `<input type="radio">` 会绑定 `checked` 属性并监听 `change` 事件；
- `<select>` 会绑定 `value` 属性并监听 `change` 事件。

::: warning
v-model 会忽略任何表单元素上初始的 `value`、`checked` 或 `selected` attribute。

其实说白了就是原生组件的 “勾选交互” 通过 `v-model` 进行了加强，可以更方便地通过数据继续交互。所以在使用的时候，要么选择 v-model，要么选择手动控制（`value`、`checked` 或 `selected` attribute）。

如下的 `非 v-model` 示例，只是简单的剖析 `v-model` 的原理，详细实现可见 [v-model 源码](https://github.com/vuejs/core/blob/main/packages/runtime-dom/src/directives/vModel.ts)。
:::

## 单行文本

::: code-group

```vue [v-model]
<script setup>
import { ref } from 'vue'

const message = ref('Hello')
</script>

<template>
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />
</template>
```

```vue [非 v-model]
<script setup>
import { ref } from 'vue'

const textValue = ref('Hello')
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <input :value="message" @input="e => (message = e.target.value)" placeholder="edit me" />
  </div>
</template>
```

:::

<Demo>
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />
</Demo>

::: tip
对于需要使用 [IME](https://zh.wikipedia.org/wiki/%E8%BE%93%E5%85%A5%E6%B3%95) 的语言 (中文，日文和韩文等)，你会发现 `v-model` 不会在 IME 输入还在拼字阶段时触发更新。如果你的确想在拼字阶段也触发更新，请直接使用自己的 `input` 事件监听器和 `value` 绑定而不要使用 `v-model`。
:::

## 多行文本

::: code-group

```vue [v-model]
<script setup>
import { ref } from 'vue'

const multilineText = ref('')
</script>

<template>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{ multilineText }}</p>
  <textarea v-model="multilineText" placeholder="add multiple lines"></textarea>
</template>
```

```vue [非 v-model]
<script setup>
import { ref } from 'vue'

const multilineText = ref('')
</script>

<template>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{ multilineText }}</p>
  <textarea :value="multilineText" @input="e => (multilineText = e.target.value)" placeholder="add multiple lines"></textarea>
</template>
```

:::

<Demo>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{ multilineText }}</p>
  <textarea v-model="multilineText" placeholder="add multiple lines"></textarea>
</Demo>

## 单选按钮

::: code-group

```vue [v-model]
<script setup>
import { ref } from 'vue'

const picked = ref('')
</script>

<template>
  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>
</template>
```

```vue [非 v-model]
<script setup>
import { ref } from 'vue'

const picked = ref('')
</script>

<template>
  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" :checked="picked === 'One'" @change="e => picked = e.target.value" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" :checked="picked === 'Two'" @change="e => picked = e.target.value" />
  <label for="two">Two</label>
</template>
```

:::

<Demo>
  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>
</Demo>

## 复选框

复选框有两种情况：

1. 单个复选框，绑定布尔类型值。
2. 多个复选框，绑定到同一个数组或集合的值。

### 单个复选框

::: code-group

```vue [v-model]
<script setup>
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
<template>
```

```vue [非 v-model]
<script setup>
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <input type="checkbox" id="checkbox" :checked="checked" @change="e => checked = e.target.checked" />
  <label for="checkbox">{{ checked }}</label>
<template>
```

:::

<Demo>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
</Demo>

### 多个复选框

::: code-group

```vue [v-model]
<script setup>
import { ref } from 'vue'

const checkedNames = ref([])
</script>

<template>
  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
</template>
```

```vue [非 v-model]
<script setup>
import { ref } from 'vue'

const checkedNamesData = [] // 复选框初始值
const checkedNames = ref(checkedNamesData)
const checkedNamesSet = new Set(checkedNamesData)

const handleCheckboxChange = e => {
  const { checked, value } = e.target
  if(checked) {
    checkedNamesSet.add(value)
  } else {
    checkedNamesSet.delete(value)
  }
  checkedNames.value = Array.from(checkedNamesSet)
}
</script>

<template>
  <input type="checkbox" id="jack" value="Jack" :checked="checkedNames.includes('Jack')" @change="handleCheckboxChange">
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" :checked="checkedNames.includes('John')" @change="handleCheckboxChange">
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" :checked="checkedNames.includes('Mike')" @change="handleCheckboxChange">
  <label for="mike">Mike</label>
</template>
```

:::

<Demo>
  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
</Demo>

## 选择器

选择器有两种情况：

1. 单选
2. 多选 (值绑定到一个数组)

### 单选

::: code-group

```vue [v-model]
<script setup>
import { ref } from 'vue'

const selected = ref('')
</script>

<template>
  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option value="">Please select one</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
</template>
```

```vue [非 v-model]
<script setup>
import { ref } from 'vue'

const selected = ref('')
</script>

<template>
  <div>Selected: {{ selected }}</div>

  <select :value="selected" @change="e => (selected = e.target.value)">
    <option :selected="selected" value="">Please select one</option>
    <option :selected="selected" value="A">A</option>
    <option :selected="selected" value="B">B</option>
    <option :selected="selected" value="C">C</option>
  </select>
</template>
```

:::

<Demo>
  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option value="">Please select one</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
</Demo>

### 多选

::: code-group

```vue [v-model]
<script setup>
import { ref } from 'vue'

const multiSelected = ref([])
</script>

<template>
  <div>Selected: {{ multiSelected }}</div>

  <select v-model="multiSelected" multiple>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
</template>
```

```vue [非 v-model]
<script setup>
import { ref } from 'vue'

const multiSelectedData = [] // 多选初始值
const multiSelected = ref(multiSelectedData)

const handleSelectChange = e => {
  const options = e.target.options
  // multiSelected.value = Array.from(options).filter(option => option.selected).map(option => option.value)
  multiSelected.value = Array.from(options).reduce((selected, option) => {
    if (option.selected) {
      selected.push(option.value)
    }
    return selected
  }, [])
}
</script>

<template>
  <div>Selected: {{ multiSelected }}</div>

  <select @change="handleSelectChange" multiple>
    <option :selected="multiSelected.includes('A')" value="A">A</option>
    <option :selected="multiSelected.includes('B')" value="B">B</option>
    <option :selected="multiSelected.includes('C')" value="C">C</option>
  </select>
</template>
```

:::

<Demo>
  <div>Selected: {{ multiSelected }}</div>

  <select v-model="multiSelected" multiple>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
</Demo>

## 值绑定

对于单选按钮，复选框和选择器选项，`v-model` 绑定的值通常是 **静态的字符串** (或者 **单个复选框的情况下是布尔值**)：

```vue-html
<!-- `picked` 在被选择时是字符串 "a" -->
<input type="radio" v-model="picked" value="a" />

<!-- `toggle` 只会为 true 或 false -->
<input type="checkbox" v-model="toggle" />

<!-- `selected` 在第一项被选中时为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但有时我们可能希望将该值绑定到当前组件实例上的动态数据。这可以通过使用 `v-bind` 来实现。此外，使用 `v-bind` 还使我们可以将选项值绑定为 **非字符串的数据类型**：

```vue-html{2}
<select v-model="selected">
  <option :value="{ number: 123 }">123</option>
</select>
```

在上面这个例子中，当某个选项被选中，`selected` 会被设为该对象字面量值 `{ number: 123 }`。`radio`、`checkbox` 也是类似。

### `true-value` / `false-value`

在单个复选框中，通常会使用 `true` 和 `false` 作为 `v-model` 的值。

但是在某些情况下，我们可能需要使用其他值来表示选中状态。我们可以通过 `true-value` 和 `false-value` 属性来指定。

```vue-html
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no"
/>
```

这里 `toggle` 属性的值会在选中时被设为 `'yes'`，取消选择时设为 `'no'`。

::: warning
`true-value` 和 `false-value` 是 Vue 特有的属性，仅支持和 `v-model` 配套使用。
:::

## 修饰符

### `.lazy`

默认情况下，`v-model` 会 **在每次 `input` 事件后更新数据** (IME 例外)。

你可以添加 `lazy` 修饰符来改为 **在每次 `change` 事件后更新数据**：

```vue-html
<!-- 在 "change" 事件后同步更新而不是 "input" -->
<input v-model.lazy="msg" />
```

### `.number`

如果你想让用户输入自动转换为数字，你可以在 `v-model` 后添加 `.number` 修饰符来管理输入：

```vue-html
<input v-model.number="age" />
```

如果该值无法被 `parseFloat()` 处理，那么将返回原始值。

`number` 修饰符会在输入框有 `type="number"` 时自动启用。

### `.trim`

如果你想要默认自动去除用户输入内容中两端的空格，你可以在 `v-model` 后添加 `.trim` 修饰符：

```vue-html
<input v-model.trim="msg" />
```
