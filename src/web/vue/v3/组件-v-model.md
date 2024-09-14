# 组件 v-model

## 基本用法

在 [“原生” v-model](./原生-v-model){target="_blank"} 中，讨论的都是“原生的”表单元素通过 `v-model` 实现双向绑定。

可以发现，这些“原生”元素的 `v-model` 都是 vue 框架为我们已经封装好了。

那么，如果我自己想要封装一个自定义组件（例如：文本输入框），如何实现 `v-model` 呢？

### 原理剖析

想要在自定义组件中实现 `v-model`，我们必须先知道 `v-model` 到底长什么样子！

举个例子：

```vue{9}
<script setup>
import { ref } from 'vue';
import Child from './Child.vue';

const model = ref('')
</script>

<template>
  <Child v-model="model" />
</template>
```

对于这个例子的 **第 9 行** 代码，我们一点一点地拆开来看：

```vue-html
<Child v-model="model" />

<Child v-model:modelValue="model" />

<!-- 这里的 '$event' 是 emit 事件传递的参数 -->
<Child :modelValue="model" @update:modelValue="$event => (model = $event)" />
```

没错，`v-model` 其实就是 `props -> modelValue` + `emit -> update:modelValue` 的组合，是一个语法糖。

### modelValue + update:modelValue

我们知道了 `v-model` 其实就是 `props -> modelValue` + `emit -> update:modelValue` 的组合后，我们首先就应该定义 `modelValue` 和 `update:modelValue`。

```js
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
```

为了确保 `Child.vue` 的值来源于父组件，我们使用 `:value` 来绑定 `props.modelValue`。

```vue-html{3}
<input
  type="text"
  :value="props.modelValue"
/>
```

接着，为了确保每次在 `Child.vue` 内修改的值能同步至父组件中，我们需要监听 `input` 事件，在文本框每次输入时，通过 `emit()` 触发 `update:modelValue` 自定义事件，并将最新值 `e.target.value` 以参数的形式传递出去。

```vue-html{4}
<input
  type="text"
  :value="props.modelValue"
  @input="e => emit('update:modelValue', e.target.value)"
/>
```

所以，最终的代码如下：

```vue
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    type="text"
    :value="props.modelValue"
    @input="e => emit('update:modelValue', e.target.value)"
  />
</template>
```

### defineModel() <Badge type="tip" text="3.4+" />

虽然我们通过 `modelValue` + `update:modelValue` 的方式实现了这个需求，但是代码看起来比较繁琐不是吗？

值得高兴的是，在 **Vue 3.4** 中，为了简化这个过程，Vue 团队又提供了一个新的语法糖 [`defineModel()`](https://cn.vuejs.org/api/sfc-script-setup.html#definemodel)：

```vue
<script setup>
const modelValue = defineModel() // prop 默认名称为 modelValue
</script>

<template>
  <input type="text" v-model="modelValue" />
</template>
```

`defineModel()` 返回的值是一个 `ref`。它可以像其他 `ref` 一样被访问以及修改，不过它能起到在父组件和当前变量之间的双向绑定的作用：

- 它的 `.value` 和父组件的 `v-model` 的值同步；
- 当它被子组件变更了，会触发父组件绑定的值一起更新。

## v-model 的参数

组件上的 `v-model` 也可以接受一个参数：

```vue{9}
<script setup>
import { ref } from 'vue'
import MyComponent from './MyComponent.vue';

const bookTitle = ref('Hello World!')
</script>

<template>
  <MyComponent v-model:title="bookTitle" />
</template>

```

::: details defineModel() <Badge type="tip" text="3.4+" />
在子组件中，我们可以通过将字符串作为第一个参数传递给 `defineModel()` 来支持相应的参数：

```vue{2}
<!-- MyComponent.vue -->
<script setup>
const title = defineModel('title')
</script>

<template>
  <input type="text" v-model="title" />
</template>
```

如果需要额外的 prop 选项，应该在 model 名称之后传递：

```js
const title = defineModel('title', { required: true })
```
:::

::: details modelValue + update:modelValue
```vue
<!-- MyComponent.vue -->
<script setup>
defineProps({
  title: {
    required: true
  }
})
defineEmits(['update:title'])
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
```
:::

### 多个 v-model 绑定

这个参数的用法真的非常实用！由此一来我们就可以轻易地在单个组件实例上创建 **多个 `v-model` 双向绑定** 了：

```vue-html
<UserName
  v-model:first-name="first"
  v-model:last-name="last"
/>
```

::: details defineModel() <Badge type="tip" text="3.4+" />
```vue
<script setup>
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
</script>

<template>
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />
</template>
```
:::

::: details modelValue + update:modelValue
```vue
<script setup>
defineProps({
  firstName: String,
  lastName: String
})

defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```
:::

## v-model 的修饰符

在 [“原生” v-model](./原生-v-model#修饰符){target="_blank"} 中，知道了一些内置修饰符，例如 `.trim`，`.number` 和 `.lazy`。

而对于自定义的组件，也是支持自定义的修饰符的。

例如：我们来创建一个自定义的修饰符 `capitalize`，它会自动将 `v-model` 绑定输入的字符串值第一个字母转为大写：

```vue-html
<MyComponent v-model.capitalize="myText" />
```

::: details defineModel() <Badge type="tip" text="3.4+" />
通过解构 `defineModel()` 的返回值，可以在子组件中访问添加到组件 `v-model` 的修饰符。

我们可以给 `defineModel()` 传入 `get` 和 `set` 这两个选项。这两个选项在从模型引用中读取或设置值时会接收到当前的值，并且它们都应该返回一个经过处理的新值：

```vue{2,3,9}
<script setup>
const [model, modifiers] = defineModel({
  set(value) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})
</script>

<template>
  <input type="text" v-model="model" />
</template>
```
:::

::: details modelValue + update:modelValue
```vue
<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>
```
:::

### 带参数的 v-model 修饰符

当然，参数和修饰符的使用并不冲突，如下例子展示了如何在使用多个不同参数的 v-model 时使用修饰符：

```vue-html
<UserName
  v-model:first-name.capitalize="first"
  v-model:last-name.uppercase="last"
/>
```

::: details defineModel() <Badge type="tip" text="3.4+" />
```vue
<script setup>
const [firstName, firstNameModifiers] = defineModel('firstName')
const [lastName, lastNameModifiers] = defineModel('lastName')

console.log(firstNameModifiers) // { capitalize: true }
console.log(lastNameModifiers) // { uppercase: true }
</script>
```
:::

::: details modelValue + update:modelValue
```vue
<script setup>
const props = defineProps({
firstName: String,
lastName: String,
firstNameModifiers: { default: () => ({}) },
lastNameModifiers: { default: () => ({}) }
})

defineEmits(['update:firstName', 'update:lastName'])

console.log(props.firstNameModifiers) // { capitalize: true }
console.log(props.lastNameModifiers) // { uppercase: true }
</script>
```
:::

## defineModel() 用法总结

这个宏可以用来声明一个 **双向绑定 prop**，通过父组件的 `v-model` 来使用。

在底层，这个宏声明了一个 model prop 和一个相应的值更新事件。如果第一个参数是一个字符串字面量，它将被用作 prop 名称；否则，**prop 名称将默认为 "modelValue"**。在这两种情况下，你都可以再传递一个额外的对象，它可以包含 prop 的选项和 model ref 的值转换选项。

```js
// 声明 "modelValue" prop，由父组件通过 v-model 使用
const model = defineModel()
// 或者：声明带选项的 "modelValue" prop
const model = defineModel({ type: String })

// 在被修改时，触发 "update:modelValue" 事件
model.value = "hello"

// 声明 "count" prop，由父组件通过 v-model:count 使用
const count = defineModel("count")
// 或者：声明带选项的 "count" prop
const count = defineModel("count", { type: Number, default: 0 })

function inc() {
  // 在被修改时，触发 "update:count" 事件
  count.value++
}
```

::: warning
如果为 `defineModel` `prop` 设置了一个 `default` 值且父组件没有为该 `prop` 提供任何值，会导致父组件与子组件之间不同步。

在下面的示例中，父组件的 `myRef` 是 `undefined`，而子组件的 `model` 是 `1`：

```js
// 子组件：
const model = defineModel({ default: 1 })

// 父组件
const myRef = ref()
```

```vue-html
<Child v-model="myRef"></Child>
```
:::