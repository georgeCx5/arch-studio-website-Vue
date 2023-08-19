<script setup>
import SectionHeader from '@/components/SectionHeader.vue';
import NetworkIcon from '@/components/NetworkIcon.vue';
</script>
<script>
export default {
   data() {
      return {
         data: [
            {
               bg: 'bg-[url(@/assets/images/about/desktop/avatar-jake.jpg)]',
               name: 'Jake Richards',
               ocupation: 'Chief Architect',
               isHovered: false,
            },
            {
               bg: 'bg-[url(@/assets/images/about/desktop/avatar-thompson.jpg)]',
               name: 'Thompson Smith',
               ocupation: 'Head of Finance',
               isHovered: false,
            },
            {
               bg: 'bg-[url(@/assets/images/about/desktop/avatar-jackson.jpg)]',
               name: 'Jackson Rourke',
               ocupation: 'Lead Designer',
               isHovered: false,
            },
            {
               bg: 'bg-[url(@/assets/images/about/desktop/avatar-maria.jpg)]',
               name: 'Maria Simpson',
               ocupation: 'Senior Architect',
               isHovered: false,
            },
         ],
         heritageImg: 'bg-[url(@/assets/images/about/desktop/image-heritage.jpg)]',
      }
   },
   methods: {
      hoveredState(val) {
         return val ? 'flex' : 'hidden'
      }
   }
}
</script>
<template>
   <main class=" w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px]">
      <SectionHeader :data-index="0" h-size="h-[529px]" class=" mb-[4.75rem]" />
      <!-- Two -->
      <section
         class=" flex DT:justify-between mb-[7rem] TB:mb-[13rem] DT:mb-[12.5rem] px-8 TB:px-24 DT:px-[10.25rem] TB:pb-6 DT:pb-0">
         <div class=" DT:w-[40%]">
            <div class=" w-16 h-px mb-[4.25rem] TB:mb-12 DT:mb-[5.125rem] bg-neo-light-grey"></div>
            <h1
               class=" flex flex-col mb-[1.375rem] TB:mb-[3.875rem] DT:mb-[3.375rem] text-[3rem] TB:text-[4.5rem] leading-[3.25rem] TB:leading-[4rem] tracking-[-.1075rem] font-bold">
               Our
               <span>Heritage</span>
            </h1>
            <p class=" text-neo-dark-grey text-[1.125rem] leading-[1.5rem] font-medium">
               Founded in 2007, we started as a trio of architects. Our complimentary skills and
               relentless attention to detail turned Arch into one of the most sought after boutique
               firms in the country.
               <br><br>
               Speciliazing in Urban Design allowed us to focus on creating exceptional structures that
               live in harmony with their surroundings. We consider every detail from every surrounding
               element to inform our designs.
               <br><br>
               Our small team of world-class professionals provides input on every project.
            </p>
         </div>
         <div :class="` hidden DT:block w-[48.5%] h-[568px] DTL:h-[640px] ${heritageImg} bg-cover bg-center`"></div>
      </section>
      <!-- Three -->
      <section
         class=" flex flex-col DT:flex-row DT:justify-between gap-14 TB:gap-12 mb-28 TB:mb-[15rem] DT:mb-[10rem] px-8 TB:px-24 DT:px-[10.25rem]">
         <h1
            class=" flex flex-col text-[3rem] TB:text-[4.5rem] leading-[3.25rem] TB:leading-[4rem] tracking-[-.1075rem] font-bold">
            <span>The</span>
            <span>Leaders</span>
         </h1>
         <div
            class=" grid TB:grid-cols-2 gap-20 TB:gap-x-3 TB:gap-y-[6.5rem] DT:gap-x-[1.875rem] DT:gap-y-[4rem] DT:w-[65.75%]">
            <article v-for="item in data">
               <div @mouseenter="item.isHovered = true" @mouseleave="item.isHovered = false"
                  :class="` relative h-[284px] TB:h-[256px] DT:h-[320px] DTL:h-[420px] ${item.bg} bg-cover bg-center mb-4`">
                  <Transition name="pFade">
                     <div v-show="item.isHovered"
                        :class="` absolute flex justify-center items-center gap-8 w-full h-full bg-black bg-opacity-50`">
                        <NetworkIcon :icon="0" />
                        <NetworkIcon :icon="1" />
                     </div>
                  </Transition>
               </div>
               <h2 class=" text-[2rem] leading-[2.5rem] font-bold">
                  {{ item.name }}</h2>
               <h3 class=" text-neo-very-dark-blue text-opacity-75 text-[1.125rem] leading-[1.5rem] font-medium">
                  {{ item.ocupation }}</h3>
            </article>
         </div>
      </section>
   </main>
</template>
<style>
.pFade-enter-active,
.pFade-leave-active {
   transition: opacity .15s ease
}

.pFade-enter-from,
.pFade-leave-to {
   opacity: 0
}</style>