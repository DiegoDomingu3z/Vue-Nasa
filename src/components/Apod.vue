<template>
    

        <div class="container-fluid img-fluid img-apod"
         :style="`background-image: url(${apod.hdurl})`" alt="">
        <div class="col-12 text-light text-center p-5 fs-">
           <h2>
               {{apod.title}}  <span class="selectable" ><i class="mdi mdi-calendar"></i></span>
           </h2>
           <h4 class="p-4">
               {{apod.date}}
           </h4>
        </div>
        <div class="col-12 text-light text-center">
            {{apod.explanation}}
        </div>
            
         
         
         <div class="text-center text-light">
            
         </div>
             </div>
        
       
       
    
</template>


<script>
import { AppState } from '../AppState.js'
import { computed } from 'vue'
export default {
    setup(){
        return {
        apod: computed(() => AppState.apod),

        pickDate(){

        }
        }
        
    }
}
</script>


<style lang="scss" scoped>
.img-apod{
    background-position: center;
  background-size: cover;
      height: 680px;
      
      
      
      
    
  }



</style>