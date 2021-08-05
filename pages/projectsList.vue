<template>
  <div class="wrapper-small md:px-10" role="region" aria-label="sezione progetti">
      <div class="text-center mt-2 border-b-2 pb-3">
        <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold">Progetti che porto avanti</h3>
      </div>

      <div>
        <Projects />
      </div>
  </div>
</template>

<script>
import Projects from '../components/Projects.vue'
export default {
    components:{
      Projects
    }
}
</script>

<style>
    .project-card div{
        margin-right: 20px;
    }
</style>