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
                <div class="core-wrap">
                    <div class="recipes-wrap">

                    </div>
                    <div class="rating-wrap">

                    </div>
                </div>
            </div>
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
            titleTxt: this.$route.name
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
        height: vw(530);
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
            height: vw(210);
            width: vw(440);
            @include pm(0 vw(20) 0 0,0);
            .title-wrap{
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
                    font-size: vw(26);
                }
            }
            .score-wrap{
                height: vw(70);
                .recipes-wrap{
                    float: left;
                    width: vw(219);
                    border-right: vw(1) solid $white;
                    .num{
                        float: left;
                        
                    }
                    .ico-txt{
                        width: vw(66);
                        i{
                            display: block;
                        }
                        s{
                            display: block;
                            font-style: normal;
                            font-size: vw(16);
                            color: $white;
                        }
                    }
                }
                .rating-wrap{
                    @extend .recipes-wrap;
                    float: left;
                    width: vw(220)
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
        font-family: FjallaOne-Regular;
        letter-spacing: 0;
        @include pm(0,vw(85) auto vw(10) auto);
        i{
            @include pm(0,0 vw(10) 0 0)
        }
    }
</style>
