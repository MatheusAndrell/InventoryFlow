<template>
  <button :type="type" :class="[
    'inline-flex items-center justify-center gap-3 py-3 text-sm font-normal rounded-lg px-7 transition-colors',
    bgColor ? bgColor : 'text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10'
  ]" @click="$emit('click')">
    <Icon v-if="icon" :icon="icon" :width="iconWidth" :height="iconHeight" />
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  text: String,
  icon: String,
  type: { type: String, default: 'button' },
  iconWidth: { type: [String, Number], default: 20 },
  iconHeight: { type: [String, Number], default: 20 },
  bgColor: String
})

defineEmits(['click'])
</script>
