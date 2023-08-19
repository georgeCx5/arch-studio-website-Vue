import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
   state: () => ({
      dName: {
         val: '',
         valState: 'default',
      },
      dEmail: {
         rgxVal: new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
         val: '',
         valState: 'default',
      },
      dMessage: {
         val: '',
         valState: 'default',
      }
   }),
   actions: {
      checkData(data) {
         if (data.val.length == 0) {
            data.valState = 'empty'
            return
         }
         if (Object.keys(data).length > 2) {
            if (data.rgxVal.test(data.val)) {
               data.valState = 'success'
               return
            } else {
               data.valState = 'error'
               return
            }
         }
         data.valState = 'success'
      },
      checkForm() {
         const dataArr = [
            this.dName,
            this.dEmail,
            this.dMessage,
         ]
         let isRight = true
         for (let i = 0; i < dataArr.length; i++) {
            this.checkData(dataArr[i])
            dataArr[i].valState == 'success' ? '' : isRight = false
         }
         if (isRight) {
            for (let i = 0; i < dataArr.length; i++) {
               dataArr[i].val = ''
            }
         }
      }
   }


})
