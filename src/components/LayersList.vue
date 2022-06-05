<script setup>
// import { ref } from 'vue'

// defineProps({
//   msg: String
// })

// const count = ref(0)
const layers = [];
</script>

<template>
  <div class="flex flex-col">
    <div v-for="layer in layers" :key="layer.id"></div>
  </div>
</template>

<style scoped>
</style>
