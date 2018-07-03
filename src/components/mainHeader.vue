<template>
    <div class="main-header">
        <a class="btn-menu"><i class="idr-menu"></i></a>
        <span v-if="title == undefined" class="logo-wrap"></span>
        <span v-if="title !== undefined" class="title-wrap">{{ title | capitalize }}</span>
        <a class="btn-search"><i class="idr-search"></i></a>
    </div>
</template>

<script>
export default {
    name:'mainHeader',
    props: ['title'],
    filters: {
    capitalize: function (value) {
            value = value.toString()
            return value.toUpperCase()
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-header{
        position: relative;
        height: vw(90);
        overflow: hidden;
        .btn-menu{
            position: absolute;
            display: block;
            height: vw(90);
            width: vw(120);
            left: 0;
            top: 0;
            @include pm(vw(25) vw(35) vw(5) vw(35),0);
            i{
                color: $smoke;
                font-size: vw(42);
            }
        }
        .title-wrap{
            display: block;
            height: vw(90);
            line-height: vw(90);
            width: vw(300);
            text-align: center;
            color: $white;
            font-family: FjallaOne-Regular;
            @include pm(0,0 auto)
        }
        .logo-wrap{
            display: block;
            height: vw(60);
            width: vw(60);
            color: $white;
            background: url('../assets/logo.png') no-repeat center center;
            background-size: cover;
            @include pm(0,vw(15) auto)
        }
        .btn-search{
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            height: vw(90);
            width: vw(100);
            @include pm(vw(25) vw(25) vw(0) vw(25),0);
                i{
                    color: $smoke;
                    font-size: vw(42);
                    margin: 0 auto;
                }
            }
        }
</style>
