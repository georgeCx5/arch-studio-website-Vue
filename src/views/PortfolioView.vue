<script setup>
import { useMainStore } from '@/stores/mainStore';
const store = useMainStore()
</script>
<template>
   <main
      class=" grid DT:grid-cols-3 gap-6 DT:gap-[1.875rem] w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] px-8 TB:px-24 DT:px-[10.25rem]">
      <article v-for="item in store.gallery">
         <div :class="` relative h-[240px] DT:h-[560px] ${store.joinArr(item.bg)} bg-cover bg-center`">
            <div class=" relative flex flex-col justify-end h-full p-6 TB:p-10 text-white z-10">
               <h2 class=" text-[2rem] leading-[2.5rem] font-bold">
                  {{ item.header }}</h2>
               <h3 class=" text-[1.125rem] leading-[1.5rem]">
                  {{ item.date }}</h3>
            </div>
            <div class=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-neo-gradient-black">
            </div>
         </div>
      </article>
   </main>
</template>