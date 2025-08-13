<template>
  <div class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="max-w-full overflow-x-auto custom-scrollbar">
      <table class="min-w-full">
        <TableHeader :columns="columns" />
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
          <TableRow v-for="(row, index) in rows" :key="index" :row="row" :columns="columns">
            <template #actions="{ row }">
              <slot name="actions" :row="row" />
            </template>
          </TableRow>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>

defineProps({
  columns: { type: Array, required: true },
  rows: { type: Array, required: true }
})
</script>
