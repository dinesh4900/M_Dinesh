import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/index.vue';
import SlugPage from './pages/[slug].vue';
import App from './App.vue';
import './style.scss';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    {
      path: '/:slug',
      name: 'SlugPage',
      component: SlugPage,
    },
  ],
});

app.use(router);
app.mount('#app');
