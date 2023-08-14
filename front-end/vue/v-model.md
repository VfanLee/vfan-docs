# v-model

## 文本

<!-- tabs: start -->
<!-- tab: v-model -->
```html
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

<!-- tab: not v-model -->
```html
<script setup>
import { ref } from 'vue'

const textValue = ref('Hello')
</script>

<template>
  <div>
    <p>{{ textValue }}</p>

    <input type="text" :value="textValue" @input="e => (textValue = e.target.value)" />
    <!-- or -->
    <input type="text" :value="textValue" @input="textValue = $event.target.value" />
  </div>
</template>
```
<!-- tabs: end -->

## 多行文本

<!-- tabs: start -->
<!-- tab: v-model -->
```html
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

<!-- tab: not v-model -->
```html
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
<!-- tabs: end -->

## 复选框

<!-- tabs: start -->
<!-- tab: v-model -->
```html
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

<!-- tab: not v-model -->
```html
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
<!-- tabs: end -->

## 单选按钮

<!-- tabs: start -->
<!-- tab: v-model -->
```html
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

<!-- tab: not v-model -->
```html
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
<!-- tabs: end -->

## 选择器

<!-- tabs: start -->
<!-- tab: v-model -->
```html
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

<!-- tab: not v-model -->
注意：这种实现方式会存在一个 bug：选中元素之后，selectValue2 值确实改变了，但是元素选中状态会丢失（暂未找到更好的解决方法）。

```html
<script setup>
import { ref } from 'vue'

const selectValue1 = ref('2')
const selectValue2 = ref(['2'])

const handleChange = event => {
  let options = event.target.options
  selectValue2.value = []
  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      selectValue2.value.push(options[i].value)
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
    <select :value="selectValue2" @change="handleChange" multiple>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</template>
```
<!-- tabs: end -->
