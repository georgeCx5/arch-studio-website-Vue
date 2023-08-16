<script setup>
import { useMainStore } from '@/stores/mainStore'
import ButtonManager from '../components/ButtonManager.vue';
import { RouterLink } from 'vue-router';
const store = useMainStore()
</script>
<script>
export default {
   data() {
      return {
         sectionThreeBg: [
            'bg-[url(@/assets/images/home/mobile/image-small-team.jpg)]',
            'TB:bg-[url(@/assets/images/home/tablet/image-small-team.jpg)]',
            'DT:bg-[url(@/assets/images/home/desktop/image-small-team.jpg)]',
         ],
         sectionFourBgs: [
            {
               id: 1,
               bgs: [
                  'bg-[url(@/assets/images/portfolio/mobile/image-del-sol.jpg)]',
                  'TB:bg-[url(@/assets/images/portfolio/tablet/image-del-sol.jpg)]',
                  'DT:bg-[url(@/assets/images/portfolio/desktop/image-del-sol.jpg)]',
               ],
               header: 'Project Del Sol',
            },
            {
               id: 2,
               bgs: [
                  'bg-[url(@/assets/images/portfolio/mobile/image-228b.jpg)]',
                  'TB:bg-[url(@/assets/images/portfolio/tablet/image-228b.jpg)]',
                  'DT:bg-[url(@/assets/images/portfolio/desktop/image-228b.jpg)]',
               ],
               header: '228B Tower',
            },
            {
               id: 3,
               bgs: [
                  'bg-[url(@/assets/images/portfolio/mobile/image-prototype.jpg)]',
                  'TB:bg-[url(@/assets/images/portfolio/tablet/image-prototype.jpg)]',
                  'DT:bg-[url(@/assets/images/portfolio/desktop/image-prototype.jpg)]',
               ],
               header: 'Le Prototype',
            },
         ]
      }
   }
}
</script>
<template>
   <main class=" w-full max-w-[425px]">
      <section :class="` relative h-[560px]`">
         <div v-for="item in store.bgSlides">
            <Transition name="fade">
               <div v-show="item.id - 1 == store.slideCount"
                  :class="`absolute h-full ${store.joinArr(item.bgs)} bg-cover bg-center`">
                  <div class=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-[.35]"></div>
                  <div class=" relative flex flex-col justify-center h-full px-8 pt-1 text-white">
                     <h1 class=" mb-[.625rem] text-[3rem] leading-[3rem] tracking-[-.075rem] font-bold">
                        {{ item.header }}</h1>
                     <p class=" mb-10 text-[1.125rem] leading-[1.5rem] font-medium">
                        {{ item.main }}
                     </p>
                     <ButtonManager btn-text="See Our Portfolio" />
                  </div>
               </div>
            </Transition>
         </div>
      </section>
      <section class=" px-8 py-[4.5rem] pb-[7rem]">
         <div class=" w-16 h-px bg-neo-light-grey mb-[4.25rem]"></div>
         <h1 class=" mb-[1.375rem] text-[3rem] leading-[3.25rem] tracking-[-.10625rem] font-bold">
            Welcome to Arch Studio</h1>
         <p class=" text-neo-dark-grey text-[1.125rem] leading-[1.5rem] font-medium">
            We have a unique network and skillset to help bring your projects to life. Our
            small team of highly skilled individuals combined with our large network put us
            in a strong position to deliver exceptional results.
            <br><br>
            Over the past 10 years, we have worked on all kinds of projects. From stations
            to high-rise buildings, we create spaces that inspire and delight.
            <br><br>
            We work closely with our clients so that we understand the intricacies of each
            project. This allows us to work in harmony the surrounding area to create truly
            stunning projects that will stand the test of time.
         </p>
      </section>
      <section :class="` relative h-[560px] ${store.joinArr(sectionThreeBg)} bg-cover bg-center`">
         <div :class="` relative flex flex-col justify-center gap-6 h-full px-8 z-10`">
            <h1 class=" text-white text-[3rem] leading-[3.25rem] tracking-[-.10625rem] font-bold">
               Small team, big ideas</h1>
            <ButtonManager btn-text="About Us" w-size="w-[187px]" />
         </div>
         <div class=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </section>
      <section class=" px-8">
         <h1>
            Featured</h1>
         <div class=" flex flex-col gap-6 py-[4.5rem] text-white">
            <article v-for="item in sectionFourBgs" :class="` relative h-[240px] ${store.joinArr(item.bgs)}`">
               <div class=" relative flex flex-col justify-end h-full p-6 z-10">
                  <h2 class=" text-[2rem] leading-[2.5rem] font-bold">
                     {{ item.header }}</h2>
                  <h3 class=" text-[1.125rem] leading-[1.5rem] font-medium">
                     View All Projects</h3>
               </div>
               <div class=" absolute left-0 top-0 w-full h-full bg-gradient-to-b from-transparent to-neo-gradient-black">
               </div>
            </article>         
               <ButtonManager btn-text="See all" w-size="w-full" />            
         </div>
      </section>
   </main>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
   transition: opacity .35s ease
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0
}
</style>