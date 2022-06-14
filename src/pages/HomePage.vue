<template>
  <div>
    <div>
      <Apod />
      
      </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { apodService } from '../services/ApodService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
  name: 'Home',
  setup(){
    onMounted(async () => {
try {
  await apodService.getApod()
} catch (error) {
  Pop.toast(error.message, 'error')
  logger.log(error)
}

    })
    return{
      apod: computed(() => AppState.apod)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
