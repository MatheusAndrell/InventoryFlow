<template>
  <label :for="id"
    class="flex items-center text-sm font-normal text-gray-700 cursor-pointer select-none dark:text-gray-400">
    <div class="relative">
      <input :id="id" :name="name" type="checkbox" class="sr-only" :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)" />
      <div :class="modelValue
        ? 'border-brand-500 bg-brand-500'
        : 'bg-transparent border-gray-300 dark:border-gray-700'"
        class="mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px]">
        <span :class="modelValue ? '' : 'opacity-0'">
          <Icon icon="mdi:check" width="14" height="14" />
        </span>
      </div>
    </div>
    <span>
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  modelValue: Boolean,
  id: String,
  name: String,
  label: String
})

defineEmits(['update:modelValue'])
</script>
