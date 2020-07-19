import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer'
import MenberContainer from './components/tabbar/MenberContainer'
import SearchContainer from './components/tabbar/SearchContainer'
import ShoppingCartsContainer from './components/tabbar/ShoppingCartsContainer'


//创建路由对象
var router = new VueRouter({
    routes:[
        {path:'/HomeContainer',component:HomeContainer},
        {path:'/MenberContainer',component:MenberContainer},
        {path:'/SearchContainer',component:SearchContainer},
        {path:'/ShoppingCartsContainer',component:ShoppingCartsContainer},
    ]
})
export default router