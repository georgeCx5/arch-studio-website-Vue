<script setup>
import { useMainStore } from '@/stores/mainStore';
const store = useMainStore()
</script>
<template>
   <main
      class=" grid DT:grid-cols-3 gap-6 DT:gap-[1.875rem] w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] pt-[3.5rem] TB:pt-0 pb-[4.5rem] TB:pb-[12.5rem] DT:pb-[10rem] px-8 TB:px-24 DT:px-[10.25rem]">
      <article v-for="item in store.gallery">
         <div @mouseenter="item.isHovered = true" @mouseleave="item.isHovered = false"
            :class="` relative h-[240px] DT:h-[560px] DTL:h-[720px] ${store.joinArr(item.bg)} bg-cover bg-center cursor-pointer`">
            <div class=" relative flex flex-col justify-end h-full p-6 TB:p-10 DTL:p-12 text-white z-10">
               <h2 class=" text-[2rem] leading-[2.5rem] font-bold">
                  {{ item.header }}</h2>
               <h3 class=" text-[1.125rem] leading-[1.5rem]">
                  {{ item.date }}</h3>
            </div>
            <div class=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-neo-gradient-black">
            </div>
            <Transition name="gFade">
               <div v-show="item.isHovered == true" class=" absolute top-0 left-0 w-full h-full bg-white bg-opacity-50">
               </div>
            </Transition>
         </div>
      </article>
   </main>
</template>
<style>
.gFade-enter-active,
.gFade-leave-active {
   transition: opacity .25s ease
}

.gFade-enter-from,
.gFade-leave-to {
   opacity: 0
}
</style>