<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  title: string;
  items: string[];
}>();

const emit = defineEmits<{
  (e: 'select', value: string): void;
}>();

const isOpenMenu = ref(false);

const closeMenu = () => {
  isOpenMenu.value = false;
};

const select = (value: string) => {
  emit('select', value);
};
</script>

<template>
  <div
    class="flex items-center cursor-pointer opacity-20 hover:opacity-100 relative"
    :style="isOpenMenu ? 'opacity: 1' : ''"
    @click="isOpenMenu = !isOpenMenu"
    v-click-outside="closeMenu"
  >
    <span class="mr-1">
      {{ props.title }}
    </span>
    <svg
      height="12"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="transition-transform"
      :class="{ 'rotate-180': isOpenMenu }"
    >
      <path
        d="M 11.75 18.556 L 50 52.894 L 88.25 18.556 L 100 29.127 L 50 74.112 L 0 29.127 L 11.75 18.556 Z"
        style="fill: rgb(255, 255, 255)"
      />
    </svg>
    <ul
      class="flex flex-col bg-slate-700 absolute left-0 py-1 rounded drop-shadow-lg"
      style="top: 100%"
      v-if="isOpenMenu"
    >
      <li class="hover:bg-slate-800 px-2" v-for="item in items" @click="select(item)">{{ item }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
