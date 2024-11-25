import type { Ref, InjectionKey } from 'vue'

export interface TabsProps {
  modelValue: string
}

export type TabsEmits = {
  'update:modelValue': [value: string]
}

export interface tabsContext {
  activeName: Ref<string>
}

export const tabsContextKey: InjectionKey<tabsContext> = Symbol('tabsContextKey')
