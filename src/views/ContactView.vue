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
<script>
export default {
   data() {
      return {

      }
   },
   methods: {
      getFocusState(val) {
         return val ? 'h-[.1875rem]' : 'h-px'
      },
      getErrorState(val) {
         let text = ''
         let border = ''
         if (val == 'empty' || val == 'error') {
            text = 'text-neo-error-red text-opacity-95 placeholder:text-neo-error-red placeholder:text-opacity-50'
            border = 'bg-neo-error-red bg-opacity-75'
         }
         return { text, border }
      }
   }
}
</script>
<template>
   <main class=" w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px]">
      <SectionHeader :data-index="1" h-size="h-[505px]" class=" mb-[6.25rem]"/>
      <!-- Second -->
      <section
         class=" flex flex-col DT:flex-row gap-10 DT:gap-[1.875rem] TB:gap-11 DT:h-[281px] mb-[4.5rem] TB:mb-[14rem] DT:mb-[12.5rem] px-8 TB:px-24 DT:px-[10.25rem]">
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
      <section class=" h-[367px] TB:h-[560px] DTL:h-[720px] TB:px-24 DT:px-[10.25rem]">
         <div :class="` h-full ${joinArr(mapsBg)} bg-cover bg-center`"></div>
      </section>
      <!-- Four -->
      <section
         class=" flex flex-col DT:flex-row DT:justify-between gap-[2.625rem] TB:gap-[3.75rem] DT:gap-[1.875rem] my-[4.5rem] TB:my-[12.5rem] DT:my-[10rem] px-8 TB:px-24 DT:px-[10.25rem]">
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
                  <input @focusin="dName.isFocused = true" @focusout="dName.isFocused = false" @blur="checkData(dName)"
                     @keyup="dName.valState = 'default'"
                     :class="` pl-8 placeholder:text-neo-light-grey ${getErrorState(dName.valState).text} focus:outline-none`"
                     type="text" placeholder="Name" v-model="dName.val">
                  <div
                     :class="` relative w-full ${getFocusState(dName.isFocused)} bg-neo-very-dark-blue ${getErrorState(dName.valState).border}`">
                     <h6 v-show="dName.valState == 'empty'"
                        class=" absolute right-0 bottom-1 TB:bottom-2 DT:bottom-4 text-neo-error-red text-[.875rem] TB:text-[1.125rem] leading-[1.0625rem] tracking-[-.0175rem]">
                        Can't be empty</h6>
                  </div>
               </div>
               <div class=" flex flex-col gap-5">
                  <input @focusin="dEmail.isFocused = true" @focusout="dEmail.isFocused = false" @blur="checkData(dEmail)"
                     @keyup="dEmail.valState = 'default'"
                     :class="` pl-8 placeholder:text-neo-light-grey ${getErrorState(dEmail.valState).text} focus:outline-none`"
                     type="email" placeholder="Email" v-model="dEmail.val">
                  <div
                     :class="` relative w-full ${getFocusState(dEmail.isFocused)} bg-neo-very-dark-blue ${getErrorState(dEmail.valState).border}`">
                     <h6 v-show="dEmail.valState == 'empty'"
                        class=" absolute right-0 bottom-1 TB:bottom-2 DT:bottom-4 text-neo-error-red text-[.875rem] TB:text-[1.125rem] leading-[1.0625rem] tracking-[-.0175rem]">
                        Can't be empty</h6>
                     <h6 v-show="dEmail.valState == 'error'"
                        class=" absolute right-0 bottom-1 TB:bottom-2 DT:bottom-4 text-neo-error-red text-[.875rem] TB:text-[1.125rem] leading-[1.0625rem] tracking-[-.0175rem]">
                        Invalid email</h6>
                  </div>
               </div>
               <div class=" flex flex-col gap-[4.25rem]">
                  <input @focusin="dMessage.isFocused = true" @focusout="dMessage.isFocused = false"
                     @blur="checkData(dMessage)" @keyup="dMessage.valState = 'default'"
                     :class="` pl-8 placeholder:text-neo-light-grey ${getErrorState(dMessage.valState).text} focus:outline-none`"
                     type="text" placeholder="Message" v-model="dMessage.val">
                  <div
                     :class="` relative w-full ${getFocusState(dMessage.isFocused)} bg-neo-very-dark-blue ${getErrorState(dMessage.valState).border} `">
                     <h6 v-show="dMessage.valState == 'empty'"
                        class=" absolute right-0 bottom-1 TB:bottom-2 DT:bottom-4 text-neo-error-red text-[.875rem] TB:text-[1.125rem] leading-[1.0625rem] tracking-[-.0175rem]">
                        Can't be empty</h6>
                  </div>
               </div>
            </div>
            <button @click="checkForm()"
               class=" flex justify-center items-center self-end w-20 h-20 bg-neo-very-dark-blue hover:bg-neo-dark-grey select-none">
               <img :src="arrowWhite" alt="arrow">
            </button>
         </div>
      </section>
   </main>
</template>