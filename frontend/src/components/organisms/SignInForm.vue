<template>
  <form @submit.prevent="handleSubmit">
    <div class="space-y-5">
      <Input v-model="email" type="email" label="Email" id="email" name="email" placeholder="info@gmail.com" required />
      <Input v-model="password" label="Password" id="password" name="password" placeholder="Enter your password"
        required showPasswordToggle />

      <div class="flex items-center justify-between">
        <Checkbox v-model="keepLoggedIn" id="keepLoggedIn" name="keepLoggedIn" label="Keep me logged in" />
        <router-link to="" class="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400">
          Forgot password?
        </router-link>
      </div>

      <Button @click="handleSubmit" :disabled="loading" :text="loading ? 'Signing in...' : 'Sign in'"
        bgColor="bg-brand-500 hover:bg-brand-600"
        class="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg shadow-theme-xs" />

      <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '@/services/Auth/signin'

const email = ref('')
const password = ref('')
const keepLoggedIn = ref(false)
const loading = ref(false)
const errorMessage = ref('')

async function handleSubmit() {
  loading.value = true
  errorMessage.value = ''

  try {
    const data = await login(email.value, password.value)

    localStorage.setItem('token', data.access_token)
    localStorage.setItem('token_type', data.token_type)

    window.location.href = '/'

  } catch (error) {
    errorMessage.value = error.message
  } finally {
    loading.value = false
  }
}
</script>
