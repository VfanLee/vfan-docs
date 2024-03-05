<script setup></script>

<template>
  <div class="app-main">
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component"></component>
      </KeepAlive>
    </RouterView>
  </div>
</template>
