<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-bold text-center mb-4">Login</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="email" type="email" id="email"
            class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
          <input v-model="password" type="password" id="password"
            class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div class="flex justify-between">
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Entrar</button>
        </div>
      </form>
      <div class="mt-4 text-center">
        <button @click="handleGoogleLogin" class="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">Entrar
          com Google</button>
      </div>
      <p class="mt-4 text-sm text-center">
        Não tem uma conta? <router-link to="/register"
          class="text-blue-500 hover:text-blue-700">Registrar-se</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '../firebase';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const handleLogin = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push('/dashboard');
      } catch (error) {
        console.error(error);
      }
    };

    const handleGoogleLogin = async () => {
      try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        router.push('/dashboard');
      } catch (error) {
        console.error(error);
      }
    };

    return {
      email,
      password,
      handleLogin,
      handleGoogleLogin,
    };
  },
};
</script>
