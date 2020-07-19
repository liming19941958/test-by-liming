<template>
    <div class="app-container">
<!--        顶部 Header 区域-->
        <mt-header fixed title="李兴里商业帝国"></mt-header>

<!--        中间的 路由 router-vue 区域-->
        <h1>123</h1>

<!--        底部  Tabbar 区域-->

        <mt-tabbar v-model="selected" class="ap1">

            <mt-tab-item id="首页">

                    <p class="glyphicon glyphicon-home" aria-hidden="true"></p>
                    <p>首页</p>

            </mt-tab-item>

            <mt-tab-item id="会员">
                    <p class="glyphicon glyphicon-tree-conifer" aria-hidden="true"></p>
                    <p>会员</p>
            </mt-tab-item>
            <mt-tab-item id="购物车">
                    <p class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></p>
                    <p>购物车</p>
            </mt-tab-item>
            <mt-tab-item id="搜索">
                    <p class="glyphicon glyphicon-search" aria-hidden="true"></p>
                    <p>搜索</p>
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
        }
        a:hover{
            color: rgb(37, 162, 255) !important;
        }
    }
.app-container{

        .mint-tab-item:hover {
            color: #2cbcff;
        }

    }



</style>