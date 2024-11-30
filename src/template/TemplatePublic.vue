<template>
  <div class="flex h-full flex-col">
    <header class="py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav class="relative z-50 flex justify-between">
          <div class="flex items-center md:gap-x-12 font-bold">
            <router-link :to="{ name: 'home' }" class="text-2xl">
              <span class="text-primary">Des</span>Feedback
            </router-link>
          </div>
          <div class="flex items-center gap-x-5 md:gap-x-8">
            <div class="hidden md:block">
              <router-link
                :to="{ name: 'login' }"
                class="inline-block rounded-lg pax-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >Área de Cliente</router-link
              >
            </div>
            <router-link
              :to="{ name: 'signup' }"
              class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-primary text-white hover:text-slate-100 hover:bg-primary-emphasis active:bg-primary-emphasis active:text-blue-100 focus-visible:outline-primary"
            >
              Enviar Mensagem
            </router-link>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="bg-slate-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-6 text-center font-bold">
        <router-link :to="{ name: 'home' }" class="text-2xl">
          <span class="text-primary">Des</span>Feedback
        </router-link>
      </div>
    </footer>
  </div>
</template>