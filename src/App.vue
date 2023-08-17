<script setup>
import logo from '@/assets/images/logo.svg?url'
import logoWhite from '@/assets/images/logo-white.svg?url'
import iconHamburger from '@/assets/images/icons/icon-hamburger.svg?url'
import iconClose from '@/assets/images/icons/icon-close.svg?url'
import ButtonManager from '@/components/ButtonManager.vue';
</script>
<script>
import { RouterView } from 'vue-router';
export default {
  data() {
    return {
      isNavOpen: false,
      navData: [
        {
          main: 'Portfolio',
          link: '/portfolio',
        },
        {
          main: 'About Us',
          link: '/about',
        },
        {
          main: 'Contact',
          link: '/contact',
        },
      ]
    }
  },
}
</script>
<template>
  <body class=" flex flex-col items-center text-neo-very-dark-blue font-spartan">
    <nav
      class=" relative flex justify-between TB:justify-start items-center TB:gap-20 w-full max-w-[425px] TB:max-w-[1024px] p-8 TB:px-24 TB:py-14 z-50">
      <RouterLink to="/">
        <img class=" h-8 TB:h-10" :src="logo" alt="logo">
      </RouterLink>
      <button @click="isNavOpen = !isNavOpen" class=" flex TB:hidden justify-end items-center w-7 h-7">
        <img v-show="!isNavOpen" :src="iconHamburger" alt="iconHamburger">
        <img v-show="isNavOpen" :src="iconClose" alt="iconClose">
      </button>
      <div v-show="isNavOpen" class=" absolute right-0 top-full TB:hidden w-full pl-8">
        <div class=" flex flex-col items-start gap-4 w-full px-12 py-10 bg-neo-very-light-grey">
          <RouterLink v-for="item in navData" @click="isNavOpen = false" :to="item.link"
            class=" hover:text-neo-dark-grey text-[2rem] leading-[2.5rem] font-bold">
            {{ item.main }}
          </RouterLink>
        </div>
      </div>
      <!-- Nav Desktop -->
      <div class=" hidden TB:flex justify-between w-[313px]">
        <RouterLink v-for="item in navData" :to="item.link"
          class=" text-neo-medium-grey hover:text-neo-very-dark-blue text-[1.125rem] leading-[1.5625rem] font-bold">
          {{ item.main }}
        </RouterLink>
      </div>
    </nav>
    <RouterView />
    <footer
      class=" relative flex flex-col TB:flex-row TB:justify-between items-center gap-8 w-full max-w-[425px] TB:max-w-[1024px] pb-12 TB:pb-0">
      <div class=" flex justify-center items-center w-[7.5rem] h-[7.5rem] bg-neo-very-dark-blue">
        <img class=" h-6" :src="logoWhite" alt="logoWhite">
      </div>
      <div class=" flex flex-col TB:flex-row TB:justify-between items-center gap-8 TB:w-[313px]">
        <RouterLink v-for="item in navData" :to="item.link"
          class=" text-neo-medium-grey hover:text-neo-very-dark-blue text-[1.125rem] leading-[1.5625rem] font-bold">
          {{ item.main }}
        </RouterLink>
      </div>
      <ButtonManager btn-text="See Our Portfolio" />
      <!-- Footer Background Color -->
      <div class=" absolute top-0 w-full h-full pt-[3.75rem] TB:pt-0 TB:pr-[9.75rem] -z-10">
        <div class=" w-full h-full bg-neo-very-light-grey"></div>
      </div>
    </footer>
  </body>
</template>