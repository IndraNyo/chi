<template>
    <div id="Main">
        <mainHeader></mainHeader>
        <div class="main-banner">
            <div class="main-bg-masker"></div>
            <h1>HAPPY B-DAY COLLECTION</h1>
            <span>A collection of recipes for the week ending</span>
        </div>
        <products-list></products-list>
    </div>
</template>

<script>
import mainHeader from '../components/mainHeader'
import productsList from '../components/productsList'
export default {
    components:{
            mainHeader,
            productsList
        }
}
</script>

<style lang="scss" scoped>
    .main-banner{
        height: vw(486);
        background: url('../assets/main-bg.jpg') no-repeat 0 0;
        background-size: cover;
        overflow: hidden;
        position: relative;
        z-index: 100;
        .main-bg-masker{
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            position: absolute;
            height: vw(486);
            background: url('../assets/main-bg-mask.png') no-repeat 0 0;
            z-index: 200;
        }
        h1{
            color: $white;
            text-align: center;
            font-size: vw(50);
            font-family: 'Arial Narrow', sans-serif;
            position: relative;
            z-index:300;
            @include pm(0,vw(320) 0 0 0);
        }
        span{
            display: block;
            width: 100%;
            color: $off-white;
            text-align: center;
            position: relative;
            z-index: 300;
            @include pm(0,vw(24) 0 0 0);
        }
    }
</style>
