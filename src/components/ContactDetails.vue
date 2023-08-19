<script setup>
import arrow from '@/assets/images/icons/icon-arrow.svg?url'
</script>
<script>
export default {
   data() {
      return {
         data: [
            {
               header: 'Main Office',
               mail: ' archone@mail.com',
               address: ' 1892 Chenoweth Drive TN',
               phone: ' 123-456-3451',
            },
            {
               header: 'Office II',
               mail: ' archtwo@mail.com',
               address: ' 3399 Wines Lane TX',
               phone: ' 832-123-4321',
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
   <div
      class=" flex flex-col DT:self-end TB:flex-row DT:flex-col TB:justify-between DT:justify-start TB:items-end DT:items-start gap-11 DT:gap-[3.75rem] DT:w-[31.5%]">
      <div class=" flex flex-col gap-[.875rem] text-neo-dark-grey text-[1.125rem]">
         <h4 class=" leading-[2.1875rem] font-bold">
            {{ data[dataIndex].header }}</h4>
         <p class=" leading-[1.5rem] font-medium">
            Mail:{{ data[dataIndex].mail }}
            <br>
            Address:{{ data[dataIndex].address }}
            <br>
            Phone:{{ data[dataIndex].phone }}
         </p>
      </div>
      <button class=" flex justify-between items-center w-[151px] h-[25px] TB:pb-4 DT:pb-0">
         <h4 class=" text-[1.125rem] leading-[1.5625rem] font-bold">
            View on Map</h4>
         <img class="h-[18px]" :src="arrow" alt="arrow">
      </button>
   </div>
</template>