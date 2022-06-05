<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '@/store'

const store = useStore()
const { layers } = storeToRefs(store)
</script>

<template>
  <div class="flex flex-col">
    <div v-for="layer in layers" :key="layer.id">{{ layer }}</div>
  </div>
</template>

<style scoped>
</style>
