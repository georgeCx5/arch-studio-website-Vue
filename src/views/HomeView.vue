<script setup>
import { useMainStore } from '@/stores/mainStore'
import ButtonManager from '@/components/ButtonManager.vue';

const store = useMainStore()
const dataSlides = [
   {
      id: 1,
      bg: [
         'bg-[url(@/assets/images/home/mobile/image-hero-paramour.jpg)]',
         'TB:bg-[url(@/assets/images/home/tablet/image-hero-paramour.jpg)]',
         'DT:bg-[url(@/assets/images/home/desktop/image-hero-paramour.jpg)]',
      ],
      header: store.gallery[11].header,
      main: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
   },
   {
      id: 2,
      bg: [
         'bg-[url(@/assets/images/home/mobile/image-hero-seraph.jpg)]',
         'TB:bg-[url(@/assets/images/home/tablet/image-hero-seraph.jpg)]',
         'DT:bg-[url(@/assets/images/home/desktop/image-hero-seraph.jpg)]',
      ],
      header: store.gallery[0].header,
      main: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
   },
   {
      id: 3,
      bg: [
         'bg-[url(@/assets/images/home/mobile/image-hero-federal.jpg)]',
         'TB:bg-[url(@/assets/images/home/tablet/image-hero-federal.jpg)]',
         'DT:bg-[url(@/assets/images/home/desktop/image-hero-federal.jpg)]',
      ],
      header: store.gallery[2].header,
      main: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
   },
   {
      id: 4,
      bg: [
         'bg-[url(@/assets/images/home/mobile/image-hero-trinity.jpg)]',
         'TB:bg-[url(@/assets/images/home/tablet/image-hero-trinity.jpg)]',
         'DT:bg-[url(@/assets/images/home/desktop/image-hero-trinity.jpg)]',
      ],
      header: store.gallery[10].header,
      main: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
   },
]
const sectionThreeBg = [
   'bg-[url(@/assets/images/home/mobile/image-small-team.jpg)]',
   'TB:bg-[url(@/assets/images/home/tablet/image-small-team.jpg)]',
   'DT:bg-[url(@/assets/images/home/desktop/image-small-team.jpg)]',
]
const dataFeatured = [
   {
      id: 1,
      bg: store.joinArr(store.gallery[3].bg),
      header: store.gallery[3].header,
   },
   {
      id: 2,
      bg: store.joinArr(store.gallery[5].bg),
      header: store.gallery[5].header,
   },
   {
      id: 3,
      bg: store.joinArr(store.gallery[4].bg),
      header: store.gallery[4].header,
   },
]
</script>
<template>
   <main class=" w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px]">
      <section :class="` relative h-[560px]`">
         <div v-for="item in dataSlides">
            <Transition name="fade">
               <div v-show="item.id - 1 == store.slideCount"
                  :class="`absolute h-full ${store.joinArr(item.bg)} bg-cover bg-center`">
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
      <section class=" flex flex-col gap-11 px-8 py-[4.5rem]">
         <div class=" flex">
            <h1 class=" text-[3rem] leading-[3.25rem] tracking-[-.1075rem] font-bold">
               Featured</h1>
         </div>
         <div class=" flex flex-col gap-6 text-white">
            <article v-for="item in dataFeatured" :class="` relative h-[240px] ${item.bg} bg-cover bg-center`">
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