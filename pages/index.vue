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
            <ProjectsList />
          </div>
          <!--<div class="img-container">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id="blob2" class="fill-current hidden md:block md:text-gray-700">
            <path d="M47.2,-62.5C56.2,-48.7,55,-29.1,54.5,-12.5C54,4.1,54,17.7,47.2,25C40.3,32.4,26.5,33.6,15.6,33.6C4.7,33.5,-3.2,32.1,-12.4,30.4C-21.7,28.7,-32.2,26.7,-44.7,19C-57.2,11.4,-71.7,-1.9,-69.9,-12.3C-68,-22.7,-49.8,-30.1,-35.4,-42.9C-21,-55.8,-10.5,-74.1,4.3,-79.2C19.1,-84.3,38.2,-76.3,47.2,-62.5Z" transform="translate(100 100)" />
            </svg>
          </div>-->
      </div>

      <div class="mt-16 md:mt-24" role="region" aria-label="sezione tecnologie che utilizzo">
          <div class="flex justify-center items-center text-base font-semibold text-gray-600">
            <h3 class="text-center text-gray-700">Alcune tecnologie che utilizzo</h3>
            <i class='bx bx-chevrons-down ml-1 mt-1'></i>
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
  import ProjectsList from './projectsList.vue'
  

    export default {
      components:{
        Hero, Social, ProjectsList, TechStack
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