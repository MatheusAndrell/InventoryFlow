<template>
  <div class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="max-w-full overflow-x-auto custom-scrollbar">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th v-for="col in columns" :key="col.key" class="px-5 py-3 text-left sm:px-6"
              :style="{ width: col.width || 'auto' }">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                {{ col.label }}
              </p>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="border-t border-gray-100 dark:border-gray-800">
            <td v-for="col in columns" :key="col.key" class="px-5 py-4 sm:px-6">
              <template v-if="col.type === 'avatar'">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 overflow-hidden rounded-full">
                    <img :src="row[col.key]" :alt="row.name" />
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

              <template v-else-if="col.type === 'team'">
                <div class="flex -space-x-2">
                  <div v-for="(member, idx) in row[col.key]" :key="idx"
                    class="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
                    <img :src="member" alt="team member" />
                  </div>
                </div>
              </template>

              <template v-else-if="col.type === 'status'">
                <span :class="[
                  'rounded-full px-2 py-0.5 text-theme-xs font-medium',
                  {
                    'bg-success-50 text-success-700 dark:bg-success-500/15 dark:text-success-500': row[col.key] === 'Active',
                    'bg-warning-50 text-warning-700 dark:bg-warning-500/15 dark:text-warning-400': row[col.key] === 'Pending',
                    'bg-error-50 text-error-700 dark:bg-error-500/15 dark:text-error-500': row[col.key] === 'Cancel',
                  }
                ]">
                  {{ row[col.key] }}
                </span>
              </template>

              <template v-else-if="col.type === 'actions'">
                <slot name="actions" :row="row" />
              </template>

              <template v-else>
                {{ row[col.key] }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    required: true
  },
  rows: {
    type: Array,
    required: true
  }
})
</script>
