<template>
  <div class="wrapper-small">
      <div class="text-center mt-2 border-b-2 pb-3">
        <h2 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">Community</h2>
      </div>
      <p class="text-base md:text-lg font-regular text-gray-700 mt-2">Da quando ho inziato ad essere presente sui social ho avuto modo di conoscere e collaborare con diverse community e voglio dedicare uno spazio per loro.</p>
      <div class="grid grid-cols-4 gap-4">
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