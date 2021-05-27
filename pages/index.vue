<template>
  <div class="wrapper-small md:px-10">
    <div class="header mt-5">
      <Hero />
      <Social />
      <div class="img-container">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id="blob1">
          <path fill="#d53f8c" d="M27.8,-25C42.3,-13.3,64.5,-6.7,69.7,5.1C74.8,16.9,62.7,33.7,48.2,49.4C33.7,65.1,16.9,79.5,0.6,78.9C-15.7,78.4,-31.4,62.7,-38.2,47C-45.1,31.4,-43.1,15.7,-42.2,0.9C-41.4,-14,-41.6,-27.9,-34.8,-39.6C-27.9,-51.2,-14,-60.6,-3.7,-56.9C6.7,-53.3,13.3,-36.6,27.8,-25Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>

    <div class="mt-16">
        <div class="flex justify-center items-center text-base font-semibold ">
          <h4 class="text-center text-gray-700">Alcuni dei miei progetti </h4>
          <i class='bx bx-chevrons-down ml-1 mt-1 text-gray-700'></i>
        </div>

        <div>
          <Projects />
        </div>
        <div class="img-container">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id="blob2">
          <path fill="#b83280" d="M47.2,-62.5C56.2,-48.7,55,-29.1,54.5,-12.5C54,4.1,54,17.7,47.2,25C40.3,32.4,26.5,33.6,15.6,33.6C4.7,33.5,-3.2,32.1,-12.4,30.4C-21.7,28.7,-32.2,26.7,-44.7,19C-57.2,11.4,-71.7,-1.9,-69.9,-12.3C-68,-22.7,-49.8,-30.1,-35.4,-42.9C-21,-55.8,-10.5,-74.1,4.3,-79.2C19.1,-84.3,38.2,-76.3,47.2,-62.5Z" transform="translate(100 100)" />
          </svg>
      </div>
    </div>

    <!--<div class="mt-16 md:mt-24">
        <div class="flex justify-center items-center text-base font-semibold text-gray-600">
          <h4 class="text-center">Tech stack I use.</h4>
          <i class='bx bx-chevrons-down ml-1 mt-1'></i>
        </div>

        <div>
          <TechStack />
        </div>
    </div>-->

  </div>
</template>

<script>
  import Hero from '../components/Hero.vue'
  import Social from '../components/Social.vue'
  import Projects from '../components/Projects.vue'
  import TechStack from '../components/TechStack.vue'
  

    export default {
      components:{
        Hero, Social, Projects, TechStack
      },
      head() {
        return {
          script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        };
      },
    };
</script>

<style>
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
    /* top: 20%; */
    /* right: auto; */
    bottom: -4rem;
    z-index: -1;
  }
</style>