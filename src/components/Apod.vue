<template>
    

        <div class="container-fluid img-fluid img-apod"
         :style="`background-image: url(${apod.hdurl})`" alt="">
        <div class="col-12 text-light text-center p-5 fs-">
           <h2>
               {{apod.title}}
           </h2>
           <h4 class="p-4">
               {{apod.date}}
           </h4>
        </div>
        <div class="col-12 text-light text-center">
            {{apod.explanation}}
        </div>
            
         
         
         <div class="text-end text-light">
            <h1><i type="button" class="mdi mdi-calendar" data-bs-toggle="modal" data-bs-target="#date"></i></h1> 
            
             
         </div>
             </div>
             <div class="modal fade" id="date" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Change Date</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
          <form @submit.prevent="pickDate">
              <input type="date" id="date" name="date" >
        <button class="btn btn-primary">Ok</button>
              </form>
      </div>
      <div class="modal-footer text-center">
      </div>
    </div>
  </div>
</div>
        
       
       
    
</template>


<script>
import { AppState } from '../AppState.js'
import { computed } from 'vue'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { apodService } from '../services/ApodService.js'
export default {
    setup(){
        return {
        apod: computed(() => AppState.apod),

        async pickDate(){
        try {
          await apodService.pickDate(window.event.target.date.value)
          logger.log('submitting form')
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error)
        }
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