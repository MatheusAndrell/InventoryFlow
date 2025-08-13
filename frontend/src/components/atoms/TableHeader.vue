<template>
  <thead>
    <tr class="border-b border-gray-200 dark:border-gray-700">
      <th v-for="col in columns" :key="col.key"
        :class="['px-5 py-3 sm:px-6', col.type === 'actions' ? 'text-center' : 'text-left']"
        :style="{ width: col.width || 'auto' }">
        <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
          {{ col.label }}
        </p>
      </th>
    </tr>
  </thead>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    required: true
  }
})
</script>
