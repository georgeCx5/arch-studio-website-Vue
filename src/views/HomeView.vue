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
const sectionTwoBg = 'bg-[url(@/assets/images/home/desktop/image-welcome.jpg)]'
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
function getActiveSlide(num) {
   return num == store.slideCount ? 'bg-neo-very-dark-blue text-white' : 'bg-white text-neo-medium-grey'
}
</script>
<template>
   <main class=" w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] TB:px-24 DT:px-[10.25rem]">
      <!-- One -->
      <section :class="` relative h-[560px] TB:h-[720px]`">
         <div v-for="item in dataSlides">
            <Transition name="fade">
               <div v-show="item.id - 1 == store.slideCount"
                  :class="`absolute h-full DT:w-full ${store.joinArr(item.bg)} bg-cover bg-center`">
                  <div class=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-[.35]"></div>
                  <div
                     class=" relative flex flex-col justify-center h-full px-8 TB:px-[3.625rem] DT:px-[11.5rem] pt-1 text-white">
                     <h1
                        class=" w-[90%] mb-[.625rem] text-[3rem] TB:text-[6rem] leading-[3rem] TB:leading-[5rem] tracking-[-.075rem] TB:tracking-[-.125rem] font-bold">
                        {{ item.header }}</h1>
                     <p class=" DT:w-[60%] mb-[5.25rem] TB:mb-10 text-[1.125rem] leading-[1.5rem] font-medium">
                        {{ item.main }}
                     </p>
                     <ButtonManager btn-text="See Our Portfolio" />
                  </div>
               </div>
            </Transition>
         </div>
         <div class=" absolute bottom-0 -left-20 hidden DT:flex">
            <button v-for="(item, index) in dataSlides" @click="store.slideCount = index"
               :class="` flex justify-center items-center w-20 h-20 ${getActiveSlide(index)} text-[1.125rem] leading-[1.5625rem] font-bold`">
               0{{ item.id }}
            </button>
         </div>
      </section>
      <!-- Two -->
      <section
         class=" relative DT:flex flex-row-reverse items-end gap-[7.75rem] px-8 TB:px-0 pt-[4.5rem] TB:pt-[15.5rem] DT:pt-[12.25rem] pb-[7rem] TB:pb-[14.625rem] DT:pb-[12.5rem]">
         <h2
            class=" absolute left-0 top-[5.75rem] DT:top-[7rem] hidden TB:block text-neo-very-light-grey text-[9rem] DT:text-[15.5rem] leading-[12.5rem] tracking-[-.1875rem] DT:tracking-[-.3125rem] font-bold">
            Welcome</h2>
         <div class=" w-16 h-px TB:hidden bg-neo-light-grey mb-[4.25rem]"></div>
         <div :class="` hidden DT:block w-[31.5%] h-[568px] ${sectionTwoBg} bg-cover bg-center`"></div>
         <div class=" relative DT:w-[40%] DT:pb-3">
            <h1
               class=" flex flex-col mb-[1.375rem] TB:mb-11 text-[3rem] TB:text-[4.5rem] leading-[3.25rem] TB:leading-[4rem] tracking-[-.10625rem] TB:tracking-[-.1875rem] font-bold">
               Welcome to <span>Arch Studio</span></h1>
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
         </div>
      </section>
      <!-- Three -->
      <section :class="` relative h-[560px] ${store.joinArr(sectionThreeBg)} bg-cover bg-center`">
         <div
            :class="` relative flex flex-col justify-center gap-6 DT:gap-8 h-full px-8 TB:px-[3.625rem] DT:px-[11.5rem] z-10`">
            <h1
               class=" flex flex-col text-white text-[3rem] TB:text-[4.5rem] leading-[3.25rem] TB:leading-[4rem] tracking-[-.10625rem] font-bold">
               Small team, <span>big ideas</span></h1>
            <ButtonManager btn-text="About Us" w-size="w-[187px]" />
         </div>
         <div class=" absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </section>
      <!-- Four -->
      <section class=" flex flex-col gap-11 TB:gap-[5.25rem] DT:gap-16 px-8 TB:px-0 py-[4.5rem] TB:py-[12.5rem]">
         <div class=" flex TB:justify-between TB:items-center">
            <h1
               class=" text-[3rem] TB:text-[4.5rem] leading-[3.25rem] TB:leading-[4rem] tracking-[-.1075rem] TB:tracking-[-.125rem] font-bold">
               Featured</h1>
            <ButtonManager btn-text="See All" w-size="w-[169px]" class=" hidden TB:flex" />
         </div>
         <div class=" flex flex-col DT:flex-row gap-6 DT:gap-[1.875rem] text-white">
            <article v-for="item in dataFeatured"
               :class="` relative DT:w-full h-[240px] DT:h-[560px] ${item.bg} bg-cover bg-center`">
               <div class=" relative flex flex-col justify-end h-full p-6 TB:p-10 z-10">
                  <div
                     class=" absolute top-[1.875rem] right-4 DT:-right-[.625rem] text-white text-opacity-50 text-[15.5rem] leading-[12.5rem] tracking-[-.3125rem] font-bold">
                     {{ item.id }}</div>
                  <h2 class=" text-[2rem] leading-[2.5rem] font-bold">
                     {{ item.header }}</h2>
                  <h3 class=" text-[1.125rem] leading-[1.5rem] font-medium">
                     View All Projects</h3>
               </div>
               <div class=" absolute left-0 top-0 w-full h-full bg-gradient-to-b from-transparent to-neo-gradient-black">
               </div>
            </article>
            <ButtonManager btn-text="See all" w-size="w-full" class=" TB:hidden" />
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