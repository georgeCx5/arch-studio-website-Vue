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
          linkName: 'portfolio',
          isHovered: false,
        },
        {
          main: 'About Us',
          linkName: 'about',
          isHovered: false,
        },
        {
          main: 'Contact',
          linkName: 'contact',
          isHovered: false,
        },
      ],
      routesData: [
        {
          routeName: 'home',
          main: 'home',
          wSize: 'w-[272px]',
        },
        {
          routeName: 'portfolio',
          main: 'portfolio',
          wSize: 'w-[403px]',
        },
        {
          routeName: 'about',
          main: 'about us',
          wSize: 'w-[376px]',
        },
        {
          routeName: 'contact',
          main: 'contact',
          wSize: 'w-[354px]',
        },
      ]
    }
  },
  methods: {
    getHoverState(val) {
      return val ? '' : 'hidden'
    }
  }
}
</script>
<template>
  <body class=" flex flex-col items-center text-neo-very-dark-blue font-spartan">
    <nav
      class=" relative flex justify-between TB:justify-start items-center TB:gap-20 DT:gap-24 DTL:gap-32 w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] p-8 TB:px-24 DT:px-[10.25rem] TB:py-14 select-none z-50">
      <!-- Side Route Name -->
      <div class=" absolute left-[3.5rem] DT:left-[5.75rem] top-0 rotate-90 hidden TB:block">
        <div v-for="item in routesData" v-show="item.routeName == $route.name"
          :class="` absolute flex justify-between items-center ${item.wSize} h-6`">
          <div class=" w-[6.5rem] h-px bg-neo-light-grey"></div>
          <h3 class=" text-neo-light-grey text-[1.125rem] leading-[1.5rem] tracking-[1.125rem]">
            {{ item.main.toUpperCase() }}</h3>
        </div>
      </div>
      <RouterLink to="/" class=" relative">
        <img class=" h-8 TB:h-10" :src="logo" alt="logo">
      </RouterLink>
      <!-- Nav Mobile -->
      <button @click="isNavOpen = !isNavOpen" class=" flex TB:hidden justify-end items-center w-7 h-7">
        <img v-show="!isNavOpen" :src="iconHamburger" alt="iconHamburger">
        <img v-show="isNavOpen" :src="iconClose" alt="iconClose">
      </button>
      <div v-show="isNavOpen" class=" absolute right-0 top-full TB:hidden w-full pl-8">
        <div class=" flex flex-col items-start gap-4 w-full px-12 py-10 bg-neo-very-light-grey">
          <RouterLink v-for="item in navData" @click="isNavOpen = false" :to="item.linkName"
            class=" hover:text-neo-dark-grey text-[2rem] leading-[2.5rem] font-bold">
            {{ item.main }}
          </RouterLink>
        </div>
      </div>
      <!-- Nav Desktop -->
      <div class=" hidden TB:flex justify-between w-[313px] DTL:w-[360px]">
        <RouterLink v-for="item in navData" :to="`/${item.linkName}`" @mouseenter="item.isHovered = true"
          @mouseleave="item.isHovered = false"
          class=" relative text-neo-medium-grey hover:text-neo-very-dark-blue text-[1.125rem] leading-[1.5625rem] font-bold">
          {{ item.main }}
          <div
            :class="` absolute left-1/2 bottom-[-.375rem] ${getHoverState(item.isHovered)} w-6 h-px bg-neo-very-dark-blue`">
          </div>
        </RouterLink>
      </div>
    </nav>
    <RouterView />
    <footer
      class=" relative flex flex-col TB:flex-row items-center gap-8 TB:gap-10 DT:gap-[5.25rem] DTL:gap-32 w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] DT:px-[10.25rem] pb-12 TB:pb-0 select-none">
      <RouterLink to="/"
        class=" flex justify-center items-center w-[7.5rem] DT:w-[12.5rem] h-[7.5rem] DT:h-[12.5rem] bg-neo-very-dark-blue">
        <img class=" h-6 DT:h-10" :src="logoWhite" alt="logoWhite">
      </RouterLink>
      <div class=" flex flex-col TB:flex-row TB:justify-between items-center gap-8 TB:w-[313px] DTL:w-[360px]">
        <RouterLink v-for="item in navData" :to="item.linkName"
          class=" text-neo-medium-grey hover:text-neo-very-dark-blue text-[1.125rem] leading-[1.5625rem] font-bold">
          {{ item.main }}
        </RouterLink>
      </div>
      <RouterLink to="/portfolio" class=" TB:absolute right-0 DT:right-[10.25rem]">
        <ButtonManager btn-text="See Our Portfolio" />
      </RouterLink>
      <!-- Footer Background Color -->
      <div class=" absolute top-0 TB:left-0 w-full h-full pt-[3.75rem] TB:pt-0 TB:pr-[10rem] DT:px-[18.25rem] -z-10">
        <div class=" w-full DT:w-auto h-full bg-neo-very-light-grey"></div>
      </div>
    </footer>
  </body>
</template>