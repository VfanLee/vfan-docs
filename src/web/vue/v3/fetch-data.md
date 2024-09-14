# Fetch 数据

::: code-group

```vue [App.vue]
<script setup>
import useFetchUsers from './useFetchUsers'

const { isLoading, error, data: users } = useFetchUsers()
</script>

<template>
  <p v-if="isLoading">Fetching users...</p>
  <p v-else-if="error">An error ocurred while fetching users</p>
  <ul v-else-if="users">
    <li v-for="user in users" :key="user.login.uuid">
      <img :src="user.picture.thumbnail" alt="user" />
      <p>
        {{ user.name.first }}
        {{ user.name.last }}
      </p>
    </li>
  </ul>
</template>
```

```js [useFetchUsers.js]
import { ref } from 'vue'

export default function useFetchUsers() {
  const data = ref()
  const error = ref()
  const isLoading = ref(false)

  async function fetchData() {
    isLoading.value = true
    try {
      const response = await fetch('https://randomuser.me/api/?results=3')
      const { results: users } = await response.json()
      data.value = users
      error.value = undefined
    } catch (err) {
      data.value = undefined
      error.value = err
    }
    isLoading.value = false
  }
  fetchData()

  return { isLoading, error, data }
}
```

:::
