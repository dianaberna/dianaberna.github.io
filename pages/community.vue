<template>
  <div class="wrapper-small">
      <div class="text-center mt-2 border-b-2 pb-3">
        <h2 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">Community</h2>
      </div>
      <h3 class="text-sm md:text-base text-gray-700 font-regular my-3">Da quando ho inziato ad essere presente sui social ho avuto modo di conoscere e collaborare con diverse community e voglio dedicare uno spazio per loro.
      </h3>
      <div class="grid grid-cols-4 gap-4">
        <div class="text-center">
          <img src="~/assets/community/vuejsitalia.jpg" class="">
          <p class="text-gray-700 font-bold">VueJsItalia</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .credit-item{
      @apply text-lg mb-5 text-gray-800 font-semibold;
  }

  .credit-link{
      @apply text-primary;
  }
</style>