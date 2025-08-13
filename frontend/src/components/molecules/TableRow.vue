<template>
  <tr class="border-t border-gray-100 dark:border-gray-800">
    <td v-for="col in columns" :key="col.key"
      :class="['px-5 py-4 sm:px-6', col.type === 'actions' ? 'text-center' : '']">
      <template v-if="col.type === 'actions'">
        <slot name="actions" :row="row" />
      </template>
      <template v-else>
        {{ row[col.key] }}
      </template>
    </td>
  </tr>
</template>

<script setup>
defineProps({
  row: { type: Object, required: true },
  columns: { type: Array, required: true }
})
</script>
