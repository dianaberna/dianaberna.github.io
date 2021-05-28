<template>
  <div class="wrapper mx-auto px-10">
      <hr class="h-px mt-6 border-gray-300 max-w-screen-xl mx-auto">
      <div class="md:py-10">
            <div class="flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row">
                <div>
                    <nuxt-link to="/">
                        <p class="text-gray-700 font-semibold"> Diana Bernabei P.IVA 02430130449</p>
                    </nuxt-link>
                    <nuxt-link to="/credits" class="text-gray-700 font-semibold">Credits</nuxt-link>
                </div>
                <div>
                    <Social />
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Social from '../components/Social.vue'
export default {
    components: {
        Social
    }
}
</script>