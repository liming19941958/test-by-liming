<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
            <mt-swipe-item>4</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style  lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{

            &:nth-child(1){
                height: 200px;
              background-color: #b8ff6c;
          }

            &:nth-child(2){
                height: 200px;
                background-color: #7eedff;
            }

            &:nth-child(3){
                height: 200px;
                 background-color: #ffb257;
             }
            &:nth-child(4){
                height: 200px;
                background-color: #ff6c9e;
            }

        }

    }
    div{
        position: fixed;
        left: 0;
        right: 0;
        top:46px;
        bottom:50px ;
        overflow: hidden;
    }
</style>