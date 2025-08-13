<template>
  <div class="flex -space-x-2">
    <div v-for="(member, idx) in members" :key="idx"
      class="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900">
      <img :src="member" alt="team member" />
    </div>
  </div>
</template>

<script setup>
defineProps({ members: { type: Array, required: true } })
</script>
