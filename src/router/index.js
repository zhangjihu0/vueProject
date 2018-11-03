import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index.vue';
import BootstrapVue from 'bootstrap-vue';
import ElementUI from '../../node_modules/element-ui/src/index.js';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Router);
Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.prototype.$http = axios;


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
