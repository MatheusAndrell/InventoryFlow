<template>
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 overflow-hidden rounded-full">
      <img :src="row[keyField]" :alt="row.name" />
    </div>
    <div>
      <span class="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
        {{ row.name }}
      </span>
      <span class="block text-gray-500 text-theme-xs dark:text-gray-400">
        {{ row.role }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  row: { type: Object, required: true },
  keyField: { type: String, required: true }
})
</script>
