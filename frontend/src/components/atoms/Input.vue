<template>
  <div>
    <label v-if="label" :for="id" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
      {{ label }}<span v-if="required" class="text-error-500">*</span>
    </label>

    <div class="relative">
      <input :id="id" :name="name" :type="showPasswordToggle ? (showPassword ? 'text' : 'password') : type"
        :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />

      <span v-if="showPasswordToggle" @click="togglePassword"
        class="absolute z-30 text-gray-500 -translate-y-1/2 cursor-pointer right-4 top-1/2 dark:text-gray-400">
        <Icon v-if="!showPassword" icon="mdi:eye-off-outline" width="20" height="20" />
        <Icon v-else icon="mdi:eye-outline" width="20" height="20" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  modelValue: String,
  type: { type: String, default: 'text' },
  label: String,
  placeholder: String,
  id: String,
  name: String,
  required: Boolean,
  showPasswordToggle: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)

function togglePassword() {
  showPassword.value = !showPassword.value
}
</script>
