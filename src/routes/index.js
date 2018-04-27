import Vue            from 'vue';
import VueRouter      from 'vue-router';
import routes         from './routes';

Vue.use(VueRouter);

// 滚动条滚回顶部
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

const router =  new VueRouter({
  mode:'history',
  scrollBehavior,
  routes
});

export default router;
