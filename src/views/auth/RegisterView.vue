<template>
  <div class="relative flex h-screen shrink-0 justify-center md:px-12 lg:px-0">
    <div
      class="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28"
    >
      <main class="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
        <h2 class="text-2xl font-bold text-gray-900">Criar conta</h2>
        <p class="mt-2 text-sm text-gray-700">Digite seu e-mail e senha para criar sua conta.</p>

        <form @submit.prevent="createAccount" class="mt-8 space-y-4">
          <div>
            <input
              v-model="form.email"
              type="email"
              placeholder="E-mail"
              required
              class="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <input
              v-model="form.password"
              type="password"
              placeholder="Senha"
              required
              class="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <Button
            type="submit"
            icon="pi pi-shield"
            :loading="form.loading"
            label="Criar conta"
            class="w-full p-3 bg-primary text-white rounded-md hover:bg-primary-emphasis-alt focus:outline-none"
          />
        </form>

        <p class="mt-4 text-sm text-gray-600">
          Já tem uma conta?
          <a href="/login" class="text-primary hover:text-primary-emphasis-alt">Faça login</a>
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
import { createUserWithEmailAndPassword } from 'firebase/auth'
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

async function createAccount() {
  form.value.loading = true
  try {
    await createUserWithEmailAndPassword(auth, form.value.email, form.value.password)

    toast.add({
      severity: 'info',
      summary: 'Parabens',
      detail: 'Conta criada com sucesso!',
      life: 5000,
    })

    return router.push('/dashboard')
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: error?.message,
      life: 5000,
    })
  } finally {
    form.value.loading = false
  }
}
</script>
