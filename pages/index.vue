<template>
  <main>
    <div class="wrapper-small md:px-10">
      <div class="header mt-5">
        <Hero />
        <!--<h2 class="text-gray-700">I miei social</h2>-->
        <Social />
      </div>

      <div class="mt-16">
          <div>
            <Skills />
          </div>
          <div>
            <ProjectsList />
          </div>
      </div>

      <div class="mt-16 md:mt-24" role="region" aria-label="sezione tecnologie che utilizzo">
          <div class="flex justify-center items-center text-base font-semibold text-gray-600">
            <h3 class="text-center text-gray-700">Lavoro con...</h3>
            <!--<i class='bx bx-chevrons-down ml-1 mt-1'></i>-->
          </div>
          <div>
            <TechStack />
          </div>
      </div>

    </div>
  </main>
</template>

<script>
  import Hero from '../components/Hero.vue'
  import Social from '../components/Social.vue'
  import TechStack from '../components/TechStack.vue'
  import Skills from '../components/Skills.vue'
  import ProjectsList from './projectsList.vue'
  

    export default {
      components:{
        Hero, Social, ProjectsList, TechStack, Skills
      },
      /*head() {
        return {
          script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        };
      },*/
    };
</script>

<style scoped>
  .img-container{
    position: relative;
  }
  #blob1{
    width:500px;
    position: absolute;
    left: -20%;
    top: -20%;
    right: auto;
    bottom: auto;
    z-index: -1;
  }

  #blob2{
    width: 250px;
    position: absolute;
    right: -13%;
    bottom: -4rem;
    z-index: -1;
  }
</style>