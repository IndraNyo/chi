<template>
    <div id="Profile">
        <main-header :title="titleTxt"></main-header>
        <div class="profile-wrap">
            <div class="user-avatar">
                <img src="../assets/user.jpg" >
            </div>
            <div class="status-wrap">
                <div class="title-wrap">
                    <h6>Sakura PinkSnow</h6>
                    <span>Eating my wings to make me tame</span>
                </div>
                <div class="score-wrap">
                    <div class="recipes-wrap">
                        <div class="num" :class="{ 'size46': numSize }">{{ num }}</div>
                        <div class="ico-txt"><i class="idr-fork"></i><s>RECIPES</s></div>
                    </div>
                    <div class="rating-wrap">
                        <div class="num">4.7</div>
                        <div class="ico-txt"><i class="idr-signal"></i><s>RATING</s></div>
                    </div>
                </div>
            </div>
            <div class="social-wrap">
                <a class="social-item" href="####"><i class="idr-facebookicon"></i></a>
                <a class="social-item" href="####"><i class="idr-twitter"></i></a>
                <a class="social-item" href="####"><i class="idr-socialinstagram"></i></a>
            </div>
            <a class="btn-edit-pf"><i class="idr-edit"></i>EDIT PROFILE</a>
        </div>
        <products-list></products-list>
    </div>
</template>

<script>
import mainHeader from '../components/mainHeader'
import productsList from '../components/productsList'
export default {
    data () {
        return {
            titleTxt: this.$route.name,
            num: '1,197'
        }
    },
    computed: {
        numSize: function () {
            if (this.num.length > 7){
                return true
            }else{
                return false
            }
        }
    },
    components:{
            mainHeader,
            productsList
        }
}
</script>

<style lang="scss" scopped>
    .profile-wrap{
        height: vw(540);
        background-color: $mainColor;
        @include pm(vw(40) 0 0 0,0);
        .user-avatar{
            float: left;
            height: vw(210);
            width: vw(210);
            overflow: hidden;
            @include borderR(vw(100));
            @include pm(0,0 vw(40));
            img{
                display: block;
                width: 100%;
                height: auto;
            }
        }
        .status-wrap{
            float: right;
            height: vw(230);
            width: vw(460);
            @include pm(0 vw(20) 0 0,0 0 vw(50) 0);
            .title-wrap{
                @include pm(0,0 0 vw(30) 0);
                h6{
                    color: $white;
                    font-size: vw(32);
                    font-family: Avenir-Black;
                    @include pm(0,0 0 vw(10) 0);
                }
                span{
                    display: block;
                    height: vw(75);
                    line-height: vw(75);
                    @include line-clamp(2);
                    color: $thirdlyTxt;
                    font-family: Avenir-Book;
                    font-size: vw(28);
                }
            }
            .score-wrap{
                height: vw(70);
                .recipes-wrap{
                    float: left;
                    width: vw(269);
                    border-right: vw(1) solid $border;
                    position: relative;
                    @include pm;
                    .num{
                        float: left;
                        text-align: right;
                        font-size: vw(56);
                        width: vw(200);
                        color: $primaryTxt;
                        position: absolute;
                        bottom: vw(-5);
                        &.size46{
                            font-size: vw(46);
                            bottom: vw(0);
                        }
                    }
                    .ico-txt{
                        float: right;
                        width: vw(68);
                        i{
                            display: block;
                            color: $gray;
                            font-size: vw(36);
                        }
                        s{
                            display: block;
                            font-family: Avenir-Book;
                            font-style: normal;
                            text-decoration: none;
                            font-size: vw(14);
                            color: $white;
                        }
                    }
                }
                .rating-wrap{
                    @extend .recipes-wrap;
                    border: none;
                    float: left;
                    width: vw(170);
                    .num{
                        width: vw(100);
                    }
                    .ico-txt{
                        width: vw(70);
                    }
                }
            }
        }
        .social-wrap{
            width: vw(750);
            display: flex;
            display: -webkit-flex;
            flex-flow: row nowrap;
            .social-item{
                height: vw(86);
                flex-grow: 1;
                border: vw(1) solid $border;
                i{
                    color: $white;
                    display: block;
                    font-size: vw(40);
                    width: vw(40);
                    @include pm(0,vw(20) auto 0 auto);
                }
            }
        }
    }
    .btn-edit-pf{
        display: block;
        height: vw(88);
        line-height: vw(88);
        width: vw(690);
        font-size: vw(30);
        font-weight: 300;
        background-color: $primaryColor;
        text-align: center;
        color: $white;
        border-radius: vw(10);
        font-family: FjallaOne-Regular, Avenir-Black;
        letter-spacing: 0;
        @include pm(0,vw(20) auto 0 auto);
        i{
            @include pm(0,0 vw(10) 0 0)
        }
    }
</style>
