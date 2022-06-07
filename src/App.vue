<script setup>
import LayersList from './components/LayersList.vue';
import RenderView from './components/RenderView.vue';
</script>

<template>
  <div class="flex h-screen w-full">
    <div class="bg-slate-700 w-96 h-full overflow-scroll">
      <LayersList />
    </div>
    <div class="flex grow justify-center items-center overflow-scroll bg-gray-900">
      <RenderView />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
