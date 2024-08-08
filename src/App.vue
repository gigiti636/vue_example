<script>
import { ref, watch, computed } from 'vue'
import { useFetcher } from './composables/useFetcher'
import { Search, ListView, Pagination } from './components'

export default {
  components: {
    ListView,
    Pagination,
    Search,
  },
  setup() {
    const baseUrl = 'https://rickandmortyapi.com/api/character/'

    const searchQuery = ref('')
    const pageQuery = ref(1)
    const url = computed(
      () => `${baseUrl}?page=${pageQuery.value}&name=${searchQuery.value}`,
    )

    const { data, error, loading, fetchData } = useFetcher(url)

    function handleSearch(e) {
      pageQuery.value = 1
      searchQuery.value = e.target.value
    }

    function handlePageChange(page) {
      pageQuery.value = page
    }

    watch(url, fetchData, { immediate: true })

    return {
      data,
      url,
      error,
      loading,
      searchQuery,
      pageQuery,
      handleSearch,
      handlePageChange,
    }
  },
}
</script>

<template>
  <div>
    <div v-if="loading && !data">Loading...</div>
    <div v-if="error" class="error">Error: {{ error }}</div>

    <div v-if="data && Array.isArray(data.results)">
      <Search
        placeholder="Enter name"
        v-model="searchQuery"
        @update:modelValue="handleSearch"
      />
      <ListView :items="data.results" />
      <Pagination
        :currentPage="pageQuery"
        :totalPages="data.info.pages"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
