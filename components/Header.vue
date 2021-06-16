<template>
  <div>
    <nav class="wrapper py-4 md:py-10 lg:py-20">
      <div class="px-10 flex justify-between items-center">
          <div class="logo font-rubik">
            <nuxt-link to="/">
                <h1 class="text-2xl font-bold text-gray-700">
                  <img src="~/assets/logo.png" class="h-16 lg:h-24 xl:h-24" id="logo" alt="logo di diana bernabei" aria-label="go to home page">
                </h1>
            </nuxt-link>
          </div>
      
          <div class="navbar hidden md:block">
            <nuxt-link class="nav-link" to="/about">Chi sono</nuxt-link>
            <nuxt-link class="nav-link" to="/blog">Blog</nuxt-link>
            <nuxt-link class="nav-link" to="/community">Community</nuxt-link>
            <nuxt-link class="nav-link" to="/guests">Guests</nuxt-link>
            <a class="nav-link" target="_blank" href="mailto:bernabei.d@gmail.com">Scrivimi!</a>
          </div>

          <div class="ml-3 flex md:hidden">
            <!-- Mobile menu button -->
            <button @click="toggle" class="flex-center rounded-md">
              <svg :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']" stroke="currentColor" fill="none" viewBox="0 0 24 24"
                width="24" height="24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']" stroke="currentColor" fill="none" viewBox="0 0 24 24"
                width="24" height="24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
      </div>
    </nav>

    <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
        <div class="px-2 pt-2 pb-3 sm:px-3 bg-primary">
            <nuxt-link to="/about" class="mt-1 mobile-link focus:outline-none md:hover:text-gray-700">Chi sono
            </nuxt-link>
            <nuxt-link to="/blog" class="mt-1 mobile-link focus:outline-none md:hover:text-gray-700">Blog
            </nuxt-link>
            <nuxt-link to="/community" class="mt-1 mobile-link focus:outline-none md:hover:text-gray-700">
              Community</nuxt-link>
              <nuxt-link to="/guests" class="mt-1 mobile-link focus:outline-none md:hover:text-gray-700">
              Guests</nuxt-link>
            <a href="mailto:bernabei.d@gmail.com" target="_blank" class="mt-1 mobile-link focus:outline-none md:hover:text-gray-700">
              Scrivimi!</a>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style lang="postcss">
  body{
      font-family: poppins, sans-serif;
  }
  .mobile-link{
    @apply block px-3 py-2 text-lg text-gray-700 rounded-md text-white font-medium text-center;
  }
  .nav-link{
    @apply ml-12 font-medium text-lg text-gray-700;
  }
  .font-rubik {
    font-family: rubik, sans-serif;
  }

  .nav-link{
    font-family: rubik, sans-serif;
    font-weight: 500;
  }
  .nav-link {
    font-size: 20px;
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    padding-bottom: 8px;
  }
  .nav-link:before, .nav-link:after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #d53f8c;
  }
  .nav-link:before {
    opacity: 0;
    transform: translateY(-8px);
    transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s;
  }
  .nav-link:after {
    opacity: 0;
    transform: translateY(4px);
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;
  }
  .nav-link:hover:before, .nav-link:hover:after, .nav-link:focus:before, .nav-link:focus:after {
    opacity: 1;
    transform: translateY(0);
  }
  .nav-link:hover:before, .nav-link:focus:before {
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;
  }
  .nav-link:hover:after, .nav-link:focus:after {
    transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s 0.2s;
  }
</style>