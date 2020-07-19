import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import './lib/mui/css/mui.min.css'
// import './lib/mui/css/icons-extra.css'
import './css/index.less'
import './css/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
    router
}).$mount('#app')
