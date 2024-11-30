<template>
  <div class="relative flex h-screen shrink-0 justify-center md:px-12 lg:px-0">
    <div
      class="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28"
    >
      <main class="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
        <h2 class="text-2xl font-bold text-gray-900">Login</h2>
        <p class="mt-2 text-sm text-gray-700">Digite seu e-mail e senha para acessar sua conta.</p>

        <form @submit.prevent="login" class="mt-8 space-y-4">
          <div>
            <input
              v-model="form.email"
              type="email"
              placeholder="E-mail"
              required
              class="w-full p-3 border border-primary rounded-md"
            />
          </div>
          <div>
            <input
              v-model="form.password"
              type="password"
              placeholder="Senha"
              required
              class="w-full p-3 border border-primary rounded-md"
            />
          </div>
          <Button
            type="submit"
            icon="pi pi-sign-in"
            :loading="form.loading"
            label="Login"
            class="w-full p-3 bg-primary text-white rounded-md hover:bg-primary-emphasis-alt focus:outline-none"
          />
        </form>

        <p class="mt-4 text-sm text-gray-600">
          Não tem uma conta?
          <a href="/signup" class="text-primary hover:text-primary-emphasis-alt">Criar conta</a>
        </p>
      </main>
    </div>
    <div class="hidden sm:contents lg:relative lg:block lg:flex-1">
      <img
        alt="Background"
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover"
        src="https://salient.tailwindui.com/_next/static/media/background-auth.4bcf3f4b.jpg"
      />
    </div>
  </div>
</template>

<script setup>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { ref } from 'vue'
import { Button, useToast } from 'primevue'
import { useRouter } from 'vue-router'

const toast = useToast()
const router = useRouter()
const form = ref({
  email: '',
  password: '',
  loading: false,
})

async function login() {
  form.value.loading = true
  try {
    await signInWithEmailAndPassword(auth, form.value.email, form.value.password)

    toast.add({
      severity: 'success',
      summary: 'Bem-vindo',
      detail: 'Login realizado com sucesso!',
      life: 5000,
    })

    return router.push('/dashboard')
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Erro',
      detail: error?.message,
      life: 5000,
    })
  } finally {
    form.value.loading = false
  }
}
</script>
