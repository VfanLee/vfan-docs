# TypeScript 与组合式 API

::: tip
仅记录 `<script setup>` 写法。

非 `<script setup>` 等等更多语法，参考 [官方文档](https://cn.vuejs.org/guide/typescript/composition-api)。
:::

## props

### 声明 props

::: code-group

```ts [运行时]
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number,
})
```

```ts [基于类型]
interface Props {
  foo: string
  bar?: number
}

const props = defineProps<Props>()
```

:::

::: warning
“运行时声明”和“基于类型的声明”可以择一使用，但是不能同时使用。
:::

::: tip 语法限制
在 `3.2` 及以下版本中，`defineProps()` 的泛型类型参数仅限于类型字面量或对本地接口的引用。

**这个限制在 `3.3` 中得到了解决。**

最新版本的 Vue 支持在类型参数位置引用导入和有限的复杂类型。但是，由于类型到运行时转换仍然基于 _AST_，一些需要实际类型分析的复杂类型，例如条件类型，还未支持。你可以使用条件类型来指定单个 prop 的类型，但不能用于整个 props 对象的类型。
:::

### 声明 props 默认值

::: code-group

```ts [解构默认值 <sup>3.5+</sup>]
interface Props {
  msg?: string
  labels?: string[]
}

const { msg = 'hello', labels = ['one', 'two'] } = defineProps<Props>()
```

```ts [withDefaults]
interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two'],
})
```

:::

::: tip

- 在使用 `withDefaults` 时，**默认值的可变引用类型 (如数组或对象) 应该在函数中进行包装**，以避免意外修改和外部副作用。这样可以确保每个组件实例都会获得自己默认值的副本。
- 在使用解构时，这不是必要的。

:::

## emits

::: code-group

```ts [运行时]
const emit = defineEmits(['change', 'update'])
```

```ts [基于选项]
const emit = defineEmits({
  change: (id: number) => {
    // 返回 `true` 或 `false`
    // 表明验证通过或失败
  },
  update: (value: string) => {
    // 返回 `true` 或 `false`
    // 表明验证通过或失败
  },
})
```

```ts [基于类型]
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
```

```ts [3.3+]
const emit = defineEmits<{
  change: [id: number]
  update: [value: string]
}>()
```

:::

类型参数可以是以下的一种：

- 一个可调用的函数类型，但是写作一个包含调用签名的类型字面量。它将被用作返回的 emit 函数的类型。
- 一个类型字面量，其中键是事件名称，值是数组或元组类型，表示事件的附加接受参数。上面的示例使用了具名元组，因此每个参数都可以有一个显式的名称。

## ref()

## reactive()

## computed()

## 事件处理函数

## provide / inject

## 模板引用

## 组件模板引用
