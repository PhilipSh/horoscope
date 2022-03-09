import { createApp } from 'vue';
import App from './App.vue';
import VueKinesis from 'vue-kinesis';

import {
  // create naive ui
  create,
  // components
  NButton,
  NModal,
  NCard,
  NSelect,
  NSkeleton,
  NDescriptions,
  NDescriptionsItem,
  NConfigProvider,
  NAlert,
  NEmpty,
  NIcon,
} from 'naive-ui';

const naive = create({
  components: [
    NButton,
    NSelect,
    NModal,
    NCard,
    NSkeleton,
    NDescriptions,
    NDescriptionsItem,
    NConfigProvider,
    NAlert,
    NEmpty,
    NIcon,
  ],
});

const app = createApp(App);
// first init - then mount
app.use(naive);
app.use(VueKinesis);
app.mount('#app');
