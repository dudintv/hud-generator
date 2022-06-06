<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useStore } from '@/store';

const store = useStore();
const { layers, presets } = storeToRefs(store);
</script>

<template>
  <div class="flex flex-col">
    <div
      class="mx-2 my-1 py-2 rounded bg-slate-900 text-slate-200 drop-shadow-lg"
      v-for="layer in layers"
      :key="layer.id"
    >
      <!-- header -->
      <div class="px-2 mb-2 text-lg flex justify-between">
        <div>
          <span class="mr-2">{{ layer.name }}</span>
          <span v-if="presets[layer.type]">preset \/</span>
        </div>
        <div class="actions">
          <button class="ml-2">copy</button>
          <button class="ml-2">del</button>
        </div>
      </div>

      <!-- content -->
      <div class="flex px-2">
        <div class="mr-4">
          <div class="w-24 h-24 mb-1 bg-slate-400"></div>
          <div>Color select</div>
        </div>
        <div class="grow">Numbers controls</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
