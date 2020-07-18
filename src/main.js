import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './css/index.less'
import './css/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(VueRouter);
console.log('sd2rrrr22');
new Vue({
  render: h => h(App),
    router
}).$mount('#app')
