<template>
  <span :class="[
    'rounded-full px-2 py-0.5 text-theme-xs font-medium',
    {
      'bg-success-50 text-success-700 dark:bg-success-500/15 dark:text-success-500': status === 'Active',
      'bg-warning-50 text-warning-700 dark:bg-warning-500/15 dark:text-warning-400': status === 'Pending',
      'bg-error-50 text-error-700 dark:bg-error-500/15 dark:text-error-500': status === 'Cancel',
    }
  ]">
    {{ status }}
  </span>
</template>

<script setup>
defineProps({ status: { type: String, required: true } })
</script>
