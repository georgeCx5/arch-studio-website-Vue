<script setup>
import { useMainStore } from '@/stores/mainStore'
const store = useMainStore()
</script>
<script>
export default {
   data() {
      return {
         data: [
            {
               bg: [
                  'bg-[url(@/assets/images/about/mobile/image-hero.jpg)]',
                  'TB:bg-[url(@/assets/images/about/tablet/image-hero.jpg)]',
                  'DT:bg-[url(@/assets/images/about/desktop/image-hero.jpg)]',
               ],
               header: 'Your team of professionals',
               main: 'Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.',
            },
            {
               bg: [
                  'bg-[url(@/assets/images/contact/mobile/image-hero.jpg)]',
                  'TB:bg-[url(@/assets/images/contact/tablet/image-hero.jpg)]',
                  'DT:bg-[url(@/assets/images/contact/desktop/image-hero.jpg)]',
               ],
               header: 'Tell us about your project',
               main: 'We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!',
            },
         ]
      }
   },
   props: {
      dataIndex: {
         Number,
         required: true,
      }
   }
}
</script>
<template>
   <section class=" relative h-[529px] TB:h-[720px] TB:mx-24">
      <div :class="` absolute w-full h-[240px] TB:h-full ${store.joinArr(data[dataIndex].bg)} bg-cover bg-center`">
         <div class=" absolute w-full h-full bg-black bg-opacity-[.35]"></div>
      </div>
      <div
         class=" absolute bottom-0 TB:right-0 flex flex-col w-[91.5%] bg-white pl-8 TB:pl-[3.625rem] pt-16 TB:pt-[5.5rem]">
         <div class=" hidden TB:block w-16 h-px bg-neo-light-grey mb-[4.5rem]"></div>
         <h1
            class=" mb-5 TB:mb-[2.375rem] text-[3rem] TB:text-[4.5rem] leading-[3.25rem] TB:leading-[4rem] tracking-[-.075rem] font-bold">
            {{ data[dataIndex].header }}</h1>
         <p class=" text-neo-dark-grey text-[1.125rem] leading-[1.5rem] font-medium">
            {{ data[dataIndex].main }}
         </p>
      </div>
   </section>
</template>