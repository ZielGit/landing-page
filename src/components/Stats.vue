<template>
    <div class="Stats bg-cover bg-no-repeat bg-bottom" :style="`background-image:url(${PorscheBackground}); height: 450px;`">
        <div class="w-full h-full bg-customBlue opacity-75 absolute z-0" />
        <div class="Stats-Components z-50">
          <p class="text-white">some text</p>
        </div>
        <!-- <stats-card /> -->
    </div>
</template>

<script setup>
import PorscheBackground from '../assets/2020-porsche.jpeg'
// import StatsCard from './elements/stats/StatsCard.vue'
// export default {
//   components: { StatsCard },
    
// }
</script>

<style lang="scss" scoped>

</style>