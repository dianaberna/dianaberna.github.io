<template>
  <div class="wrapper-small">
    <div class="text-center mt-2 border-b-2 pb-3">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">Benvenuto/a nel mio blog</h3>
    </div>
    <Search placeholder="Search posts" @search="onSearch"/>
    <div class="my-10 border-gray-900 border-2 p-4 md:p-6 rounded-xl " v-for="post of posts.slice().reverse()" :key="post.slug">
      <div class="flex justify-between items-center">
        <span class="font-text-base text-gray-600 text-sm">{{ formatDate(post.publicationDate) }}</span>
        <span class="px-3 py-1 text-white font-text-base rounded bg-pink-800">#{{ post.tag }}</span>
      </div>

      <div class="mt-2">
        <nuxt-link :to="`/blog/${post.slug}`"
          class="text-xl md:text-2xl text-gray-700 font-bold hover:text-gray-600 hover:underline">{{ post.title }}
        </nuxt-link>
        <p class="mt-2 text-text-base lg:text-lg text-gray-700">{{ post.description }}</p>
      </div>

      <!--<div class=" mt-4">
        <nuxt-link :to="`/blog/${post.slug}`" class="text-primary font-semibold hover:underline">Read more</nuxt-link>
      </div>-->
    </div>
  </div>
</template>

<script>
import Search from '../../components/Search.vue'
export default {
  components:{
    Search
  },
  methods:{
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    async onSearch(searchQuery) {
      this.posts = await this.$content("blog")
      .limit(6)
      .search(searchQuery)
      .fetch()
    }
  },

   async asyncData({ $content }) {
    const posts = await $content("blog").fetch()

    return {
      posts,
    };
  },
};
</script>