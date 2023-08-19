<script>
import arrowWhite from '@/assets/images/icons/icon-arrow-white.svg?url'
export default {
   data() {
      return {
         arrowWhite,
      }
   },
   props: {
      btnText: {
         String,
         default: 'Empty',
      },
      wSize: {
         String,
         default: 'w-[252px]',
      }
   }
}
</script>
<template>
   <button
      :class="` flex justify-center items-center gap-6 ${wSize} h-[72px] bg-neo-very-dark-blue hover:bg-neo-dark-grey select-none`">
      <h4 class=" text-white text-[1.125rem] leading-[1.5625rem] font-bold">
         {{ btnText }}</h4>
      <img class=" h-[1.125rem]" :src="arrowWhite" alt="iconArrow">
   </button>
</template>