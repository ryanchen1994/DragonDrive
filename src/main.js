import { createApp } from 'vue'
import App from './App.vue'
import { createMetaManager } from 'vue-meta';
import { createHead } from '@vueuse/head';
import router from './router'

const app = createApp(App)
app.use(createMetaManager());
const head = createHead();
app.use(head);
app.use(router)
app.mount('#app')