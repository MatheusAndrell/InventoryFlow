import { API_URL } from '@/config/api'

export async function login(email, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  if (!response.ok) {
    throw new Error('Erro ao fazer login')
  }

  const data = await response.json()

  if (data.access_token) {
    localStorage.setItem('token', data.access_token)
  }

  return data
}
