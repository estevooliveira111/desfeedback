<script setup >
import { Button } from 'primevue'
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
    <h1
      class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
    >
      Dê Seu
      <span class="relative whitespace-nowrap text-primary">
        <svg
          aria-hidden="true"
          viewBox="0 0 418 42"
          class="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary-emphasis-alt"
          preserveAspectRatio="none"
        >
          <path
            d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
          ></path>
        </svg>
        <span class="relative">DesFeedback</span>
      </span>
      fácil e rápido 100% anônima.
    </h1>

    <p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
      Fale e seja ouvido. Fale com seu chefe, professor ou até amigo de forma totalmente anônima e
      segura.
    </p>

    <div class="mt-10 flex justify-center gap-x-6">
      <router-link
        :to="{ name: 'signup' }"
        class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
        variant="solid"
        color="slate"
        href="/signup"
        >Se Cadastre (Primeira mensagem free)</router-link
      >
      <a
        class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-primary focus-visible:ring-slate-300"
        variant="outline"
        color="slate"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      >
        <svg aria-hidden="true" class="h-3 w-3 flex-none fill-primary group-active:fill-current">
          <path
            d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"
          ></path>
        </svg>
        <span class="ml-3">Assistir vídeo</span>
      </a>
    </div>

    <div class="mt-36 lg:mt-44">
      <p class="font-display text-base text-slate-900">Seu DesFeedback para</p>
      <ul
        role="list"
        class="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
      >
        <li>
          <ul
            role="list"
            class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
          >
            <!-- Adicionando algo sobre o assunto -->
            <li class="text-center text-xl font-semibold text-slate-900">
              Feedback sobre o desempenho no trabalho
            </li>
            <li class="text-center text-lg text-slate-700">
              Avalie como você tem se saído nas suas funções e compartilhe sugestões construtivas.
            </li>
          </ul>
        </li>
        <li>
          <ul
            role="list"
            class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
          >
            <!-- Outro assunto -->
            <li class="text-center text-xl font-semibold text-slate-900">
              Feedback sobre a comunicação na equipe
            </li>
            <li class="text-center text-lg text-slate-700">
              Diga como você percebe a comunicação entre os membros da equipe e como pode melhorar.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <section
    id="desfeedback-features"
    aria-label="DesFeedback para melhorar desempenho e comunicação"
    class="relative overflow-hidden bg-primary pb-28 pt-20 sm:py-32 text-white"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl md:text-center">
        <h2 class="font-display text-3xl tracking-tight sm:text-4xl">
          DesFeedback para que você seja ouvido
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700">Porque sua opinião importa</p>
      </div>
    </div>
  </section>

  <section id="get-started-today" class="relative overflow-hidden text py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="font-display text-3xl tracking-tight sm:text-4xl">Enviar Mensagem</h2>

        <p class="mt-4 text-lg tracking-tight">
          Tem algo a relatar sobre seu professor ou chefe? Envie sua mensagem abaixo para ajudar a
          melhorar o ambiente.
        </p>

        <form action="/enviar-feedback" method="POST" class="mt-8 space-y-6">
          <div>
            <label for="nome" class="block text-left text-sm font-medium text-slate-700"
              >Seu nome (opcional)</label
            >
            <input
              id="nome"
              name="nome"
              type="text"
              class="w-full px-4 py-2 mt-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu nome (opcional)"
            />
          </div>

          <div>
            <label for="email" class="block text-left text-sm font-medium text-slate-700"
              >Seu e-mail (opcional)</label
            >
            <input
              id="email"
              name="email"
              type="email"
              class="w-full px-4 py-2 mt-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu e-mail (opcional)"
            />
          </div>

          <div>
            <label for="mensagem" class="block text-left text-sm font-medium text-slate-700"
              >Sua Mensagem</label
            >
            <textarea
              id="mensagem"
              name="mensagem"
              rows="4"
              class="w-full px-4 py-2 mt-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Descreva seu feedback aqui"
              required
            ></textarea>
          </div>

          <div class="flex justify-center mt-4">
            <Button
              type="submit"
              class="w-full bg-primary hover:bg-primary-emphasis focus:outline-none focus:ring-2 focus:ring-primary-emphasis"
              >Enviar Feedback</Button
            >
          </div>
        </form>
      </div>
    </div>
  </section>

  <section id="pricing" aria-label="Pricing" class="bg-slate-900 py-20 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="md:text-center">
        <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
          <span class="relative whitespace-nowrap"
            ><svg
              aria-hidden="true"
              viewBox="0 0 281 40"
              preserveAspectRatio="none"
              class="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
              ></path></svg
            ><span class="relative">Simple pricing,</span></span
          >
          <!-- -->for everyone.
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          It doesn’t matter what size your business is, our software won’t work well for you.
        </p>
      </div>
      <div
        class="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8"
      >
        <section class="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
          <h3 class="mt-5 font-display text-lg text-white">Starter</h3>
          <p class="mt-2 text-base text-slate-400">
            Good for anyone who is self-employed and just getting started.
          </p>
          <p class="order-first font-display text-5xl font-light tracking-tight text-white">$9</p>
          <ul role="list" class="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200">
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Send 10 quotes and invoices</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Connect up to 2 bank accounts</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Track up to 15 expenses per month</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Manual payroll support</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Export up to 3 reports</span>
            </li>
          </ul>
          <a
            class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8"
            variant="outline"
            color="white"
            aria-label="Get started with the Starter plan for $9"
            href="/signup"
            >Get started</a
          >
        </section>
        <section
          class="flex flex-col rounded-3xl px-6 sm:px-8 order-first bg-primary py-8 lg:order-none"
        >
          <h3 class="mt-5 font-display text-lg text-white">Small business</h3>
          <p class="mt-2 text-base text-white">Perfect for small / medium sized businesses.</p>
          <p class="order-first font-display text-5xl font-light tracking-tight text-white">$15</p>
          <ul role="list" class="order-last mt-10 flex flex-col gap-y-3 text-sm text-white">
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-white"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Send 25 quotes and invoices</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-white"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Connect up to 5 bank accounts</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-white"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Track up to 50 expenses per month</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-white"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Automated payroll support</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-white"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Export up to 12 reports</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-white"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Bulk reconcile transactions</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-white"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Track in multiple currencies</span>
            </li>
          </ul>
          <a
            class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8"
            variant="solid"
            color="white"
            aria-label="Get started with the Small business plan for $15"
            href="/signup"
            >Get started</a
          >
        </section>
        <section class="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
          <h3 class="mt-5 font-display text-lg text-white">Enterprise</h3>
          <p class="mt-2 text-base text-slate-400">For even the biggest enterprise companies.</p>
          <p class="order-first font-display text-5xl font-light tracking-tight text-white">$39</p>
          <ul role="list" class="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200">
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Send unlimited quotes and invoices</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Connect up to 15 bank accounts</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Track up to 200 expenses per month</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Automated payroll support</span>
            </li>
            <li class="flex">
              <svg
                aria-hidden="true"
                class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  stroke-width="0"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="8.25"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></circle></svg
              ><span class="ml-4">Export up to 25 reports, including TPS</span>
            </li>
          </ul>
          <a
            class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8"
            variant="outline"
            color="white"
            aria-label="Get started with the Enterprise plan for $39"
            href="/signup"
            >Get started</a
          >
        </section>
      </div>
    </div>
  </section>

  <section
    id="feedback"
    aria-labelledby="feedback-title"
    class="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2
          id="feedback-title"
          class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Plataforma de Feedback: Reclamações e Sugestões
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700">
          Caso tenha algum feedback, seja sobre um professor ou chefe, envie sua mensagem abaixo.
          Seu comentário é importante!
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
      >
        <li>
          <ul role="list" class="flex flex-col gap-y-8">
            <li>
              <h3 class="font-display text-lg leading-7 text-slate-900">
                O que você achou do comportamento do professor?
              </h3>
              <p class="mt-4 text-sm text-slate-700">
                Caso tenha algo a relatar sobre o comportamento do professor, compartilhe aqui.
              </p>
            </li>
            <li>
              <h3 class="font-display text-lg leading-7 text-slate-900">
                Como você se sente com a gestão do seu chefe?
              </h3>
              <p class="mt-4 text-sm text-slate-700">
                Se você tiver alguma crítica construtiva sobre a forma de gestão do seu chefe, essa
                é a hora de expressá-la.
              </p>
            </li>
            <li>
              <h3 class="font-display text-lg leading-7 text-slate-900">
                Você tem sugestões para melhorar o ambiente?
              </h3>
              <p class="mt-4 text-sm text-slate-700">
                Nos envie sugestões de melhorias para um ambiente mais saudável e produtivo.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <ul role="list" class="flex flex-col gap-y-8">
            <li>
              <h3 class="font-display text-lg leading-7 text-slate-900">
                Houve alguma situação constrangedora ou injusta?
              </h3>
              <p class="mt-4 text-sm text-slate-700">
                Relate situações que você considere constrangedoras ou injustas, e nos ajude a
                promover mudanças.
              </p>
            </li>
            <li>
              <h3 class="font-display text-lg leading-7 text-slate-900">
                Você sentiu que suas necessidades foram ignoradas?
              </h3>
              <p class="mt-4 text-sm text-slate-700">
                Caso tenha se sentido ignorado ou desconsiderado, compartilhe sua experiência
                conosco.
              </p>
            </li>
            <li>
              <h3 class="font-display text-lg leading-7 text-slate-900">
                Como podemos melhorar a comunicação?
              </h3>
              <p class="mt-4 text-sm text-slate-700">
                A comunicação é essencial. Se você tem sugestões de como podemos melhorar nesse
                aspecto, nos envie sua opinião.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <ul role="list" class="flex flex-col gap-y-8">
            <li>
              <h3 class="font-display text-lg leading-7 text-slate-900">
                Você acredita que as críticas são recebidas de forma construtiva?
              </h3>
              <p class="mt-4 text-sm text-slate-700">
                Relate sua experiência sobre como as críticas são tratadas, seja para professores ou
                chefes.
              </p>
            </li>
            <li>
              <h3 class="font-display text-lg leading-7 text-slate-900">
                Há algo que você gostaria de mudar em seu ambiente?
              </h3>
              <p class="mt-4 text-sm text-slate-700">
                Caso tenha algo que gostaria de mudar em seu ambiente de trabalho ou estudo,
                compartilhe suas sugestões.
              </p>
            </li>
            <li>
              <h3 class="font-display text-lg leading-7 text-slate-900">
                Deixe seu feedback anônimo se preferir
              </h3>
              <p class="mt-4 text-sm text-slate-700">
                Se você preferir se manter anônimo, não há problema! Sua opinião será igualmente
                importante.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>
