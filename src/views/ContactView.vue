<script setup>
import { useFormStore } from '@/stores/formStore'
import { useMainStore } from '@/stores/mainStore'
import SectionHeader from '@/components/SectionHeader.vue';
import ContactDetails from '@/components/ContactDetails.vue';
import arrowWhite from '@/assets/images/icons/icon-arrow-white.svg?url'
const { dName, dEmail, dMessage, checkData, checkForm } = useFormStore()
const { joinArr } = useMainStore()
const mapsBg = [
   'bg-[url(@/assets/images/contact/mobile/image-map.png)]',
   'TB:bg-[url(@/assets/images/contact/tablet/image-map.png)]',
   'DT:bg-[url(@/assets/images/contact/desktop/image-map.png)]'
]
</script>
<template>
   <main class=" w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px]">
      <SectionHeader :data-index="1" />
      <!-- Second -->
      <section
         class=" flex flex-col DT:flex-row gap-10 DT:gap-[1.875rem] TB:gap-11 DT:h-[281px] mt-[6.25rem] mb-[4.5rem] px-8 TB:px-24 DT:px-[10.25rem]">
         <div class=" flex flex-col gap-[4.25rem] TB:gap-12 DT:gap-[4.5rem] DT:w-[31.5%]">
            <div class=" w-16 h-px bg-neo-light-grey"></div>
            <h1
               class=" flex flex-col text-[3rem] TB:text-[4.5rem] leading-[3.25rem] TB:leading-[4rem] tracking-[-.1075rem] TB:tracking-[-.125rem] font-bold">
               Contact
               <span>Details</span>
            </h1>
         </div>
         <ContactDetails :data-index="0" />
         <ContactDetails :data-index="1" />
      </section>
      <!-- Three -->
      <section class=" h-[367px] TB:h-[560px] TB:px-24 DT:px-[10.25rem]">
         <div :class="` h-full ${joinArr(mapsBg)} bg-cover bg-center`"></div>
      </section>
      <!-- Four -->
      <section
         class=" flex flex-col DT:flex-row DT:justify-between gap-[2.625rem] DT:gap-[1.875rem] my-[4.5rem] px-8 TB:px-24 DT:px-[10.25rem]">
         <h1
            class=" DT:w-[31.5%] text-[3rem] TB:text-[4.5rem] leading-[3.25rem] TB:leading-[4rem] tracking-[-.1075rem] TB:tracking-[-.125rem] font-bold">
            <div class=" hidden TB:block DT:hidden">
               Connect with us
            </div>
            <div class=" flex TB:hidden DT:flex flex-col">
               <span>Connect </span>
               <span>with us</span>
            </div>
         </h1>
         <div class=" flex flex-col DT:w-[65.625%]">
            <div class=" flex flex-col gap-11 text-[1.25rem] leading-[1.375rem] tracking-[-.02rem] font-bold">
               <div class=" flex flex-col gap-5">
                  <input @blur="checkData(dName)" @keyup="dName.valState = 'default'"
                     class=" pl-8 placeholder:text-neo-light-grey focus:outline-none" type="text" placeholder="Name"
                     v-model="dName.val">
                  <div class=" relative w-full h-px bg-neo-very-dark-blue">
                     <h6 v-show="dName.valState == 'empty'"
                        class=" absolute right-0 bottom-1 TB:bottom-2 DT:bottom-4 text-neo-error-red text-[.875rem] TB:text-[1.125rem] leading-[1.0625rem] tracking-[-.0175rem]">
                        Can't be empty</h6>
                  </div>
               </div>
               <div class=" flex flex-col gap-5">
                  <input @blur="checkData(dEmail)" @keyup="dEmail.valState = 'default'"
                     class=" pl-8 placeholder:text-neo-light-grey focus:outline-none" type="email" placeholder="Email"
                     v-model="dEmail.val">
                  <div class=" relative w-full h-px bg-neo-very-dark-blue">
                     <h6 v-show="dEmail.valState == 'empty'"
                        class=" absolute right-0 bottom-1 TB:bottom-2 DT:bottom-4 text-neo-error-red text-[.875rem] TB:text-[1.125rem] leading-[1.0625rem] tracking-[-.0175rem]">
                        Can't be empty</h6>
                     <h6 v-show="dEmail.valState == 'error'"
                        class=" absolute right-0 bottom-1 TB:bottom-2 DT:bottom-4 text-neo-error-red text-[.875rem] TB:text-[1.125rem] leading-[1.0625rem] tracking-[-.0175rem]">
                        Invalid email</h6>
                  </div>
               </div>
               <div class=" flex flex-col gap-[4.25rem]">
                  <input @blur="checkData(dMessage)" @keyup="dMessage.valState = 'default'"
                     class=" pl-8 placeholder:text-neo-light-grey focus:outline-none" type="text" placeholder="Message"
                     v-model="dMessage.val">
                  <div class=" relative w-full h-px bg-neo-very-dark-blue">
                     <h6 v-show="dMessage.valState == 'empty'"
                        class=" absolute right-0 bottom-1 TB:bottom-2 DT:bottom-4 text-neo-error-red text-[.875rem] TB:text-[1.125rem] leading-[1.0625rem] tracking-[-.0175rem]">
                        Can't be empty</h6>
                  </div>
               </div>
            </div>
            <button @click="checkForm()"
               class=" flex justify-center items-center self-end w-20 h-20 bg-neo-very-dark-blue hover:bg-neo-dark-grey">
               <img :src="arrowWhite" alt="arrow">
            </button>
         </div>
      </section>
   </main>
</template>