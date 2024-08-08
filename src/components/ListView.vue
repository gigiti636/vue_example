<!-- src/components/ListView.vue -->
<template>
  <ul class="container">
    <li v-for="item in items" :key="item.id" class="item">
      <span>
        {{ item.name }}
      </span>
      <img :src="item.image" :alt="item.name + 'image'" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.container {
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 12px;
  padding: 0;
}

.item {
  margin: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  width: 170px;
}

.item img {
  width: 100%;
  height: 170px;
}

.item span {
  background: #5d5d5d;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
}
</style>
