import { createApp } from 'vue';
import App from './App.vue';

import {
  // create naive ui
  create,
  // components
  NButton,
  NModal,
  NCard,
  NSelect,
  NSkeleton,
} from 'naive-ui';

const naive = create({
  components: [NButton, NSelect, NModal, NCard, NSkeleton],
});

const app = createApp(App);
// first init - then mount
app.use(naive);
app.mount('#app');
