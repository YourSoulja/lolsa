import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import PostDetail from './pages/PostDetail.vue';
import CreateEditPost from './pages/CreateEditPost.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/post/:id', component: PostDetail },
  { path: '/create', component: CreateEditPost },
  { path: '/edit/:id', component: CreateEditPost }
];

export default createRouter({
  history: createWebHistory(),
  routes
});