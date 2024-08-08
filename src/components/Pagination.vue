<!-- src/components/Pagination.vue -->
<template>
  <nav class="pagination">
    <button
      :disabled="currentPage === 1"
      @click="goToPage(currentPage - 1)"
      class="pagination-button"
    >
      &laquo; Prev
    </button>

    Page {{ currentPage }} / out of {{ totalPages }}
    <button
      :disabled="currentPage === totalPages"
      @click="goToPage(currentPage + 1)"
      class="pagination-button"
    >
      Next &raquo;
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
        this.$emit('page-change', page)
      }
    },
  },
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination-button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
.pagination-button.active {
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
}
.pagination-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
