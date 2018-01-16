<template>
    <div>
        <div class="prd-list-wrap">
            <div class="prd-list-box">
                <div class="img-wrap"><img src="../assets/demo1.jpg"></div>
                <div class="prd-list-masker"></div>
                <h6>COOKIE RECIPES TO SATISFY YOUR SWEET TOOTH</h6>
                <span>A collection of recipes for the week ending</span>
            </div>
            <div class="prd-list-box">
                <div class="img-wrap"><img src="../assets/demo2.jpg"></div>
                <div class="prd-list-masker"></div>
                <h6>GHEERY WINTER SALADS FOR DREARY DAYS</h6>
                <span>A collection of recipes for the week ending</span>
            </div>
            <div class="prd-list-box">
                <div class="img-wrap"><img src="../assets/demo3.jpg"></div>
                <div class="prd-list-masker"></div>
                <h6>COOKIE RECIPES TO SATISFY YOUR SWEET TOOTH</h6>
                <span>A collection of recipes for the week ending</span>
            </div>
            <div class="prd-list-box">
                <div class="img-wrap"><img src="../assets/demo4.jpg"></div>
                <div class="prd-list-masker"></div>
                <h6>GHEERY WINTER SALADS FOR DREARY DAYS</h6> 
                <span>A collection of recipes for the week ending</span>
            </div>
            <div class="prd-list-box">
                <div class="img-wrap"><img src="../assets/demo5.jpg"></div>
                <div class="prd-list-masker"></div>
                <h6>GHEERY WINTER SALADS FOR DREARY DAYS</h6> 
                <span>A collection of recipes for the week ending</span>
            </div>
            <div class="prd-list-box">
                <div class="img-wrap"><img src="../assets/demo6.jpg"></div>
                <div class="prd-list-masker"></div>
                <h6>GHEERY WINTER SALADS FOR DREARY DAYS</h6> 
                <span>A collection of recipes for the week ending</span>
            </div>
        </div>
    </div>
</template>

<script>
const Mock = require('mockjs')
const data = Mock.mock({
'list|1-10': [{
    'id|+1': 1
    }]
})
console.log(JSON.stringify(data, null, 4))

export default {
    name:'productsList',
}
</script>

<style lang="scss" scoped>
    .prd-list-wrap{
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        background: $white;
        @include pm(vw(20),0);
        .prd-list-box{
            align-items: flex-start;
            width: vw(350);
            height: vw(480);
            position: relative;
            z-index: 100;
            overflow: hidden;
            @include borderR(vw(10));
            @include pm(0,0 0 vw(10) 0);
            .img-wrap{
                position: absolute;
                z-index: 100;
                img{
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
            .prd-list-masker{
                position: absolute;
                background: url('../assets/list-bg-mask.png') no-repeat 0 0;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 200;
            }
            h6{
                position: relative;
                color: $white;
                text-align: center;
                line-height: 100%;
                font-size: vw(32);
                font-family: 'Arial Narrow', sans-serif;
                z-index: 300;
                @include pm(0 vw(10),vw(310) 0 vw(10) 0);
            }
            span{
                display: block;
                position: relative;
                color: $off-white;
                text-align: center;
                line-height: 100%;
                font-size: vw(26);
                z-index: 300;
                @include pm(0 vw(10),0);
            }
        }
    }

</style>
