import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import '@/assets/css/main.css';

const app = createApp(App);
app.use(createPinia());

const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};

app.directive('click-outside', clickOutside);

app.mount('#app');
