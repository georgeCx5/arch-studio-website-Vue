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
   <div :class="` absolute w-full h-[240px] ${store.joinArr(data[dataIndex].bg)} bg-cover bg-center`">
   </div>
   <div class=" absolute w-full h-[310px] text-white">
      <h1 class=" text-[3rem] leading-[3.25rem] tracking-[-.075rem] font-bold">
         {{ data[dataIndex].header }}</h1>
      <p class=" text-[1.125rem] leading-[1.5rem] font-medium">
         {{ data[dataIndex].main }}
      </p>
   </div>
</template>