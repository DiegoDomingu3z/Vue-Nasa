<template>
    <div class="row">
       
    </div>
</template>


<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
    setup(){

        return {
            apod: computed(() => AppState.apod)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>