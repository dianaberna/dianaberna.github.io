<template>
  <div class="my-8 max-w-lg mx-auto">
    <input
      type="search"
      autocomplete="off"
      :placeholder="placeholder"
      class="block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-full focus:outline-none focus:bg-white bg-white"
      v-model="searchQuery"
      @input="onSearchInput"
    />
  </div>
</template>
<script>
export default {
  props:{
    placeholder:{
      type: String,
      default: 'Search'
    }
  },
  data() {
    return {
      searchQuery: '',
      debounceTimeout: null,
      debounceTimer: 500,
    }
  },
  methods: {
    onSearchInput(searchQuery) {
      if(this.debounceTimeout) {
        clearTimeout(this.debounceTimeout)
      }
      this.debounceTimeout = setTimeout(() => {
        this.$emit('search', this.searchQuery)
      }, this.debounceTimer)
    },
  }
}
</script>