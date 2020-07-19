<template>
    <div class="app-container">
<!--        顶部 Header 区域-->
        <mt-header fixed title="李兴里商业帝国"></mt-header>

<!--        中间的 路由 router-vue 区域-->
        <div class="MiddleContainer">
            <router-view></router-view>
        </div>


<!--        底部  Tabbar 区域-->

        <mt-tabbar v-model="selected" class="ap1">

                <mt-tab-item id="首页">
                    <router-link to="/HomeContainer" class="link">
                    <p class="glyphicon glyphicon-home" aria-hidden="true"></p>
                    <p>首页</p>
            </router-link>
                </mt-tab-item>


                 <mt-tab-item id="会员">
                     <router-link to="/MenberContainer" class="link">
                    <p class="glyphicon glyphicon-tree-conifer" aria-hidden="true"></p>
                    <p>会员</p>
            </router-link>
                 </mt-tab-item>


                 <mt-tab-item id="购物车">
                     <router-link to="/SearchContainer" class="link">
                    <p class="glyphicon glyphicon-shopping-cart" aria-hidden="true">
                        <span class="shopping-cart-number">0</span>
                    </p>
                    <p>购物车</p>
                     </router-link>
                 </mt-tab-item>


                 <mt-tab-item id="搜索">
                     <router-link to="/ShoppingCartsContainer" class="link">
                    <p class="glyphicon glyphicon-search" aria-hidden="true"></p>
                    <p>搜索</p>
                     </router-link>
                 </mt-tab-item>

        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped lang="scss">
.MiddleContainer{
    position: fixed;
    left: 0;
    right: 0;
    top:46px;
    bottom:50px ;
    background-color: rgba(255, 247, 249, 1);
}
.mint-header{
    height: 46px;
}
.app-container {
    padding-top: 40px;
}
    div {
        .mint-tab-item-label{
            color: #ffa171;
        }

        a{
            color: rgba(124, 124, 124, 0.56);
            text-decoration: none;
            margin-left: 28px;
            margin-right: 17px;
        }
        a:hover{
            color: rgb(29, 198, 255) !important;
        }
    }
    .glyphicon-shopping-cart,
    .glyphicon-home,
    .glyphicon-search{
        font-size: 15px;
    }
    .glyphicon-tree-conifer{
        font-size: 17px;
    }
.shopping-cart-number{
    position: absolute;
    left: 11px;
    top: -7px;
    font-size: 9px;
    line-height: 13px;
    text-align: center;
    color: #ffffff;
    border-radius: 50%;
    display: block;
    width: 14px;
    height: 16px;
    background-color: #ff0312;
}
p {
    margin: 0px 0px 0px;
}

.mint-tabbar{
   padding: 3px 0;
    background-color: rgba(26, 26, 26, 0.08);
}
.link{
    display: block;
}
</style>