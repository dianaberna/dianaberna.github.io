<template>
  <div class="wrapper-small">
      <div class="text-center mt-2 border-b-2 pb-3">
        <h2 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">Community</h2>
      </div>
      <p class="text-base md:text-lg font-regular text-gray-700 mt-2">Da quando ho inziato ad essere presente sui social ho avuto modo di conoscere e collaborare con diverse community e voglio dedicare uno spazio per loro.</p>
      <div class="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4">
        <div class="text-center">
          <a href="https://www.fuzzybrains.org/it/">
            <img src="~/assets/community/fuzzybrains.png" class="" alt="logo fuzzy brains">
            <p class="text-gray-700 font-bold">FuzzyBrains</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://www.grusp.org/">
            <img src="~/assets/community/grusp.png" class="" alt="logo grusp">
            <p class="text-gray-700 font-bold">Grusp</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://pausacaffe.live/">
            <img src="~/assets/community/pausacaffe.png" class="" alt="logo pausa caffè">
            <p class="text-gray-700 font-bold">Pausa Caffè</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://pointerpodcast.it/">
            <img src="~/assets/community/pointerpodcast.png" class="" alt="logo pointer podcast">
            <p class="text-gray-700 font-bold">PointerPodcast</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://www.theredcode.it/">
            <img src="~/assets/community/theredcode.png" class="" alt="logo the red code">
            <p class="text-gray-700 font-bold">theRedCode</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://t.me/vue_ita">
            <img src="~/assets/community/vuejsitalia.jpg" class="" alt="logo vuejsitalia">
            <p class="text-gray-700 font-bold">VueJsItalia</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://www.facebook.com/WTMItalia">
            <img src="~/assets/community/wtmitalia.png" class="" alt="logo wtm italia">
            <p class="text-gray-700 font-bold">WTM Italia</p>
          </a>
        </div>
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