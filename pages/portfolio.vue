<template>
  <div class="wrapper-small md:px-10">
      <div class="text-center mt-2 border-b-2 pb-3">
        <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">Alcuni siti che ho sviluppato</h3>
      </div>

      <div>
        <Portfolio />
      </div>
  </div>
</template>

<script>
import Portfolio from '../components/Portfolio.vue'
export default {
    components:{
      Portfolio
    }
}
</script>