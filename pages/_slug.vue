<template>
  <div class="wrapper p-5">
    <div class="text-center border-2 max-w-screen-lg mx-auto px-2 py-5 rounded-xl">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold"> {{ post.title }}</h3>
      <h3 class="text-sm md:text-base text-gray-600 font-semibold max-w-lg mx-auto my-3">Posted on : <span class="text-gray-700">{{ formatDate(post.createdAt) }}</span></h3>
    </div>
    <nuxt-content class="prose prose-lg max-w-screen-lg mx-auto px-3 my-5" :document="post" />
  </div>
</template>

<script>

export default {
  components:{
    
  },
  methods:{
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },

  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "404 page not found" });
    }

    return {
      post,
    };
  },
};
</script>

<style>
    .prose a{
      @apply text-primary  font-semibold;
    }

    .prose li{
      @apply text-gray-600
    }
</style>