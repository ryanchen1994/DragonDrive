import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home, meta: { title: '首頁 - 龍行天下' } },
  { path: '/about', component: About, meta: { title: '關於我們 - 龍行天下' } },
  { path: '/services', component: Services, meta: { title: '我們的服務 - 龍行天下' } },
  { path: '/contact', component: Contact, meta: { title: '聯繫我們 - 龍行天下' } }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '龍行天下';
  next();
});

export default router;
