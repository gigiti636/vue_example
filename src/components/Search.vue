<!-- src/components/Search.vue -->
<template>
  <div class="search-input">
    <input
      :placeholder="placeholder"
      v-model="inputValue"
      @change="handleInput"
    />
    <span v-if="inputValue" class="clear-icon" @click="clearInput">✖</span>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  placeholder: String,
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])
const inputValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue
  },
)

const handleInput = (e) => {
  emit('update:modelValue', e.target.value)
}

const clearInput = () => {
  inputValue.value = ''
  emit('update:modelValue', '')
}
</script>

<style scoped>
.search-input {
  position: relative;
  display: inline-block;
  text-align: center;
}

input {
  padding: 10px 25px 10px 15px;
}

.clear-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #aaa;
}
</style>
