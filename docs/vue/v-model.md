# v-model

> 参考：[组件 v-model](https://cn.vuejs.org/guide/components/v-model.html)

## 原生元素

为了深入理解 v-model，尝试不使用 v-model 来进行实现原生元素的双向绑定。

### 单行文本

<!-- tabs:start -->
<!-- tab:v-model -->
```vue
<script setup>
import { ref } from 'vue'

const textValue = ref('Hello')
</script>

<template>
  <div>
    <p>{{ textValue }}</p>

    <input type="text" v-model="textValue" />
  </div>
</template>
```

<!-- tab:非 v-model -->
```vue
<script setup>
import { ref } from 'vue'

const textValue = ref('Hello')
</script>

<template>
  <div>
    <p>{{ textValue }}</p>

    <input type="text" :value="textValue" @input="e => (textValue = e.target.value)" />
    <!-- or，$event 是 vue 提供的语法糖 -->
    <input type="text" :value="textValue" @input="textValue = $event.target.value" />
  </div>
</template>
```
<!-- tabs:end -->

### 多行文本

<!-- tabs:start -->
<!-- tab:v-model -->
```vue
<script setup>
import { ref } from 'vue'

const textValue = ref(
`
  hello
  world
`)
</script>

<template>
  <div>
    <p>{{ textValue }}</p>

    <textarea v-model="textValue"></textarea>
  </div>
</template>
```

<!-- tab:非 v-model -->
```vue
<script setup>
import { ref } from 'vue'

const textValue = ref(
`
  hello
  world
`)
</script>

<template>
  <div>
    <p>{{ textValue }}</p>

    <textarea @input="textValue = $event.target.value">{{ textValue }}</textarea>
  </div>
</template>
```
<!-- tabs:end -->

### 单选按钮

<!-- tabs:start -->
<!-- tab:v-model -->
```vue
<script setup>
import { ref } from 'vue'

const radioValue = ref('2')
</script>

<template>
  <div>
    <p>{{ radioValue }}</p>

    <label>
      <input type="radio" v-model="radioValue" value="1" />
      One
    </label>

    <label>
      <input type="radio" v-model="radioValue" value="2" />
      Two
    </label>

    <label>
      <input type="radio" v-model="radioValue" value="3" />
      Three
    </label>
  </div>
</template>
```

<!-- tab:非 v-model -->
```vue
<script setup>
import { ref } from 'vue'

const radioValue = ref('2')
</script>

<template>
  <div>
    <p>{{ radioValue }}</p>

    <label>
      <input type="radio" value="1" :checked="radioValue === '1'" @change="radioValue = $event.target.value" />
      One
    </label>

    <label>
      <input type="radio" value="2" :checked="radioValue === '2'" @change="radioValue = $event.target.value" />
      Two
    </label>

    <label>
      <input type="radio" value="3" :checked="radioValue === '3'" @change="radioValue = $event.target.value" />
      Three
    </label>
  </div>
</template>
```
<!-- tabs:end -->

### 复选框

<!-- tabs:start -->
<!-- tab:v-model -->
```vue
<script setup>
import { ref } from 'vue'

const checkboxValue1 = ref(true)
const checkboxValue2 = ref(['2'])
</script>

<template>
  <div>
    <p>{{ checkboxValue1 }}</p>
    <label>
      <input type="checkbox" v-model="checkboxValue1" />
      checked
    </label>

    <p>{{ checkboxValue2 }}</p>
    <label>
      <input type="checkbox" v-model="checkboxValue2" value="1" />
      One
    </label>
    <label>
      <input type="checkbox" v-model="checkboxValue2" value="2" />
      Two
    </label>
    <label>
      <input type="checkbox" v-model="checkboxValue2" value="3" />
      Three
    </label>
  </div>
</template>
```

<!-- tab:非 v-model -->
```vue
<script setup>
import { ref } from 'vue'

const checkboxValue1 = ref(true)
const checkboxValue2 = ref(['2'])

const handleChange = e => {
  const target = e.target

  if (target.checked) {
    if (checkboxValue2.value.includes(target.value)) return
    checkboxValue2.value = [...checkboxValue2.value, target.value]
  } else {
    checkboxValue2.value = checkboxValue2.value.filter(x => x !== target.value)
  }
}
</script>

<template>
  <div>
    <p>{{ checkboxValue1 }}</p>
    <label>
      <input type="checkbox" :checked="checkboxValue1" @change="checkboxValue1 = $event.target.checked" />
      checked
    </label>

    <p>{{ checkboxValue2 }}</p>
    <label>
      <input type="checkbox" value="1" :checked="checkboxValue2.includes('1')" @change="handleChange" />
      One
    </label>
    <label>
      <input type="checkbox" value="2" :checked="checkboxValue2.includes('2')" @change="handleChange" />
      Two
    </label>
    <label>
      <input type="checkbox" value="3" :checked="checkboxValue2.includes('3')" @change="handleChange" />
      Three
    </label>
  </div>
</template>
```
<!-- tabs:end -->

### 下拉列表

<!-- tabs:start -->
<!-- tab:v-model -->
```vue
<script setup>
import { ref } from 'vue'

const selectValue1 = ref('2')
const selectValue2 = ref(['2'])
</script>

<template>
  <div>
    <p>{{ selectValue1 }}</p>
    <select v-model="selectValue1">
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>

    <p>{{ selectValue2 }}</p>
    <select v-model="selectValue2" multiple>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</template>
```

<!-- tab:非 v-model -->
```vue
<script setup>
import { ref } from 'vue'

const selectValue1 = ref('2')
const selectValue2 = ref(['2'])

const handleChange = event => {
  let options = event.target.options
  selectValue2.value = []
  for (const option of options) {
    if (option.selected) {
      selectValue2.value.push(option.value)
    }
  }
}
</script>

<template>
  <div>
    <p>{{ selectValue1 }}</p>
    <select :value="selectValue1" @change="selectValue1 = $event.target.value">
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>

    <p>{{ selectValue2 }}</p>
    <select @change="handleChange" multiple>
      <option value="1" :selected="selectValue2.includes('1')">One</option>
      <option value="2" :selected="selectValue2.includes('2')">Two</option>
      <option value="3" :selected="selectValue2.includes('3')">Three</option>
    </select>
  </div>
</template>
```
<!-- tabs:end -->

## 自定义组件

而对于自定义组件来说，v-model 就更好理解了，以 element plus 的 [input 组件](https://element-plus.org/zh-CN/component/input.html) 为例。

<!-- tabs:start -->
<!-- tab:v-model -->
```vue
<script setup>
import { ref } from 'vue'

const textValue = ref('')
</script>

<template>
  <div>
    <p>{{ textValue }}</p>

    <el-input v-model="textValue" />
  </div>
</template>
```

<!-- tab:非 v-model -->
```vue
<script setup>
import { ref } from 'vue'

const textValue = ref('')
</script>

<template>
  <div>
    <p>{{ textValue }}</p>

    <el-input :modelValue="textValue" @update:modelValue="val => textValue.value = val" />
  </div>
</template>
```
<!-- tabs:end -->