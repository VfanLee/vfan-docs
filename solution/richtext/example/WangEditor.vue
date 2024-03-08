<script lang="ts" setup>
import { shallowRef, onBeforeUnmount } from 'vue'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  toolbarConfig: {
    type: Object,
    default: () => ({})
  },
  editorConfig: {
    type: Object,
    default: () => ({})
  },
  toolbarMode: {
    type: String,
    default: 'default' // 或 'simple'
  },
  editorMode: {
    type: String,
    default: 'default' // 或 'simple'
  },
  height: {
    type: String,
    default: '300px'
  }
})

defineEmits(['update:modelValue'])

const editorRef = shallowRef()

const handleCreated = editor => {
  editorRef.value = editor
}

onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
</script>

<template>
  <div class="w-editor">
    <Toolbar class="w-editor__toolbar" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="toolbarMode" />
    <Editor class="w-editor__editor" :style="{ height }" :modelValue="modelValue" @update:modelValue="val => $emit('update:modelValue', val)" :defaultConfig="editorConfig" :mode="editorMode" @onCreated="handleCreated" />
  </div>
</template>

<style lang="scss" scoped>
.w-editor {
  width: 100%;
  border: 1px solid var(--el-border-color);
}

.w-editor__toolbar {
  border-bottom: 1px solid var(--el-border-color);
}
</style>
